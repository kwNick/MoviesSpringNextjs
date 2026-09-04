import pandas as pd

from database.mongodb import movies_collection


def get_rating_trends():

    movies = list(
        movies_collection.find(
            {},
            {
                "_id": 0,
                "year": 1,
                "imdbrating": 1
            }
        )
    )

    df = pd.DataFrame(movies)

    if df.empty:
        return {
            "message": "No movie data available"
        }

    df["year"] = pd.to_numeric(
        df["year"],
        errors="coerce"
    )

    df["imdbrating"] = pd.to_numeric(
        df["imdbrating"],
        errors="coerce"
    )

    df = df.dropna(
        subset=["year", "imdbrating"]
    )

    # Create decade
    df["decade"] = (
        (df["year"] // 10) * 10
    ).astype(int)

    trends = (
        df.groupby("decade")["imdbrating"]
        .agg(
            count="count",
            averageRating="mean",
            medianRating="median"
        )
        .reset_index()
    )

    return trends.to_dict(
        orient="records"
    )