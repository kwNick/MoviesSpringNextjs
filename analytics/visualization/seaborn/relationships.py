import matplotlib.pyplot as plt
import seaborn as sns


def plot_rating_vs_box_office(df):
    """
    Display the relationship between IMDb rating
    and box office revenue.
    """

    plt.figure(figsize=(10, 6))

    sns.scatterplot(
        data=df,
        x="imdbrating",
        y="boxoffice"
    )

    plt.title("IMDb Rating vs Box Office")
    plt.xlabel("IMDb Rating")
    plt.ylabel("Box Office Revenue")

    plt.tight_layout()
    # plt.show()


def plot_rating_vs_metascore(df):
    """
    Display the relationship between IMDb rating
    and Metascore.
    """

    plt.figure(figsize=(10, 6))

    sns.scatterplot(
        data=df,
        x="imdbrating",
        y="metascore"
    )

    plt.title("IMDb Rating vs Metascore")
    plt.xlabel("IMDb Rating")
    plt.ylabel("Metascore")

    plt.tight_layout()
    # plt.show()


def plot_runtime_vs_rating(df):
    """
    Display the relationship between runtime
    and IMDb rating.
    """

    plt.figure(figsize=(10, 6))

    sns.scatterplot(
        data=df,
        x="runtime",
        y="imdbrating"
    )

    plt.title("Runtime vs IMDb Rating")
    plt.xlabel("Runtime (minutes)")
    plt.ylabel("IMDb Rating")

    plt.tight_layout()
    # plt.show()