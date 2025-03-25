'use client';
import { NewMovie } from "@/resources/definitions";
import { createContext, useContext, useEffect, useState } from "react";
// Define the shape of the context
interface FavoritesContextType {
    favorites: NewMovie[];
    addFavorite: (movie: NewMovie) => void;
    removeFavorite: (movie: NewMovie) => void;
}

//Create the context
const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    addFavorite: () => { },
    removeFavorite: () => { },
});

//Provider component
export const FavoritesProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [favorites, setFavorites] = useState<NewMovie[]>([]);

    //Load from LocalStorage on initial render
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
    }, []);

    //Save to LocalStorage every time favorites change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Add to favorites
    const addFavorite = (movie: NewMovie) => {
        if (!favorites?.find((fav) => fav.title === movie.title)) {
            setFavorites((prev) => [...prev, movie]);
        }
    };

    // Remove from favorites
    const removeFavorite = (movie: NewMovie) => {
        setFavorites((prev) => prev.filter((fav) => fav.title !== movie.title));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);