import { NewMovie } from "@/resources/definitions";

import D3ByRating from "@/components/charts/d3/D3ByRating";
import D3ByYear from "@/components/charts/d3/D3ByYear";
import D3RatingByDecade from "@/components/charts/d3/D3RatingByDecade";
import D3RatingDistribution from "@/components/charts/d3/D3RatingDistribution";
import D3GenreAnalysis from "@/components/charts/d3/D3GenreAnalysis";
import D3DirectorsAvgRating from "@/components/charts/d3/D3DirectorsAvgRating";

import RechartBar from "../charts/recharts/RechartBar";

import RatingStats from "../charts/stats/RatingStats";
import RatingChart from "../charts/d3/RatingChart";

import { getRatingsAnalysis, getRatingsChartData } from "@/resources/fastApi_data";

import PlotlyChartRatingMetascor from "../charts/plotly/PlotlyChartRatingMetascor";
import PlotlyPieChartGenre from "../charts/plotly/PlotlyPieChartGenre";
import PlotlyBoxRating from "../charts/plotly/PlotlyBoxRating";
import PlotlyBarChartGenre from "../charts/plotly/PlotlyBarChartGenre";
import PlotlyHistogramRuntime from "../charts/plotly/PlotlyHistogramRuntime";

const MovieChartsAnalysis = async ({MovieData}:{MovieData: NewMovie[]}) => {

  const ratingData = await getRatingsAnalysis();
  const ratingChartData = await getRatingsChartData();
  // console.log(ratingData);
  // console.log(MovieData.length);
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

        <PlotlyBarChartGenre />
        <PlotlyChartRatingMetascor movies={MovieData} />
        <PlotlyPieChartGenre />
        <PlotlyBoxRating movies={MovieData} />
        <PlotlyHistogramRuntime movies={MovieData} />

    </div>
  )
}
export default MovieChartsAnalysis