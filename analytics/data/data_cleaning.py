import pandas as pd

def clean_movie_data(df):
    # Convert string fields to numbers 
    numeric_columns = [ "imdbrating", "metascore"]

    for column in numeric_columns:
        df[column] = pd.to_numeric( df[column], errors="coerce" )

    # Convert IMDb votes # "2,395,647" -> "2395647" -> 2395647
    df["imdbvotes"] = (df["imdbvotes"] .str.replace(",", "", regex=False))
    df["imdbvotes"] = pd.to_numeric(df["imdbvotes"], errors="coerce")

    # Convert runtime from "148 min" → 148 
    df["runtime"] = (df["runtime"].str.replace(" min", "", regex=False)) 

    df["runtime"] = pd.to_numeric(df["runtime"],errors="coerce")

    # Convert year from "1999?" or "1999?-2005" → 1999
    df["year"] = (df["year"].str.extract(r"(\d{4})")[0])

    df["year"] = pd.to_numeric(df["year"],errors="coerce")

    # Convert box office
    # "$534,987,076" → "534987076" → 534987076
    df["boxoffice"] = (df["boxoffice"].str.replace("$", "", regex=False).str.replace(",", "", regex=False))

    df["boxoffice"] = pd.to_numeric(df["boxoffice"],errors="coerce")

    # print("DataFrame columns:")
    # print(df.columns.tolist())
    print("DataFrame:")
    print(df)

    # print("Missing IMDb ratings:", df["imdbrating"].isna().sum())
    # print("Missing IMDb votes:", df["imdbvotes"].isna().sum())
    # print("Missing metascores:", df["metascore"].isna().sum())
    # print("Missing runtime:", df["runtime"].isna().sum())
    # print("Missing year:", df["year"].isna().sum())

    return df