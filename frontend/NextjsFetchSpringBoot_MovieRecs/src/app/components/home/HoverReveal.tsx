'use client';
import { useEffect, useRef } from "react"

const HoverReveal = () => {
    const hoverRef = useRef<HTMLSpanElement>(null);
    console.log("HoverReveal " + hoverRef.current);
    useEffect(() => {
        const hover = (e: MouseEvent) => {
            if (hoverRef.current) {
                hoverRef.current.style.left = (e.pageX - 50) + "px";
                hoverRef.current.style.top = (e.pageY - 50) + "px";
            }
        };
        window.addEventListener("mousemove", hover);
    }, []);
    return (
        <span ref={hoverRef} className="absolute w-0 h-0 rounded-full bg-colour duration-300 group-hover:w-[100px] group-hover:h-[100px]" />
    )
}
export default HoverReveal