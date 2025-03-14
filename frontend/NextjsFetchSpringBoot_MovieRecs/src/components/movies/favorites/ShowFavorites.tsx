"use client";
import { NewMovie } from "@/resources/definitions";
import { useEffect, useState } from "react"

const ShowFavorites = () => {
    const [favs, setFavs] = useState<NewMovie[]>([]);

    //Load favotites from localStorage on mount if there
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedFavs = localStorage.getItem("favorites");
            if (storedFavs) {
                setFavs(JSON.parse(storedFavs));
            }
        }
    }, []);

    //Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favs));
    }, [favs]);

    return (
        <div>
            <div>
                <h1>ShowFavorites</h1>
            </div>
            <div>
                {favs.map((x: NewMovie, idx: number) => {
                    return (
                        <div key={idx}>
                            {x.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ShowFavorites