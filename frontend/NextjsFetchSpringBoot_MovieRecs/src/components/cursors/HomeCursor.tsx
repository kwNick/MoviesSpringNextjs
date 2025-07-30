'use client';
import { useEffect } from "react";

const HomeCursor = () => {
    // const cursorRef = useRef<HTMLSpanElement>(null);
    // useEffect(() => {
    //     // if (typeof window !== "undefined") {
    //     //     console.log("This code runs only in the browser");
    //     // console.log(cursorRef.current);
    //     // }
    //     const cursorMove = (e: MouseEvent) => {
    //         if (cursorRef.current) {
    //             cursorRef.current.style.left = (e.pageX - 15) + "px";
    //             cursorRef.current.style.top = (e.pageY - 15) + "px";
    //         }
    //     };
    //     window.addEventListener("mousemove", cursorMove);

    //     const cursorClick = () => {
    //         if (cursorRef.current) {
    //             cursorRef.current.classList.add("cursor-click");
    //         }
    //         setTimeout(() => {
    //             if (cursorRef.current) {
    //                 cursorRef.current.classList.remove("cursor-click");
    //             }
    //         }, 400);
    //     };
    //     window.addEventListener("click", cursorClick);
    //     return () => {
    //         window.removeEventListener('click', cursorClick);
    //         window.removeEventListener('mousemove', cursorMove);
    //     };
    // }, []);

    useEffect(() => {
        const hCursor = document.createElement("div");
        hCursor.className = "home-cursor";
        document.body.appendChild(hCursor);

        const mouseMove = (event: MouseEvent) => {
            hCursor.style.left = `${event.pageX - 15}px`;
            hCursor.style.top = `${event.pageY - 15}px`;
        };
        window.addEventListener("mousemove", mouseMove);

        const cursorClick = () => {
            hCursor.classList.add("cursor-click");
            setTimeout(() => {
                hCursor.classList.remove("cursor-click");
            }, 400);
        };
        window.addEventListener("click", cursorClick);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("click", cursorClick);
            document.body.removeChild(hCursor);
        };
    }, []);

    return (
        // <span ref={cursorRef} className={`pointer-events-none absolute rounded-full w-[30px] h-[30px] border-[2.5px] border-accent z-30 mix-blend-difference transition-transform [transition-timing-function:_ease-out] before:absolute before:border before:rounded-full before:border-colour before:w-[10px] before:h-[10px] before:top-[calc(50%-5px)] before:left-[calc(50%-5px)] before:[box-shadow:_0px_0px_5px_var(--colour)]`} />
        <>
            <style>{`
            .home-cursor {
            pointer-events: none;
            position: absolute;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            border: 2.5px solid var(--accent);
            z-index: 30;
            mix-blend-mode: difference;
            transition: transform 0.2s ease-out;

            display: flex;
            align-items: center;
            justify-content: center;
            }
            .home-cursor:before {
            content: "";
            border: 1px solid var(--colour);
            border-radius: 50%;
            width: 10px;
            height: 10px;

            box-shadow: 0px 0px 5px var(--colour);
          `}</style>
        </>
    )
}
export default HomeCursor