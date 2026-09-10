import matplotlib.pyplot as plt


def plot_genre_counts(df):
    """
    Display the number of movies belonging to each genre.
    """

    genres = (
        df["genre"]
        .dropna()
        .str.split(",")
        .explode()
        .str.strip()
    )

    genre_counts = genres.value_counts()

    plt.figure(figsize=(12, 6))

    genre_counts.plot(kind="bar")

    plt.title("Movies by Genre")
    plt.xlabel("Genre")
    plt.ylabel("Number of Movies")

    plt.xticks(rotation=45)
    plt.tight_layout()
    # plt.show()


def plot_movies_by_year(df):
    """
    Display the number of movies released each year.
    """

    year_counts = df["year"].value_counts().sort_index()

    plt.figure(figsize=(12, 6))

    plt.bar(
        year_counts.index,
        year_counts.values
    )

    plt.title("Movies by Release Year")
    plt.xlabel("Year")
    plt.ylabel("Number of Movies")

    plt.tight_layout()
    # plt.show()