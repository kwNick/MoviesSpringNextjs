'use client';
import { useEffect, useRef } from "react"
const colours = ["var(--snow)", "var(--accent)", "var(--colour)", "var(--pinky)"];

const Colours = () => {
    const colour = useRef<HTMLSpanElement[]>([])
    const setRef = (el: HTMLSpanElement | null, idx: number) => {
        if (el && colour.current) colour.current[idx] = el;
    };

    function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        // console.log(window.screen.width, window.screen.height);
        // console.log(window.innerWidth, window.innerHeight);
        if (colour.current) {
            colour.current.forEach((colour, idx) => {
                const top = Math.abs(Math.floor(Math.random() * 65));
                const height = Math.abs(getRandomInt(10, 28));
                const left = Math.abs(Math.floor(Math.random() * 65));
                const width = Math.abs(Math.floor(Math.random() * 17)) + 10;
                // console.log(top, left, width, height);
                colour.style.top = `${top}vh`;
                colour.style.left = `${left}vw`;
                colour.style.width = `${width}vw`;
                colour.style.height = `${height}vh`;
                colour.style.backgroundColor = `${colours[idx]}`
            });
        }
    }, [])
    return (
        <>
            {Array.from({ length: 4 }).map((_, idx) => {
                return (
                    <span key={idx} ref={(el) => setRef(el, idx)} className="absolute rounded-full duration-300 filter-[blur(100px)] -z-10" />
                );
            })}

        </>
    )
}
export default Colours