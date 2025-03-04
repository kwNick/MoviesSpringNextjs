"use client";

import { useEffect, useState } from "react";

export default function MouseDirection() {
    const [direction, setDirection] = useState("");
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;

            let newDirection = "";
            if (clientX > lastPosition.x) newDirection = "Right";
            else if (clientX < lastPosition.x) newDirection = "Left";

            if (clientY > lastPosition.y) newDirection += " Down";
            else if (clientY < lastPosition.y) newDirection += " Up";

            setDirection(newDirection.trim());
            setLastPosition({ x: clientX, y: clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [lastPosition]);

    return (
        <div className="absolute top-[20px] left-[5%] flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-3xl mb-4">Move Your Mouse</h1>
            <p className="text-xl bg-blue-500 px-4 py-2 rounded-lg duration-500">
                Direction: {direction || "Waiting for movement..."}
            </p>
        </div>
    );
}


// const MouseDirection = () => {
//     return (
//         <div>MouseDirection</div>
//     )
// }
// export default MouseDirection