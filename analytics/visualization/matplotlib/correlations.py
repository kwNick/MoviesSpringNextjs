import matplotlib.pyplot as plt
import seaborn as sns


def plot_correlation_heatmap(df):
    """
    Display correlations between numerical movie features.
    """

    columns = [
        "imdbrating",
        "metascore",
        "boxoffice",
        "year",
        "runtime"
    ]

    correlation_matrix = df[columns].corr()

    plt.figure(figsize=(10, 8))

    sns.heatmap(
        correlation_matrix,
        annot=True,
        cmap="coolwarm",
        fmt=".2f",
        linewidths=0.5
    )

    plt.title("Movie Feature Correlations")

    plt.tight_layout()
    # plt.show()