import LoginSignup from "./LoginSignup"
import BurgerDropDown from "./BurgerDropDown"
import LoginDropDown from "./LoginDropDown"

import SlidingMarquee from "./SlidingMarquee"
import ThemeToggle from "./ThemeToggle"
import NavList from "./NavList"
import NavHomeButton from "./NavHomeButton"

const Navbar = () => {
    return (
        <nav className="relative min-h-[100px] h-[12vh] w-full flex items-center bg-contrast justify-evenly capitalize text-sm md:text-lg lg:text-xl tracking-wide">
            <div className="translate-y-[4px] translate-x-[-4px]">
                <NavHomeButton />
            </div>

            <ThemeToggle />

            {/* Navigation List Section */}
            <div className="h-2/5 w-2/5 hidden text-contrast md:flex items-center justify-center rounded-lg">
                <NavList />
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