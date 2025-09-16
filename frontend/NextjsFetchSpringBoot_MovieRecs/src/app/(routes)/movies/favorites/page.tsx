import ShowFavorites from "@/components/movies/favorites/ShowFavorites"

const page = () => {
    return (
        <div className="w-full min-h-[120vh] p-4 flex flex-col items-center gap-y-8">
            <div className="w-1/2 mx-auto my-4 text-center">
                <h1 className="underline text-6xl lg:text-8xl text-accent">Favorite Movies</h1>
            </div>

            <div className="w-full h-full flex items-center justify-center">
                <ShowFavorites />
            </div>

        </div>
    )
}
export default page