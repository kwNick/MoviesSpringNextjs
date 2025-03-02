import { navItems } from "../../resources/navItems"
import FooterNavItem from "./FooterNavItem"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="footBlur relative w-full h-[10vh] border-t-2 border-accent flex items-center text-sm lg:text-base xl:text-lg justify-around bg-colour text-contrast">
            <div className="absolute bottom-[1%] left-[1%] text-sm">
                <p>Movie data provided by <Link href="https://www.omdbapi.com/" target="_blank">OMDb API</Link>.</p>
            </div>
            <div className="flex flex-col">
                <p>More than a Movie!</p>
                <p className="text-xs xg:text-sm ">© 2025</p>
            </div>
            <div className="">
                <ul className="underline flex gap-x-2">
                    {navItems.map((x, idx) => (
                        <Link key={idx} href={x.href}>
                            <FooterNavItem x={x} />
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default Footer