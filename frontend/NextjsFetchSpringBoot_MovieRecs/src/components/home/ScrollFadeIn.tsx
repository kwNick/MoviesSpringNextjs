"use client";

import { useEffect, useRef } from "react";

export default function ScrollFadeIn() {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                // console.log("get bounding client rect: " + rect.top);

                //When the top of the component gets to 25% of the viewport height, it will be visible
                const isVisible = rect.top < window.innerHeight * 0.75;
                elementRef.current.style.opacity = isVisible ? "1" : "0";
                elementRef.current.style.transform = isVisible ? "scale(1)" : "scale(0.8)";
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="h-[50vh] w-3/5 flex flex-col items-center justify-center bg-gray-900 text-white rounded-3xl">
            <h1 className="text-3xl mb-10">Scroll Down</h1>
            <div
                ref={elementRef}
                className="w-64 h-64 flex items-center justify-center bg-blue-500 rounded-xl text-xl font-bold transition-all duration-700 opacity-0 scale-80"
            >
                I Appear & Grow!
            </div>
        </div>
    );
}
