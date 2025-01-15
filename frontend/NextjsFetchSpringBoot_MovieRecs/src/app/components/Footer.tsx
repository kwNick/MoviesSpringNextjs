// import Link from "next/link"
import { navItems } from "../resources/navItems"
import FooterNavItem from "./FooterNavItem"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="footBlur relative w-full h-[10vh] border-t-2 border-accent flex items-center text-sm justify-around bg-colour text-contrast">
            <div className="flex flex-col">
                <p>More than a Movie!</p>
                <p className="text-xs">© 2024</p>
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