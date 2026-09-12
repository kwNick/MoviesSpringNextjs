"use client";

import { useEffect, useRef } from "react";
// import Plotly from "plotly.js-dist-min";
// import type { Data, Layout } from "plotly.js-dist-min";

const PlotlyPieChartGenre = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createChart = async () => {
      const Plotly = (await import("plotly.js-dist-min")).default;
      const data = [
        {
          labels: [
            "Action",
            "Comedy",
            "Drama",
            "Horror",
            "Sci-Fi",
            "Thriller",
          ],
          values: [45, 32, 67, 21, 38, 29],
          type: "pie" as const,
          hole: 0.3,
          textinfo: "label+percent",
          hovertemplate:
            "<b>%{label}</b><br>" +
            "Movies: %{value}<br>" +
            "Percentage: %{percent}" +
            "<extra></extra>",
        },
      ];

      const layout = {
        title: {
          text: "Movie Genre Distribution",
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
export default PlotlyPieChartGenre