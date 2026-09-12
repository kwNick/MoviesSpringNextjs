"use client";

import { NewMovie } from "@/resources/definitions";
import { useEffect, useRef } from "react";
// import Plotly from "plotly.js-dist-min";
import type { Data, Layout } from "plotly.js-dist-min";

const PlotlyChartRatingMetascor = ({movies}: {movies: NewMovie[]}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createChart = async () => {
      const Plotly = (await import("plotly.js-dist-min")).default;

      const data: Data[] = [
        {
            // x: movies.map((movie) => (movie.imdbrating ? Number(movie.imdbrating) : 0)),
            x: movies.map((movie) => movie.imdbrating),
            y: movies.map((movie) => movie.metascore),
            text: movies.map((movie) => movie.title),
            mode: "markers",
            type: "scatter",
            hovertemplate:
            "<b>%{text}</b><br>" +
            "IMDb Rating: %{x}<br>" +
            "Metascore: %{y}<extra></extra>",
        },
      ];

      // const data = [
      //   {
      //     x: [8.7, 8.2, 7.9, 7.5, 6.8, 6.2, 5.9],
      //     y: [92, 85, 78, 72, 65, 58, 51],
      //     mode: "markers",
      //     type: "scatter" as const,
      //     text: [
      //       "The Shawshank Redemption",
      //       "The Dark Knight",
      //       "Inception",
      //       "Interstellar",
      //       "Movie A",
      //       "Movie B",
      //       "Movie C",
      //     ],
      //     hovertemplate:
      //       "<b>%{text}</b><br>" +
      //       "IMDb Rating: %{x}<br>" +
      //       "Metascore: %{y}<extra></extra>",
      //   },
      // ];

      const layout = {
        title: {
          text: "IMDb Rating vs Metascore",
        },
        xaxis: {
          title: {
            text: "IMDb Rating",
          },
        },
        yaxis: {
          title: {
            text: "Metascore",
          },
        },
      };

      if (chartRef.current) {
        Plotly.newPlot(chartRef.current, data, layout);
      }
    }

    createChart();

    return () => {
      if (chartRef.current) {
        import("plotly.js-dist-min").then(({ default: Plotly }) => {
          if (chartRef.current) {
              Plotly.purge(chartRef.current);
          }
        });
      }
    };
  }, []);

  return <div ref={chartRef} />;
}
export default PlotlyChartRatingMetascor