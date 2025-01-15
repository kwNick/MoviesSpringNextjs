// import ShowOneMovie from "@/app/components/ShowOneMovie";
import { Skeleton } from "@/app/components/Skeleton";
import UpdateMovie from "@/app/components/UpdateMovie";
import { Suspense } from "react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    return (
        <div className="min-w-full h-full flex flex-col items-center p-2">
            <p>Edit Movie page!</p>
            <div className="p-2 min-w-full h-full flex flex-col items-center">
                {/* <Suspense fallback={<Skeleton />}>
                    <ShowOneMovie id={id} /> */}
                {/* <ShowOneMovie movie={movie} /> */}
                {/* </Suspense> */}
                <Suspense fallback={<Skeleton />}>
                    <UpdateMovie id={id} />
                </Suspense>
            </div>
        </div>
    )
}
