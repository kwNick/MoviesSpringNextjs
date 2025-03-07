import { NewMovie } from "@/resources/definitions";
import Image from "next/image";

const RadioCard = ({ idx, card }: { idx: number, card: NewMovie }) => {
    const { title, rated, year, genre, plot, poster } = card;
    return (
        <div className=" group h-full flex flex-nowrap items-center justify-center overflow-hidden">

            <input type="radio" name="card" id={`c${idx}`} className="hidden peer" />
            <label htmlFor={`c${idx}`} className={`relative mx-[10px] w-[100px] h-4/5 overflow-hidden flex items-end border rounded-3xl peer-checked:w-[500px] duration-500 `}  >

                <Image src={poster} width={200} height={500} alt={title} className="absolute inset-0 h-full w-full object-cover" priority />

                <div className="relative h-full w-full flex flex-nowrap">
                    <div className="absolute bottom-0 [margin:_15px] h-[40px] w-[40px] bg-snow rounded-full flex items-center justify-center text-colour">
                        {idx}
                    </div>
                    <div className="w-[400] absolute bottom-[10%] left-[5%] overflow-hidden opacity-0 group-has-[.peer:checked]:opacity-100 group-has-[.peer:checked]:translate-y-[-35%] transition-all duration-500 text-colour text-lg lg:text-2xl xl:text-3xl lg:leading-10 font-bold">
                        <h4>
                            {title}
                        </h4>
                        <p>{rated} {year} {genre}</p>
                        <p>
                            {plot.slice(0, 40)}{plot.length > 40 ? "..." : ""}
                        </p>
                    </div>
                </div>
            </label>
        </div>
    )
}
export default RadioCard