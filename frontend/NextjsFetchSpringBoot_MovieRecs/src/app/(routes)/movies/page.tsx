import { Suspense } from "react";
import SearchMovies from "../../../components/movies/SearchMovies";
import ShowSearchMovies from "../../../components/movies/ShowSearchMovies";
import Pagination from "../../../components/movies/Pagination";
import Link from "next/link";
import SearchMoviesSkeleton from "../../../components/skeletons/SearchMoviesSkeleton";
import "./LinkAnimation.css"

const page = async (
    props: {
        searchParams: Promise<{
            query?: string;
            page?: string;
            sort?: string;
        }>;
    }
) => {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const page = Number(searchParams?.page) || 1;
    let sort = searchParams?.sort || 'imdbrating,desc&sort=title,asc';
    if (Array.isArray(sort)) {
        sort = sort.join('&sort=');
    }
    // console.log("query: ", query);
    // console.log("page: ", page);
    // console.log("sort: ", sort);

    return (
        <div className="relative p-5 w-full h-full flex flex-col items-center gap-y-14 lg:gap-y-16">
            <div className="relative w-[80%] flex items-center justify-center p-5">
                <div className="grow flex items-center justify-center capitalize text-6xl lg:text-8xl text-accent">
                    <p className="underline">
                        Movies
                    </p>
                </div>
                <div className="flex-none absolute right-0">
                    <Link href={"/movies/create"} className="btn">
                        Add Movie
                    </Link>
                </div>
            </div>
            <div className="w-full p-5 flex flex-col items-center pb-10">
                <div className="w-full flex flex-col items-center gap-y-12 lg:gap-y-14 pb-6">
                    <div className=" w-full flex items-center justify-center ">
                        <SearchMovies />
                    </div>
                    <Suspense key={query + page} fallback={<SearchMoviesSkeleton />}>
                        <ShowSearchMovies query={query} page={page} sort={sort} />
                    </Suspense>
                    <Pagination query={query} />
                </div>
            </div>

        </div>
    )
}
export default page