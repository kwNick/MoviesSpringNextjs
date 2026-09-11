"use client";

import { useFavorites } from "@/context/FavoritesContext";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FavButton from "./favorites/FavButton";
import { isValidURL } from "@/resources/utils";
import { NewMovie } from "@/resources/definitions";

interface Recommendation extends NewMovie {
    similarity: number;
    match_percentage: number;
    description: string;
}

export default function RecommendedMovies() {
    const recommendedRef = useRef<HTMLDivElement | null>(null);
    const [movies, setMovies] = useState<Recommendation[]>([]);
    const { favorites } = useFavorites();

    const [loading, setLoading] = useState(true);

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

                const response = await fetch("http://localhost:8000/recommendations?limit=10", {
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

    useEffect(() => {
        const container = recommendedRef.current;

        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Only hijack the wheel if there is horizontal
            // content that can actually be scrolled
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            const atStart = container.scrollLeft <= 0;
            const atEnd = container.scrollLeft >= maxScrollLeft-1;

            // Scrolling up while already at the far left
            const tryingToScrollLeft = e.deltaY < 0;

            // Scrolling down while already at the far right
            const tryingToScrollRight = e.deltaY > 0;

            // Allow normal page scrolling at the boundaries
            if ((atStart && tryingToScrollLeft) || (atEnd && tryingToScrollRight)) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();

            // container.scrollLeft += e.deltaY;
            container.scrollBy({
                left: e.deltaY*3,
                behavior: "smooth",
            });
        };

        container.addEventListener("wheel", handleWheel, {
            passive: false,
        });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [movies]);

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
                    Recommended For You
                </h2>
                <p>
                    Add some movies to your
                    favorites to get
                    recommendations.
                </p>
            </section>
        );
    }

    return (
        <>
        {movies.length > 0 && (
            <div 
                ref={recommendedRef}
                // onWheel={(e) => {
                //     const container = recommendedRef.current;
                    
                //     if (!container) return;
                    
                //     e.preventDefault();
                //     container.scrollLeft += e.deltaY;
                // }}
                className="
                    w-full
                    h-[70vh] lg:h-[80vh]
                    p-6 lg:p-10
                    flex
                    items-center
                    justify-start
                    gap-6
                    overflow-x-auto
                    overflow-y-hidden
                    scroll-smooth
                    border-t border-b border-contrast
                "
            >
                {movies.map((movie, idx) => {
                    const imgPoster = isValidURL(movie.poster) ? movie.poster : "/pictures/default-cassette.jpg";

                    const href = movie._links.self.href;
                    const idMatch = href.match(/\/([^\/]+)$/);
                    const id = idMatch ? idMatch[1] : "";

                    return (
                        <Link
                            href={`/movies/${id}`}
                            key={idx}
                            className="
                                group relative
                                shrink-0
                                w-[300px] lg:w-[350px] xl:w-[400px]
                                h-full
                                flex flex-col
                                items-center justify-center
                                font-bold
                                p-8
                                gap-y-6 lg:gap-y-8
                                bg-colour
                                [box-shadow:0px_3px_8px_var(--accent),0px_-3px_8px_var(--contrast),0px_3px_8px_var(--contrast),0px_-3px_8px_var(--contrast)]
                                hover:[box-shadow:0px_3px_8px_var(--colour),0px_-3px_8px_var(--colour),0px_3px_8px_var(--contrast),0px_-3px_8px_var(--contrast)]
                                hover:scale-105
                                transition-transform duration-300
                                z-10
                            "
                        >
                            <Image
                                src={imgPoster}
                                alt={movie.title}
                                width={200}
                                height={200}
                                loading="eager"
                                className="
                                    absolute inset-0
                                    w-full h-full
                                    object-center object-cover
                                    -z-10
                                "
                            />

                            <div className="
                                absolute inset-0
                                w-full h-full
                                bg-black/40
                                -z-10
                            " />

                            <div className="
                                absolute inset-0
                                bg-linear-to-b
                                from-transparent to-contrast
                                -z-10
                                opacity-0
                                group-hover:opacity-100
                                duration-300
                            " />

                            <p className="
                                text-center
                                text-2xl lg:text-3xl xl:text-4xl
                                font-semibold
                            ">
                                {movie.title}
                            </p>

                            <p className="
                                opacity-0
                                text-center
                                text-sm lg:text-base
                                group-hover:opacity-100
                                duration-300
                            ">
                                {movie.year?.toString().replace("?", "-") + " - " + movie.rated} - {movie.imdbrating}
                                <br />
                                {movie.genre}
                            </p>

                            <p className="
                                opacity-0
                                text-center
                                lg:text-xl xl:text-2xl
                                group-hover:opacity-100
                                duration-300
                            ">
                                {movie.plot?.split(" ").slice(0, 10).join(" ")}
                                {movie.plot?.split(" ").length! > 9 ? "..." : ""}
                            </p>

                            <div className="
                                opacity-0
                                group-hover:opacity-100
                                duration-300
                            ">
                                <FavButton movie={movie} />
                            </div>
                            <div>
                                <p className="
                                    opacity-0
                                    text-center
                                    lg:text-xl xl:text-2xl
                                    group-hover:opacity-100
                                    duration-300
                                ">
                                    Similarity: {movie.similarity}
                                </p>
                                <p className="
                                    opacity-0
                                    text-center
                                    lg:text-xl xl:text-2xl
                                    group-hover:opacity-100
                                    duration-300
                                ">
                                    Match %: {movie.match_percentage}
                                </p>
                            </div>
                            <p className="
                                opacity-0
                                text-center
                                lg:text-lg xl:text-xl
                                group-hover:opacity-100
                                duration-300
                            ">
                                {movie.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        )}
        </>
    );
}