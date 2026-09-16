# machine_learning/recommender.py

import numpy as np

from sklearn.preprocessing import (
    StandardScaler,
    MultiLabelBinarizer
)

from sklearn.metrics.pairwise import cosine_similarity

from .preprocessing import (
    clean_numeric_features,
    prepare_categorical_features,
    NUMERICAL_FEATURES
)


class MovieRecommender:   # Building the recommendation model

    def __init__(self):

        # Feature Weights
        self.NUMERICAL_WEIGHT = 0.40
        self.GENRE_WEIGHT = 0.30
        self.DIRECTOR_WEIGHT = 0.15
        self.ACTOR_WEIGHT = 0.15

        # Preprocessors
        self.scaler = StandardScaler()
        self.genre_encoder = MultiLabelBinarizer()
        self.director_encoder = MultiLabelBinarizer()
        self.actor_encoder = MultiLabelBinarizer()

        # Stored Data
        self.original_movies = None
        self.movie_features = None
        self.movies = None

    # Create the Feature Matrix
    def fit(self, movies):

        # Keep the original movie data
        self.original_movies = (
            movies
            .copy()
            .reset_index(drop=True)
        )

        df = movies.copy()

        df = clean_numeric_features(df)    # Maybe don't need this data_cleaning does this already

        # Prepare genre/director/actor lists
        df = prepare_categorical_features(df)

        self.movies = df.reset_index(drop=True)

        numerical_data = (df[NUMERICAL_FEATURES].fillna(0))

        # Apply Numerical Weight
        scaled_numeric = (self.scaler.fit_transform(numerical_data))
        scaled_numeric = (scaled_numeric * self.NUMERICAL_WEIGHT)

        # Genre Features
        genre_features = (self.genre_encoder.fit_transform(df["genre_list"]))
        genre_features = (genre_features * self.GENRE_WEIGHT)

        # Director Features
        director_features = (self.director_encoder.fit_transform(df["director_list"]))
        director_features = (director_features * self.DIRECTOR_WEIGHT)

        # Actor Features
        actor_features = (self.actor_encoder.fit_transform(df["actors_list"]))
        actor_features = (actor_features * self.ACTOR_WEIGHT)

        # Combine everything
        self.movie_features = np.hstack([
            scaled_numeric,
            genre_features,
            director_features,
            actor_features
        ])

        return self


    # Finding Recommendations
    def recommend(self, favorite_movies, number_of_recommendations=10):

        if not favorite_movies:
            return []

        # favorite_titles = {
        #     title.lower()
        #     for title in favorite_titles
        # }

        # Find Favorite Movies in Complete Dataset
        favorite_indices = []

        favorite_ids = set()
        favorite_titles = set()

        for movie in favorite_movies:
            if movie.get("id") is not None:
                favorite_ids.add(str(movie["id"]))

            if movie.get("title"):
                favorite_titles.add(movie["title"].lower())

        for index, movie in self.movies.iterrows():
            movie_id = str(movie.get("id", ""))

            movie_title = str(movie.get("title", "")).lower()

            if (movie_id in favorite_ids or movie_title in favorite_titles):
                favorite_indices.append(index)

        # Build users favorite profile
        if not favorite_indices:
            return []

        favorite_vectors = (self.movie_features[favorite_indices])

        user_profile = favorite_vectors.mean(axis=0)

        # Calculate Similarity
        similarities = cosine_similarity(user_profile.reshape(1, -1),self.movie_features)[0]

        # Remove favorites
        for index in favorite_indices:
            similarities[index] = -1

        # Rank Movies
        ranked_indices = np.argsort(similarities)[::-1]

        recommendations = []

        for index in ranked_indices:

            if len(recommendations) >= number_of_recommendations:
                break

            # skip the favorite when building the recommendations
            if index in favorite_indices:
                continue

            # Clean/preprocessed movie
            movie = self.movies.iloc[index]

            # Original movie
            original_movie = self.original_movies.iloc[index]

            similarity = float(similarities[index])

            recommendation = (self.create_recommendation(movie, original_movie, similarity, favorite_movies))

            recommendations.append(recommendation)

        # print(recommendation)

        return recommendations

    # Create Recommendation
    def create_recommendation(self, movie, original_movie, similarity, favorite_movies):
        
        reasons = []

        # Movie information
        movie_genres = self.split_value(movie.get("genre"))
        movie_directors = self.split_value(movie.get("director"))
        movie_actors = self.split_value(movie.get("actors"))

        # Compare against every favorite
        best_genre_matches = set()
        best_director_matches = set()
        best_actor_matches = set()

        for favorite in favorite_movies:
            favorite_genres = self.split_value(favorite.get("genre"))
            favorite_directors = self.split_value(favorite.get("director"))
            favorite_actors = self.split_value(favorite.get("actors"))

            best_genre_matches.update(set(movie_genres) & set(favorite_genres))
            best_director_matches.update(set(movie_directors) & set(favorite_directors))
            best_actor_matches.update(set(movie_actors) & set(favorite_actors))

        # Generate explanation
        if best_genre_matches:
            reasons.append("shares the " + ", ".join(list(best_genre_matches)[:3]) + " genre")

        if best_director_matches:
            reasons.append("shares director " + ", ".join(list(best_director_matches)[:2]))

        if best_actor_matches:
            reasons.append("shares actor " + ", ".join(list(best_actor_matches)[:3]))

        # Fallback explanation
        if not reasons:
            reasons.append("has similar movie characteristics")

        description = ("Recommended because it " + ", ".join(reasons) + ".")

         # Start with the COMPLETE ORIGINAL movie
        # recommendation = (original_movie.to_dict())

        # Start with the COMPLETE ORIGINAL movie
        recommendation = {
            key: self.clean_value(value)
            for key, value in original_movie.to_dict().items()
        }
        
        # Add recommendation-specific information
        recommendation.update({
            "similarity": float(round(similarity, 4)),
            "match_percentage": float(round(similarity * 100, 1)),
            "description": description
        })

        return recommendation

        # Return recommendation
        # return {
        #     "id": self.clean_value(movie.get("id")),
        #     "title": self.clean_value(movie.get("title")),
        #     "year": self.clean_value(movie.get("year")),
        #     "genre": self.clean_value(movie.get("genre")),
        #     "director": self.clean_value(movie.get("director")),
        #     "actors": self.clean_value(movie.get("actors")),
        #     "imdbrating": self.clean_value(movie.get("imdbrating")),
        #     "metascore": self.clean_value(movie.get("metascore")),
        #     "runtime": self.clean_value(movie.get("runtime")),
        #     "boxoffice": self.clean_value(movie.get("boxoffice")),
        #     "similarity": float(round(similarity,4)),
        #     "match_percentage": float(round(similarity * 100,1)),
        #     "description": description
        # }

    # Split Value
    @staticmethod
    def split_value(value):
        if value is None:
            return []

        if isinstance(value, float) and np.isnan(value):
            return []

        values = [
            item.strip()
            for item in str(value).split(",")
            if item.strip()
            ]

        # Remove placeholder values
        return [
            item
            for item in values
            if item.lower() not in {
                "N/A",
                "n/a",
                "na",
                "n.a.",
                "none",
                "null",
                "Null",
                ""
            }
        ]

    @staticmethod
    def clean_value(value):

        if value is None:
            return None

        if isinstance(value, float) and np.isnan(value):
            return None

        if isinstance(value, np.integer):
            return int(value)

        if isinstance(value, np.floating):
            return float(value)

        return value