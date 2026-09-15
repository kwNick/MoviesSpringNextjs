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

    favorites = [
        movies[0]
    ]

    recommender = MovieRecommender()
    recommender.fit(movies)
    recommendations = recommender.recommend(favorites, limit=2)

    assert recommendations is not None
    assert len(recommendations) <= 2


def test_favorites_are_excluded():

    movies = [
        {
            "title": "The Matrix",
            # ...
        },
        {
            "title": "Inception",
            # ...
        },
        {
            "title": "Interstellar",
            # ...
        }
    ]

    favorites = [movies[0]]

    recommender = MovieRecommender()
    recommender.fit(movies)
    recommendations = recommender.recommend(favorites, limit=10)

    titles = [movie["title"] for movie in recommendations]

    assert "The Matrix" not in titles


# def test_recommendation_limit():

#     recommender = MovieRecommender(movies)

#     recommendations = recommender.recommend(
#         favorites,
#         limit=5
#     )

#     assert len(recommendations) <= 5