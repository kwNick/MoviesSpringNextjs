'use client';
import { Github, Linkedin } from "lucide-react";
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
        <div ref={boxRef} className="group relative min-w-[50vw] max-w-[70vw] min-h-fit text-center">

            <span className="absolute top-[-45px] left-[-50px] [text-shadow:0_0_10px_var(--colour)]">
                Hover to <br/>Reveal
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-[-25px] filter-[drop-shadow(0_0_5px_var(--colour))]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
            </svg>

            <div className="relative text-contrast bg-transparent border border-colour rounded-lg flex flex-col items-center gap-y-7 lg:gap-y-9 xl:gap-y-12 p-5 lg:p-7 xl:p-9 overflow-hidden">

                <span ref={hoverRef} className="absolute w-0 h-0 rounded-full bg-colour [transition-timing-function:linear] group-hover:w-[200px] group-hover:h-[200px] [transform:translate(-50%,-50%)] -z-10 " />
                <section>
                    <p className="text-lg lg:text-xl">
                        Dev:&#x2800;
                        <span className="[text-shadow:0_0_10px_var(--accent)]">
                            Nickolas Piraino
                        </span>
                    </p>
                </section>
                <section className="text-center w-[75%]">
                    <p className="lg:text-lg">
                        This project is mainly used to practice and showcase my software development skills using nextjs front-end framework, springboot back-end framework as an api layer to connect the movie data stored in a mongo database to the front-end user client. Most animations are created using css or tailwind css.
                    </p>
                </section>

                <Link href={"https://github.com/KwNick"} target={"_blank"} rel="noopener noreferrer" className="absolute left-[10%] top-1/2">
                    <Github className="scale-200 hover:filter-[drop-shadow(_0_0_4px_var(--accent))]" />
                </Link>
                <Link href={"https://www.linkedin.com/in/nick-piraino"} target={"_blank"} rel="noopener noreferrer" className="absolute right-[10%] top-1/2">
                    <Linkedin  className="scale-200 hover:filter-[drop-shadow(_0_0_4px_var(--accent))]" />
                </Link>
                <Link href={"mailto:kwnp17c@gmail.com?subject=MovieRecsContact%20Inquiry&body=Hi%20Nick,"} target={"_blank"} rel="noopener noreferrer" className="absolute right-[20%] top-3/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="scale-200 hover:filter-[drop-shadow(_0_0_4px_var(--accent))] lucide lucide-mail-icon lucide-mail">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                    </svg>
                </Link>
                <Link href={"tel:+1234567890"} target={"_blank"} rel="noopener noreferrer" className="absolute left-[20%] top-3/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="scale-200 hover:filter-[drop-shadow(_0_0_4px_var(--accent))] lucide lucide-phone-icon lucide-phone">
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                    </svg>
                </Link>

                <div className=" z-10">
                    <Link href="/about" className="text-lg lg:text-xl xl:text-2xl py-2 px-3 text-contrast bg-contrast rounded-md [box-shadow:_0px_5px_10px_var(--contrast),_0px_-5px_10px_var(--contrast)] hover:text-colour hover:[text-shadow:0px_0px_5px_var(--accent)] hover transition-all duration-300 ">
                        Learn More
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default DevIntro