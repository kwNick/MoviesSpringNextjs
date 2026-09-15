import pytest

from analytics.analysis.category.correlation import calculate_correlation
from analysis.category.descriptive_stat import get_movie_statistics

def test_calculate_correlation():
    movies = [
        {
            "imdbrating": 8.0,
            "metascore": 80
        },
        {
            "imdbrating": 7.0,
            "metascore": 70
        },
        {
            "imdbrating": 6.0,
            "metascore": 60
        }
    ]

    result = calculate_correlation(movies, "imdbrating", "metascore")

    assert result is not None


def test_correlation_invalid_column():

    movies = [
        {
            "imdbrating": 8.0,
            "metascore": 80
        }
    ]

    with pytest.raises(ValueError):calculate_correlation(movies, "does_not_exist", "metascore")




def test_calculate_statistics():

    movies = [
       {
            "imdbrating": 8.0,
            "runtime": 120,
            "imdbvotes": 100000,
            "metascore": 80,
            "boxoffice": 100000000
        },
        {
            "imdbrating": 9.0,
            "runtime": 150,
            "imdbvotes": 200000,
            "metascore": 90,
            "boxoffice": 200000000
        },
        {
            "imdbrating": 5.0,
            "runtime": 90,
            "imdbvotes": 50000,
            "metascore": 50,
            "boxoffice": 50000000
        },
        {
            "imdbrating": 6.0,
            "runtime": 110,
            "imdbvotes": 75000,
            "metascore": 60,
            "boxoffice": 75000000
        }
    ]

    result = get_movie_statistics(movies)

    assert result is not None