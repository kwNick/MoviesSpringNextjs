# machine_learning/preprocessing.py

import pandas as pd
import numpy as np

from sklearn.preprocessing import MultiLabelBinarizer

NUMERICAL_FEATURES = [
    "boxoffice",
    "imdbrating",
    "metascore",
    "year",
    "runtime"
]


def clean_numeric_features(df):

    df = df.copy()

    # Box office
    df["boxoffice"] = (
        df["boxoffice"]
        .astype(str)
        .str.replace("$", "", regex=False)
        .str.replace(",", "", regex=False)
    )

    df["boxoffice"] = pd.to_numeric(
        df["boxoffice"],
        errors="coerce"
    )

    # IMDb rating
    df["imdbrating"] = pd.to_numeric(
        df["imdbrating"],
        errors="coerce"
    )

    # Metascore
    df["metascore"] = pd.to_numeric(
        df["metascore"],
        errors="coerce"
    )

    # Year
    df["year"] = (
        df["year"]
        .astype(str)
        .str.extract(r"(\d{4})")[0]
    )

    df["year"] = pd.to_numeric(
        df["year"],
        errors="coerce"
    )

    # Runtime
    df["runtime"] = (
        df["runtime"]
        .astype(str)
        .str.extract(r"(\d+)")[0]
    )

    df["runtime"] = pd.to_numeric(
        df["runtime"],
        errors="coerce"
    )

    return df

def split_values(value):

    if pd.isna(value):
        return []

    return [
        item.strip()
        for item in str(value).split(",")
        if item.strip()
    ]


def prepare_categorical_features(df):

    df = df.copy()

    df["genre_list"] = df["genre"].apply(split_values)

    df["director_list"] = df["director"].apply(split_values)

    df["actors_list"] = df["actors"].apply(split_values)

    return df