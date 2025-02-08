import Link from "next/link"
import "./LoginFormAnimations.css"

const page = () => {
    return (
        <div className="  w-full h-[80vh] flex  items-center justify-center gap-y-3 ">
            <div className="group relative overflow-hidden w-full h-[80%] flex flex-col items-center justify-center gap-y-3 lg:gap-y-5 xl:gap-y-7 p-5 lg:p-7 xl:p-9 rounded-lg transition-all duration-300">
                <div>
                    <p className="w-0 underline text-2xl lg:text-3xl xl:text-4xl overflow-hidden animate-typewriter group-has-[.peer:checked]:text-accent group-has-[.peer:checked]:border-r-accent group-has-[.peer:checked]:[text-shadow:_0_0_10px_var(--accent)] transition-all duration-300">Login</p>
                </div>

                <form className="p-2 flex flex-col items-center justify-center text-center gap-y-3 lg:gap-y-5 xl:gap-y-7 transition-all duration-300">

                    {/* Light Post */}
                    <span className="absolute w-[50%] h-2 top-[0%] left-[25%] rounded-lg bg-colour group-has-[.peer:checked]:bg-accent group-has-[.peer:checked]:[box-shadow:0_0_10px_5px_rgba(239,68,68,.5)] transition-all duration-300" />

                    {/* Light */}
                    <span className="absolute w-[77%] h-[100%] top-[8px] opacity-0 [background:_linear-gradient(to_bottom,_rgba(239,_68,_68,_.4)_-50%,_rgba(239,_68,_68,_0)_90%)] [clip-path:_polygon(20%_0,_80%_0,_100%_100%,_0_100%)] group-has-[.peer:checked]:opacity-100 transition-all duration-300" />

                    {/* Toggle Button */}
                    <input type="checkbox" className="peer hidden  " id="input-check" />
                    <label htmlFor="input-check" className="absolute top-[20%] right-[20%] w-[5%] h-[5%] lg:h-[7%] rounded-full bg-colour flex items-center justify-center peer-checked:[text-shadow:_0_0_10px_var(--colour)] peer-checked:translate-y-[75%] peer-checked:bg-accent duration-300 text-lg lg:text-2xl xl:text-3xl">
                        <span className="group-has-[.peer:checked]:hidden text-contrast">off</span>
                        <span className=" hidden group-has-[.peer:checked]:block">on</span>
                    </label>

                    {/* Username input field */}
                    <div className="relative rounded-lg peer-checked:text-accent peer-checked:[box-shadow:0_0_10px_5px_rgba(239,68,68,.5)] transition-all duration-300">
                        <input id="userName" type="text" className="input rounded-lg p-1 text-contrast group-has-[.peer:checked]:text-accent lg:w-72 xl:w-80 transition-all duration-300" required />
                        <label htmlFor="userName" className=" absolute left-[5%] top-[5%] pointer-events-none text-contrast transition-all duration-300">User Name</label>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-1 -right-6 group-has-[.peer:checked]:[filter:_drop-shadow(0_0_5px_var(--accent))] transition-all duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>

                    {/* Password input field */}
                    <div className="relative rounded-lg peer-checked:text-accent peer-checked:[box-shadow:0_0_10px_5px_rgba(239,68,68,.5)] transition-all duration-300">
                        <input id="password" type="text" className="input rounded-lg p-1 text-contrast group-has-[.peer:checked]:text-accent lg:w-72 xl:w-80 transition-all duration-300" required />
                        <label htmlFor="password" className="absolute left-[5%] top-[5%] pointer-events-none text-contrast transition-all duration-300">Password</label>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-1 -right-6 group-has-[.peer:checked]:[filter:_drop-shadow(0_0_5px_var(--accent))] transition-all duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>

                    {/* Remember Me */}
                    <div>
                        <input id="rememberBox" type="checkbox" className="" />
                        <label htmlFor="rememberBox" className="lg:text-lg xl:text-xl group-has-[.peer:checked]:text-accent group-has-[.peer:checked]:[text-shadow:_0_0_10px_var(--accent)] transition-all duration-300">
                            Remember Me
                        </label>
                    </div>

                    {/* Forgot Password */}
                    <Link href={"#"} className="underline text-xs lg:text-base xl:text-lg peer-checked:text-accent peer-checked:[text-shadow:0_0_10px_var(--accent)] transition-all duration-300">
                        Forgot Password?
                    </Link>

                    {/* login button */}
                    <div>
                        <button type="submit" className="border border-colour rounded-lg p-2 lg:px-4 lg:py-3 xl:p-5 xl:py-4 lg:text-lg xl:text-xl group-has-[.peer:checked]:text-accent group-has-[.peer:checked]:border-accent group-has-[.peer:checked]:[box-shadow:0_0_10px_5px_rgba(239,68,68,.5)]">Login</button>
                    </div>

                    {/* Don't have an account - Signup */}
                    <p className="text-xs lg:text-base xl:text-lg peer-checked:text-accent peer-checked:[text-shadow:0_0_10px_var(--accent)] transition-all duration-300">
                        Don&apos;t have an account? <Link href={"/signup"} className="underline">Signup</Link>
                    </p>

                </form >

            </div>

        </div >
    )
}
export default page