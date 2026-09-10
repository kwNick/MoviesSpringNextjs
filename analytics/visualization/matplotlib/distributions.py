import matplotlib.pyplot as plt


def plot_rating_distribution(df):
    """
    Display the distribution of IMDb ratings.
    """

    plt.figure(figsize=(10, 6))

    plt.hist(
        df["imdbrating"].dropna(),
        bins=10,
        edgecolor="black"
    )

    plt.title("Distribution of IMDb Ratings")
    plt.xlabel("IMDb Rating")
    plt.ylabel("Number of Movies")

    plt.tight_layout()
    # plt.show()


def plot_runtime_distribution(df):
    """
    Display the distribution of movie runtimes.
    """

    plt.figure(figsize=(10, 6))

    plt.hist(
        df["runtime"].dropna(),
        bins=15,
        edgecolor="black"
    )

    plt.title("Distribution of Movie Runtime")
    plt.xlabel("Runtime (minutes)")
    plt.ylabel("Number of Movies")

    plt.tight_layout()
    # plt.show()


def plot_box_office_distribution(df):
    """
    Display the distribution of box office revenue.
    """

    plt.figure(figsize=(10, 6))

    plt.hist(
        df["boxoffice"].dropna(),
        bins=15,
        edgecolor="black"
    )

    plt.title("Distribution of Box Office")
    plt.xlabel("Box Office Revenue")
    plt.ylabel("Number of Movies")

    plt.tight_layout()
    # plt.show()