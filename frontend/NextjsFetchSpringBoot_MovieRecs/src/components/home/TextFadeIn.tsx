'use client';

import Link from "next/link";
import { useEffect, useState } from "react"

const TextFadeIn = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector(".scroll-anim");
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    setVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // animate-text-fade-in animTextScroll
    return (
        <div className={`scroll-anim snowShadow relative w-3/4 h-3/4 flex flex-col items-center justify-center text-center text-contrast gap-y-6 lg:gap-y-8 xl:gap-y-10 before:absolute before:bottom-[-15%] before:left-50% before:w-[65%] before:h-[60%] before:bg-accent before:rounded-full ${visible ? "opacity-100 scale-[100%] translate-y-[0]" : "opacity-0 translate-y-[50%] scale-[25%]"} duration-700`}>
            <p className="mb-5 text-4xl xl:text-6xl underline">
                Movies for Everyone!
            </p>

            <p className={`text-lg lg:text-xl xl:text-2xl `}>
                Finding a Movie has never been easier. Discover a world of cinematic wonders, from timeless classics to the latest blockbusters. Whether you&apos;re in the mood for a late-night thriller, a feel-good comedy, or a hidden indie gem — we&apos;ve got something for every taste.
                Explore personalized recommendations, trending titles, and curated lists that make picking your next movie effortless and fun.
            </p>

            <div className=" z-10">
                <Link href="/movies" className="text-lg lg:text-xl xl:text-2xl py-2 px-3 text-contrast bg-colour border border-contrast rounded-md hover:bg-accent hover:text-colour transition-colors duration-300 ">
                    Explore Movies
                </Link>
            </div>
        </div >
    )
}
export default TextFadeIn