'use client';
import { useEffect, useRef } from "react";

const Clock = () => {
    const hour = useRef<HTMLDivElement>(null);
    const minute = useRef<HTMLDivElement>(null);
    const second = useRef<HTMLDivElement>(null);

    const numbers = useRef<(HTMLDivElement | null)[]>([]);
    const updateClock = () => {
        const now = new Date();
        const h = now.getHours() % 12;
        const m = now.getMinutes();
        const s = now.getSeconds();

        //calculate angles
        const sDeg = (s / 60) * 360
        const mDeg = ((m + (s / 60)) / 60) * 360;
        const hDeg = ((h + (m + (s / 60)) / 60) / 60) * 360;
        if (second.current) {
            second.current.style.transform = `rotate(${sDeg}deg)`;
        }
        if (minute.current) {
            minute.current.style.transform = `rotate(${mDeg}deg)`;
        }
        if (hour.current) {
            hour.current.style.transform = `rotate(${hDeg}deg)`;
        }
    };

    useEffect(() => {
        // console.log(numbers.current);
        // numbers.current.forEach((el, i) => {
        //     if (el) {
        //         const deg = (i + 1) * 30;
        //         el.style.transform = `rotate(${deg}deg)`;
        //     }
        // });

        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);

    }, []);
    return (
        <div className=" w-[20vh] h-[20vh] rounded-full border-colour shadow-inner shadow-colour fixed left-[5%] top-[25%]">
            <div className="relative w-full h-full ">

                <div className=" absolute rounded-full bg-[#ef4444]/70 transparent w-[5%] h-[5%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10" />

                <div ref={hour} className=" absolute w-[2%] h-[20%] bottom-[50%] left-[50%] bg-accent shadow-accent shadow-xl rounded-lg origin-bottom translate-x-[-50%] translate-y-[-50%]" />

                <div ref={minute} className=" absolute w-[1.5%] h-[30%] bottom-[50%] left-[50%] bg-snow shadow-snow shadow-xl rounded-lg origin-bottom translate-x-[-50%] translate-y-[-50%]" />

                <div ref={second} className=" absolute w-[1.2%] h-[35%] bottom-[50%] left-[50%] bg-colour shadow-2xl shadow-colour rounded-lg origin-bottom translate-x-[-50%] translate-y-[-50%]" />

                {
                    Array.from({ length: 12 }).map((_, i) => {
                        return (

                            <div key={i} ref={(el) => { if (el) numbers.current[i] = el; }} style={{ transform: `rotate(${(i + 1) * 30}deg)` }}
                                className="absolute w-full h-full text-center text-accent [text-shadow:0_0_3px_var(--accent)]">
                                <span className="inline-block" style={{ transform: `rotate(${-1 * (i + 1) * 30}deg)` }} >{i + 1}</span>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default Clock