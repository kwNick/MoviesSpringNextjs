import matplotlib.pyplot as plt
from analytics.analysis.category.distributions import rating_distribution


def test_rating_distribution():

    movies = [
        {"imdbrating": 7.0},
        {"imdbrating": 8.0},
        {"imdbrating": 9.0}
    ]

    result = rating_distribution(movies)

    assert result is not None


def test_rating_distribution():
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

    result = rating_distribution(movies)

    assert isinstance(result, plt.Figure)