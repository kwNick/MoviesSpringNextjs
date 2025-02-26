//Fetching data w/ Server Components
//----------- RepositoryRestResource ----- //
export async function CountMoviesByTitle(query: string) {
    try {
        const data = await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/movie/search/countByTitleIgnoreCaseLike?title=${query}`);
        return data.json();
    } catch (error) {
        throw new Error("Failed to Fetch Movies: " + error);
    }
}

export async function FindMovieById(id: string) {
    try {
        const data = await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/movie/${id}`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Movie with userId from Database: " + error);
    }
}

export async function FindMovieByUserId_2(movieId: string) {
    try {
        const data = await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/movie/search/findByMovieId?movieId=${movieId}`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Movie with userId from Database: " + error);
    }
}

export async function FindByTitleLike(query?: string, page?: number) {
    try {
        query = query ?? "";
        page = page ?? 0;
        const size = 5;
        const data = await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/movie/search/findByTitleIgnoreCaseLike?title=${query}&page=${page - 1}&size=${size}`);
        return data.json();
    } catch (error) {
        throw new Error("Failed to Fetch Movies Like Title from Database: " + error);
    }
}