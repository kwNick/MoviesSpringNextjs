import pandas as pd

from database.mongodb import movies_collection


def get_genre_statistics():

    movies = list(
        movies_collection.find(
            {},
            {
                "_id": 0,
                "genre": 1,
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

    # Make sure genre is a list
    df["genre"] = df["genre"].apply(
        lambda x: x if isinstance(x, list) else []
    )

    # Turn each genre into its own row
    df = df.explode("genre")

    genre_stats = (
        df.groupby("genre")["imdbRating"]
        .agg(
            count="count",
            average="mean",
            median="median",
            standardDeviation="std"
        )
        .reset_index()
    )

    return genre_stats.to_dict(
        orient="records"
    )