import { NewMovie } from "@/resources/definitions"
import RadioCard from "./RadioCard"
import Link from "next/link"

const RadioCardSection = ({ movies }: { movies: NewMovie[] }) => {
    return (
        <>
            <div className="absolute inset-0 bg-black z-10 opacity-0 animate-bg-fade-out animTextScroll pointer-events-none" />

            <div className="w-4/5 h-full flex flex-nowrap items-center justify-center gap-x-2 overflow-hidden text-center">
                {
                    movies.map((x: NewMovie, idx: number) => {
                        return (
                            <RadioCard key={idx} idx={idx} card={x} />
                        )
                    })
                }
            </div>

            <div className="w-fit h-full flex flex-col items-center justify-center gap-y-5 lg:gap-y-6 text-contrast z-20">
                <h1 className="text-3xl xl:text-5xl 2xl:text-7xl text-center text-colour font-bold mb-4">
                    Most Recent Movies
                </h1>
                <div className=" z-10">
                    <Link href="/movies?query=&sort=year,desc&sort=title,asc" className="text-lg lg:text-xl xl:text-2xl py-2 px-3 text-contrast bg-colour rounded-md hover:bg-accent transition-colors duration-300 ">
                        Recent Movies
                    </Link>
                </div>
            </div>
        </>
    )
}
export default RadioCardSection