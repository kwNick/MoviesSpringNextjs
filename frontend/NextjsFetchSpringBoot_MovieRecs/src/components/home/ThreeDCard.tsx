import { NewMovie } from "@/resources/definitions";
import Link from "next/link";
import Image from "next/image";
import FavButton from "../movies/favorites/FavButton";

const ThreeDCard = ({ movies }: { movies: NewMovie[] }) => {
    return (
        <>
            <div className="absolute inset-0 bg-black z-10 opacity-0 animate-bg-fade-out animTextScroll pointer-events-none" />

            <div className=" w-full h-[90%] flex items-center justify-center gap-x-8 ">



                <div className="mr-[calc(-50vw-50%)] grow-[1_0_auto] text-center relative w-full h-full flex items-center justify-center rounded-full [box-shadow:0_0_5px_1px_rgba(239,68,68,.3)] overflow-hidden">
                    <div className={` absolute inset-0 w-full h-full rounded-lg bg-[url('/pictures/retroTv.jpg')] bg-cover object-contain bg-position-[50%] `} />

                    <div className="absolute top-[9%] left-[20%] z-10">
                        <Link href="/movies?" className="text-lg lg:text-xl xl:text-2xl py-2 px-3 text-contrast bg-colour rounded-md hover:bg-accent transition-colors duration-300 ">
                            Top Rated Movies
                        </Link>
                    </div>

                    {/* <Image src={"/pictures/retroTv.jpg"} width={100} height={300} alt={"retroTV background"} className={`absolute w-full h-full rounded-lg object-cover bg-cover z-[-10] before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.5)] before:z-[-10]`} /> */}

                    <h2 className="absolute top-[6%] font-semibold tracking-widest text-4xl lg:text-5xl xl:text-6xl text-accent [text-shadow:0_0_5px_var(--accent),0_0_1px_var(--colour),0px_5px_10px_var(--contrast)]">
                        Top Rated Movies
                    </h2>

                </div>

                <div className="grow-[4_1_auto] hidden list px-6 h-[90%] w-full sm:flex items-end justify-center gap-x-4 lg:gap-x-8 xl:gap-x-10 ">
                    {movies.map((x: NewMovie, idx: number) => {
                        const href = x._links.self.href;
                        // console.log(href);
                        const idMatch = href.match(/\/([^\/]+)$/);
                        const id = idMatch ? idMatch[1] : "";
                        // console.log(id);
                        return (
                            <Link href={`/movies/${id}`} key={idx} className=" item w-full h-4/5 px-2 py-1 border rounded-lg border-contrast bg-colour text-colour transition-all ease-in duration-300 brightness-0 text-xs md:text-sm lg:text-base flex items-center justify-center animate-movies-fade-in">
                                <div className="p-1 w-full h-full flex flex-col items-start justify-center gap-y-4 lg:gap-y-5 text-start text-wrap rounded-lg [text-shadow:0px_5px_10px_var(--contrast)] before:absolute before:inset-0 before:bg-[rgba(0,0,0,0.3)] before:z-[-10] before:rounded-lg">
                                    <Image src={x.poster} width={200} height={500} alt={x.title} className="absolute inset-0 h-full w-full object-cover bg-cover bg-position-[50%_50%] z-[-20] rounded-lg " priority />
                                    <div className="flex flex-col gap-y-2">
                                        <h1 className="text-xl lg:text-3xl xl:text-5xl">{x.title}</h1>
                                        <div>
                                            <p>{x.rated + " " + x.year}</p>
                                            <p>{x.genre}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <FavButton movie={x} />
                                    </div>

                                    {/* <p>{x.plot.split(" ").filter((_, idx) => idx < 15).join(" ")}</p> */}
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