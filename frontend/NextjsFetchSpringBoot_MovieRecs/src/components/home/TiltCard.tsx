"use client";

import { useRef } from "react";

export default function TiltCard() {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            // console.log(rect);
            const x = (event.clientX - rect.left - rect.width / 2) / 10;
            const y = (event.clientY - rect.top - rect.height / 2) / 10;
            // console.log(x, y);
            cardRef.current.style.transform = `rotateY(${y}deg) rotateX(${-x}deg)`;
        }
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-72 h-96 bg-blue-500 rounded-xl flex flex-col items-center justify-center text-white text-2xl font-bold transition-transform duration-100 shadow-lg"
        >
            Hover Me!
            <span className="text-xs w-3/5">Only On hover of this elements bounding client rectangle!</span>
        </div>
    );
}
