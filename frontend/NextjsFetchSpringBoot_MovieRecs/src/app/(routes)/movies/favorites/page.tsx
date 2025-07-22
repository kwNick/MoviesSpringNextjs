import ShowFavorites from "@/components/movies/favorites/ShowFavorites"

const page = () => {
    return (
        <div className="w-full min-h-[80vh] p-4">
            <div className="w-1/2 mx-auto my-4 text-center">
                <h1 className="underline text-3xl">Favorite Movies</h1>
            </div>

            {/* <div className="w-full h-full flex items-center justify-center"> */}
            <ShowFavorites />

        </div>
    )
}
export default page