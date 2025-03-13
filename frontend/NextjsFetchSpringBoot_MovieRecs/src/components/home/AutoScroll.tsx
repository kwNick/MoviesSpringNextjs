"use client";

import { useEffect, useRef } from "react";

export default function AutoScroll() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let scrollAmount = 0;
        let direction = 1;
        let animId: number;
        const scroll = () => {
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                direction = -1;
            } else if (container.scrollLeft <= 0) {
                direction = 1;
            }
            scrollAmount += direction * 3; // Adjust speed here
            container.scrollLeft = scrollAmount;
            animId = requestAnimationFrame(scroll);
        };

        scroll();

        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <div ref={scrollRef} className="flex overflow-x-auto w-[80vw] h-[67.5vh] items-center space-x-10 p-10 bg-gray-800">
            {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="min-w-[300px] h-[300px] bg-green-500 flex items-center justify-center text-white text-3xl rounded-xl">
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
