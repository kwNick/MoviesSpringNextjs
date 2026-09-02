'use client';

import { NewMovie } from "@/resources/definitions";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {useEffect, useRef, useState} from "react";

export default function D3BarChart({ favorites }: { favorites: NewMovie[] }) {
  const containerRef = useRef(null);
  const [data, setData] = useState({} as any);

  useEffect(() => {
    if (favorites.length === 0) return;
    const parsedData = favorites.map((movie) => ({
      title: movie.title,
      imdbRating: movie.imdbrating,
    }));
    setData(parsedData);
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    const plot = Plot.plot({
      y: {grid: true},
      color: {scheme: "burd"},
      marks: [
        Plot.ruleY([0]),
        Plot.dot(favorites, {x: "Date", y: "Anomaly", stroke: "Anomaly"})
      ]
    });
    containerRef?.current?.append(plot);
    return () => plot.remove();
  }, [data]);

  return <div ref={containerRef} />;
}