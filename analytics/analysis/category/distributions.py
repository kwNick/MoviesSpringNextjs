# analytics/app/analysis/distributions.py

import pandas as pd


def rating_distribution(df):

    bins = range(0, 11)

    labels = [
        "0-1",
        "1-2",
        "2-3",
        "3-4",
        "4-5",
        "5-6",
        "6-7",
        "7-8",
        "8-9",
        "9-10"
    ]

    distribution = pd.cut(
        df["imdbrating"],
        bins=bins,
        labels=labels
    ).value_counts().sort_index()

    return distribution.to_dict()


def runtime_distribution(df):

    bins = [
        0,
        60,
        90,
        120,
        150,
        180,
        210,
        240,
        300
    ]

    labels = [
        "< 60 min",
        "60-90 min",
        "90-120 min",
        "120-150 min",
        "150-180 min",
        "180-210 min",
        "210-240 min",
        "240+ min"
    ]

    distribution = pd.cut(
        df["runtime"],
        bins=bins,
        labels=labels
    ).value_counts().sort_index()

    return distribution.to_dict()