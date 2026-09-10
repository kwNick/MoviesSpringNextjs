from fastapi import FastAPI, HTTPException
import pandas as pd
from pydantic import BaseModel

from analysis.individual.ratings import get_rating_statistics
from analysis.individual.genres import get_genre_statistics
from analysis.individual.trends import get_rating_trends

from analysis.individual.years import get_year_statistics
from analysis.individual.directors import get_director_statistics
from analysis.individual.actors import get_actor_statistics

from analysis.category.correlation import calculate_correlation
from analysis.category.descriptive_stat import get_movie_statistics
from analysis.category.distributions import rating_distribution, runtime_distribution
from data.movie_data import get_movies

from machine_learning.train import train_rating_model
from machine_learning.predict import predict_rating

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Movie Analytics API",
    description="Statistical analysis and machine learning for the movie application",
    version="1.0.0"
)

# Adding CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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
# GET Movies
# --------------------------------

@app.get("/movies/all")
def getMovies():

    df = get_movies()

    df = df.astype(object).where(pd.notna(df), None)

    return df.to_dict(orient="records")

# --------------------------------
# Statistical analysis
# --------------------------------

@app.get("/analysis/individual/ratings")
def rating_analysis():

    return get_rating_statistics()


@app.get("/analysis/individual/genres")
def genre_analysis():

    return get_genre_statistics()


@app.get("/analysis/individual/trends")
def rating_trends():

    return get_rating_trends()


@app.get("/analysis/individual/years")
def year_analysis():

    return get_year_statistics()


@app.get("/analysis/individual/directors")
def director_analysis():

    return get_director_statistics()


@app.get("/analysis/individual/actors")
def actor_analysis():

    return get_actor_statistics()


# @app.get("/analysis/correlation")
# def correlation():

#     movies = get_movies()

#     return calculate_correlation(
#         movies,
#         "imdbrating",
#         "metascore"
#     )


# -------------------------------------------------- 
# Correlation Analysis W/ params
# -------------------------------------------------- 
@app.get("/analysis/category/correlation")
def movie_correlation( column1: str, column2: str ):

    movies = get_movies()

    try:
        return calculate_correlation( movies, column1, column2 )
    except ValueError as error:
        raise HTTPException( status_code=400, detail=str(error) )


# -------------------------------------------------- 
# Descriptive Statistics 
# -------------------------------------------------- 
@app.get("/analysis/category/statistics") 
def movie_statistics():

    movies = get_movies()

    # print("Movie DataFrame columns:")
    # print(movies.columns.tolist())

    return get_movie_statistics(movies)


# -------------------------------------------------- 
# Rating Distribution 
# -------------------------------------------------- 
@app.get("/analysis/category/distributions/rating") 
def movie_rating_distribution(): 

    movies = get_movies() 

    return rating_distribution(movies)


# -------------------------------------------------- 
# Runtime Distribution
# -------------------------------------------------- 
@app.get("/analysis/category/distributions/runtime") 
def movie_runtime_distribution(): 

    movies = get_movies() 

    return runtime_distribution(movies)


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