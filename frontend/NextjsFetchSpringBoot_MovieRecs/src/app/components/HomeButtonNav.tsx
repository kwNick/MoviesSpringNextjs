import Link from "next/link"
// import { useEffect } from "react"

const HomeButtonNav = () => {
    // useEffect(() => {
    //     const myRef = document.querySelectorAll(".group");
    //     myRef.forEach((ref) => {
    //         ref.addEventListener('mousemove', (e: MouseEvent) => {
    //             const x = e.pageX;
    //             const y = e.pageY;

    //             ref.style.setProperty('--x', x + 'px');
    //             ref.style.setProperty('--y', y + 'px');
    //         })
    //     });
    // }, []);
    return (
        <div className="w-1/12 text-center  p-1">
            <Link href={"/"} className="group relative block w-full h-full bg-slate-700 text-white px-4 py-3 rounded-lg hover:text-red-500 hover:shadow-red-500 
                 before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-home-radial before:opacity-1 hover:before:opacity-1 after:absolute after:inset-[-3px] after:bg-slate-700 after:bg-opacity-35 after:rounded-lg after:-z-10">
                <span className="w-full h-[2%] lg:h-[4%] xl:h-[5%] bg-red-500 absolute bottom-0 left-[-103%] group-hover:translate-x-[103%] duration-500" />
                Movies
            </Link>
        </div>
    )
}
export default HomeButtonNav