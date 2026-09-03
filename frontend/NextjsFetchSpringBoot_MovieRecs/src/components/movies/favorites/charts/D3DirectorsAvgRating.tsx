'use client';

import { NewMovie } from "@/resources/definitions";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

const MIN_MOVIES_FOR_DIRECTOR_ANALYSIS = 1; // Minimum number of movies for a director to be included in the analysis

const D3DirectorsAvgRating = ({favorites}:{favorites: NewMovie[]}) => {
    const directorChartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!directorChartRef.current || favorites.length === 0) return;

        const drawChart = () => {
            d3.select(directorChartRef.current).selectAll("*").remove();

            // Overall average rating
            const validMovies = favorites
                .map((movie) => ({
                director: (movie.director !== "N/A" ? movie.director : movie.writer),
                // director: movie.director,
                rating: Number(movie.imdbrating),
                }))
                .filter(
                (movie) =>
                    movie.director &&
                    !isNaN(movie.rating)
                );

            const overallAverage =
                d3.mean(validMovies, (d) => d.rating) ?? 0;

            /*
            * Group movies by director and calculate:
            * - number of movies
            * - average rating
            */
            const directorStats = Array.from(
                d3.rollup(
                validMovies,
                (movies) => ({
                    movieCount: movies.length,
                    averageRating:
                    d3.mean(
                        movies,
                        (movie) => movie.rating
                    ) ?? 0,
                }),
                (movie) => movie.director
                ),
                ([director, stats]) => ({
                director,
                movieCount: stats.movieCount,
                averageRating: stats.averageRating,

                // Difference from overall average
                difference:
                    stats.averageRating - overallAverage,
                })
            );

            /*
            * Only include directors with at least
            * 3 movies.
            */
            const data = directorStats
                .filter((d) => d.movieCount >= MIN_MOVIES_FOR_DIRECTOR_ANALYSIS)
                .sort(
                (a, b) => b.difference - a.difference
                );

            const width = 800;
            const height = 500;

            const margin = {
                top: 60,
                right: 80,
                bottom: 40,
                left: 180,
            };

            const svg = d3
                .select(directorChartRef.current)
                .append("svg")
                .attr("width", "100%")
                .attr("height", "100%");

            const x = d3
                .scaleLinear()
                .domain([
                0,
                d3.max(data, (d) => d.averageRating) ?? 10,
                ])
                .nice()
                .range([
                margin.left,
                directorChartRef.current?.clientWidth! - margin.right,
                ]);

            const y = d3
                .scaleBand()
                .domain(data.map((d) => d.director))
                .range([
                margin.top,
                directorChartRef.current?.clientHeight! - margin.bottom,
                ])
                .padding(0.2);

            // X axis
            svg
                .append("g")
                .attr(
                "transform",
                `translate(0, ${
                    directorChartRef.current?.clientHeight! - margin.bottom
                })`
                )
                .call(d3.axisBottom(x));

            // Y axis
            svg
                .append("g")
                .attr(
                "transform",
                `translate(${margin.left}, 0)`
                )
                .call(d3.axisLeft(y));

            // Average rating bars
            svg
                .selectAll(".bar")
                .data(data)
                .join("rect")
                .attr("class", "bar")
                .attr("x", margin.left)
                .attr(
                "y",
                (d) => y(d.director)!
                )
                .attr(
                "width",
                (d) =>
                    x(d.averageRating) - margin.left
                )
                .attr(
                "height",
                y.bandwidth()
                );

            // Rating labels
            svg
                .selectAll(".rating")
                .data(data)
                .join("text")
                .attr("x", (d) =>
                x(d.averageRating) + 5
                )
                .attr(
                "y",
                (d) =>
                    y(d.director)! +
                    y.bandwidth() / 2
                )
                .attr("dy", "0.35em")
                .text(
                (d) =>
                    `${d.averageRating.toFixed(2)} (${d.movieCount})`
                );

            /*
            * Overall average reference line
            */
            svg
                .append("line")
                .attr("x1", x(overallAverage))
                .attr("x2", x(overallAverage))
                .attr("y1", margin.top)
                .attr(
                "y2",
                directorChartRef.current?.clientHeight! - margin.bottom
                )
                .attr("stroke", "red")
                .attr("stroke-dasharray", "5,5");

            svg
                .append("text")
                .attr(
                "x",
                x(overallAverage) + 5
                )
                .attr("y", margin.top - 10)
                .text(
                `Overall: ${overallAverage.toFixed(2)}`
                );
        };
        // Redrawing the chart on window resize to ensure responsiveness
        // Draw initially
        drawChart();

        // Watch container size
        const resizeObserver = new ResizeObserver(() => {
        drawChart();
        });

        resizeObserver.observe(directorChartRef.current);

        // Cleanup
        return () => {
        resizeObserver.disconnect();
        };
}, [favorites]);

  return (
    <>
        <div className="w-full h-full border border-colour rounded-lg p-4">
          <h2 className="mb-4 text-2xl font-bold">
              Director Performance/Avg Rating (Directors with at least {MIN_MOVIES_FOR_DIRECTOR_ANALYSIS} movies)
          </h2>
          <div ref={directorChartRef} className="w-full h-[50vh] overflow-x-auto" />
        </div>
    </>
  )
}
export default D3DirectorsAvgRating