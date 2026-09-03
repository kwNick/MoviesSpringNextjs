'use client';

import { NewMovie } from "@/resources/definitions";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

const D3RatingByDecade = ({favorites}:{favorites: NewMovie[]}) => {
    const decadeChartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!decadeChartRef.current || favorites.length === 0) {
            return;
        }
        const drawChart = () => {
            d3.select(decadeChartRef.current)
                .selectAll("*")
                .remove();

            const data = favorites
                .map((movie) => {
                const year = Number(movie.year);
                const rating = Number(movie.imdbrating);

                return {
                    year,
                    rating,
                    decade:
                    Math.floor(year / 10) * 10,
                };
                })
                .filter(
                (movie) =>
                    !isNaN(movie.year) &&
                    !isNaN(movie.rating)
                );

            /*
            * Calculate average rating for each decade.
            */
            const decadeStats = Array.from(
                d3.rollup(
                data,
                (movies) =>
                    d3.mean(
                    movies,
                    (movie) => movie.rating
                    ) ?? 0,
                (movie) => movie.decade
                ),
                ([decade, averageRating]) => ({
                decade,
                averageRating,
                })
            ).sort((a, b) => a.decade - b.decade);

            const width = 800;
            const height = 450;

            const margin = {
                top: 40,
                right: 30,
                bottom: 60,
                left: 60,
            };

            const svg = d3
                .select(decadeChartRef.current)
                .append("svg")
                .attr("width", "100%")
                .attr("height", "100%");

            /*
            * X = decade
            */
            const x = d3
                .scaleLinear()
                .domain(
                d3.extent(
                    decadeStats,
                    (d) => d.decade
                ) as [number, number]
                )
                .range([
                margin.left,
                decadeChartRef.current?.clientWidth! - margin.right,
                ]);

            /*
            * Y = average rating
            */
            const y = d3
                .scaleLinear()
                .domain([0, 10])
                .range([
                decadeChartRef.current?.clientHeight! - margin.bottom,
                margin.top,
                ]);

            // X axis
            svg
                .append("g")
                .attr(
                "transform",
                `translate(0, ${
                    decadeChartRef.current?.clientHeight! - margin.bottom
                })`
                )
                .call(
                d3
                    .axisBottom(x)
                    .ticks(decadeStats.length)
                    .tickFormat(
                    (d) => `${d}s`
                    )
                );

            // Y axis
            svg
                .append("g")
                .attr(
                "transform",
                `translate(${margin.left}, 0)`
                )
                .call(d3.axisLeft(y));

            /*
            * Line
            */
            const line = d3
                .line<{
                decade: number;
                averageRating: number;
                }>()
                .x((d) => x(d.decade))
                .y((d) => y(d.averageRating));

            svg
                .append("path")
                .datum(decadeStats)
                .attr("fill", "none")
                .attr("stroke", "currentColor")
                .attr("stroke-width", 3)
                .attr("d", line);

            /*
            * Points
            */
            svg
                .selectAll(".dot")
                .data(decadeStats)
                .join("circle")
                .attr("class", "dot")
                .attr(
                "cx",
                (d) => x(d.decade)
                )
                .attr(
                "cy",
                (d) => y(d.averageRating)
                )
                .attr("r", 5);

            /*
            * Rating labels
            */
            svg
                .selectAll(".rating")
                .data(decadeStats)
                .join("text")
                .attr(
                "x",
                (d) => x(d.decade)
                )
                .attr(
                "y",
                (d) =>
                    y(d.averageRating) - 10
                )
                .attr(
                "text-anchor",
                "middle"
                )
                .text(
                (d) =>
                    d.averageRating.toFixed(2)
                );
        };
        // Redrawing the chart on window resize to ensure responsiveness
        // Draw initially
        drawChart();

        // Watch container size
        const resizeObserver = new ResizeObserver(() => {
        drawChart();
        });

        resizeObserver.observe(decadeChartRef.current);

        // Cleanup
        return () => {
        resizeObserver.disconnect();
        };
}, [favorites]);

  return (
    <>
        <div className="w-full h-full border border-colour rounded-lg p-4">
          <h2 className="mb-4 text-2xl font-bold">
              Average IMDb Rating by Decade
          </h2>

          <div ref={decadeChartRef} className="w-full h-[50vh] overflow-x-auto" />
        </div>
    </>
  )
}
export default D3RatingByDecade