// export async function SpringMongoData() {
//     try {
//         const data = await fetch("http://localhost:8080/api/movie");
//         return data.json();
//     } catch (error) {
//         throw new Error("Invalid Fetch from Spring Mongo Data:  " + error);
//     }
// }

// export async function FindMovieByUserId(userId: string) {
//     try {
//         const data = await fetch(`http://localhost:8080/api/movie/${userId}`);
//         return data.json();
//     } catch (error) {
//         throw new Error("Could not Fetch Movie with userId from Database: " + error);
//     }
// }


//----------- RepositoryRestResource ----- //
export async function CountMoviesByTitle(query: string) {
    try {
        const data = await fetch(`http://localhost:8081/movie/search/countByTitleIgnoreCaseLike?title=${query}`);
        return data.json();
    } catch (error) {
        throw new Error("Failed to Fetch Movies: " + error);
    }
}

export async function FindMovieById(id: string) {
    try {
        const data = await fetch(`http://localhost:8081/movie/${id}`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Movie with userId from Database: " + error);
    }
}

export async function FindMovieByUserId_2(userId: string) {
    try {
        const data = await fetch(`http://localhost:8081/movie/search/findByUserId?userId=${userId}`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Movie with userId from Database: " + error);
    }
}

export async function FindByTitleLike(query?: string, page?: number) {
    try {
        query = query ?? "";
        page = page ?? 0;
        const size = query == "" ? 10 : 5;
        const data = await fetch(`http://localhost:8081/movie/search/findByTitleIgnoreCaseLike?title=${query}&page=${page - 1}&size=${size}`);
        return data.json();
    } catch (error) {
        throw new Error("Failed to fetch movies like title from Database: " + error);
    }
}