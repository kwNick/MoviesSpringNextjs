'use client';
import { useFavorites } from "@/context/FavoritesContext"
import { NewMovie } from "@/resources/definitions";
import Link from "next/link";
import Image from "next/image";

const ShowFavorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    function isValidURL(src: string): boolean {
        try {
            new URL(src);
            return true;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            // console.error("Invalid URL:", e);
            return false;
        }
    }

    if (favorites.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="p-4 text-colour">No favorite movies.</p>
            </div>
        );
    }

    return (
        <div className="text-colour p-3 w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 rounded-lg">
            {favorites.map((fav: NewMovie, idx: number) => {
                const imgPoster = isValidURL(fav.poster) ? fav.poster : "/pictures/default-cassette.jpg";
                const href = fav._links.self.href;
                // console.log(href);
                const idMatch = href.match(/\/([^\/]+)$/);
                const id = idMatch ? idMatch[1] : "";

                return (
                    <Link href={`/movies/${id}`} key={idx} className="relative h-full flex flex-col items-center justify-center p-8 gap-y-6 lg:gap-y-8 bg-colour rounded-lg shadow-lg border-4 border-accent [box_shadow:0_0_20px_rgba(255,255,255,1)] hover:scale-105 transition-transform duration-300 z-10">
                        <Image src={imgPoster} alt={fav.title} width={200} height={200} className="absolute inset-0 w-full h-full object-center object-cover -z-10 " />
                        <div className="absolute rounded-2xl inset-0 w-full h-full bg-black/40 duration-300 -z-10 " />
                        
                        <p className="text-center text-xl md:text-2xl lg:text-3xl font-semibold">
                            {fav.title}
                        </p>
                        <p className="text-center text-xl md:text-2xl lg:text-3xl font-semibold">
                            {fav.year.replace("?", "-")}
                        </p>
                        <p className="text-center text-lg md:text-xl lg:text-2xl">
                            {fav.genre}
                        </p>
                        <p className="text-center text-base md:text-lg lg:text-xl">
                            {fav.plot.split(" ").filter((_, idx) => idx < 10).join(" ") + (fav.plot.split(" ").length > 9 ? "..." : "")}
                        </p>

                        <button
                            className={`p-2 rounded-lg border border-colour hover:bg-accent/50 cursor-pointer`}
                            onClick={(e) => {e.preventDefault();removeFavorite(fav);}}
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