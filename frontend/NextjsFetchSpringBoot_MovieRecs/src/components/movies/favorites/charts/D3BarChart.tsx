'use client';

import { NewMovie } from "@/resources/definitions";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {useEffect, useRef, useState} from "react";

export default function D3BarChart({ favorites }: { favorites: NewMovie[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || favorites.length === 0) return;

    // Clear previous chart
    d3.select(containerRef.current).selectAll("*").remove();

    const data = favorites
      .map((movie) => ({
        title: movie.title,
        rating: Number(movie.imdbrating),
      }))
      .filter((movie) => !isNaN(movie.rating));

      // Chart dimensions
    const width = 800;
    const height = 500;

    const margin = {
      top: 40,
      right: 30,
      bottom: 100,
      left: 60,
    };

    // Create SVG
    const svg = d3
      .select(containerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // X scale
    const x = d3
      .scaleBand()
      .domain(data.map((movie) => movie.title))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    // Y scale
    const y = d3
      .scaleLinear()
      .domain([0, 10])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // X axis
    svg
      .append("g")
      .attr(
        "transform",
        `translate(0,${height - margin.bottom})`
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
          height - margin.bottom - y(movie.rating)
      );

  }, [favorites]);

  return <div ref={containerRef} />;
}