'use client';

import { NewMovie } from "@/resources/definitions";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

const D3GenreAnalysis = ({favorites}:{favorites: NewMovie[]}) => {
    const genreChartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
  if (!genreChartRef.current || favorites.length === 0) return;

  d3.select(genreChartRef.current).selectAll("*").remove();

  // Turn:
  // "Action, Adventure, Sci-Fi"
  // into individual genres
  const genres = favorites
    .flatMap((movie) =>
      movie.genre
        ?.split(",")
        .map((genre) => genre.trim()) ?? []
    )
    .filter((genre) => genre.length > 0);

  // Count each genre
  const genreCounts = Array.from(
    d3.rollup(
      genres,
      (genres) => genres.length,
      (genre) => genre
    ),
    ([genre, count]) => ({
      genre,
      count,
    })
  ).sort((a, b) => b.count - a.count);

  const width = 800;
  const height = 500;

  const margin = {
    top: 40,
    right: 30,
    bottom: 60,
    left: 100,
  };

  const svg = d3
    .select(genreChartRef.current)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // X = number of movies
  const x = d3
    .scaleLinear()
    .domain([0, d3.max(genreCounts, (d) => d.count) ?? 0])
    .nice()
    .range([margin.left, width - margin.right]);

  // Y = genre
  const y = d3
    .scaleBand()
    .domain(genreCounts.map((d) => d.genre))
    .range([margin.top, height - margin.bottom])
    .padding(0.2);

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
    .attr(
      "transform",
      `translate(${margin.left}, 0)`
    )
    .call(d3.axisLeft(y));

  // Bars
  svg
    .selectAll(".bar")
    .data(genreCounts)
    .join("rect")
    .attr("class", "bar")
    .attr("x", margin.left)
    .attr("y", (d) => y(d.genre)!)
    .attr("width", (d) => x(d.count) - margin.left)
    .attr("height", y.bandwidth());
}, [favorites]);
  return (
    <div>
        <h2 className="mb-4 text-2xl font-bold">
            Movies by genre
        </h2>
        <div ref={genreChartRef} />
    </div>
  )
}
export default D3GenreAnalysis