"use client";

import { useEffect, useState } from "react";

interface RatingStats {
  count: number;
  mean: number;
  median: number;
  standardDeviation: number;
  minimum: number;
  maximum: number;
}

export default function RatingStats() {

  const [stats, setStats] =
    useState<RatingStats | null>(null);

  useEffect(() => {

    fetch("http://localhost:8000/analysis/ratings")
      .then(response => response.json())
      .then(data => setStats(data));

  }, []);

  if (!stats) {
    return <p>Loading statistics...</p>;
  }

  return (
    <section>

      <h2>IMDb Rating Statistics</h2>

      <p>
        Movies analyzed: {stats.count}
      </p>

      <p>
        Mean rating: {stats.mean.toFixed(2)}
      </p>

      <p>
        Median rating: {stats.median.toFixed(2)}
      </p>

      <p>
        Standard deviation:
        {stats.standardDeviation.toFixed(2)}
      </p>

      <p>
        Lowest rating: {stats.minimum.toFixed(2)}
      </p>

      <p>
        Highest rating: {stats.maximum.toFixed(2)}
      </p>

    </section>
  );
}