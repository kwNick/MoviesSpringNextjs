"use client";

import { useState } from "react";
import clsx from "clsx";

export default function MouseTransformClsx() {
    const [transformStyle, setTransformStyle] = useState("rotate-0");

    const handleMouseMove = (event: React.MouseEvent) => {
        const rotateDegree = (event.clientX % 360) * 0.5; // Example dynamic value
        setTransformStyle(`rotate-${rotateDegree}`);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className={clsx(
                "transition-transform duration-500", // Smooth transform transition
                transformStyle // Apply dynamic transform from state
            )}
            style={{
                width: "200px",
                height: "200px",
                backgroundColor: "teal",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
        >

            <span className="text-xs text-center"><span className="text-base">Move your mouse!</span><br />Clsx to do event driven css transformations</span>
        </div>
    );
}
