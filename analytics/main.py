from fastapi import FastAPI
from pydantic import BaseModel

from analysis.ratings import get_rating_statistics
from analysis.genres import get_genre_statistics
from analysis.trends import get_rating_trends

from analysis.years import get_year_statistics
from analysis.directors import get_director_statistics
from analysis.actors import get_actor_statistics

from machine_learning.train import train_rating_model
from machine_learning.predict import predict_rating


app = FastAPI(
    title="Movie Analytics API",
    description="Statistical analysis and machine learning for the movie application",
    version="1.0.0"
)


# --------------------------------
# Basic endpoint
# --------------------------------

@app.get("/")
def root():

    return {
        "message": "Movie Analytics API is running"
    }


# --------------------------------
# Statistical analysis
# --------------------------------

@app.get("/analysis/ratings")
def rating_analysis():

    return get_rating_statistics()


@app.get("/analysis/genres")
def genre_analysis():

    return get_genre_statistics()


@app.get("/analysis/trends")
def rating_trends():

    return get_rating_trends()


@app.get("/analysis/years")
def year_analysis():

    return get_year_statistics()


@app.get("/analysis/directors")
def director_analysis():

    return get_director_statistics()


@app.get("/analysis/actors")
def actor_analysis():

    return get_actor_statistics()

# --------------------------------
# Machine Learning
# --------------------------------

@app.post("/ml/train")
def train_model():

    return train_rating_model()


# --------------------------------
# Prediction input
# --------------------------------

class MovieInput(BaseModel):

    year: int
    runtime: int
    metascore: float


@app.post("/ml/predict-rating")
def predict_movie_rating(movie: MovieInput):

    prediction = predict_rating(
        year=movie.year,
        runtime=movie.runtime,
        metascore=movie.metascore
    )

    return {
        "predictedRating": prediction
    }