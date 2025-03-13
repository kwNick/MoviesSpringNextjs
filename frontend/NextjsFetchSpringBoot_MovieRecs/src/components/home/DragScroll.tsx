"use client";

import { useRef, useState } from "react";

export default function DragScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust speed
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            ref={containerRef}
            className="flex overflow-x-auto w-screen h-[70vh] items-center space-x-10 p-10 bg-gray-800 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
        >
            {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="min-w-[300px] h-[300px] bg-yellow-500 flex items-center justify-center text-black text-3xl rounded-xl">
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
