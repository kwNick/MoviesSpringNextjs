import { RatingStatsData } from "@/resources/definitions";


export default function RatingStats({stats}:{ stats: RatingStatsData}) {

  if (!stats) {
    return <p>Loading statistics...</p>;
  }
  // console.log(stats);
  return (
    <section className="w-full h-full border border-colour rounded-lg p-4 ">

      <h1 className="mb-4 text-2xl font-bold text-center">
        Movie Analytics and Insights
      </h1>
      <h2 className="mb-4 text-xl font-bold text-center" >IMDb Rating Statistics</h2>

      <p>
        Explore the world of cinema through our comprehensive movie analytics. From ratings and genres to directors' average scores, our visualizations provide a deep dive into your favorite films. Discover trends, patterns, and insights that enhance your movie-watching experience.
      </p>

      <div className="w-full h-[50vh] flex flex-col items-start justify-center gap-y-4 xl:gap-y-6">
        <p>
          Movies analyzed: {stats.count}
        </p>

        <p>
          Mean rating: {stats.mean.toFixed(2)}
        </p>

        <p>
          Median rating: {stats.median.toFixed(2)}
        </p>

        <p>
          Standard deviation:
          {stats.standardDeviation.toFixed(2)}
        </p>

        <p>
          Lowest rating: {stats.minimum.toFixed(2)}
        </p>

        <p>
          Highest rating: {stats.maximum.toFixed(2)}
        </p>
      </div>

    </section>
  );
}