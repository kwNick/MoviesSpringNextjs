'use client';
import { useEffect, useRef } from "react";

const HomeCursor = () => {
    const cursorRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        // if (typeof window !== "undefined") {
        //     console.log("This code runs only in the browser");
        // console.log(cursorRef.current);
        // }
        const cursorMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = (e.pageX - 15) + "px";
                cursorRef.current.style.top = (e.pageY - 15) + "px";
            }
        };
        window.addEventListener("mousemove", cursorMove);

        const cursorClick = () => {
            if (cursorRef.current) {
                cursorRef.current.classList.add("cursor-click");
            }
            setTimeout(() => {
                if (cursorRef.current) {
                    cursorRef.current.classList.remove("cursor-click");
                }
            }, 350);
        };
        window.addEventListener("click", cursorClick);

    }, []);
    return (
        <span ref={cursorRef} className={`pointer-events-none absolute rounded-full w-[30px] h-[30px] border-[2.5px] border-accent z-30 mix-blend-difference transition-transform [transition-timing-function:_ease-out] before:absolute before:border before:rounded-full before:border-colour before:w-[10px] before:h-[10px] before:top-[calc(50%-5px)] before:left-[calc(50%-5px)] before:[box-shadow:_0px_0px_5px_var(--colour)]`} />
    )
}
export default HomeCursor