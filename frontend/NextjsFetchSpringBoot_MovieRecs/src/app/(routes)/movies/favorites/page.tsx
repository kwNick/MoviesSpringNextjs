import ShowFavorites from "@/components/movies/favorites/ShowFavorites"

const page = () => {
    return (
        <div className="w-full min-h-[80vh] p-4">
            <div className="w-1/2 mx-auto my-4 text-center">
                <h1>Favorite Movies</h1>
            </div>
            <ShowFavorites />
        </div>
    )
}
export default page