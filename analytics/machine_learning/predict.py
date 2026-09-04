import os
import joblib
import pandas as pd


MODEL_PATH = "machine_learning/movie_rating_model.pkl"


def load_model():

    if not os.path.exists(MODEL_PATH):
        raise FileNotFoundError(
            "Trained model not found. Train the model first."
        )

    return joblib.load(MODEL_PATH)


def predict_rating(
    year: int,
    runtime: int,
    metascore: float
):

    model = load_model()

    movie = pd.DataFrame(
        [
            {
                "year": year,
                "runtime": runtime,
                "metascore": metascore
            }
        ]
    )

    prediction = model.predict(movie)

    return float(prediction[0])