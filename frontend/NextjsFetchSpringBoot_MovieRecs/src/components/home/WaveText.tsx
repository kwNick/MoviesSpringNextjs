"use client";

import { useRef } from "react";

export default function WaveText() {
    const textRef = useRef<HTMLSpanElement[]>([]);

    const handleMouseEnter = (index: number) => {
        if (textRef.current[index]) {
            textRef.current[index].style.transform = `translateY(${Math.sin(index + 1) * 10}px)`;
        }
    };

    const handleMouseLeave = (index: number) => {
        if (textRef.current[index]) {
            textRef.current[index].style.transform = "translateY(0)";
        }
    };

    const text = "Hover Me!";

    return (
        <div className="w-3/5 h-4/5 text-4xl font-bold flex items-center justify-center">
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    ref={(el) => { textRef.current[index] = el!; }} //makes a reference to each individual character
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className="inline-block transition-transform duration-300"
                >
                    {char}
                </span>
            ))}
        </div>
    );
}
