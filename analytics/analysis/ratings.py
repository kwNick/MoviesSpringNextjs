import pandas as pd
import numpy as np

from database.mongodb import movies_collection


def get_rating_statistics():

    movies = list(
        movies_collection.find(
            {},
            {
                "_id": 0,
                "title": 1,
                "imdbRating": 1
            }
        )
    )

    df = pd.DataFrame(movies)

    if df.empty:
        return {
            "message": "No movie data available"
        }

    df["imdbRating"] = pd.to_numeric(
        df["imdbRating"],
        errors="coerce"
    )

    df = df.dropna(subset=["imdbRating"])

    ratings = df["imdbRating"]

    return {
        "count": int(len(ratings)),
        "mean": float(ratings.mean()),
        "median": float(ratings.median()),
        "standardDeviation": float(ratings.std()),
        "minimum": float(ratings.min()),
        "maximum": float(ratings.max())
    }