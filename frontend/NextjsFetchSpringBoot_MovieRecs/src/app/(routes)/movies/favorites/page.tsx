// 'use client';

// import RechartBar from "@/components/movies/favorites/charts/RechartBar"
import ShowFavorites from "@/components/movies/favorites/ShowFavorites"
// import { Activity } from "react";
// import { useFavorites } from "@/context/FavoritesContext"

// export const dynamic = 'force-dynamic';
const page = () => {
    // const { favorites } = useFavorites();

    return (
        <div className="w-full min-h-[120vh] p-4 flex flex-col items-center gap-y-8">
            <div className="w-1/2 mx-auto my-4 text-center">
                <h1 className="underline text-6xl lg:text-8xl text-accent">Favorite Movies</h1>
            </div>

            <div className="w-full h-full flex items-center justify-center">
                {/* Maybe wrap ShowFavorites with Activity */}
                {/* <Activity > */}
                    <ShowFavorites />
                {/* </Activity> */}
            </div>

            {/* <div className="w-full h-full flex items-center justify-center">
                <div className="text-colour p-8 m-8 pt-10 pb-14 mb-10 w-full h-[80vh] grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 rounded-lg">
                    <div className="h-full w-full">
                        <RechartBar favorites={favorites} />
                    </div>
                </div>
            </div> */}

        </div>
    )
}
export default page