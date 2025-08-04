'use client';
import { useEffect, useRef } from "react";

const Bubble = ({ t, l, w, h }: { t: number, l: number, w: number, h: number }) => {
    const bub = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // if (!bub.current) return;
        const moveBubble = () => {
            if (bub.current) {
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                // console.log(viewportHeight, viewportWidth);

                const maxX = (viewportWidth - bub.current.clientWidth) * .75;
                const maxY = (viewportHeight - bub.current.clientHeight) * .75;
                // console.log(maxX, maxY);

                //Math.abs(Math.floor(Math.random() * 65));
                let randomX = Math.abs(Math.floor(Math.random() * maxX / 2));
                if (randomX + ((l / 100) * viewportWidth) + ((w / 100) * viewportWidth) > maxX) {
                    while (randomX > maxX) {
                        randomX = Math.abs(Math.floor(Math.random() * maxX / 2));
                    }
                }

                let randomY = Math.abs(Math.floor(Math.random() * maxY / 2));
                if (randomY + ((t / 100) * viewportHeight) + ((h / 100) * viewportHeight) > maxY) {
                    while (randomY > maxY) {
                        randomY = Math.abs(Math.floor(Math.random() * maxY / 2));
                    }
                }
                // console.log(randomX, randomY);

                bub.current.style.transform = `translate( ${randomX}px, ${randomY}px)`;
            }
        };
        const timeDelay = Math.abs(Math.floor(Math.random() * 2001) + 1000);
        const interval = setInterval(moveBubble, timeDelay);

        return () => clearInterval(interval); // Cleanup on unmount
    },);
    return (
        <div ref={bub} className={`absolute rounded-full pointer-events-none -z-10 [zoom:_0.35] [box-shadow:_inset_0_0_25px_rgba(255,255,255,0.25),_0_0_25px_rgba(255,255,255,0.25)] before:absolute before:top-[12%] before:left-[26%] before:w-[17%] before:h-[17%] before:rounded-full before:bg-white before:[filter:_blur(2px)] before:z-10 after:absolute after:top-[30.5%] after:left-[41.5%] after:w-[10%] after:h-[10%] after:rounded-full after:bg-white after:[filter:_blur(2px)] after:z-10 transition-transform ease-in-out duration-[2.5s]`} style={{ top: `${t}%`, left: `${l}%`, width: `${w}vw`, height: `${h}vw` }}>

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