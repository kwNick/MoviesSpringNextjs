// import UpdateMovieForm from "@/app/components/UpdateMovieForm";
// import UpdateMovieFormSkeleton from "@/app/components/skeletons/UpdateMovieFormSkeleton";
// import { FindMovieById } from "@/app/resources/data";
// import { Suspense } from "react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    console.log(id);
    // const movie = await FindMovieById(id);
    return (
        <div className="min-w-full h-full flex flex-col items-center p-2">
            <p>Edit Movie page!</p>
            <div className="p-2 min-w-full h-full flex flex-col items-center">
                <div className="w-[50%] h-full">
                    <div className="w-full h-full border-2 border-colour rounded-lg">
                        {/* <Suspense fallback={<UpdateMovieFormSkeleton />}>
                            <UpdateMovieForm movie={movie} id={id} />
                        </Suspense> */}
                    </div>
                </div >
            </div>
        </div>
    )
}
