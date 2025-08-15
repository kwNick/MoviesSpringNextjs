"use client";

import { useRef } from "react";

export default function MagneticImage() {
    const imgRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            imgRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        }
    };

    const handleMouseLeave = () => {
        if (imgRef.current) {
            imgRef.current.style.transform = "translate(0, 0)";
        }
    };

    return (
        <div ref={imgRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-1/2 h-full flex items-center justify-center">
            <div
                className="w-4/5 h-4/5 bg-cover bg-center rounded-lg transition-transform duration-300 bg-[url('/pictures/camera.jpg')]"
            />
        </div>

    );
}
