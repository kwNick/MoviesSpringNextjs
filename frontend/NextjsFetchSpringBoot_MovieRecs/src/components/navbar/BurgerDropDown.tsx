'use client';
import Link from "next/link";
import { useState } from "react";

const BurgerDropDown = () => {
    const [open, setOpen] = useState(false);
    const burgerClick = () => {
        setOpen(!open);
    };

    return (
        <div className={`relative border rounded-md duration-300 ${open ? "border-accent" : "border-colour"}`} >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-8 hover:text-accent active:duration-0 active:text-contrast  ${open && "text-accent"} duration-300`} onClick={burgerClick} >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {open && <div className="fixed inset-0 w-[100vw] h-screen bg-colour opacity-50 z-10 duration-300 " onClick={burgerClick} />}
            {/*NEED TO FIX; anytime you click away from the drop down menu it will collapse */}
            <div className={`absolute w-[20vw] h-fit p-2 gap-y-2 border border-contrast rounded-lg uppercase bg-colour top-[50%] left-[calc(50%-10vw)] flex items-center justify-center duration-300  ${open ? "opacity-1 translate-y-[30%] z-20" : "opacity-0 pointer-events-none"}`} >


                <ul className="text-contrast flex flex-col items-center justify-center gap-y-1 text-xl font-bold tracking-widest leading-8 ">
                    <li className="hover:text-accent duration-300">
                        <Link href={"/"} onClick={burgerClick}>
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-accent duration-300">
                        <Link href={"/movies"} onClick={burgerClick}>
                            Movies
                        </Link>
                    </li>
                    <li className="hover:text-accent duration-300">
                        <Link href={"#"} onClick={burgerClick}>
                            GSAP
                        </Link>
                    </li>
                    <li className="hover:text-accent duration-300">
                        <Link href={"#"} onClick={burgerClick}>
                            ShadCN
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default BurgerDropDown