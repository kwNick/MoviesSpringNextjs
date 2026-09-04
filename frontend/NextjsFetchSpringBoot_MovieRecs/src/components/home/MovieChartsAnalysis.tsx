import D3ByRating from "@/components/movies/favorites/charts/D3ByRating";
import D3ByYear from "@/components/movies/favorites/charts/D3ByYear";
import D3RatingByDecade from "@/components/movies/favorites/charts/D3RatingByDecade";
import D3RatingDistribution from "@/components/movies/favorites/charts/D3RatingDistribution";
import D3GenreAnalysis from "@/components/movies/favorites/charts/D3GenreAnalysis";
import D3DirectorsAvgRating from "@/components/movies/favorites/charts/D3DirectorsAvgRating";
import { NewMovie } from "@/resources/definitions";
import RechartBar from "../movies/favorites/charts/RechartBar";
import RatingStats from "./RatingStats";
import RatingChart from "./RatingChart";

const MovieChartsAnalysis = ({MovieData}:{MovieData: NewMovie[]}) => {
  return (
    <div className="text-colour p-8 m-8 pt-10 pb-14 mb-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 rounded-lg">
        <RechartBar favorites={MovieData} />
        <D3ByRating favorites={MovieData} />
        <D3ByYear favorites={MovieData} />
        <D3RatingByDecade favorites={MovieData} />
        <D3RatingDistribution favorites={MovieData} />
        <D3GenreAnalysis favorites={MovieData} />
        <D3DirectorsAvgRating favorites={MovieData} />

        <div>
          <div>
              <h1>
              Movie Analytics and Insights
            </h1>
            <p>
              Explore the world of cinema through our comprehensive movie analytics. From ratings and genres to directors' average scores, our visualizations provide a deep dive into your favorite films. Discover trends, patterns, and insights that enhance your movie-watching experience.
            </p>
          </div>
          <div>
            <RatingStats />
            <RatingChart />
          </div>
        </div>
    </div>
  )
}
export default MovieChartsAnalysis