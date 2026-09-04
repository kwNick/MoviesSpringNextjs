import pandas as pd

from database.mongodb import movies_collection


def get_year_statistics():

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

    # Convert year and rating to numbers
    df["year"] = pd.to_numeric(
        df["year"],
        errors="coerce"
    )

    df["imdbrating"] = pd.to_numeric(
        df["imdbrating"],
        errors="coerce"
    )

    # Remove movies without a valid year or rating
    df = df.dropna(
        subset=["year", "imdbrating"]
    )

    # Make year an integer
    df["year"] = df["year"].astype(int)

    year_stats = (
        df.groupby("year")["imdbrating"]
        .agg(
            count="count",
            average="mean",
            median="median",
            standardDeviation="std"
        )
        .reset_index()
    )

    results = []

    for _, row in year_stats.iterrows():

        standard_deviation = row["standardDeviation"]

        if pd.isna(standard_deviation):
            standard_deviation = None

        results.append({
            "year": int(row["year"]),
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