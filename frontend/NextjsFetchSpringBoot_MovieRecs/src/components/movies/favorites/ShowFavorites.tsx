'use client';

import { useFavorites } from "@/context/FavoritesContext"
import { NewMovie } from "@/resources/definitions";
import Link from "next/link";
import Image from "next/image";
import FavButton from "./FavButton";

const ShowFavorites = () => {
    const { favorites} = useFavorites();

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
        <div className="text-colour p-3 w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 rounded-lg">
            {favorites.map((fav: NewMovie, idx: number) => {
                const imgPoster = isValidURL(fav.poster) ? fav.poster : "/pictures/default-cassette.jpg";
                const href = fav._links.self.href;
                // console.log(href);
                const idMatch = href.match(/\/([^\/]+)$/);
                const id = idMatch ? idMatch[1] : "";

                return (
                    <Link href={`/movies/${id}`} key={idx} className="group relative h-full flex flex-col items-center justify-center font-bold p-8 gap-y-6 lg:gap-y-8 bg-colour hover:[box-shadow:_0px_3px_8px_var(--colour),_0px_-3px_8px_var(--colour),_0px_3px_8px_var(--contrast),_0px_-3px_8px_var(--contrast)] hover:scale-105 transition-transform duration-300 z-10">

                        <Image src={imgPoster} alt={fav.title} width={200} height={200} className="absolute inset-0 w-full h-full object-center object-cover -z-10 " />
                        <div className="absolute inset-0 w-full h-full bg-black/40 duration-300 -z-10 " />
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-contrast -z-10 opacity-0 group-hover:opacity-100 duration-300"/>
                        
                        <p className="text-center text-2xl lg:text-3xl xl:text-4xl font-semibold">{fav.title}</p>
                        <p className="opacity-0 text-center text-sm lg:text-base group-hover:opacity-100 duration-300">
                            {fav.year.replace("?", "-") + " - " + fav.rated} - {fav.imdbrating}<br/>{fav.genre}
                        </p>
                        <p className="opacity-0 text-center lg:text-xl xl:text-2xl group-hover:opacity-100 duration-300">
                            {fav.plot.split(" ").filter((_, idx) => idx < 10).join(" ") + (fav.plot.split(" ").length > 9 ? "..." : "")}
                        </p>
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <FavButton movie={fav} />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default ShowFavorites