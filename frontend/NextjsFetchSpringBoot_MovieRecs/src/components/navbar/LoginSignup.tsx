'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"

const LoginSignup = () => {
    const pathname = usePathname();
    return (
        <>
            <Link href={"/login"} data-content="LogIn" className={`relative hover:text-accent duration-500 before:absolute before:top-0 before:left-0 before:content-[attr(data-content)] before:text-accent before:w-0 before:border-r-2 before:border-r-colour before:duration-500 hover:before:w-[105%] hover:before:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] before:overflow-hidden ${pathname == '/login' ? "before:w-[105%]" : ""}`}>
                LogIn
            </Link>
            <Link href={"/signup"} data-content="SignUp" className={`relative hover:text-accent duration-500 before:absolute before:top-0 before:left-0 before:content-[attr(data-content)] before:text-accent before:w-0 before:border-r-2 before:border-r-colour before:duration-500 hover:before:w-[105%] hover:before:drop-shadow-md before:overflow-hidden ${pathname == '/signup' ? "before:w-[105%]" : ""}`}>
                SignUp
            </Link>
        </>
    )
}
export default LoginSignup