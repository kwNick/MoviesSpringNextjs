'use client';

import FavButton from "@/components/movies/favorites/FavButton";
import { useFavorites } from "@/context/FavoritesContext"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { isValidURL } from "@/resources/utils";

const FavoritesModal = () => {
    const { favorites } = useFavorites();
    const favoritesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = favoritesRef.current;

        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Only hijack the wheel if there is horizontal
            // content that can actually be scrolled
            const maxScrollLeft =
            container.scrollWidth - container.clientWidth;

            const atStart = container.scrollLeft <= 0;
            const atEnd = container.scrollLeft >= maxScrollLeft;

            // Scrolling up while already at the far left
            const tryingToScrollLeft = e.deltaY < 0;

            // Scrolling down while already at the far right
            const tryingToScrollRight = e.deltaY > 0;

            // Allow normal page scrolling at the boundaries
            if (
                (atStart && tryingToScrollLeft) ||
                (atEnd && tryingToScrollRight)
            ) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();

            container.scrollLeft += e.deltaY;
        };

        container.addEventListener("wheel", handleWheel, {
            passive: false,
        });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [favorites]);
    
  return (
    <>
        {/* {favorites.length > 0 && (
            <div className="p-6 lg:p-10 w-full h-full flex items-center justify-start overflow-x-auto overflow-y-hidden gap-6 snap-x snap-mandatory">
                {favorites.map((fav, idx) => {
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
        )} */}

        {/* {favorites.length > 0 && (
            <div className="w-full h-[600px] p-6 lg:p-10 flex items-center overflow-x-auto overflow-y-hidden gap-6 snap-x snap-mandatory">
                {favorites.map((fav, idx) => {
                    const imgPoster = isValidURL(fav.poster)
                        ? fav.poster
                        : "/pictures/default-cassette.jpg";

                    const href = fav._links.self.href;

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
                                snap-center
                                hover:[box-shadow:0px_3px_8px_var(--colour),0px_-3px_8px_var(--colour),0px_3px_8px_var(--contrast),0px_-3px_8px_var(--contrast)]
                                hover:scale-105
                                transition-transform duration-300
                                z-10
                            "
                        >
                            <Image
                                src={imgPoster}
                                alt={fav.title}
                                width={200}
                                height={200}
                                loading="eager"
                                className="absolute inset-0 w-full h-full object-center object-cover -z-10"
                            />

                            <div className="absolute inset-0 w-full h-full bg-black/40 -z-10" />

                            <div className="absolute inset-0 bg-linear-to-b from-transparent to-contrast -z-10 opacity-0 group-hover:opacity-100 duration-300" />

                            <p className="text-center text-2xl lg:text-3xl xl:text-4xl font-semibold">
                                {fav.title}
                            </p>

                            <p className="opacity-0 text-center text-sm lg:text-base group-hover:opacity-100 duration-300">
                                {fav.year.replace("?", "-") + " - " + fav.rated} - {fav.imdbrating}
                                <br />
                                {fav.genre}
                            </p>

                            <p className="opacity-0 text-center lg:text-xl xl:text-2xl group-hover:opacity-100 duration-300">
                                {fav.plot.split(" ").slice(0, 10).join(" ")}
                                {fav.plot.split(" ").length > 9 ? "..." : ""}
                            </p>

                            <div className="opacity-0 group-hover:opacity-100 duration-300">
                                <FavButton movie={fav} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        )} */}

        {favorites.length > 0 && (
            <div
                ref={favoritesRef}
                // onWheel={(e) => {
                //     const container = favoritesRef.current;
                    
                //     if (!container) return;
                    
                //     e.preventDefault();
                //     container.scrollLeft += e.deltaY;
                // }}
                className="
                    w-full
                    h-[65vh] lg:h-[70vh]
                    p-6 lg:p-10
                    flex
                    items-center
                    justify-start
                    gap-6
                    overflow-x-auto
                    overflow-y-hidden
                    scroll-smooth
                    border-t border-b border-colour
                "
            >
                {favorites.map((fav, idx) => {
                    const imgPoster = isValidURL(fav.poster)
                        ? fav.poster
                        : "/pictures/default-cassette.jpg";

                    const href = fav._links.self.href;
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
                                snap-center
                                hover:[box-shadow:0px_3px_8px_var(--colour),0px_-3px_8px_var(--colour),0px_3px_8px_var(--contrast),0px_-3px_8px_var(--contrast)]
                                hover:scale-105
                                transition-transform duration-300
                                z-10
                            "
                        >
                            <Image
                                src={imgPoster}
                                alt={fav.title}
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
                                {fav.title}
                            </p>

                            <p className="
                                opacity-0
                                text-center
                                text-sm lg:text-base
                                group-hover:opacity-100
                                duration-300
                            ">
                                {fav.year.replace("?", "-") + " - " + fav.rated} - {fav.imdbrating}
                                <br />
                                {fav.genre}
                            </p>

                            <p className="
                                opacity-0
                                text-center
                                lg:text-xl xl:text-2xl
                                group-hover:opacity-100
                                duration-300
                            ">
                                {fav.plot.split(" ").slice(0, 10).join(" ")}
                                {fav.plot.split(" ").length > 9 ? "..." : ""}
                            </p>

                            <div className="
                                opacity-0
                                group-hover:opacity-100
                                duration-300
                            ">
                                <FavButton movie={fav} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        )}
    </>
  )
}
export default FavoritesModal