import os

from pymongo import MongoClient

# Connects directly to mongodatabase and doesnt need backend API running

# MONGO_URI = os.getenv(
#     "MONGO_URI",
#     "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net"
#     # "mongodb://localhost:27017"
# )

# DATABASE_NAME = os.getenv(
#     "MONGO_DATABASE",
#     "Testing"
# )

# COLLECTION_NAME = os.getenv(
#     "MONGO_COLLECTION",
#     "Movies"
# )

MONGO_URI = os.getenv("MONGO_URI")

DATABASE_NAME = os.getenv("MONGO_DATABASE")
COLLECTION_NAME = os.getenv("MONGO_COLLECTION")

client = MongoClient(MONGO_URI)

database = client[DATABASE_NAME]

movies_collection = database[COLLECTION_NAME]