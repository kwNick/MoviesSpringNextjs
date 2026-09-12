import Link from "next/link"

const NavHomeButton = () => {
  return (
    <Link href={"/"} className="group block w-fit h-full bg-contrast text-contrast border rounded-lg border-colour ">
        <span className="block bg-colour p-1 px-2 translate-y-[-2px] rounded-lg shadow-xs duration-300 hover:translate-y-[-10%] group-active:translate-y-0 hover:shadow-colour border border-contrast">
            Movies
        </span>
    </Link>
  )
}
export default NavHomeButton