//Fetching data w/ Server Components
//----------- RepositoryRestResource ----- //
export async function CountMoviesByTitle(col: string, query?: string, page?: number, size?: number) {
    try {
        query = query ?? "";
        page = page ?? 0;
        size = size ?? 5;
        const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/${col}/search/countByTitleIgnoreCaseLike?title=${query}&page=${page - 1}&size=${size}`);
        return data.json();
    } catch (error) {
        throw new Error("Failed to Fetch Movies: " + error);
    }
}

export async function FindMovieById(id: string, col: string) {
    try {
        const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/${col}/${id}`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Movie with userId from Database: " + error);
    }
}

// export async function FindMovieByUserId_2(movieId: string, col: string) {
//     try {
//         const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/${col}/search/findByMovieId?movieId=${movieId}`);
//         return data.json();
//     } catch (error) {
//         throw new Error("Could not Fetch Movie with userId from Database: " + error);
//     }
// }

export async function FindByTitleLike(col: string, query?: string, page?: number, size?: number) {
    try {
        query = query ?? "";
        page = page ?? 0;
        size = size ?? 5;
        const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/${col}/search/findByTitleIgnoreCaseLike?title=${query}&page=${page - 1}&size=${size}`);
        return data.json();
    } catch (error) {
        throw new Error("Failed to Fetch Movies Like Title from Database: " + error);
    }
}

// export async function FindNewMovieByTitleLike(query?: string, page?: number, size?: number) {
//     try {
//         query = query ?? "";
//         page = page ?? 0;
//         size = size ?? 5;
//         const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/newmovie/search/findByTitleIgnoreCaseLike?title=${query}&page=${page - 1}&size=${size}`);
//         return data.json();
//     } catch (error) {
//         throw new Error("Failed to Fetch New Movies Like Title from Database: " + error);
//     }
// }