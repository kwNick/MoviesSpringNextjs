'use client';
import { NewMovie } from "@/resources/definitions";
import { createContext, useContext, useState } from "react";
// Define the shape of the context
interface FavoritesContextType {
    favorites: NewMovie[];
    addFavorite: (item: NewMovie) => void;
    removeFavorite: (item: NewMovie) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    addFavorite: () => { },
    removeFavorite: () => { },
});

export const FavoritesProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [favorites, setFavorites] = useState<NewMovie[]>([]);

    const addFavorite = (movie: NewMovie) => {
        if (!favorites?.find((fav) => fav.title === movie.title)) {
            setFavorites((prev) => [...prev, movie]);
        }
    };

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