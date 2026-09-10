from pathlib import Path

import numpy as np
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.metrics import (mean_absolute_error, mean_squared_error, r2_score)
import joblib
from sklearn.preprocessing import MultiLabelBinarizer

from database.mongodb import movies_collection
from machine_learning.supervised.regression.model import create_model


MODEL_PATH = Path("machine_learning/supervised/regression/models/movie_rating_model.pkl")
MLB_PATH = Path("machine_learning/supervised/regression/models/genre_mlb.pkl")


# Random Forest Regression Model
# Predicting continuous numerical value

def train_rating_model():

    # --------------------------------
    # 1. Get movies from MongoDB
    # --------------------------------

    movies = list(
        movies_collection.find(
            {},
            {
                "_id": 0,
                "year": 1,
                "runtime": 1,
                "metascore": 1,
                "boxoffice": 1,
                "genre": 1,
                "imdbrating": 1
            }
        )
    )

    # --------------------------------
    # 2. Convert MongoDB data to DataFrame
    # --------------------------------

    df = pd.DataFrame(movies)

    if df.empty:
        return {
            "message": "No movie data available"
        }

    # --------------------------------
    # 3. Convert values to numbers
    # --------------------------------

    # Convert year from "1999?" or "1999?-2005" → 1999
    df["year"] = (df["year"].str.extract(r"(\d{4})")[0])
    df["year"] = pd.to_numeric(
        df["year"],
        errors="coerce"
    )

    # Convert runtime from "148 min" → 148 
    df["runtime"] = (df["runtime"].str.replace(" min", "", regex=False))
    df["runtime"] = pd.to_numeric(
        df["runtime"],
        errors="coerce"
    )

    df["metascore"] = pd.to_numeric(df["metascore"], errors="coerce")

    # Convert box office
    # "$534,987,076" → "534987076" → 534987076
    df["boxoffice"] = (df["boxoffice"].str.replace("$", "", regex=False).str.replace(",", "", regex=False))
    df["boxoffice"] = pd.to_numeric(df["boxoffice"],errors="coerce")

    df["imdbrating"] = pd.to_numeric(df["imdbrating"], errors="coerce")

    # -------------------------
    # Genre encoding
    # -------------------------

    # 1. Make sure genre exists
    df = df.dropna(subset=["genre"])

    # 2. Split genres
    genre_lists = df["genre"].str.split(", ")

    # 3. Encode genres
    mlb = MultiLabelBinarizer()
    genre_encoded = mlb.fit_transform(genre_lists)

    # print(genre_encoded)

    # 4. Store the entire encoded array in ONE "genre" column
    df["genre"] = genre_encoded.tolist()

    # Save the fitted encoder
    MODEL_PATH.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    joblib.dump(
        mlb,
        MLB_PATH
    )

    # --------------------------------
    # 4. Remove incomplete movies
    # --------------------------------

    df = df.dropna(
        subset=[
            "year",
            "runtime",
            "metascore",
            "boxoffice",
            # "genre",
            "imdbrating"
        ]
    )

    if len(df) < 10:
        return {
            "message": "Not enough movie data to train model"
        }

    # --------------------------------
    # 5. Define features
    # --------------------------------

    # X = df[
    #     [
    #         "year",
    #         "runtime",
    #         "metascore",
    #         "boxoffice",
    #         "genre"
    #     ]
    # ]

    genre_features = np.array(df["genre"].tolist())

    # print(df)
    # print(genre_features)
    # print("Genres:", mlb.classes_)
    # print("Genre matrix shape:", genre_features.shape)

    numeric_features = df[
        [
            "year",
            "runtime",
            "metascore",
            "boxoffice"
        ]
    ].to_numpy()

    X = np.hstack([
        numeric_features,
        genre_features
    ])

    # print(X)

    y = df["imdbrating"]

    # --------------------------------
    # 6. Define target
    # --------------------------------

    y = df["imdbrating"]

    # --------------------------------
    # 7. Split training/testing data
    # --------------------------------

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )

    # --------------------------------
    # 8. Create ML model
    # --------------------------------

    model = create_model()

    # --------------------------------
    # 9. Train model
    # --------------------------------

    model.fit(
        X_train,
        y_train
    )

    # --------------------------------
    # 10. Make predictions
    # --------------------------------

    predictions = model.predict(
        X_test
    )

    # --------------------------------
    # 11. Measure model performance
    # --------------------------------

    # Mean Absolute Error
    # Average prediction error
    mae = mean_absolute_error(
        y_test,
        predictions
    )

    # Mean Squared Error
    # Average squared prediction error; heavily punishes large errors
    mse = mean_squared_error(
        y_test,
        predictions
    )

    # Root Mean Squared Error
    # Prediction error in the original IMDb-rating units
    rmse = np.sqrt(mse)

    # R² Score -> Coefficient of Determination
    # How much of the variation in IMDb ratings the model explains
    r2 = r2_score(
        y_test,
        predictions
)

    # --------------------------------
    # 12. Save trained model
    # --------------------------------

    joblib.dump(
        model,
        MODEL_PATH
    )

    return {
        "message": "Model trained successfully",
        "moviesUsed": len(df),
        "meanAbsoluteError": float(mae),
        "meanSquaredError": float(mse),
        "rootMeanSquaredError": float(rmse),
        "r2Score": float(r2)
    }