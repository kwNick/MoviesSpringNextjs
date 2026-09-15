from analytics.machine_learning.supervised.regression.predict import predict_rating


def test_prediction_returns_value():
    movie = {
            "title": "The Matrix",
            "genre": "Action, Sci-Fi",
            "director": "Lana Wachowski",
            "actors": "Keanu Reeves, Laurence Fishburne",
            "imdbrating": "8.7",
            "metascore": "73",
            "year": "1999",
            "runtime": "136 min",
            "boxoffice": "171479930"
        }

    result = predict_rating(movie['year'], movie['runtime'].split()[0], movie['metascore'], movie['boxoffice'], movie['genre'])

    assert result is not None
    assert isinstance(result, float)
    assert 0 <= result <= 10