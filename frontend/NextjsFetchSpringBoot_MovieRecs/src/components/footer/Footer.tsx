import { navItems } from "../../resources/navItems"
import FooterNavItem from "./FooterNavItem"
import Link from "next/link"

const Footer = () => {
    return (
        // 
        <div className="relative p-5 py-8 w-full h-full flex items-center justify-between text-sm lg:text-base xl:text-lg bg-colour text-contrast">
            <div className="absolute bottom-[1%] left-[1%] text-sm">
                <p>Movie data provided by <Link href="https://www.omdbapi.com/" target="_blank">OMDb API</Link>.</p>
            </div>
            <div className="flex gap-x-4">
                <Link href={"/"} className="group block w-content h-full bg-contrast text-contrast border rounded-lg border-colour ">
                    <span className="block bg-colour p-1 translate-y-[-2px] rounded-lg shadow-sm duration-300 hover:translate-y-[-10%] group-active:translate-y-0 hover:shadow-colour">
                        Movies
                    </span>
                </Link>
                <div className="flex flex-col">
                    <p>More than a Movie!</p>
                    <p className="text-xs xg:text-sm ">© 2025</p>
                </div>
            </div>

            <div className="hidden w-1/4 md:block">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione iste adipisci quae repudiandae illo ullam, recusandae nihil necessitatibus harum reprehenderit reiciendis dolores dolorem optio dolore aliquam voluptatibus sequi eos libero consequatur quisquam vero totam.</p>
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