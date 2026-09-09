import pandas as pd

from database.mongodb import movies_collection


def get_genre_statistics():

    movies = list(
        movies_collection.find(
            {},
            {
                "_id": 0,
                "genre": 1,
                "imdbrating": 1
            }
        )
    )

    df = pd.DataFrame(movies)

    if df.empty:
        return {
            "message": "No movie data available"
        }

    # Convert IMDb ratings to numbers
    df["imdbrating"] = pd.to_numeric(
        df["imdbrating"],
        errors="coerce"
    )

    # Remove movies without valid ratings
    df = df.dropna(subset=["imdbrating"])

    # Convert genre string into a list
    #
    # "Drama, Fantasy, Romance"
    #
    # becomes:
    #
    # ["Drama", "Fantasy", "Romance"]
    df["genre"] = df["genre"].fillna("").astype(str)

    df["genre"] = df["genre"].apply(
        lambda x: [
            genre.strip()
            for genre in x.split(",")
            if genre.strip()
        ]
    )

    # Give each genre its own row
    df = df.explode("genre")

    # Remove empty genres
    df = df[df["genre"] != ""]

    # Calculate statistics
    genre_stats = (
        df.groupby("genre")["imdbrating"]
        .agg(
            count="count",
            average="mean",
            median="median",
            standardDeviation="std"
        )
        .reset_index()
    )

    # Convert statistics to regular Python values
    # and explicitly handle NaN.
    results = []

    for _, row in genre_stats.iterrows():

        standard_deviation = row["standardDeviation"]

        if pd.isna(standard_deviation):
            standard_deviation = None

        results.append({
            "genre": row["genre"],
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