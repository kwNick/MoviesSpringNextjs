"use client";

import { useState, useEffect } from "react";

export default function TiltMouseCard() {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (event.clientX / innerWidth - 0.5) * 90; // Rotate max 30 degrees
            const y = (event.clientY / innerHeight - 0.5) * -90;
            setRotate({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-900">
            <div
                className="w-64 h-64 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold transition-transform duration-200"
                style={{
                    transform: `rotateY(${rotate.x}deg) rotateX(${rotate.y}deg)`,
                }}
            >
                3D Tilt Effect
            </div>
        </div>
    );
}
