'use client';

import RechartBar from "../../charts/recharts/RechartBar";

import D3GenreAnalysis from "../../charts/d3/D3GenreAnalysis";
import D3DirectorsAvgRating from "../../charts/d3/D3DirectorsAvgRating";
import D3RatingByDecade from "../../charts/d3/D3RatingByDecade";
import D3ByYear from "../../charts/d3/D3ByYear";
import D3ByRating from "../../charts/d3/D3ByRating";
import D3RatingDistribution from "../../charts/d3/D3RatingDistribution";

import PlotlyChartRatingMetascor from "@/components/charts/plotly/PlotlyChartRatingMetascor";
import PlotlyPieChartGenre from "@/components/charts/plotly/PlotlyPieChartGenre";
import PlotlyBoxRating from "@/components/charts/plotly/PlotlyBoxRating";
import PlotlyBarChartGenre from "@/components/charts/plotly/PlotlyBarChartGenre";
import PlotlyHistogramRuntime from "@/components/charts/plotly/PlotlyHistogramRuntime";
import { useFavorites } from "@/context/FavoritesContext";
import { RatingChartData, RatingStatsData } from "@/resources/definitions";
import RatingChart from "@/components/charts/d3/RatingChart";
import RatingStats from "@/components/charts/stats/RatingStats";

const FavoriteCharts = ({ratingChartData, ratingStatsData}: {ratingChartData: RatingChartData[], ratingStatsData: RatingStatsData}) => {
    const {favorites} = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-full h-[15vh] text-center text-4xl lg:text-5xl">
                    <h1 className="underline">Charts</h1>
                    <p className="p-4 text-colour">No favorite movies.</p>
                </div>
            </div>
        );
    }
  return (
    <>
        <div className="w-full h-[8vh] text-center text-4xl lg:text-5xl">
            <h1 className="underline">Charts</h1>
        </div>
        <div className="text-colour p-8 m-8 pt-10 pb-14 mb-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 rounded-lg">
            <div className="h-full w-full border border-colour rounded-lg p-4">
                <RechartBar movieList={favorites} />
            </div>
            <div className="h-full w-full">
                <D3ByYear movieList={favorites} />
            </div>
        
            <D3ByRating movieList={favorites} />

            <D3RatingDistribution movieList={favorites} />
            
            {/* has three charts */}
            <D3GenreAnalysis movieList={favorites} />
        
            <D3DirectorsAvgRating movieList={favorites} />

            <D3RatingByDecade movieList={favorites} />

            <RatingChart data={ratingChartData}/>
            <RatingStats stats={ratingStatsData} />
            
            <PlotlyBarChartGenre />
            <PlotlyChartRatingMetascor movies={favorites} />
            <PlotlyPieChartGenre />
            <PlotlyBoxRating movies={favorites}/>
            <PlotlyHistogramRuntime movies={favorites} />
        </div>
    </>
  )
}
export default FavoriteCharts