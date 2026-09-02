"use client";

import { NewMovie } from "@/resources/definitions";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function D3BarChart({
  favorites,
}: {
  favorites: NewMovie[];
}) {
  const yearChartRef = useRef<HTMLDivElement>(null);
  const ratingChartRef = useRef<HTMLDivElement>(null);

  /*
   * MOVIES BY YEAR
   */
  useEffect(() => {
    if (!yearChartRef.current || favorites.length === 0) return;

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
      right: 30,
      bottom: 60,
      left: 60,
    };

    const svg = d3
      .select(yearChartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // X axis
    const x = d3
      .scaleBand()
      .domain(moviesByYear.map((movie) => movie.year.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    // Y axis
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(moviesByYear, (d) => d.count) ?? 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // X axis
    svg
      .append("g")
      .attr(
        "transform",
        `translate(0, ${height - margin.bottom})`
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
          height -
          margin.bottom -
          y(d.count)
      );
  }, [favorites]);

  /*
   * IMDb RATING DISTRIBUTION
   */
  useEffect(() => {
    if (!ratingChartRef.current || favorites.length === 0) return;

    d3.select(ratingChartRef.current).selectAll("*").remove();

    const data = favorites
      .map((movie) => Number(movie.imdbrating))
      .filter((rating) => !isNaN(rating));

    // Create rating buckets
    const ratingBuckets = [
      { label: "1–2", min: 1, max: 2 },
      { label: "2–3", min: 2, max: 3 },
      { label: "3–4", min: 3, max: 4 },
      { label: "4–5", min: 4, max: 5 },
      { label: "5–6", min: 5, max: 6 },
      { label: "6–7", min: 6, max: 7 },
      { label: "7–8", min: 7, max: 8 },
      { label: "8–9", min: 8, max: 9 },
      { label: "9–10", min: 9, max: 10 },
    ];

    const distribution = ratingBuckets.map((bucket) => ({
      label: bucket.label,
      count: data.filter(
        (rating) =>
          rating >= bucket.min &&
          rating < bucket.max
      ).length,
    }));

    // Include a 10.0 rating in the last bucket
    distribution[distribution.length - 1].count += data.filter(
      (rating) => rating === 10
    ).length;

    const width = 800;
    const height = 450;

    const margin = {
      top: 40,
      right: 30,
      bottom: 60,
      left: 60,
    };

    const svg = d3
      .select(ratingChartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // X axis
    const x = d3
      .scaleBand()
      .domain(distribution.map((d) => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    // Y axis
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(distribution, (d) => d.count) ?? 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // X axis
    svg
      .append("g")
      .attr(
        "transform",
        `translate(0, ${height - margin.bottom})`
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
      .data(distribution)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.label)!)
      .attr("y", (d) => y(d.count))
      .attr("width", x.bandwidth())
      .attr(
        "height",
        (d) =>
          height -
          margin.bottom -
          y(d.count)
      );
  }, [favorites]);

  return (
    <>
      <div>
        <h2 className="mb-4 text-2xl font-bold">
          Movies by Year
        </h2>

        <div
          ref={yearChartRef}
          className="w-full overflow-x-auto"
        />
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">
          IMDb Rating Distribution
        </h2>

        <div
          ref={ratingChartRef}
          className="w-full overflow-x-auto"
        />
      </div>
    </>
  );
}