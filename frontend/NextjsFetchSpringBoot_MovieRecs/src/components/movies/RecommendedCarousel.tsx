'use client';

import { useEffect, useState } from "react";
import MovieCarousel from "./MovieCarousel";
import { useFavorites } from "@/context/FavoritesContext";
import { Recommendation } from "@/resources/definitions";

const RecommendedCarousel = () => {
    const [movies, setMovies] = useState<Recommendation[]>([]);
    const { favorites } = useFavorites();

    const [loading, setLoading] = useState(true);

    // console.log();
    useEffect(() => {
        async function getRecommendations() {
            try {
                if (!favorites) {
                    setLoading(false);
                    return;
                }

                if (!favorites || favorites.length === 0) {
                    setLoading(false);
                    return;
                }

                const response = await fetch(`http://${process.env.NEXT_PUBLIC_FAST_API_DOMAIN}/recommendations?limit=10`, {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify(favorites)
                        });

                if (!response.ok) {
                    throw new Error("Failed to get recommendations");
                }

                const data = await response.json();

                setMovies(data.recommendations);
            }
            catch (error) {
                console.error("Recommendation error:", error);
            }
            finally {
                setLoading(false);
            }
        }

        getRecommendations();

    }, [favorites]);

    if (loading) {
        return (
            <p>
                Loading recommendations...
            </p>
        );
    }

    if (movies.length === 0) {
        return (
            <section>
                <h2>
                    Add some movies to your
                    favorites to get
                    recommendations.
                </h2>
                <p>
                    
                </p>
            </section>
        );
    }

  return (
    <MovieCarousel movies={movies} />
  )
}
export default RecommendedCarousel