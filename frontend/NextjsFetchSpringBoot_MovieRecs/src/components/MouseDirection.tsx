"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseDirection() {
    const dir = useRef<HTMLParagraphElement>(null);
    // const [direction, setDirection] = useState("");
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const dirRef = dir.current;
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            // console.log(event);
            // console.log(dirRef);

            let newDirection = "";
            if (clientX > lastPosition.x) newDirection = "Right";
            else if (clientX < lastPosition.x) newDirection = "Left";

            if (clientY > lastPosition.y) newDirection += " Down";
            else if (clientY < lastPosition.y) newDirection += " Up";

            setLastPosition({ x: clientX, y: clientY });
            if (dirRef) {
                dirRef.innerText = `Direction: ${newDirection.trim() ? newDirection.trim() : "Need Movement..."}`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [lastPosition]);

    return (
        <div className="absolute top-[20px] left-[5%] flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-3xl mb-4">Move Your Mouse</h1>
            <p ref={dir} className="text-xl bg-blue-500 px-4 py-2 rounded-lg duration-300">
                Need Movement...
            </p>
        </div>
    );
}