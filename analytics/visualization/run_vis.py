from matplotlib import pyplot as plt

from data.movie_data import get_movies

from visualization.matplotlib.distributions import (
    plot_rating_distribution,
    plot_runtime_distribution,
    plot_box_office_distribution
)

from visualization.seaborn.categorical import (
    plot_genre_counts,
    plot_movies_by_year
)

from visualization.seaborn.relationships import (
    plot_rating_vs_box_office,
    plot_rating_vs_metascore,
    plot_runtime_vs_rating
)

from visualization.matplotlib.correlations import (
    plot_correlation_heatmap
)


df = get_movies()

plot_rating_distribution(df)
plot_runtime_distribution(df)
plot_box_office_distribution(df)

plot_genre_counts(df)
plot_movies_by_year(df)

plot_rating_vs_box_office(df)
plot_rating_vs_metascore(df)
plot_runtime_vs_rating(df)

plot_correlation_heatmap(df)

plt.show()  # Displays them all at once, instead of each figure one at a time