import { NewMovie } from "@/resources/definitions";
import Link from "next/link";

const ThreeDCard = ({ movies }: { movies: NewMovie[] }) => {
    return (
        <>
            <div className="absolute inset-0 bg-black z-[-10] opacity-0 animate-bgFadeOut animTextScroll" />

            <div className=" w-3/4 h-3/4 flex items-center justify-center gap-x-8 ">

                <div className="text-center relative w-full h-full flex items-center justify-center rounded-full [box-shadow:0_0_5px_1px_rgba(239,68,68,.3)] overflow-hidden">
                    <div className={`absolute inset-0 rounded-lg [background-image:_url('/pictures/retroTv.jpg')] bg-cover object-contain bg-[50%] z-[-10] before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.5)] before:z-[-10]`} />
                    {/* <Image src={"/pictures/retroTv.jpg"} width={100} height={100} alt={"retroTV background"} className={`absolute w-full h-full inset-0 rounded-lg object-contain z-[-10] before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.4)] before:z-[-10]`} /> */}

                    <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent [text-shadow:0_0_5px_var(--accent),_0_0_1px_var(--colour)]">
                        Top Rated Movies
                    </h2>
                </div>

                <div className="hidden list px-6 h-full w-4/5 sm:flex items-center justify-center gap-x-4 ">
                    {movies.map((x: NewMovie, idx: number) => {
                        const href = x._links.self.href;
                        // console.log(href);
                        const idMatch = href.match(/\/([^\/]+)$/);
                        const id = idMatch ? idMatch[1] : "";
                        // console.log(id);
                        return (
                            <Link href={`/movies/${id}`} key={idx} className=" item w-full h-1/2 px-2 py-1 border rounded-lg border-contrast bg-colour text-contrast transition-all ease-in duration-300 brightness-0 text-xs md:text-sm lg:text-base flex items-center justify-center animate-moviesFadeIn">
                                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                                    <p>{x.title}</p>
                                    <p>{x.rated + " " + x.year}</p>
                                    <p>{x.genre}</p>
                                    <p>{x.plot.split(" ").filter((_, idx) => idx < 15).join(" ")}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </>
    )
}
export default ThreeDCard