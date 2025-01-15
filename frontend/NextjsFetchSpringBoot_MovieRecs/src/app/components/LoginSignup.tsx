'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"

const LoginSignup = () => {
    const pathname = usePathname();
    return (
        <>
            <Link href={"/login"} data-content="LogIn" className={`relative before:absolute before:top-0 before:left-0 before:content-[attr(data-content)] before:text-accent before:w-0 before:border-r-2 before:duration-500 hover:before:w-full hover:before:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] before:overflow-hidden ${pathname == '/login' ? "before:w-full" : ""}`}>
                {/* <span className="absolute bottom-0 top-[100%] left-[-5%] h-full w-[2%] bg-red-700 group-hover:translate-y-[-100%] duration-500" /> */}
                LogIn
                {/* <span className="absolute bottom-100 left-[105%] top-[-100%] h-full w-[2%] bg-red-700 group-hover:translate-y-[100%] duration-500" /> */}
            </Link>
            <Link href={"/signup"} data-content="SignUp" className={`relative before:absolute before:top-0 before:left-0 before:content-[attr(data-content)] before:text-accent before:w-0 before:border-r-2 before:duration-500 hover:before:w-full hover:before:drop-shadow-md before:overflow-hidden ${pathname == '/signup' ? "before:w-full" : ""}`}>
                {/* <span className="absolute bottom-0 top-[100%] left-[-5%] h-full w-[2%] bg-red-700 group-hover:translate-y-[-100%] duration-500" /> */}
                SignUp
                {/* <span className="absolute bottom-100 left-[105%] top-[-100%] h-full w-[2%] bg-red-700 group-hover:translate-y-[100%] duration-500" /> */}
            </Link>
        </>
    )
}
export default LoginSignup