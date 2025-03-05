"use client";

import { useRef } from "react";

export default function ElasticButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = (event.clientX - rect.left - rect.width / 2) / 5;
            const y = (event.clientY - rect.top - rect.height / 2) / 5;
            buttonRef.current.style.transform = `scale(1.1) skew(${x}deg, ${y}deg)`;
        }
    };

    const handleMouseLeave = () => {
        if (buttonRef.current) {
            buttonRef.current.style.transform = "scale(1) skew(0, 0)";
        }
    };

    return (

        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="px-6 py-3 bg-blue-500 text-white rounded-full text-xl font-bold transition-transform duration-200"
        >
            Hover Me
        </button>
    );
}
