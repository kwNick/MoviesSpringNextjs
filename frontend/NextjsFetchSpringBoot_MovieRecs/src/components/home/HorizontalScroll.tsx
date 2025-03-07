"use client";

import { useRef, useEffect } from "react";

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (event: WheelEvent) => {
            console.log(event);
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => container.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div ref={containerRef} className="flex overflow-x-auto w-screen h-[80vh] items-center space-x-10 p-10 bg-gray-900">
            {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="min-w-[300px] h-[300px] bg-blue-500 flex items-center justify-center text-white text-3xl rounded-xl">
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
