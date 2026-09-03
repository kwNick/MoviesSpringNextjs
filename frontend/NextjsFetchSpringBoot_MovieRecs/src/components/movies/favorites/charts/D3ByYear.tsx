"use client";

import { NewMovie } from "@/resources/definitions";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function D3ByYear({
  favorites,
}: {
  favorites: NewMovie[];
}) {
  const yearChartRef = useRef<HTMLDivElement>(null);

  /*
   * MOVIES BY YEAR
   */
  useEffect(() => {
    if (!yearChartRef.current || favorites.length === 0) return;

    const drawChart = () => {

      d3.select(yearChartRef.current).selectAll("*").remove();

      const data = favorites
        .map((movie) => ({
          year: Number(movie.year.includes("?") ? movie.year.split("?")[0] : movie.year),
        }))
        .filter((movie) => !isNaN(movie.year));

      // Count movies for each year
      const moviesByYear = Array.from(
        d3.rollup(
          data,
          (movies) => movies.length,
          (movie) => movie.year
        ),
        ([year, count]) => ({
          year,
          count,
        })
      ).sort((a, b) => a.year - b.year);

      const width = 800;
      const height = 450;

      const margin = {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
      };

      const svg = d3
        .select(yearChartRef.current)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%");

        // console.log(yearChartRef.current?.clientHeight);
        // console.log(yearChartRef.current?.clientWidth);

      // X axis
      const x = d3
        .scaleBand()
        .domain(moviesByYear.map((movie) => movie.year.toString()))
        .range([margin.left, yearChartRef.current?.clientWidth! - margin.right])
        .padding(0.2);

      // Y axis
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(moviesByYear, (d) => d.count) ?? 0])
        .nice()
        .range([yearChartRef.current?.clientHeight! - margin.bottom, margin.top]);

      // X axis
      svg
        .append("g")
        .attr(
          "transform",
          `translate(0, ${yearChartRef.current?.clientHeight! - margin.bottom})`
        )
        .call(d3.axisBottom(x));

      // Y axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y));

      // Bars
      svg
        .selectAll(".bar")
        .data(moviesByYear)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.year.toString())!)
        .attr("y", (d) => y(d.count))
        .attr("width", x.bandwidth())
        .attr(
          "height",
          (d) =>
            yearChartRef.current?.clientHeight! -
            margin.bottom -
            y(d.count)
        );

    };

    // Redrawing the chart on window resize to ensure responsiveness
    // Draw initially
    drawChart();

    // Watch container size
    const resizeObserver = new ResizeObserver(() => {
      drawChart();
    });

    resizeObserver.observe(yearChartRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
    
  }, [favorites]);

  return (
    <>
      <div className="w-full h-full border border-colour rounded-lg p-4 ">
        <h2 className="mb-4 text-2xl font-bold">
          Favorite Movies by Year
        </h2>

        <div
          ref={yearChartRef}
          className="w-full h-[50vh] overflow-x-auto"
        />
      </div>
    </>
  );
}