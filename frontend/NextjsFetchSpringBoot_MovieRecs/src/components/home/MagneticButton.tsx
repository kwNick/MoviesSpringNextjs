"use client";

import { useRef } from "react";

export default function MagneticButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            buttonRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        }
    };

    const handleMouseLeave = () => {
        if (buttonRef.current) {
            buttonRef.current.style.transform = "translate(0px, 0px)";
        }
    };

    return (
        <div className="p-8 flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
            <button
                ref={buttonRef}
                className="px-6 py-3 bg-blue-500 text-white rounded-full text-xl font-bold ease-out duration-100"
            >
                Hover Me
            </button>
        </div>
    );
}
