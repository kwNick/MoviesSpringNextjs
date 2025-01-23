'use client';
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
                hoverRef.current.style.top = (e.pageY - currentBoxRef.offsetTop) + "px";
            }
        };
        currentBoxRef?.addEventListener("mousemove", hover);
        return () => {
            currentBoxRef?.removeEventListener('mousemove', hover);
        };
    }, []);
    return (
        <div ref={boxRef} className="group relative w-[50vw] min-h-fit text-contrast bg-transparent border border-colour rounded-lg flex flex-col items-center gap-y-3 p-2 lg:p-3 xl:p-4  overflow-hidden">
            <span ref={hoverRef} className="absolute w-0 h-0 rounded-full bg-colour [transition-timing-function:_ease] group-hover:w-[100px] group-hover:h-[100px] [transform:_translate(-50%,_-50%)] -z-10" />
            <section>
                <p className="text-lg lg:text-xl">
                    <span>Dev:</span> Nickolas Piraino
                </p>
            </section>
            <section className="text-center ">
                <p className="lg:text-lg">
                    This project is mainly used to practice and showcase my software development skills using nextjs front-end framework, springboot back-end framework as an api layer to connect the movie data stored in a mongo database to the front-end user client. Most animations are created using css or tailwind css.
                </p>
            </section>
        </div>
    )
}
export default DevIntro