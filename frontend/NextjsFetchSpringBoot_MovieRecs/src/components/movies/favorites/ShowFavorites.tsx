'use client';

import { useFavorites } from "@/context/FavoritesContext"
import { NewMovie } from "@/resources/definitions";
import Link from "next/link";
import Image from "next/image";
import FavButton from "./FavButton";
import RechartBar from "./charts/RechartBar";
// import D3BarChart from "./charts/D3BarChart";
// import D3Charts from "./charts/D3Charts";
import D3GenreAnalysis from "./charts/D3GenreAnalysis";
import { isValidURL } from "@/resources/utils";
import D3DirectorsAvgRating from "./charts/D3DirectorsAvgRating";
import D3RatingByDecade from "./charts/D3RatingByDecade";
import D3ByYear from "./charts/D3ByYear";
import D3ByRating from "./charts/D3ByRating";
import D3RatingDistribution from "./charts/D3RatingDistribution";

const ShowFavorites = () => {
    const { favorites} = useFavorites();
    // console.log(favorites);

    if (favorites.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="p-4 text-colour">No favorite movies.</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-colour p-8 m-8 pt-10 pb-14 mb-10 w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-10 rounded-lg">
                {favorites.map((fav: NewMovie, idx: number) => {
                    const imgPoster = isValidURL(fav.poster) ? fav.poster : "/pictures/default-cassette.jpg";
                    const href = fav._links.self.href;
                    // console.log(href);
                    const idMatch = href.match(/\/([^\/]+)$/);
                    const id = idMatch ? idMatch[1] : "";

                    return (
                        <Link href={`/movies/${id}`} key={idx} className="group relative h-full flex flex-col items-center justify-center font-bold p-8 gap-y-6 lg:gap-y-8 bg-colour hover:[box-shadow:0px_3px_8px_var(--colour),0px_-3px_8px_var(--colour),0px_3px_8px_var(--contrast),0px_-3px_8px_var(--contrast)] hover:scale-105 transition-transform duration-300 z-10">

                            <Image src={imgPoster} alt={fav.title} width={200} height={200} loading="eager" className="absolute inset-0 w-full h-full object-center object-cover -z-10 " />
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
            <div className="text-colour p-8 m-8 pt-10 pb-14 mb-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 rounded-lg">
                <div className="h-full w-full border border-colour rounded-lg p-4">
                    <RechartBar favorites={favorites} />
                </div>
                <div className="h-full w-full">
                    <D3ByYear favorites={favorites} />
                </div>
            
                <D3ByRating favorites={favorites} />

                <D3RatingDistribution favorites={favorites} />
                
                {/* has three charts */}
                <D3GenreAnalysis favorites={favorites} />
            
                <D3DirectorsAvgRating favorites={favorites} />

                <D3RatingByDecade favorites={favorites} />
            </div>
            
        </div>
    )
}
export default ShowFavorites