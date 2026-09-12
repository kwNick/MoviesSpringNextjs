'use client';

import { NewMovie } from "@/resources/definitions";
import { Data } from "plotly.js-dist-min";
import { useEffect, useRef } from "react";

const PlotlyHistogramRuntime = ({movies}: {movies: NewMovie[]}) => {
const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createChart = async () => {
      const Plotly = (await import("plotly.js-dist-min")).default;

      const data: Data[] = [
        {
          x: movies.map((movie) => parseInt(movie.runtime)).filter((runtime) => !isNaN(runtime)),
          type: "histogram" as const,
          xbins: {
            size: 10,
          },
          hovertemplate:
            "Runtime: %{x}<br>" +
            "Movies: %{y}" +
            "<extra></extra>",
        },
      ];

      const layout = {
        title: {
          text: "Movie Runtime Distribution",
        },
        xaxis: {
          title: {
            text: "Runtime (minutes)",
          },
        },
        yaxis: {
          title: {
            text: "Number of Movies",
          },
        },
        bargap: 0.05,
      };

      if (chartRef.current) {
        Plotly.newPlot(chartRef.current, data, layout);
      }
    };

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
};
export default PlotlyHistogramRuntime