import pandas as pd

from database.mongodb import movies_collection


def get_rating_statistics():

    movies = list(
        movies_collection.find(
            {},
            {
                "_id": 0,
                "title": 1,
                "imdbrating": 1
            }
        )
    )

    df = pd.DataFrame(movies)

    if df.empty:
        return {
            "message": "No movie data available"
        }

    df["imdbrating"] = pd.to_numeric(
        df["imdbrating"],
        errors="coerce"
    )

    df = df.dropna(subset=["imdbrating"])

    ratings = df["imdbrating"]

    return {
        "count": int(len(ratings)),
        "mean": float(ratings.mean()),
        "median": float(ratings.median()),
        "standardDeviation": float(ratings.std()),
        "minimum": float(ratings.min()),
        "maximum": float(ratings.max())
    }