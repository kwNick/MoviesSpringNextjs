"use client";

import { useEffect } from "react";

export default function MouseTrail() {
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const trail = document.createElement("div");
            trail.className = "mouse-trail";
            document.body.appendChild(trail);

            trail.style.left = `${event.pageX - 5}px`;
            trail.style.top = `${event.pageY - 5}px`;

            setTimeout(() => {
                trail.style.opacity = "0";
                trail.style.backgroundColor = "var(--colour)";
                setTimeout(() => document.body.removeChild(trail), 400);
            }, 100);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* <div className="h-screen bg-black flex items-center justify-center text-white text-2xl">
                Move Your Mouse
            </div> */}
            <style>{`
        .mouse-trail {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          transition: all 0.4s ease-out;
        }
      `}</style>
        </>
    );
}
