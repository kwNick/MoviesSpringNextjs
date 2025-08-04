import { NewMovie } from "@/resources/definitions";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardRevealSection = ({ movies }: { movies: NewMovie[] }) => {
    return (
        <>
            <div className="absolute inset-0 bg-black z-[10] opacity-0 animate-bgFadeOut animTextScroll pointer-events-none" />

            <div className=" h-3/4 w-[90%] flex items-center justify-center gap-x-8">

                <div className="hidden text-center relative w-2/5 h-3/4 lg:flex items-center justify-center rounded-lg shadow-accent [box-shadow:0_0_5px_1px_rgba(239,68,68,.3)] overflow-hidden">
                    <div className={`absolute inset-0 rounded-lg [background-image:_url('/pictures/camera.jpg')] bg-cover object-contain bg-[50%] z-[-10] before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.5)] before:z-[-10]`} />

                    <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent [text-shadow:0_0_5px_var(--accent),_0_0_1px_var(--colour)]">
                        Top Rated Movies
                    </h2>
                </div>

                {/* <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent text-center">Top Rated Movies</h2> */}
                <div className="w-full h-full flex items-center gap-x-4">
                    {movies.map((x: NewMovie, idx: number) => {
                        const href = x._links.self.href;
                        const idMatch = href.match(/\/([^\/]+)$/);
                        const id = idMatch ? idMatch[1] : "";
                        // console.log(id);
                        return (
                            <Link href={`/movies/${id}`} key={idx} className="group relative w-full h-3/4 border rounded-lg border-contrast bg-colour text-contrast overflow-hidden text-xs md:text-sm lg:text-base duration-500 hover:h-full animate-moviesFadeIn">

                                <Image src={x.poster} width={200} height={500} alt={x.title} className=" absolute inset-0 h-full w-full object-cover bg-cover bg-[50%_50%] rounded-lg duration-300" priority />


                                <div className="absolute top-[75%] w-full min-h-fit h-3/4 rounded-lg flex flex-col items-center justify-start bg-colour text-center group-hover:-translate-y-[40%] group-hover:rounded-lg duration-500 [text-shadow:_0px_5px_10px_var(--contrast)] z-10">
                                    <div className="w-full h-fit text-wrap ">
                                        <p>{x.title}</p>
                                    </div>

                                    <div className="opacity-0 group-hover:opacity-100 duration-500 text-wrap">
                                        <p>{x.rated + " " + x.year}</p>
                                        <p>{x.genre}</p>
                                        {/* <p>{x.plot.split(" ").filter((x, idx) => idx < 15).join(" ") + "..."}</p> */}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default CardRevealSection