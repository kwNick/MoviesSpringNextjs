'use client';

import { useEffect, useState } from "react"

const TextFadeIn = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector(".scroll-anim");
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
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
    // animate-textFadeIn animTextScroll
    return (
        <div className={`scroll-anim snowShadow relative w-3/4 h-3/4 flex flex-col items-center justify-center text-center gap-y-4 before:absolute before:bottom-[-3%] before:left-50% before:w-[50%] before:h-[50%] before:bg-accent before:rounded-full ${visible ? "opacity-100 scale-[100%] translate-y-[0]" : "opacity-0 translate-y-[50%] scale-[50%]"} duration-700`}>
            <p className="text-4xl xl:text-6xl">Movies for Everyone!</p>
            <p className={`text-lg lg:text-xl xl:text-2xl `}>
                Finding a Movie has never been easier. Whether you&apos;re in the mood for a late-night thriller, a feel-good comedy, or a hidden indie gem — we&apos;ve got something for every taste.
                Explore personalized recommendations, trending titles, and curated lists that make picking your next movie effortless and fun.
            </p>
        </div >
    )
}
export default TextFadeIn