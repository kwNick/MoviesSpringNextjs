import { FindBySearch } from "../../resources/data";
import { NewMovie } from "../../resources/definitions";
import Image from "next/image";
import Pagination from "./Pagination";
import Link from "next/link";
import FavButton from "./favorites/FavButton";

//module level or file level, accessible anywhere within this file
//only initilaized once when the file is loaded
const sizes = [[200, 100], [100, 200], [100, 200], [100, 100], [200, 100], [200, 100], [100, 200], [100, 200], [100, 100], [200, 100]];

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
    const SearchData = await FindBySearch(query, genre, page, 10, sort);
    const totalElements = SearchData.page.totalElements;
    // console.log("SearchData: " + SearchData);

    return (
        <>
            <Pagination size={totalElements} />
            <div className="w-full">
                <div className={`grid grid-cols-3 [grid-template-areas:'box-1_box-1_box-2'_'box-3_box-4_box-2'_'box-3_box-5_box-5'_'box-6_box-6_box-7'_'box-8_box-9_box-7'_'box-8_box-10_box-10'] gap-8 lg:gap-10 xl:gap-12`}>
                    {SearchData?._embedded?.newmovie?.map((m: NewMovie, idx: number) => {
                        const imgPoster = isValidURL(m.poster) ? m.poster : "/pictures/default-cassette.jpg";
                        const href = m._links.self.href;
                        // console.log(href);
                        const idMatch = href.match(/\/([^\/]+)$/);
                        const id = idMatch ? idMatch[1] : "";
                        return (
                            <Link href={`/movies/${id}`} key={idx} className={`group relative p-3 flex items-end justify-start rounded-2xl border-colour text-left [text-shadow:0px_3px_3px_var(--contrast)] shadow-md shadow-colour`} style={{ gridArea: `box-${idx + 1}` }}>
                                <Image src={imgPoster} alt={m.title} width={sizes[idx][0]} height={sizes[idx][1]} className="absolute rounded-2xl inset-0 w-full h-full object-center object-cover -z-10" />
                                <div className="absolute rounded-2xl inset-0 w-full h-full bg-black/40 duration-300 -z-10 " />

                                <div className="flex flex-col items-center justify-center gap-y-4">
                                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-contrast -z-10 opacity-0 group-hover:opacity-100 duration-300"/>

                                    <div className="font-bold flex flex-col items-start justify-center gap-y-2 lg:gap-y-4 p-2">
                                        <p className="text-2xl lg:text-3xl xl:text-4xl tracking-widest">{m.title}</p>
                                        <p className="opacity-0 text-sm lg:text-base group-hover:opacity-100 duration-300">
                                            {m.year.replace("?", "-") + " - " + m.rated} - {m.imdbrating}<br/>{m.genre}
                                        </p>
                                        <p className="opacity-0 lg:text-xl xl:text-2xl group-hover:opacity-100 duration-300">
                                            {m.plot.split(" ").filter((_, idx) => idx < 10).join(" ") + (m.plot.split(" ").length > 9 ? "..." : "")}
                                        </p>
                                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                                            <FavButton movie={m} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div >
            </div >

            <Pagination size={totalElements} />
        </>
    )
}
export default ShowSearchMovies