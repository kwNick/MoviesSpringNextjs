'use client';
import { useFavorites } from "@/context/FavoritesContext"
import { NewMovie } from "@/resources/definitions";
import Link from "next/link";

const ShowFavorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="p-4 text-colour">No favorite movies.</p>
            </div>
        );
    }

    return (
        <div className="text-contrast p-3 w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 rounded-lg">
            {favorites.map((fav: NewMovie, idx: number) => {
                const href = fav._links.self.href;
                // console.log(href);
                const idMatch = href.match(/\/([^\/]+)$/);
                const id = idMatch ? idMatch[1] : "";
                return (
                    <Link href={`/movies/${id}`} key={idx} className="h-full flex flex-col items-center justify-center p-8 gap-y-6 lg:gap-y-8 bg-colour rounded-lg shadow-lg border-4 border-accent [box_shadow:0_0_20px_rgba(255,255,255,1)] hover:scale-105 transition-transform duration-300">
                        <p className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-contrast">
                            {fav.title}
                        </p>

                        <button
                            className={`p-2 rounded-lg text-contrast border border-contrast`}
                            onClick={() => removeFavorite(fav)}
                        >
                            Remove
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}
export default ShowFavorites