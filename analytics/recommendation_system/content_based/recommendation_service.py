from data.movie_data import get_movies
from .recommender import MovieRecommender


class RecommendationService:

    def __init__(self):

        self.recommender = MovieRecommender()
        self.initialized = False

    def initialize(self):
        
        movies = get_movies()
        self.recommender.fit(movies)
        self.initialized = True

    def get_recommendations(self, favorite_movies, limit=10):

        if not self.initialized:
            self.initialize()

        return self.recommender.recommend(
            favorite_movies,
            limit
        )


recommendation_service = (
    RecommendationService()
)