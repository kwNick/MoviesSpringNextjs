"use client";

import { useEffect, useRef } from "react";

export default function ParallaxScroll() {
    // const [offset, setOffset] = useState(0);
    const parallax = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const parallaxRef = parallax.current;
        const handleScroll = () => {
            // console.log(window);
            // console.log(parallaxRef);

            if (parallaxRef) {
                parallaxRef.style.transform = `translateY(${window.scrollY * 0.5}px)`;
            }
            // setOffset(window.scrollY);
            // style={{ transform: `translateY(${offset * 0.5}px)` }}
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={parallax}
            className="absolute top-[50vh] left-[50vw] transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold transition-all duration-300"
        >
            Parallax Effect
        </div>
    );
}
