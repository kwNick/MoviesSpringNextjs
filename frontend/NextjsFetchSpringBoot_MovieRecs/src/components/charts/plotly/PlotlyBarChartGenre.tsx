"use client";

import { useEffect, useRef } from "react";

const PlotlyBarChartGenre = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const createChart = async () => {
            const Plotly = (await import("plotly.js-dist-min")).default;

            const data = [
                {
                    x: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
                    y: [45, 32, 67, 21, 38],
                    type: "bar" as const,
                    hovertemplate:
                    "<b>%{x}</b><br>" +
                    "Movies: %{y}" +
                    "<extra></extra>",
                },
            ];

            const layout = {
            title: {
                text: "Movies by Genre",
            },
            xaxis: {
                title: {
                text: "Genre",
                },
            },
            yaxis: {
                title: {
                text: "Number of Movies",
                },
            },
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
export default PlotlyBarChartGenre