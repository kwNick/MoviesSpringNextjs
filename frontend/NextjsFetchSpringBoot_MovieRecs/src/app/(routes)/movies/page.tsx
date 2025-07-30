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
        }>;
    }
) => {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const page = Number(searchParams?.page) || 1;

    return (
        <div className="relative p-5 w-full h-[5000px] flex flex-col items-center gap-y-2">
            <div className="relative w-[80%] flex items-center justify-center p-5">
                <div className="grow flex items-center justify-center capitalize text-6xl text-accent">
                    <p className="">
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
                <div className="w-full flex flex-col items-center gap-y-12 pb-6">
                    <div className=" w-full flex items-center justify-center ">
                        <SearchMovies />

                    </div>
                    <Suspense key={query + page} fallback={<SearchMoviesSkeleton />}>
                        <ShowSearchMovies query={query} page={page} />
                    </Suspense>
                    <Pagination query={query} />
                </div>
            </div>

        </div>
    )
}
export default page