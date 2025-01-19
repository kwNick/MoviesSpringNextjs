import Link from "next/link"
import NavItem from "./NavItem"
import LoginSignup from "./LoginSignup"
import BurgerDropDown from "./BurgerDropDown"
import LoginDropDown from "./LoginDropDown"
import { navItems } from "../resources/navItems"
import SlidingMarquee from "./SlidingMarquee"

const Navbar = () => {
    return (
        // use h-[vh] values for navbar responsivness height
        <nav className="relative min-h-20 lg:min-h-24 xl:min-h-28 w-full p-2 flex items-center justify-between capitalize text-sm md:text-lg lg:text-xl tracking-wide  overflow-hidden">
            <div className=" w-1/10 p-1">
                <Link href={"/"} className="group block w-content h-full bg-contrast text-contrast border rounded-lg border-colour ">
                    <span className="block bg-colour p-1 translate-y-[-2px] rounded-lg shadow-sm duration-300 hover:translate-y-[-10%]  group-active:translate-y-0 hover:shadow-colour">
                        Movies
                    </span>
                </Link>
            </div>

            {/* Navigation List Section */}
            <div className="w-2/5 hidden text-contrast sm:flex ">
                <ul className="p-1 w-full flex justify-around gap-x-2 bg-colour rounded-lg">
                    {navItems.map((x, idx) => (
                        <Link key={idx} href={x.href} className="w-3/5 group hover:text-accent">
                            <li className="flex items-center justify-center">
                                <NavItem x={x} />
                            </li>
                        </Link>
                    ))
                    }
                </ul>
            </div>

            <div className="w-1/3 flex items-center justify-center sm:hidden">
                <BurgerDropDown />
            </div>

            {/* Login/Signup Section */}
            <div className="w-1/6 sm:flex items-center justify-around overflow-hidden hidden">
                <LoginSignup />
            </div>

            <div className="w-1/6 flex items-center justify-center sm:hidden">
                <LoginDropDown />
            </div>

            <SlidingMarquee />
        </nav >
    )
}
export default Navbar