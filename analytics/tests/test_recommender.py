import pandas as pd

from recommendation_system.content_based.recommender import MovieRecommender


def test_recommender_initializes():

    movies = [
        {
            "title": "The Matrix",
            "genre": "Action, Sci-Fi",
            "director": "Lana Wachowski",
            "actors": "Keanu Reeves, Laurence Fishburne",
            "imdbrating": "8.7",
            "metascore": "73",
            "year": "1999",
            "runtime": "136 min",
            "boxoffice": "$171,479,930"
        }
    ]

    recommender = MovieRecommender()

    assert recommender is not None


def test_recommendations_return_results():

    # df = pd.DataFrame[]
    movies = pd.DataFrame({
            "id": [1, 2, 3, 4],
            "title": ["The Matrix", "Inception", "Interstellar", "The Last of Us"],
            "genre": ["Action", "Comedy", "Drama", "Horror"],
            "director": ["Curry", "Quentin", "Nolan", "Wes"],
            "actors": ["Leo", "Tom", "Mathew", "Morgan"],
            "year": [1999, 2000, 2001, 2002],
            "imdbrating": [8.0, 9.0, 5.0, 6.0],
            "runtime": [120, 150, 90, 110],
            "imdbvotes": [100000, 200000, 50000, 75000],
            "metascore": [80, 90, 50, 60],
            "boxoffice": [100000000, 200000000, 50000000, 75000000]
        })

    favorites = [{
        "director": movies['director'][0],
        "actors": movies['actors'][0],
        "genre": movies['genre'][0],
        "year": movies['year'][0],
        "imdbrating": movies["imdbrating"][0],
        "runtime": movies["runtime"][0],
        "imdbvotes": movies["imdbvotes"][0],
        "metascore": movies["metascore"][0],
        "boxoffice": movies["boxoffice"][0]
    }]

    recommender = MovieRecommender()
    recommender.fit(movies)
    recommendations = recommender.recommend(favorites, number_of_recommendations=2)

    assert recommendations is not None
    assert len(recommendations) <= 2


def test_favorites_are_excluded():

    movies = pd.DataFrame({
            "id": [1, 2, 3],
            "title": ["The Matrix", "Inception", "Interstellar"],
            "director": ["Curry", "Kane", "Quentin"],
            "actors": ["Leo", "Tom", "Mathew"],
            "year": [2003, 2004, 2005],
            "boxoffice": [100000, 200000, 300000],
            "runtime": [110, 120, 130],
            "imdbrating": [8.0, 8.5, 9.0],
            "metascore": [80, 85, 90],
            "genre": ["Action", "Comedy", "Drama"]
        })

    favorites = [{
        "id": movies["id"][0],
        "title": movies['title'][0],
        "director": movies['director'][0],
        "actors": movies['actors'][0],
        "genre": movies['genre'][0],
        "year": movies['year'][0],
        "imdbrating": movies["imdbrating"][0],
        "runtime": movies["runtime"][0],
        "metascore": movies["metascore"][0],
        "boxoffice": movies["boxoffice"][0]
    }]

    recommender = MovieRecommender()
    recommender.fit(movies)
    recommendations = recommender.recommend(favorites, number_of_recommendations=10)
    print(recommendations)
    titles = [movie["title"] for movie in recommendations]
    print(titles)
    assert "The Matrix" not in titles
    assert "Inception" in titles
    assert "Interstellar" in titles
    assert len(recommendations) == 2


# def test_recommendation_limit():

#     recommender = MovieRecommender(movies)

#     recommendations = recommender.recommend(
#         favorites,
#         limit=5
#     )

#     assert len(recommendations) <= 5