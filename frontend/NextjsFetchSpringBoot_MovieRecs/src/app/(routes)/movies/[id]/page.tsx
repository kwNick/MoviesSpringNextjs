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

            {/* <div className="p-2 w-full h-full flex flex-col items-center justify-center">
                <div className="w-[50%] h-full flex flex-col items-center justify-center gap-y-3">
                    <div className="text-3xl lg:text-4xl xl:text-6xl font-bold text-colour">
                        <p>Edit Movie page!</p>
                    </div>
                    <div className="w-full h-full border-2 border-colour rounded-lg text-lg lg:text-xl xl:text-2xl flex flex-col items-center justify-center gap-y-3"> */}
            <Suspense fallback={<UpdateMovieFormSkeleton />}>
                <UpdateMovieForm movie={movie} id={id} />
            </Suspense>
            {/* </div>
                </div >
            </div> */}
        </div>
    )
}
