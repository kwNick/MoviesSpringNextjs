'use client';
import { useEffect, useRef } from "react";

const Clock = () => {
    const hour = useRef<HTMLDivElement>(null)
    const minute = useRef<HTMLDivElement>(null)
    const second = useRef<HTMLDivElement>(null)
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
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);

    }, []);
    return (
        <div className="clock w-[20vh] h-[20vh] rounded-full border-colour shadow-lg shadow-colour fixed left-[5%] top-[25%]">
            <div className="relative w-full h-full ">

                <div className=" absolute rounded-full  bg-accent border border-accent w-[8%] h-[8%] top-[50%] left-[50%] shadow-xl shadow-accent translate-x-[-50%] translate-y-[-50%] " />

                <div ref={hour} className=" absolute w-[3%] h-[20%] bottom-[50%] left-[calc(50%-1.5%)] bg-accent shadow-accent shadow-xl rounded-lg origin-bottom duration-100" />

                <div ref={minute} className=" absolute w-[2.5%] h-[30%] bottom-[50%] left-[calc(50%-1.25%)] bg-snow shadow-accent shadow-xl rounded-lg origin-bottom duration-100" />

                <div ref={second} className=" absolute w-[2%] h-[35%] bottom-[50%] left-[calc(50%-1%)] bg-colour shadow-accent shadow-xl rounded-lg origin-bottom duration-100" />

            </div>
        </div>
    )
}
export default Clock