'use client';
import { useFavorites } from "@/context/FavoritesContext"
import { NewMovie } from "@/resources/definitions";

const ShowFavorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    if (favorites.length === 0) {
        return <p className="p-4 text-gray-500">No favorite movies yet.</p>;
    }

    return (
        <div className="text-colour p-3 w-full h-full grid grid-cols-4 gap-4 rounded-lg">
            {favorites.map((fav: NewMovie, idx: number) => {
                return (
                    <div key={idx} className="max-h-fit flex flex-col items-center justify-center p-4 m-2 bg-gray-800 rounded-lg shadow-lg">
                        <p>
                            {fav.title}
                        </p>
                        <button
                            className={`mt-2 px-4 py-2 rounded-lg text-white border`}
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