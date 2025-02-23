import { navItems } from "../../resources/navItems"
import FooterNavItem from "./FooterNavItem"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="footBlur relative hidden w-full h-[10vh] border-t-2 border-accent md:flex items-center text-sm lg:text-base xl:text-lg justify-around bg-colour text-contrast">
            <div className="flex flex-col">
                <p>More than a Movie!</p>
                <p className="text-xs xg:text-sm ">© 2024</p>
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