import os

from pymongo import MongoClient


MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net"
    # "mongodb://localhost:27017"
)

DATABASE_NAME = os.getenv(
    "MONGO_DATABASE",
    "Testing"
)

COLLECTION_NAME = os.getenv(
    "MONGO_COLLECTION",
    "Movies"
)


client = MongoClient(MONGO_URI)

database = client[DATABASE_NAME]

movies_collection = database[COLLECTION_NAME]