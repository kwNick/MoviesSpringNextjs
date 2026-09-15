import sys
from pathlib import Path

import pandas as pd
# test import main through the project package structure.
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_genres():
    response = client.get("/analysis/individual/genres")

    assert response.status_code == 200


# Needs MongoDB Running
def test_statistics():
    response = client.get("/analysis/category/statistics")

    assert response.status_code == 200


# Needs MongoDB Running
def test_correlation_params():
    response = client.get("/analysis/category/correlation", params={"column1": "imdbrating", "column2": "metascore"})

    assert response.status_code == 200

    data = response.json()

    assert data["variable1"] == "imdbrating"
    assert data["variable2"] == "metascore"
    assert "correlation" in data


# Needs MongoDB Running
def test_correlation_no_params():
    response = client.get("/analysis/category/correlation")

    assert response.status_code == 200


# Needs MongoDB Running
def test_correlation_invalid_column():
    response = client.get(
        "/analysis/category/correlation",
        params={
            "column1": "not_a_real_column",
            "column2": "metascore"
        }
    )

    assert response.status_code == 400


# Doesn't need MongoDB running
# def test_statistics_NoMongo(monkeypatch):

#     fake_movies = [
#         {
#             "imdbrating": 8.0,
#             "runtime": 120,
#             "imdbvotes": 100000,
#             "metascore": 80,
#             "boxoffice": 100000000
#         },
#         {
#             "imdbrating": 9.0,
#             "runtime": 150,
#             "imdbvotes": 200000,
#             "metascore": 90,
#             "boxoffice": 200000000
#         },
#         {
#             "imdbrating": 5.0,
#             "runtime": 90,
#             "imdbvotes": 50000,
#             "metascore": 50,
#             "boxoffice": 50000000
#         },
#         {
#             "imdbrating": 6.0,
#             "runtime": 110,
#             "imdbvotes": 75000,
#             "metascore": 60,
#             "boxoffice": 75000000
#         }]

#     monkeypatch.setattr(
#         "main.get_movies",
#         lambda: fake_movies
#     )

#     response = client.get("/analysis/category/statistics")

#     assert response.status_code == 200

#     data = response.json()

#     assert data["movie_count"] == 4

#     assert data["imdbrating"]["mean"] == 7.0
#     assert data["imdbrating"]["median"] == 7.0
#     assert data["imdbrating"]["minimum"] == 5.0
#     assert data["imdbrating"]["maximum"] == 9.0