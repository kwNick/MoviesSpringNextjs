import pandas as pd

from database.mongodb import movies_collection


def get_director_statistics():

    movies = list(
        movies_collection.find(
            {},
            {
                "_id": 0,
                "director": 1,
                "imdbrating": 1
            }
        )
    )

    df = pd.DataFrame(movies)

    if df.empty:
        return {
            "message": "No movie data available"
        }

    # Convert ratings to numbers
    df["imdbrating"] = pd.to_numeric(
        df["imdbrating"],
        errors="coerce"
    )

    # Remove movies without valid ratings
    df = df.dropna(
        subset=["imdbrating"]
    )

    # Make sure director is a string
    df["director"] = (
        df["director"]
        .fillna("")
        .astype(str)
        .str.strip()
    )

    # Remove movies without a director
    df = df[df["director"] != ""]

    director_stats = (
        df.groupby("director")["imdbrating"]
        .agg(
            count="count",
            average="mean",
            median="median",
            standardDeviation="std"
        )
        .reset_index()
    )

    results = []

    for _, row in director_stats.iterrows():

        standard_deviation = row["standardDeviation"]

        if pd.isna(standard_deviation):
            standard_deviation = None

        results.append({
            "director": row["director"],
            "count": int(row["count"]),
            "average": round(float(row["average"]), 2),
            "median": round(float(row["median"]), 2),
            "standardDeviation": (
                round(float(standard_deviation), 2)
                if standard_deviation is not None
                else None
            )
        })

    return results