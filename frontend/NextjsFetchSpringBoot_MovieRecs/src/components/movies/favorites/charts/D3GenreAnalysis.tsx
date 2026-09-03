'use client';

import { NewMovie } from "@/resources/definitions";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

const D3GenreAnalysis = ({favorites}:{favorites: NewMovie[]}) => {
    const genreChartRef = useRef<HTMLDivElement>(null);
    const genreRatingChartRef = useRef<HTMLDivElement>(null);
    const genreRatingMinimumChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!genreChartRef.current || favorites.length === 0) return;


    const drawChart = () => {
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
        top: 60,
        right: 60,
        bottom: 40,
        left: 60,
      };

      const svg = d3
        .select(genreChartRef.current)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%");

      // X = number of movies
      const x = d3
        .scaleLinear()
        .domain([0, d3.max(genreCounts, (d) => d.count) ?? 0])
        .nice()
        .range([margin.left, genreChartRef.current?.clientWidth! - margin.right]);

      // Y = genre
      const y = d3
        .scaleBand()
        .domain(genreCounts.map((d) => d.genre))
        .range([margin.top, genreChartRef.current?.clientHeight! - margin.bottom])
        .padding(0.2);

      // X axis
      svg
        .append("g")
        .attr(
          "transform",
          `translate(0, ${genreChartRef.current?.clientHeight! - margin.bottom})`
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
        .style("fill", "#ef4444")
        .attr("x", margin.left)
        .attr("y", (d) => y(d.genre)!)
        .attr("width", (d) => x(d.count) - margin.left)
        .attr("height", y.bandwidth());
    };

    // Redrawing the chart on window resize to ensure responsiveness
    // Draw initially
    drawChart();

    // Watch container size
    const resizeObserver = new ResizeObserver(() => {
      drawChart();
    });

    resizeObserver.observe(genreChartRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };

}, [favorites]);

useEffect(() => {
    if (!genreRatingChartRef.current || favorites.length === 0) return;

    const drawChart = () => {

      d3.select(genreRatingChartRef.current).selectAll("*").remove();

    /*
    * Convert movies into individual genre/rating records.
    *
    * Inception:
    * Action, Adventure, Sci-Fi
    *
    * becomes:
    * Action     8.8
    * Adventure  8.8
    * Sci-Fi     8.8
    */
    const genreRatings = favorites.flatMap((movie) => {
      const rating = Number(movie.imdbrating);

      if (isNaN(rating) || !movie.genre) {
        return [];
      }

      return movie.genre.split(",").map((genre) => ({
        genre: genre.trim(),
        rating,
      }));
    });

    /*
    * Calculate average rating for each genre.
    */
    const genreAverages = Array.from(
      d3.rollup(
        genreRatings,
        (movies) => d3.mean(movies, (movie) => movie.rating) ?? 0,
        (movie) => movie.genre
      ),
      ([genre, averageRating]) => ({
        genre,
        averageRating,
      })
    )
      .sort((a, b) => b.averageRating - a.averageRating);

    const width = 800;
    const height = 500;

    const margin = {
      top: 60,
      right: 60,
      bottom: 40,
      left: 60,
    };

    const svg = d3
      .select(genreRatingChartRef.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%");

    /*
    * X = average IMDb rating
    */
    const x = d3
      .scaleLinear()
      .domain([0, 10])
      .range([margin.left, genreRatingChartRef.current?.clientWidth! - margin.right]);

    /*
    * Y = genre
    */
    const y = d3
      .scaleBand()
      .domain(genreAverages.map((d) => d.genre))
      .range([margin.top, genreRatingChartRef.current?.clientHeight! - margin.bottom])
      .padding(0.2);

    /*
    * X axis
    */
    svg
      .append("g")
      .attr(
        "transform",
        `translate(0, ${genreRatingChartRef.current?.clientHeight! - margin.bottom})`
      )
      .call(d3.axisBottom(x));

    /*
    * Y axis
    */
    svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left}, 0)`
      )
      .call(d3.axisLeft(y));

    /*
    * Bars
    */
    svg
      .selectAll(".bar")
      .data(genreAverages)
      .join("rect")
      .attr("class", "bar")
      .attr("x", margin.left)
      .attr("y", (d) => y(d.genre)!)
      .attr("width", (d) => x(d.averageRating) - margin.left)
      .attr("height", y.bandwidth());

    /*
    * Display the average rating at the end
    * of each bar.
    */
    svg
      .selectAll(".rating-label")
      .data(genreAverages)
      .join("text")
      .attr("class", "rating-label")
      .attr("x", (d) => x(d.averageRating) + 5)
      .attr("y", (d) => y(d.genre)! + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text((d) => d.averageRating.toFixed(2));

    };


    // Redrawing the chart on window resize to ensure responsiveness
    // Draw initially
    drawChart();

    // Watch container size
    const resizeObserver = new ResizeObserver(() => {
      drawChart();
    });

    resizeObserver.observe(genreRatingChartRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };

  }, [favorites]);

  useEffect(() => {
    if (!genreRatingMinimumChartRef.current || favorites.length === 0) return;

    const drawChart = () => {

    d3.select(genreRatingMinimumChartRef.current).selectAll("*").remove();

    /*
    * Create individual genre/rating records.
    *
    * Example:
    *
    * {
    *   genre: "Action, Adventure, Sci-Fi",
    *   imdbrating: "8.8"
    * }
    *
    * becomes:
    *
    * Action      8.8
    * Adventure   8.8
    * Sci-Fi      8.8
    */
    const genreRatings = favorites.flatMap((movie) => {
      const rating = Number(movie.imdbrating);

      if (isNaN(rating) || !movie.genre) {
        return [];
      }

      return movie.genre.split(",").map((genre) => ({
        genre: genre.trim(),
        rating,
      }));
    });

    /*
    * Group movies by genre.
    */
    const genreStats = Array.from(
      d3.rollup(
        genreRatings,
        (movies) => ({
          averageRating:
            d3.mean(movies, (movie) => movie.rating) ?? 0,

          movieCount: movies.length,
        }),
        (movie) => movie.genre
      ),
      ([genre, stats]) => ({
        genre,
        averageRating: stats.averageRating,
        movieCount: stats.movieCount,
      })
    );

    /*
    * Only include genres with at least 5 movies.
    *
    * This prevents something like:
    *
    * Documentary → 9.8
    *
    * from being ranked highly when there may only
    * be one Documentary movie in the dataset.
    */
    const filteredData = genreStats
      .filter((genre) => genre.movieCount >= 5)
      .sort((a, b) => b.averageRating - a.averageRating);

    const width = 800;
    const height = 500;

    const margin = {
      top: 60,
      right: 60,
      bottom: 40,
      left: 60,
    };

    const svg = d3
      .select(genreRatingMinimumChartRef.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%");

    /*
    * X scale
    *
    * IMDb ratings are between 0 and 10.
    */
    const x = d3
      .scaleLinear()
      .domain([0, 10])
      .range([margin.left, genreRatingMinimumChartRef.current?.clientWidth! - margin.right]);

    /*
    * Y scale
    */
    const y = d3
      .scaleBand()
      .domain(filteredData.map((d) => d.genre))
      .range([margin.top, genreRatingMinimumChartRef.current?.clientHeight! - margin.bottom])
      .padding(0.2);

    /*
    * X axis
    */
    svg
      .append("g")
      .attr(
        "transform",
        `translate(0, ${genreRatingMinimumChartRef.current?.clientHeight! - margin.bottom})`
      )
      .call(d3.axisBottom(x));

    /*
    * Y axis
    */
    svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left}, 0)`
      )
      .call(d3.axisLeft(y));

    /*
    * Bars
    */
    svg
      .selectAll(".bar")
      .data(filteredData)
      .join("rect")
      .attr("class", "bar")
      .attr("x", margin.left)
      .attr("y", (d) => y(d.genre)!)
      .attr(
        "width",
        (d) => x(d.averageRating) - margin.left
      )
      .attr("height", y.bandwidth());

    /*
    * Average rating labels
    */
    svg
      .selectAll(".rating-label")
      .data(filteredData)
      .join("text")
      .attr("class", "rating-label")
      .attr(
        "x",
        (d) => x(d.averageRating) + 5
      )
      .attr(
        "y",
        (d) => y(d.genre)! + y.bandwidth() / 2
      )
      .attr("dy", "0.35em")
      .text(
        (d) =>
          `${d.averageRating.toFixed(2)} (${d.movieCount})`
      );
  };

  // Redrawing the chart on window resize to ensure responsiveness
    // Draw initially
    drawChart();

    // Watch container size
    const resizeObserver = new ResizeObserver(() => {
      drawChart();
    });

    resizeObserver.observe(genreRatingMinimumChartRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };

}, [favorites]);

  return (
    <>
      <div className="w-full h-full border border-colour rounded-lg p-4">
          <h2 className="mb-4 text-2xl font-bold">
              Favorite Movies by genre
          </h2>
          <div ref={genreChartRef} className="w-full h-[50vh] overflow-x-auto" />
      </div>
      <div className="w-full h-full border border-colour rounded-lg p-4">
          <h2 className="mb-4 text-2xl font-bold">
              Favorite Movies by Average IMDb rating by genre
          </h2>
          <div ref={genreRatingChartRef} className="w-full h-[50vh] overflow-x-auto" />
      </div>
      <div className="w-full h-full border border-colour rounded-lg p-4">
          <h2 className="mb-4 text-2xl font-bold">
              Favorite Movies by Average IMDb Rating by Genre (Minimum of 5 Movies per Genre)
          </h2>
          <div ref={genreRatingMinimumChartRef} className="w-full h-[50vh] overflow-x-auto" />
      </div>
    </>
  )
}
export default D3GenreAnalysis