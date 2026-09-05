import requests
import pandas as pd

from data.data_cleaning import clean_movie_data


def get_movies():

    response = requests.get(
        "http://localhost:8080/api/searchmovies?query=&genre=&page=0&size=50&sort=imdbrating,desc&sort=title,asc"
    )

    response.raise_for_status()

    data = response.json()

    # print("Full Spring Boot response:")
    # print(data)

    # print("Spring Boot response keys:")
    # print(data.keys())

    # Spring Data REST puts the actual movie records
    # inside the _embedded property.
    movies = data["_embedded"]['newmovie']

    # print("Number of movies received:")
    # print(len(movies))
    # print(movies)

    # print("First movie:")
    # print(movies[0])

    df = pd.DataFrame(movies)

    df= clean_movie_data(df)

    return df