# analytics/app/analysis/descriptive_stats.py

import pandas as pd


def get_movie_statistics(df):

    return {
        "movie_count": len(df),

        "imdbrating": {
            "mean": round(df["imdbrating"].mean(), 2),
            "median": round(df["imdbrating"].median(), 2),
            "minimum": round(df["imdbrating"].min(), 2),
            "maximum": round(df["imdbrating"].max(), 2),
            "standard_deviation": round(
                df["imdbrating"].std(), 2
            )
        },

        "runtime": {
            "mean": round(df["runtime"].mean(), 2),
            "median": round(df["runtime"].median(), 2),
            "minimum": round(df["runtime"].min(), 2),
            "maximum": round(df["runtime"].max(), 2)
        },

        "imdbvotes": {
            "mean": round(df["imdbvotes"].mean(), 2),
            "median": round(df["imdbvotes"].median(), 2),
            "minimum": int(df["imdbvotes"].min()),
            "maximum": int(df["imdbvotes"].max())
        },

        "metascore": { 
            "mean": round(df["metascore"].mean(), 2), 
            "median": round(df["metascore"].median(), 2), 
            "minimum": round(df["metascore"].min(), 2), 
            "maximum": round(df["metascore"].max(), 2) 
            },
        "boxoffice": { 
            "mean": round(df["boxoffice"].mean(), 2), 
            "median": round(df["boxoffice"].median(), 2), 
            "minimum": round(df["boxoffice"].min(), 2), 
            "maximum": round(df["boxoffice"].max(), 2) 
            }
    }