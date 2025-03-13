import UpdateMovieForm from "@/components/movies/UpdateMovieForm";
import UpdateMovieFormSkeleton from "@/components/skeletons/UpdateMovieFormSkeleton";
import { FindMovieById } from "@/resources/data";
import { Suspense } from "react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    // console.log(id);
    const col = "newmovie";
    const movie = await FindMovieById(id, col);
    return (
        <div className="w-full min-h-[78vh] flex flex-col items-center justify-center pt-8">
            <Suspense fallback={<UpdateMovieFormSkeleton />}>
                <UpdateMovieForm movie={movie} id={id} />
            </Suspense>
        </div>
    )
}
