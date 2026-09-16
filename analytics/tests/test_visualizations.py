import matplotlib.pyplot as plt
import pandas as pd
from analytics.analysis.category.distributions import rating_distribution


def test_rating_distribution():

    movies = pd.DataFrame({
            "imdbrating": [7.0, 8.0, 9.0]
        })

    result = rating_distribution(movies)

    assert result is not None


def test_runtime_distribution():
    movies = pd.DataFrame({
                "imdbrating": [8.0, 9.0, 5.0, 6.0 ],
                "runtime": [120, 150, 90, 110],
                "imdbvotes": [100000, 200000, 50000, 75000],
                "metascore": [80, 90, 50, 60],
                "boxoffice": [100000000, 200000000, 50000000, 75000000]
            })

    result = rating_distribution(movies)

    assert isinstance(result, dict)