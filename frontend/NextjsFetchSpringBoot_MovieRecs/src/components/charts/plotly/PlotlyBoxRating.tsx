"use client";

import { useEffect, useRef } from "react";
// import Plotly from "plotly.js-dist-min";
import type { Data, Layout } from "plotly.js-dist-min";
import { NewMovie } from "@/resources/definitions";

const PlotlyBoxRating = ({movies}: {movies: NewMovie[]}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  // console.log(movies.map((movie) => movie.imdbrating));
  useEffect(() => {

    const createChart = async () => {
      const Plotly = (await import("plotly.js-dist-min")).default;
      const data: Data[] = [
        {
            y: movies.map((movie) => Number(movie.imdbrating)),
            type: "box",
            name: "IMDb Ratings",
            boxpoints: "outliers",
            jitter: 0.3,
            pointpos: 0,
            hovertemplate:
              "IMDb Rating: %{y}<extra></extra>",
        },
      ];
      // const data: Data[] = [
      //   {
      //     y: [9.3, 8.9, 8.7, 8.5, 8.2, 8.0, 7.9, 7.7, 7.5, 7.3, 7.1, 6.9, 6.7, 6.4, 5.8],
      //     type: "box" as const,
      //     name: "IMDb Ratings",
      //     boxpoints: "outliers",
      //     jitter: 0.3,
      //     pointpos: 0,
      //     hovertemplate:
      //       "IMDb Rating: %{y}<extra></extra>",
      //   },
      // ];

      const layout = {
        title: {
          text: "Distribution of IMDb Ratings",
        },
        yaxis: {
          title: {
            text: "IMDb Rating",
          },
        },
      };
      if (chartRef.current) {
        Plotly.newPlot(chartRef.current, data, layout);
      }
    }

    createChart()

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
export default PlotlyBoxRating