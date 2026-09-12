import FavoriteCharts from "@/components/movies/favorites/FavoriteCharts";
import FavoritesCarousel from "@/components/movies/favorites/FavoritesCarousel";
import ShowFavorites from "@/components/movies/favorites/ShowFavorites"

// export const dynamic = 'force-dynamic';
const page = () => {

    return (
        <div className="w-full min-h-[120vh] p-4 flex flex-col items-center gap-y-8 lg:gap-y-10">

            <div className="w-1/2 mx-auto my-4 text-center">
                <h1 className="underline text-6xl lg:text-8xl text-accent">Favorite Movies</h1>
            </div>

            <FavoritesCarousel />

            <div className="w-full h-full flex flex-col items-center justify-center gap-y-6 lg:gap-y-10">                
                <ShowFavorites />

                <FavoriteCharts />
            </div>

        </div>
    )
}
export default page