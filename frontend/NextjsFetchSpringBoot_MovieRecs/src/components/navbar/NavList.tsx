import Link from "next/link"
import { navItems } from "../../resources/navItems"
import NavItem from "./NavItem"

const NavList = () => {
  return (
    <ul className="p-1 w-full h-full flex items-center justify-around gap-x-2 bg-colour rounded-lg border-l-2 border-b-2 border-accent">
        {navItems.map((x, idx) => (
            <Link key={idx} href={x.href} className="w-3/5 h-full group hover:text-accent flex items-center justify-center">
                <li className="w-full h-full flex items-center justify-center">
                    <NavItem x={x} />
                </li>
            </Link>
        ))}
    </ul>
  )
}
export default NavList