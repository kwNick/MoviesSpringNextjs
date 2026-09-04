"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface RatingData {
  decade: number;
  averageRating: number;
}

export default function RatingChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  const [data, setData] = useState<RatingData[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/analysis/trends")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;
    
    const drawChart = () => {
        const width = 800;
        const height = 500;

        const margin = {
        top: 40,
        right: 40,
        bottom: 60,
        left: 60,
        };

        const svg = d3
        .select(svgRef.current)
        .attr("width", "100%")
        .attr("height", "100%");

        svg.selectAll("*").remove();

        const x = d3
        .scaleLinear()
        .domain(
            d3.extent(data, (d) => d.decade) as [number, number]
        )
        .range([margin.left, svgRef.current?.clientWidth! - margin.right]);

        const y = d3
        .scaleLinear()
        .domain([6, 10])
        .range([svgRef.current?.clientHeight! - margin.bottom, margin.top]);

        const xAxis = d3
        .axisBottom(x)
        .ticks(data.length)
        .tickFormat((d) => `${d}s`);

        const yAxis = d3
        .axisLeft(y)
        .ticks(8);

        svg
        .append("g")
        .attr(
            "transform",
            `translate(0, ${svgRef.current?.clientHeight! - margin.bottom})`
        )
        .call(xAxis);

        svg
        .append("g")
        .attr(
            "transform",
            `translate(${margin.left}, 0)`
        )
        .call(yAxis);

        const line = d3
        .line<RatingData>()
        .x((d) => x(d.decade))
        .y((d) => y(d.averageRating));

        svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 3)
        .attr("d", line);

        svg
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", (d) => x(d.decade))
        .attr("cy", (d) => y(d.averageRating))
        .attr("r", 5)
        .attr("fill", "steelblue");
    }

    // Redrawing the chart on window resize to ensure responsiveness
    // Draw initially
    drawChart();

    // Watch container size
    const resizeObserver = new ResizeObserver(() => {
      drawChart();
    });

    resizeObserver.observe(svgRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };

  }, [data]);

  return (
    <div>
      <h2>Average IMDb Rating by Decade</h2>

      <svg ref={svgRef}></svg>
    </div>
  );
}