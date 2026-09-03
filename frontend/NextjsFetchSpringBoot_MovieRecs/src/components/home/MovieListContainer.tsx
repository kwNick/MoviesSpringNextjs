'use client';

import { ExtraMoviesList } from "@/resources/definitions";
import { extraMoviesList } from "@/resources/ExtraMoviesList";
import { useEffect, useRef } from "react";

const MovieListContainer = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Only hijack the wheel if there is horizontal
            // content that can actually be scrolled
            const maxScrollUp =
            container.scrollHeight - container.clientHeight;

            const atStart = container.scrollTop <= 0;
            const atEnd = container.scrollTop >= maxScrollUp;

            // Scrolling up while already at the far left
            const tryingToScrollUp = e.deltaY < 0;

            // Scrolling down while already at the far right
            const tryingToScrollDown = e.deltaY > 0;

            // Allow normal page scrolling at the boundaries
            if (
                (atStart && tryingToScrollUp) ||
                (atEnd && tryingToScrollDown)
            ) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();

            container.scrollTop += e.deltaY;
        };

        container.addEventListener("wheel", handleWheel, {
            passive: false,
        });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, []);
  return (
    <div ref={containerRef} className="py-6 lg:py-10 px-6 lg:px-12 w-full h-full max-h-[90vh] rounded-lg overflow-y-auto scrollbar-thumb-accent">
        <ul className="w-full h-full flex flex-col items-start justify-start text-lg lg:text-xl 2xl:text-2xl rounded-lg scroll-smooth">
            {extraMoviesList.map((x: ExtraMoviesList, idx: number) => {
                return (
                    <li key={idx} className="border-b-2 border-accent py-3 w-full flex items-start justify-between hover:text-accent transition-colors duration-300 hover:[text-shadow:0px_3px_5px_var(--accent)]">
                        <div>{x.title}</div> <div>({x.year})</div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
export default MovieListContainer