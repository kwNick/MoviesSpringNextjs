'use client';
import { useEffect, useRef } from "react";

const Bubble = () => {
    const bub = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // if (!bub.current) return;
        const moveBubble = () => {
            if (bub.current) {
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                // console.log(viewportHeight, viewportWidth);

                const maxX = viewportWidth - bub.current.clientWidth;
                const maxY = viewportHeight - bub.current.clientHeight;
                // console.log(maxX, maxY);

                const randomX = Math.random() * maxX;
                const randomY = Math.random() * maxY;
                // console.log(randomX, randomY);

                bub.current.style.transform = `translate: ${randomX}px, ${randomY}px`;
            }
        };
        const interval = setInterval(moveBubble, 2000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    return (
        <div ref={bub} className="absolute top-[50%] left-[10%] w-[20vw] h-[20vw] rounded-full [zoom:_0.35] [box-shadow:_inset_0_0_25px_rgba(255,255,255,0.25),_0_0_25px_rgba(255,255,255,0.25)] before:absolute before:top-[12%] before:left-[26%] before:w-[17%] before:h-[17%] before:rounded-full before:bg-white before:[filter:_blur(2px)] before:z-10 after:absolute after:top-[30.5%] after:left-[41.5%] after:w-[10%] after:h-[10%] after:rounded-full after:bg-white after:[filter:_blur(2px)] after:z-10 transition-transform duration-[2s]">

            <span className="absolute inset-0 rounded-full border-l-2 border-l-snow [filter:_blur(3px)]" />
            <span className="absolute inset-0 rounded-full border-r-4 border-r-accent [filter:_blur(3px)]" />
            <span className="absolute inset-0 rounded-full border-t-[3px] border-t-[#ffeb3b] [filter:_blur(3px)] rotate-12" />
            <span className="absolute inset-[2%] rounded-full border-t-[1px] border-t-white border-b-[3px] border-b-white [filter:_blur(3px)] -rotate-45" />
            <span className="absolute inset-[2.5%] rounded-full border-l-[3px] border-l-accent border-b-[1px] border-b-[#ffeb3b]/20 [filter:_blur(3px)]" />
            <span className="absolute inset-[3%] rounded-full bg-gradient-to-br from-white/10 to-transparent" />

        </div>
    )
}
export default Bubble