import { NewMovie } from "@/resources/definitions"
import RadioCard from "./RadioCard"

const RadioCardSection = ({ movies }: { movies: NewMovie[] }) => {
    return (
        <>
            <div className="absolute inset-0 bg-black z-[10] opacity-0 animate-bgFadeOut animTextScroll pointer-events-none" />

            <div className="w-4/5 h-full flex flex-nowrap items-center justify-center overflow-hidden text-center">
                {
                    movies.map((x: NewMovie, idx: number) => {
                        return (
                            <RadioCard key={idx} idx={idx} card={x} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default RadioCardSection