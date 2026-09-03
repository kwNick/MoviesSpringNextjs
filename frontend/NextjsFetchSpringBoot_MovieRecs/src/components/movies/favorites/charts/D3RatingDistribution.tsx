'use client';

import { NewMovie } from "@/resources/definitions";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3RatingDistribution = ({favorites}:{favorites: NewMovie[]}) => {
      const ratingChartRef = useRef<HTMLDivElement>(null);
    
      /*
       * IMDb RATING DISTRIBUTION
       */
      useEffect(() => {
        if (!ratingChartRef.current || favorites.length === 0) return;
    
        const drawChart = () => {
    
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
    
          const width = "100%";
          const height = "100%";
    
          const margin = {
            top: 60,
            right: 60,
            bottom: 60,
            left: 60,
          };
    
          const svg = d3
            .select(ratingChartRef.current)
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%");
    
          // X axis
          const x = d3
            .scaleBand()
            .domain(distribution.map((d) => d.label))
            .range([margin.left, ratingChartRef.current?.clientWidth! - margin.right])
            .padding(0.2);
    
          // Y axis
          const y = d3
            .scaleLinear()
            .domain([0, d3.max(distribution, (d) => d.count) ?? 0])
            .nice()
            .range([ratingChartRef.current?.clientHeight! - margin.bottom, margin.top]);
    
          // X axis
          svg
            .append("g")
            .attr(
              "transform",
              `translate(0, ${ratingChartRef.current?.clientHeight! - margin.bottom})`
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
                ratingChartRef.current?.clientHeight! -
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
    
        resizeObserver.observe(ratingChartRef.current);
    
        // Cleanup
        return () => {
          resizeObserver.disconnect();
        };
    
      }, [favorites]);

  return (
    <div className="w-full h-full border border-colour rounded-lg p-4">
        <h2 className="mb-4 text-2xl font-bold">
          Favorite Movies by IMDb Rating Distribution
        </h2>

        <div
          ref={ratingChartRef}
          className="w-full h-[50vh] overflow-x-auto"
        />
    </div>
  )
}
export default D3RatingDistribution