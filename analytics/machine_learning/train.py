import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
import joblib

from database.mongodb import movies_collection
from machine_learning.model import create_model


MODEL_PATH = "machine_learning/movie_rating_model.pkl"


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
                "imdbRating": 1
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

    df["year"] = pd.to_numeric(
        df["year"],
        errors="coerce"
    )

    df["runtime"] = pd.to_numeric(
        df["runtime"],
        errors="coerce"
    )

    df["metascore"] = pd.to_numeric(
        df["metascore"],
        errors="coerce"
    )

    df["imdbRating"] = pd.to_numeric(
        df["imdbRating"],
        errors="coerce"
    )

    # --------------------------------
    # 4. Remove incomplete movies
    # --------------------------------

    df = df.dropna(
        subset=[
            "year",
            "runtime",
            "metascore",
            "imdbRating"
        ]
    )

    if len(df) < 10:
        return {
            "message": "Not enough movie data to train model"
        }

    # --------------------------------
    # 5. Define features
    # --------------------------------

    X = df[
        [
            "year",
            "runtime",
            "metascore"
        ]
    ]

    # --------------------------------
    # 6. Define target
    # --------------------------------

    y = df["imdbRating"]

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
    # 11. Measure accuracy
    # --------------------------------

    mae = mean_absolute_error(
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
        "meanAbsoluteError": float(mae)
    }