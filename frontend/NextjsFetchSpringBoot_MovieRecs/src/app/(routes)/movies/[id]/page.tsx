import { DeleteMovieButton } from "@/components/movies/DeleteMovieButton";
import ShowMovie from "@/components/movies/ShowMovie";
import UpdateMovieButton from "@/components/movies/update/UpdateMovieButton";
import UpdateMovieFormSkeleton from "@/components/skeletons/UpdateMovieFormSkeleton";
import { FindMovieById } from "@/resources/data";
import { Suspense } from "react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    // console.log(id);

    const movie = await FindMovieById(id, "newmovie");
    return (
        <div className="w-full min-h-[120vh] flex flex-col items-center justify-center py-6 gap-y-8 lg:gap-y-10 xl:gap-y-12 overflow-hidden">
            <div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-center text-accent">
                    {movie.title}<span className="text-base"> ({movie.year})</span>
                </h1>

            </div>
            <Suspense fallback={<UpdateMovieFormSkeleton />}>
                {/* <UpdateMovieForm movie={movie} id={id} /> */}
                <ShowMovie movie={movie} />
            </Suspense>
            {/* <div>
                <Link href={`/movies/${id}/edit-movie`} className="border rounded-lg p-2 duration-500">Edit</Link>
            </div> */}
            <div>
                <UpdateMovieButton id={id} />
            </div>
            <div>
                <DeleteMovieButton id={id} />
            </div>
        </div>
    )
}
