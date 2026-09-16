import pandas as pd
import pytest

from analytics.analysis.category.correlation import calculate_correlation
from analysis.category.descriptive_stat import get_movie_statistics

def test_calculate_correlation():
    movies = pd.DataFrame({
            "imdbrating": [8.0, 7.0, 6.0],
            "metascore": [80, 70, 60]
        })

    result = calculate_correlation(movies, "imdbrating", "metascore")

    assert result is not None


def test_correlation_invalid_column():

    movies = pd.DataFrame({
            "imdbrating": [8.0],
            "metascore": [80]
        })

    with pytest.raises(ValueError):calculate_correlation(movies, "does_not_exist", "metascore")




def test_calculate_statistics():

    movies = pd.DataFrame({
            "imdbrating": [8.0, 9.0, 5.0, 6.0],
            "runtime": [120, 150, 90, 110],
            "imdbvotes": [100000, 200000, 50000, 75000],
            "metascore": [80, 90, 50, 60],
            "boxoffice": [100000000, 200000000, 50000000, 75000000]
        })

    result = get_movie_statistics(movies)

    assert result is not None