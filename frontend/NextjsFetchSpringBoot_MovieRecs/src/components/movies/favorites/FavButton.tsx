'use client';
import { useFavorites } from "@/context/FavoritesContext"
import { NewMovie } from "@/resources/definitions";

const FavButton = ({ movie }: { movie: NewMovie }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const toggleFav = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (favorites.find((m) => m.title == movie.title)) {
            removeFavorite(movie)
        } else {
            addFavorite(movie);
        }
    };


    return (
        <button onClick={(e) => toggleFav(e)} className="border border-contrast rounded-lg text-contrast p-2 bg-colour hover:bg-accent hover:text-colour hover:scale-110 duration-300 cursor-pointer">
            {favorites.find((m) => m.title === movie.title) ? "Remove Fav" : "Add Fav"}
        </button>
    )
}
export default FavButton