import os
from pathlib import Path
import joblib
import numpy as np
import pandas as pd


MODEL_PATH = Path("machine_learning/models/movie_rating_model.pkl")
MLB_PATH = Path("machine_learning/models/genre_mlb.pkl")


def load_model():

    if not os.path.exists(MODEL_PATH):
        raise FileNotFoundError(
            "Trained model not found. Train the model first."
        )

    return joblib.load(MODEL_PATH)


def predict_rating(
    year: int,
    runtime: int,
    metascore: float,
    boxoffice: int,
    genre: str
):

    model = load_model()

    mlb = joblib.load(
        MLB_PATH
    )

    # movie = pd.DataFrame(
    #     [
    #         {
    #             "year": year,
    #             "runtime": runtime,
    #             "metascore": metascore,
    #             "boxoffice": boxoffice,
    #             "genre": genre
    #         }
    #     ]
    # )

    # prediction = model.predict(movie)

    genre_list = [
        genre.split(", ")
    ]

    # --------------------------------
    # 4. Encode genre
    # --------------------------------

    genre_features = mlb.transform(
        genre_list
    )

    # --------------------------------
    # 5. Create numerical features
    # --------------------------------

    numeric_features = np.array([
        [
            year,
            runtime,
            metascore,
            boxoffice
        ]
    ])

    # --------------------------------
    # 6. Combine features
    # --------------------------------

    movie_features = np.hstack([
        numeric_features,
        genre_features
    ])

    # --------------------------------
    # 7. Predict
    # --------------------------------

    prediction = model.predict(
        movie_features
    )

    return float(prediction[0])