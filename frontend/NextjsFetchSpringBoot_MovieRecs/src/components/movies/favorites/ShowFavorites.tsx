'use client';
import { useFavorites } from "@/context/FavoritesContext"
import { NewMovie } from "@/resources/definitions";

const ShowFavorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    if (favorites.length === 0) {
        return <p className="p-4 text-gray-500">No favorite movies yet.</p>;
    }

    return (
        <div className="text-colour flex">
            {favorites.map((fav: NewMovie, idx: number) => {
                return (
                    <div key={idx}>
                        <p>
                            {fav.title}
                        </p>
                        <button
                            className={`mt-2 px-4 py-2 rounded-lg text-white`}
                            onClick={() => removeFavorite(fav)}
                        >
                            Remove from Favorites
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
export default ShowFavorites