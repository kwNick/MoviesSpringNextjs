import pandas as pd

from database.mongodb import movies_collection


def get_actor_statistics():

    movies = list(
        movies_collection.find(
            {},
            {
                "_id": 0,
                "actors": 1,
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

    # Make sure actors is a string
    df["actors"] = (
        df["actors"]
        .fillna("")
        .astype(str)
    )

    # Convert comma-separated actors into a list
    df["actors"] = df["actors"].apply(
        lambda x: [
            actor.strip()
            for actor in x.split(",")
            if actor.strip()
        ]
    )

    # Give each actor their own row
    df = df.explode("actors")

    # Remove empty actors
    df = df[df["actors"] != ""]

    actor_stats = (
        df.groupby("actors")["imdbrating"]
        .agg(
            count="count",
            average="mean",
            median="median",
            standardDeviation="std"
        )
        .reset_index()
    )

    results = []

    for _, row in actor_stats.iterrows():

        standard_deviation = row["standardDeviation"]

        if pd.isna(standard_deviation):
            standard_deviation = None

        results.append({
            "actor": row["actors"],
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