import ShowFavorites from "@/components/movies/favorites/ShowFavorites"

const page = () => {
    return (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center">
            <div>
                <h1>Favorite Movies</h1>
            </div>
            <ShowFavorites />
        </div>
    )
}
export default page