import { NewMovie } from "@/resources/definitions";
import Link from "next/link";

const CardRevealSection = ({ movies }: { movies: NewMovie[] }) => {
    return (
        <>
            <div className="absolute inset-0 bg-black z-[10] opacity-0 animate-bgFadeOut animTextScroll pointer-events-none" />

            <div className=" h-3/4 w-[90%] flex items-center justify-center gap-x-8">

                <div className="hidden text-center relative w-2/5 h-1/2 lg:flex items-center justify-center rounded-lg shadow-accent [box-shadow:0_0_5px_1px_rgba(239,68,68,.3)] overflow-hidden">
                    <div className={`absolute inset-0 rounded-lg [background-image:_url('/pictures/camera.jpg')] bg-cover object-contain bg-[50%] z-[-10] before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.5)] before:z-[-10]`} />

                    <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent [text-shadow:0_0_5px_var(--accent),_0_0_1px_var(--colour)]">
                        Top Rated Movies
                    </h2>
                </div>
                {/* <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent text-center">Top Rated Movies</h2> */}
                <div className="w-full h-full flex items-center gap-x-4">
                    {movies.map((x: NewMovie, idx: number) => {
                        const href = x._links.self.href;
                        const idMatch = href.match(/\/([^\/]+)$/);
                        const id = idMatch ? idMatch[1] : "";
                        // console.log(id);
                        return (
                            <Link href={`/movies/${id}`} key={idx} className="group relative w-full h-1/2 border rounded-lg border-contrast bg-colour text-contrast overflow-hidden text-xs md:text-sm lg:text-base duration-500 hover:h-3/5 animate-moviesFadeIn">

                                <div className="rounded-lg w-full h-4/5 block" >
                                    <div className={`rounded-lg bg-contrast w-full h-full [background-image:_url('/pictures/moviePic.jpg')] bg-cover bg-[100%] [filter:_blur(1px)] group-hover:[filter:_none] duration-300 before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.4)] before:z-[-10] group-hover:before:bg-[rgb(0,0,0,0.0)] before:transition-all before:duration-300`} />
                                </div>

                                <div className="p-2 w-full h-2/4 flex flex-col items-center justify-start rounded-lg bg-colour text-center group-hover:-translate-y-[100%] duration-500 ">
                                    <div className="w-full h-fit text-wrap ">
                                        <p>{x.title}</p>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 duration-500 text-wrap">
                                        <p>{x.rated + " " + x.year}</p>
                                        <p>{x.genre}</p>
                                        <p>{x.plot.split(" ").filter((x, idx) => idx < 15).join(" ") + "..."}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default CardRevealSection