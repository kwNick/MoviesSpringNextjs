'use client';
import { useEffect, useRef } from "react"

const Colours = () => {
    const colour = useRef<HTMLSpanElement[]>([])
    const setRef = (el: HTMLSpanElement | null, idx: number) => {
        if (el && colour.current) colour.current[idx] = el;
    };

    useEffect(() => {
        if (colour.current) {
            colour.current.forEach((colour, idx) => {
                colour.style.top = `${Math.floor(Math.random() * 100)}%`;
                colour.style.left = `${Math.floor(Math.random() * 100)}%`;
                colour.style.width = `${Math.floor(Math.random() * 100)}%`;
                colour.style.height = `${Math.floor(Math.random() * 100)}%`;
                colour.style.backgroundColor = `${idx ? "var(--snow)" : "var(--colour)"}`
            });
        }
    }, [])
    return (
        <>
            {Array.from({ length: 2 }).map((_, idx) => {
                return (
                    <span key={idx} ref={(el) => setRef(el, idx)} className="absolute bg-snow bg-opacity-35 [clip-path:_circle(25%)] duration-300" />
                );
            })}

        </>
    )
}
export default Colours