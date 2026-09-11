from fastapi import FastAPI, HTTPException
import pandas as pd
from pydantic import BaseModel
from sklearn.preprocessing import MultiLabelBinarizer

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

from recommendation_system.content_based.recommendation_service import (recommendation_service)

from machine_learning.supervised.regression.train import train_rating_model
from machine_learning.supervised.regression.predict import predict_rating

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
# Recommendation Service
# --------------------------------
@app.post("/recommendations")
def get_recommendations(favorite_movies: list[dict], limit: int = 10):

    recommendations = (
        recommendation_service.get_recommendations(
            favorite_movies,
            limit
        )
    )

    return {
        "favorites": favorite_movies,
        "recommendations": recommendations
    }

# --------------------------------
# Machine Learning
# --------------------------------

# Training Model
@app.post("/ml/train")
def train_model():

    return train_rating_model()


# --------------------------------
# Prediction input
# --------------------------------

@app.post("/ml/predict-rating")
def predict_movie_rating():

    mlb = MultiLabelBinarizer()

    obsession = {"title":"Obsession","year":"2026","rated":"R","released":"15 May 2026","runtime":"109 min","genre":"Horror, Romance, Thriller","directors":"Curry Barker","Writer":"Curry Barker","actors":"Michael Johnston, Inde Navarrette, Cooper Tomlinson","plot":"Baron \"Bear\" Bailey breaks a novelty charm to force his co-worker Nikki Freeman to love him, but the supernatural compulsion warps her mind into violent obsession, trapping him in a nightmare he cannot wish away.","Language":"English","country":"United States","awards":"7 wins & 15 nominations total","poster":"https://m.media-amazon.com/images/M/MV5BYzc1NWUwMDgtNGZlMS00ZmYzLWIzMzktNmMxMmY1MTUzNWExXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg","metascore":"77","imdbrating":"7.9","imdbvotes":"291,494","Type":"movie","boxoffice":"$262,774,890"}

    backrooms = {"title":"Backrooms","year":"2026","rated":"R","released":"29 May 2026","runtime":"110 min","genre":"Horror, Sci-Fi, Thriller","directors":"Kane Parsons","writers":"Will Soodik, Kane Parsons","actors":"Chiwetel Ejiofor, Renate Reinsve, Mark Duplass","plot":"After a therapist's patient disappears into a dimension beyond reality, she must venture into the unknown to save him.","language":"English, Portuguese, Turkish, Arabic, Japanese","country":"United States, Canada","awards":"14 nominations total","poster":"https://m.media-amazon.com/images/M/MV5BYzQyYjZmMjctMzIyZi00MDI0LWJhNGQtMzQ3MTFlNDgwNGM5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg","metascore":"76","imdbrating":"6.8","imdbvotes":"179,011","Type":"movie","boxoffice":"$197,516,045"}

    # print(obsession)

    predictionObsession = predict_rating(
        year = pd.to_numeric(obsession['year'], errors="coerce"),
        runtime = pd.to_numeric(obsession['runtime'].replace(" min", ""), errors="coerce"),
        metascore = pd.to_numeric(obsession['metascore'], errors="coerce"),
        boxoffice = pd.to_numeric(obsession["boxoffice"].replace("$", "").replace(",", ""), errors="coerce"),
        # genre = pd.DataFrame(mlb.fit_transform(obsession["genre"].split(", ")),columns=mlb.classes_)
        genre = obsession['genre']
    )

    # print('obsession to backrooms')

    predictionBackrooms = predict_rating(
        year = pd.to_numeric(backrooms['year'], errors="coerce"),
        runtime = pd.to_numeric(backrooms['runtime'].replace(" min", ""), errors="coerce"),
        metascore = pd.to_numeric(backrooms['metascore'], errors="coerce"),
        boxoffice = pd.to_numeric(backrooms["boxoffice"].replace("$", "").replace(",", ""), errors="coerce"),
        genre = backrooms['genre']
    )    

    return {
        "predictedObsessionRating": predictionObsession,
        "predictedBackroomsRating": predictionBackrooms
    }