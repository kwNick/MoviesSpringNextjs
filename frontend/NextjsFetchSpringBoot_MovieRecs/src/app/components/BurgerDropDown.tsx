'use client';
import Link from "next/link";
import { useState } from "react";

const BurgerDropDown = () => {
    const [open, setOpen] = useState(false);
    const burgerClick = () => {
        setOpen(!open);
    };

    return (
        <div className={`relative border-colour border rounded-md p-1 transition-all `} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 hover:text-accent active:text-contrast cursor-pointer ${open && "text-contrast"}`} onClick={burgerClick}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            {/*NEED TO FIX; anytime you click away from the drop down menu it will collapse */}
            <div className={`p-2 gap-y-2 border border-contrast rounded-lg uppercase bg-colour absolute top-[50%] left-[-50%] duration-300  ${open ? "opacity-1 translate-y-[20%]" : "opacity-0 pointer-events-none"}`}>
                <ul className="text-contrast ">
                    <li className="hover:text-accent">
                        <Link href={"/"} onClick={burgerClick}>
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-accent">
                        <Link href={"/movies"} onClick={burgerClick}>
                            Movies
                        </Link>
                    </li>
                    <li className="hover:text-accent">
                        <Link href={"#"} onClick={burgerClick}>
                            GSAP
                        </Link>
                    </li>
                    <li className="hover:text-accent">
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