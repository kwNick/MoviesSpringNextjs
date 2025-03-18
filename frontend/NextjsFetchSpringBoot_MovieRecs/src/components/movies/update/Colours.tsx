'use client';
import { useEffect, useRef } from "react"
const colours = ["var(--snow)", "var(--accent)", "var(--colour)", "var(--pinky)"];

const Colours = () => {
    const colour = useRef<HTMLSpanElement[]>([])
    const setRef = (el: HTMLSpanElement | null, idx: number) => {
        if (el && colour.current) colour.current[idx] = el;
    };

    useEffect(() => {
        if (colour.current) {
            colour.current.forEach((colour, idx) => {
                const top = Math.abs(Math.floor(Math.random() * 100) - 50);
                const height = Math.abs(Math.floor(Math.random() * 100) - 50 - top);
                const left = Math.abs(Math.floor(Math.random() * 100) - 50);
                const width = Math.abs(Math.floor(Math.random() * 100) - 50 - left);
                colour.style.top = `${top}%`;
                colour.style.left = `${left}%`;
                colour.style.width = `${width}%`;
                colour.style.height = `${height}%`;
                colour.style.backgroundColor = `${colours[idx]}`
            });
        }
    }, [])
    return (
        <>
            {Array.from({ length: 4 }).map((_, idx) => {
                return (
                    <span key={idx} ref={(el) => setRef(el, idx)} className="absolute rounded-full duration-300 [filter:_blur(100px)] -z-10" />
                );
            })}

        </>
    )
}
export default Colours