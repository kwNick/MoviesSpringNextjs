import UpdateMovieForm from "@/components/movies/update/UpdateMovieForm"
import UpdateMovieFormSkeleton from "@/components/skeletons/UpdateMovieFormSkeleton"
import { FindMovieById } from "@/resources/data";
import { Suspense } from "react"

const page = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    const id = params.id;
    // console.log(id);

    const movie = await FindMovieById(id, "newmovie");
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-6 overflow-hidden">
            <Suspense fallback={<UpdateMovieFormSkeleton />}>
                <UpdateMovieForm movie={movie} id={id} />
            </Suspense>
        </div>
    )
}
export default page