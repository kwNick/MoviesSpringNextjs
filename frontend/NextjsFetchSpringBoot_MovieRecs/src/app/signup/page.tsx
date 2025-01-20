import Link from "next/link"
import "../login/LoginFormAnimations.css"

const page = () => {
    return (
        <div className="w-full h-[90vh] flex flex-col items-center justify-center">
            <div>
                <p className="w-0 underline text-2xl lg:text-3xl xl:text-4xl overflow-hidden animate-typewriter">Signup</p>
            </div>

            <form className="p-2 flex flex-col items-center justify-center text-center gap-y-3 lg:gap-y-5 xl:gap-y-7">
                <div className="relative">

                    <input id="email" type="text" className="input rounded-lg p-1 text-contrast lg:w-72 xl:w-80" required />
                    <label htmlFor="email" className=" absolute left-[5%] top-[5%] pointer-events-none transition-all text-contrast duration-300 ">Email</label>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-1 -right-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>

                <div className="relative">

                    <input id="userName" type="text" className="input rounded-lg p-1 text-contrast lg:w-72 xl:w-80" required />
                    <label htmlFor="userName" className=" absolute left-[5%] top-[5%] pointer-events-none transition-all text-contrast duration-300 ">User Name</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-1 -right-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>

                <div className="relative">

                    <input id="password" type="text" className="input rounded-lg p-1 text-contrast  lg:w-72 xl:w-80" required />
                    <label htmlFor="password" className="absolute left-[5%] top-[5%] pointer-events-none transition-all text-contrast duration-300">Password</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-1 -right-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                </div>
                <div>
                    <button type="submit" className="border rounded-lg p-2 lg:px-4 lg:py-3 xl:p-5 xl:py-4 lg:text-lg xl:text-xl">Signup</button>
                </div>
                <p className="text-xs lg:text-base xl:text-lg">
                    Already have an account? <Link href={"/login"} className="underline">Login</Link>
                </p>
            </form >

        </div >
    )
}
export default page