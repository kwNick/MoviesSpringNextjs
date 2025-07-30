"use client";

import { useEffect } from "react";

export default function ClickRippleEffect() {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const ripple = document.createElement("div");
            ripple.className = "ripple-effect";
            document.body.appendChild(ripple);

            ripple.style.left = `${event.pageX - 8}px`;
            ripple.style.top = `${event.pageY - 8}px`;

            setTimeout(() => {
                ripple.style.opacity = "0";
                ripple.style.transform = "scale(4)";
            }, 20);

            setTimeout(() => document.body.removeChild(ripple), 600);
        };

        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        }
    }, []);

    return (
        <>
            <style>{`
        .ripple-effect {
          position: absolute;
          width: 16px;
          height: 16px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          pointer-events: none;
          transform: scale(0);
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
          z-index: 30;
        }
      `}</style>
        </>
    );
}
