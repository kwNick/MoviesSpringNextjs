import pandas as pd

from analytics.data.data_cleaning import clean_rating, clean_year


# def test_clean_rating():

#     movie = {
#         "imdbrating": "8.7"
#     }

#     result = clean_rating(movie)

#     assert result == 8.7

def test_clean_rating():

    df = pd.DataFrame({
        "imdbrating": ["8.7"]
    })

    clean_rating(df)

    assert df["imdbrating"].iloc[0] == 8.7


def test_clean_invalid_rating():

    movie = {
        "imdbrating": "N/A"
    }

    result = clean_rating(movie)

    assert result is None


def test_clean_year_range():

    df = pd.DataFrame({
        "year": ["1999?2005"]
    })

    clean_year(df)

    assert df["year"].iloc[0] == 1999