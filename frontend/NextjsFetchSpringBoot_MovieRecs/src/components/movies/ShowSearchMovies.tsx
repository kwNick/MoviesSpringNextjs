import { FindBySearch } from "../../resources/data";
import { NewMovie } from "../../resources/definitions";
import Image from "next/image";
import Pagination from "./Pagination";

//module level or file level, accessible anywhere within this file
//only initilaized once when the file is loaded
const sizes = [[200, 100], [100, 200], [100, 200], [100, 100], [200, 100]];

const ShowSearchMovies = async ({ query, genre, page, size, sort }: { query: string | undefined, genre: string | undefined, page: number, size: number, sort: string }) => {
    function isValidURL(src: string): boolean {
        try {
            new URL(src);
            return true;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            // console.error("Invalid URL:", e);
            return false;
        }
    }

    // const SearchData = await FindByTitleLike("newmovie", query, page, size, sort); //change
    query = !genre ? query : undefined;
    genre = !query ? genre : undefined;
    const SearchData = await FindBySearch(query, genre, page, size, sort);
    const totalElements = SearchData.page.totalElements;
    // console.log("SearchData: " + SearchData);

    return (
        <>
            <div className="w-4/5">
                <div className={`grid grid-cols-3 grid-rows-3 [grid-template-areas:'box-1_box-1_box-2'_'box-3_box-4_box-2'_'box-3_box-5_box-5'] gap-6 lg:gap-8`}>
                    {SearchData?._embedded?.newmovie?.map((m: NewMovie, idx: number) => {

                        const imgPoster = isValidURL(m.poster) ? m.poster : "/pictures/default-cassette.jpg";
                        return (
                            <div key={idx} className={`relative flex items-center justify-center rounded-2xl border-colour text-center [text-shadow:0px_3px_3px_var(--contrast)] `} style={{ gridArea: `box-${idx + 1}` }}>
                                <Image src={imgPoster} alt={m.title} width={sizes[idx][0]} height={sizes[idx][1]} className="absolute rounded-2xl inset-0 w-full h-full object-center object-cover -z-10 [clip-path:circle(50%)] " />
                                <div className="absolute rounded-2xl inset-0 w-full h-full bg-black/40 duration-300 -z-10 " />
                                <div className="flex flex-col p-3 m-3 items-center justify-center gap-y-4">
                                    <div>
                                        <p className="text-lg lg:text-xl xl:text-2xl font-semibold tracking-widest">{m.title}</p>
                                        <p className="text-sm lg:text-base">{m.year.replace("?", "-") + " - " + m.rated} - {m.imdbrating}</p>
                                        <p className="text-sm lg:text-base">{m.genre}</p>
                                        <p className="lg:text-lg xl:text-xl">{m.plot.split(" ").filter((_, idx) => idx < 10).join(" ") + (m.plot.split(" ").length > 9 ? "..." : "")}</p>
                                    </div>
                                    {/* <div className="container flex gap-3 justify-around">
                                    <UpdateMovieButton href={href} />
                                    <DeleteMovieButton href={href} />
                                </div> */}
                                </div>
                            </div>
                        )
                    })}
                </div >
            </div >

            <Pagination size={totalElements} />
        </>
    )
}
export default ShowSearchMovies