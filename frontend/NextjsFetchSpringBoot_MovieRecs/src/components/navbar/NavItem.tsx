'use client';
import clsx from "clsx";
import { usePathname } from "next/navigation";

const NavItem = ({ x }: { x: { value: string, href: string } }) => {
    const pathname = usePathname();

    return (
        <>
            {/* <span className="w-full h-[2%] lg:h-[3%] xl:h-[4%] bg-accent absolute bottom-1 left-[100%]  group-hover:translate-x-[-100%] duration-500" /> */}
            {x.value == "Home" && (
                <div className="relative w-full h-full">
                    <div className={clsx(`before:absolute before:inset-0 before:rounded-full before:left-[calc(50%-20px)] before:bg-colour before:w-[40px] before:h-[40px] before:opacity-0 before:duration-500`,
                        {
                            "group-hover:before:translate-y-[-60%] group-hover:before:opacity-100": pathname != x.href,
                            "before:translate-y-[-60%] before:opacity-100": pathname == x.href,
                        }
                    )} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx("size-7 absolute left-[calc(50%-14px)] top-[-10%] duration-500",
                        {
                            "group-hover:translate-y-[-60%] duration-500": pathname != x?.href,
                            "translate-y-[-60%] text-accent duration-500 ": pathname == x?.href,
                        })}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819 " />
                    </svg>
                </div >
            )

            }
            {x.value == "Movies" && (
                <div className="relative w-full h-full">
                    <div className={clsx(`before:absolute before:inset-0 before:rounded-full before:left-[calc(50%-20px)] before:bg-accent before:w-[40px] before:h-[40px] before:opacity-0 before:duration-500 `,
                        {
                            'group-hover:before:translate-y-[-60%] group-hover:before:opacity-100': pathname != x?.href,
                            'before:translate-y-[-60%] before:opacity-100': pathname == x?.href,
                        }
                    )} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx("size-7 absolute left-[calc(50%-14px)] top-[-10%] duration-500",
                        {
                            "group-hover:translate-y-[-60%] duration-500 group-hover:text-contrast": pathname != x?.href,
                            "translate-y-[-60%] duration-500 text-contrast": pathname == x?.href,
                        }
                    )}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                    </svg>
                </div >
            )
            }
            {
                x.value == "Shadcn" && (
                    <div className="relative w-full h-full">
                        <div className={clsx("before:absolute before:inset-0 before:rounded-full before:left-[calc(50%-20px)] before:bg-contrast before:w-[40px] before:h-[40px] before:opacity-0 before:duration-500",
                            {
                                "group-hover:before:translate-y-[-60%] group-hover:before:opacity-100": pathname != x.href,
                                "before:translate-y-[-60%] before:opacity-100 ": pathname == x.href
                            }
                        )} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx("size-7 absolute left-[calc(50%-14px)] top-[-10%] duration-500",
                            {
                                "group-hover:translate-y-[-60%]": pathname != x.href,
                                "translate-y-[-60%]": pathname == x.href
                            }
                        )}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div >
                )
            }
            {
                x.value == "GSAP" && (
                    <div className="relative w-full h-full">
                        <div className={clsx("before:absolute before:inset-0 before:rounded-full before:left-[calc(50%-20px)] before:bg-colour before:w-[40px] before:h-[40px] before:opacity-0 before:duration-500  ",
                            {
                                "group-hover:before:translate-y-[-60%] group-hover:before:opacity-100": pathname != x.href,
                                "before:translate-y-[-60%] before:opacity-100": pathname == x.href
                            }
                        )} />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-7 ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                            </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx("size-7 absolute left-[calc(50%-14px)] top-[-10%] duration-500",
                            {
                                "group-hover:translate-y-[-60%]": pathname != x.href,
                                "translate-y-[-60%]": pathname == x.href
                            }
                        )}>
                            <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
                        </svg>

                    </div >
                )
            }

            {/* {
                x.value == "NavItem" && (
                    <div className="relative w-full h-full">
                        <div className={clsx("before:absolute before:inset-0 before:rounded-full before:left-[-40%] before:bg-colour before:p-5 before:opacity-0 before:duration-500 ",
                            {
                                "group-hover:before:translate-y-[-70%] group-hover:before:opacity-100": pathname != x.href,
                                "before:translate-y-[-70%] before:opacity-100": pathname == x.href
                            }
                        )} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx(" size-7 duration-500",
                            {
                                "group-hover:translate-y-[-75%]": pathname != x.href,
                                "translate-y-[-75%]": pathname == x.href
                            }
                        )}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div >
                )
            } */}

            {/* NavItem name/value - displays when hovered*/}
            <div className={clsx(`absolute opacity-0 `,
                {
                    "group-hover:opacity-100 duration-500 group-hover:translate-y-[30%] group-hover:z-10": pathname != x.href,
                    "opacity-100 duration-500 translate-y-[30%] z-10 text-accent": pathname == x.href,
                }
            )}>
                {x.value}
            </div>
        </>
    )
}
export default NavItem