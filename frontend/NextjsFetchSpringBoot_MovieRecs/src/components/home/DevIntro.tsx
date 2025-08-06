'use client';
import Link from "next/link";
import { useEffect, useRef } from "react"

const DevIntro = () => {
    const hoverRef = useRef<HTMLSpanElement>(null);
    // console.log("HoverRef " + hoverRef.current);

    const boxRef = useRef<HTMLDivElement>(null);
    // console.log("BoxRef " + boxRef.current);

    useEffect(() => {
        const currentBoxRef = boxRef.current;
        const hover = (e: MouseEvent) => {
            if (hoverRef.current && currentBoxRef) {
                hoverRef.current.style.left = (e.pageX - currentBoxRef.offsetLeft) + "px";
                hoverRef.current.style.top = (e.pageY - currentBoxRef.offsetTop - (currentBoxRef.offsetHeight / 2)) + "px";
            }
        };
        currentBoxRef?.addEventListener("mousemove", hover);
        return () => {
            currentBoxRef?.removeEventListener('mousemove', hover);
        };
    }, []);
    return (
        <div ref={boxRef} className="group relative w-[50vw] min-h-fit text-center">

            <span className="absolute top-[-15%] left-[-10%] [text-shadow:0_0_10px_var(--colour)]">
                Hover to Reveal
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-[-5%] [filter:_drop-shadow(0_0_5px_var(--colour))]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
            </svg>

            <div className="relative text-contrast bg-transparent border border-colour rounded-lg flex flex-col items-center gap-y-7 lg:gap-y-9 xl:gap-y-12 p-5 lg:p-7 xl:p-9 overflow-hidden">

                <span ref={hoverRef} className="absolute w-0 h-0 rounded-full bg-colour [transition-timing-function:_linear] group-hover:w-[200px] group-hover:h-[200px] [transform:_translate(-50%,_-50%)] -z-10 " />
                <section>
                    <p className="text-lg lg:text-xl">
                        Dev:
                        <span className="[text-shadow:0_0_10px_var(--accent)]">
                            Nickolas Piraino
                        </span>
                    </p>
                </section>
                <section className="text-center ">
                    <p className="lg:text-lg">
                        This project is mainly used to practice and showcase my software development skills using nextjs front-end framework, springboot back-end framework as an api layer to connect the movie data stored in a mongo database to the front-end user client. Most animations are created using css or tailwind css.
                    </p>
                </section>

                <div className=" z-10">
                    <Link href="#" className="text-lg lg:text-xl xl:text-2xl py-2 px-3 text-contrast bg-contrast rounded-md hover:[text-shadow:0px_0px_5px_var(--accent)] hover transition-all duration-300 ">
                        Learn More
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default DevIntro