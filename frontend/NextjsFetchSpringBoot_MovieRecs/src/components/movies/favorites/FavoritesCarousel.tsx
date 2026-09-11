'use client';

import { useFavorites } from "@/context/FavoritesContext";
import MovieCarousel from "../MovieCarousel";

const FavoritesCarousel = () => {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return (
            <section className="text-accent">
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
    <MovieCarousel movies={favorites} />
  )
}
export default FavoritesCarousel