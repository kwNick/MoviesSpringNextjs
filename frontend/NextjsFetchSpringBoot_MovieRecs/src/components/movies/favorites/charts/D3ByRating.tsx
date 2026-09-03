'use client';

import { NewMovie } from "@/resources/definitions";
import * as d3 from "d3";
import {useEffect, useRef} from "react";

export default function D3ByRating({ favorites }: { favorites: NewMovie[] }) {
  const ratingChartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ratingChartRef.current || favorites.length === 0) return;

    const drawChart = () => {

      // Clear previous chart
      d3.select(ratingChartRef.current).selectAll("*").remove();

      const data = favorites
        .map((movie) => ({
          title: movie.title,
          rating: Number(movie.imdbrating),
        }))
        .filter((movie) => !isNaN(movie.rating));

        // Chart dimensions
      const width = "40vw";
      const height = "40vh";

      const margin = {
        top: 60,
        right: 60,
        bottom: 80,
        left: 60,
      };

      // Create SVG
      const svg = d3
        .select(ratingChartRef.current)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%");

      // X scale
      const x = d3
        .scaleBand()
        .domain(data.map((movie) => movie.title))
        .range([margin.left, ratingChartRef.current?.clientWidth! - margin.right])
        .padding(0.2);

      // Y scale
      const y = d3
        .scaleLinear()
        .domain([0, 10])
        .nice()
        .range([ratingChartRef.current?.clientHeight! - margin.bottom, margin.top]);

      // X axis
      svg
        .append("g")
        .attr(
          "transform",
          `translate(0,${ratingChartRef.current?.clientHeight! - margin.bottom})`
        )
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

      // Y axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

      // Bars
      svg
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (movie) => x(movie.title)!)
        .attr("y", (movie) => y(movie.rating))
        .attr("width", x.bandwidth())
        .attr(
          "height",
          (movie) =>
            ratingChartRef.current?.clientHeight! - margin.bottom - y(movie.rating)
        );

    };

    // Draw initially
    drawChart();

    // Watch container size
    const resizeObserver = new ResizeObserver(() => {
      drawChart();
    });

    resizeObserver.observe(ratingChartRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };

  }, [favorites]);

  return (
    <div className="w-full h-full border border-colour rounded-lg p-4">
      <h2 className="mb-4 text-2xl font-bold">
        Favorite Movies by Rating
      </h2>

      <div
        ref={ratingChartRef}
        className="w-full h-[50vh] "
      />
    </div>
  )
}