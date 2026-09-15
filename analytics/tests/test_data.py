from analytics.data.data_cleaning import clean_rating, clean_year


def test_clean_rating():

    movie = {
        "imdbrating": "8.7"
    }

    result = clean_rating(movie)

    assert result == 8.7


def test_clean_invalid_rating():

    movie = {
        "imdbrating": "N/A"
    }

    result = clean_rating(movie)

    assert result is None


def test_clean_year_range():

    movie = {
        "year": "1999?2005"
    }

    result = clean_year(movie)

    assert result == "1999-2005"