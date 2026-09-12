import D3ByRating from "@/components/charts/D3ByRating";
import D3ByYear from "@/components/charts/D3ByYear";
import D3RatingByDecade from "@/components/charts/D3RatingByDecade";
import D3RatingDistribution from "@/components/charts/D3RatingDistribution";
import D3GenreAnalysis from "@/components/charts/D3GenreAnalysis";
import D3DirectorsAvgRating from "@/components/charts/D3DirectorsAvgRating";
import { NewMovie } from "@/resources/definitions";
import RechartBar from "../charts/RechartBar";
import RatingStats from "../charts/RatingStats";
import RatingChart from "../charts/RatingChart";
import { getRatingsAnalysis, getRatingsChartData } from "@/resources/fastApi_data";

const MovieChartsAnalysis = async ({MovieData}:{MovieData: NewMovie[]}) => {

  const ratingData = await getRatingsAnalysis();
  const ratingChartData = await getRatingsChartData();
  // console.log(ratingData);
  // console.log(MovieData);
  return (
    <div className="text-colour p-8 m-8 pt-10 pb-14 mb-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 rounded-lg">
        <RechartBar movieList={MovieData} />
        <D3ByRating movieList={MovieData} />
        <D3ByYear movieList={MovieData} />
        <D3RatingByDecade movieList={MovieData} />
        <D3RatingDistribution movieList={MovieData} />
        <D3GenreAnalysis movieList={MovieData} />
        <D3DirectorsAvgRating movieList={MovieData} />

        <RatingChart data={ratingChartData}/>
        <RatingStats stats={ratingData} />

    </div>
  )
}
export default MovieChartsAnalysis