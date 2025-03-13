"use client";

import { useRef, useEffect, useState } from "react";

export default function HorizontalParallax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                setScrollPosition(containerRef.current.scrollLeft);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="flex overflow-x-auto w-[90vw] h-[70vh] items-center space-x-10 p-10 bg-gray-900">
            {Array.from({ length: 5 }, (_, i) => (
                <div
                    key={i}
                    className="min-w-[400px] h-[400px] bg-red-500 flex items-center justify-center text-white text-3xl rounded-xl"
                    style={{ transform: `translateX(${scrollPosition * (i % 2 === 0 ? 0.2 : -0.2)}px)` }}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
