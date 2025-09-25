import Link from "next/link"
import NavItem from "./NavItem"
import LoginSignup from "./LoginSignup"
import BurgerDropDown from "./BurgerDropDown"
import LoginDropDown from "./LoginDropDown"
import { navItems } from "../../resources/navItems"
import SlidingMarquee from "./SlidingMarquee"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
    return (
        <nav className="relative min-h-[100px] h-[12vh] w-full flex items-center bg-contrast justify-evenly capitalize text-sm md:text-lg lg:text-xl tracking-wide">
            <div className="translate-y-[4px] translate-x-[-4px]">
                <Link href={"/"} className="group block w-fit h-full bg-contrast text-contrast border rounded-lg border-colour ">
                    <span className="block bg-colour p-1 px-2 translate-y-[-2px] rounded-lg shadow-xs duration-300 hover:translate-y-[-10%] group-active:translate-y-0 hover:shadow-colour border border-contrast">
                        Movies
                    </span>
                </Link>
            </div>

            <ThemeToggle />

            {/* Navigation List Section */}
            <div className="h-2/5 w-2/5 hidden text-contrast md:flex items-center justify-center rounded-lg">
                <ul className="p-1 w-full h-full flex items-center justify-around gap-x-2 bg-colour rounded-lg border-l-2 border-b-2 border-accent">
                    {navItems.map((x, idx) => (
                        <Link key={idx} href={x.href} className="w-3/5 h-full group hover:text-accent flex items-center justify-center">
                            <li className="w-full h-full flex items-center justify-center">
                                <NavItem x={x} />
                            </li>
                        </Link>
                    ))
                    }
                </ul>
            </div>

            <div className="w-1/3 flex items-center justify-center md:hidden">
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