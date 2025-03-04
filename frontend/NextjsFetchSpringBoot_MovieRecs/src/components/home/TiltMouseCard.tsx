"use client";

import { useEffect, useRef } from "react";

export default function TiltMouseCard() {
    const tilt = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tiltRef = tilt.current;
        const handleMouseMove = (event: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            // console.log("innerWidth: " + innerWidth + " " + "innerHeight: " + innerHeight);
            // console.log("Window: " + window);
            // console.log("Event: " + event);

            const x = (event.clientX / innerWidth - 0.5) * 90; // Rotate max 90 degrees
            const y = (event.clientY / innerHeight - 0.5) * -90;
            if (tiltRef) {
                tiltRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={tilt}
            className="w-64 h-64 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold ease-out duration-200"
        >
            3D Tilt Effect
        </div>
    );
}
