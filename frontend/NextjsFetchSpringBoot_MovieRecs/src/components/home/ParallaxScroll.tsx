"use client";

import { useEffect, useState } from "react";

export default function ParallaxScroll() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="absolute top-[50vh] left-[50vw] transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold transition-all duration-300"
            style={{ transform: `translateY(${offset * 0.5}px)` }}
        >
            Parallax Effect
        </div>
    );
}
