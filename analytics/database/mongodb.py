import os

from pymongo import MongoClient


MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb://localhost:27017"
)

DATABASE_NAME = os.getenv(
    "MONGO_DATABASE",
    "movies"
)

COLLECTION_NAME = os.getenv(
    "MONGO_COLLECTION",
    "movies"
)


client = MongoClient(MONGO_URI)

database = client[DATABASE_NAME]

movies_collection = database[COLLECTION_NAME]