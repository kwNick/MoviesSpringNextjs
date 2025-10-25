//Fetching data w/ Server Components

//----------- RepositoryRestResource ----- //

export async function FindMovieById(id: string, col: string) {
    try {
        const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/${col}/${id}`);
        return data.json();
    } catch (error) {
        throw new Error("Could not Fetch Movie with userId from Database: " + error);
    }
}

/* Custom Controller Search */
export async function FindBySearch(query?: string, genre?: string, page?: number, size?: number, sort?: string) {
    try {
        // const timer = setTimeout(() => { }, 5000); //this will delay the fetch by 5 second to simulate loading
        // clearTimeout(timer);
        // await new Promise(resolve => setTimeout(resolve, 5000));
        
        // console.log("FindBySearch called with query:", query, "genre:", genre, "page:", page, "size:", size, "sort:", sort);
        query = query ? "query=" + query : query == "" ? "query=" : "";
        genre = genre ?? "";
        page = page ?? 1;
        size = size ?? 5;
        sort = sort ?? "imdbrating,desc&sort=title,asc"; //"imdbrating,desc&sort=title,asc" - default sort
        // console.log(`Fetch: http://${process.env.SPRING_API_DOMAIN}/api/searchmovies?${query}${query && '&'}genre=${genre}&page=${page - 1}&size=${size}&sort=${sort}`);
        const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/api/searchmovies?${query}${query && '&'}genre=${genre}&page=${page - 1}&size=${size}&sort=${sort}`);
        return data.json();
    } catch (error) {
        throw new Error("Failed to Fetch Movies Like Title from Database: " + error);
    }
}

/** Find Movie By Title */
// export async function FindByTitleLike(col: string, query?: string, page?: number, size?: number, sort?: string) {
//     try {
//         query = query ?? "";
//         page = page ?? 0;
//         size = size ?? 5;
//         sort = sort ?? "imdbrating,desc&sort=title,asc"; //"imdbrating,desc&sort=title,asc" - default sort
//         const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/${col}/search/findByTitleIgnoreCaseContaining?title=${query}&page=${page - 1}&size=${size}&sort=${sort}`);
//         return data.json();
//     } catch (error) {
//         throw new Error("Failed to Fetch Movies Like Title from Database: " + error);
//     }
// }

/* Fetch Count By Title */
// export async function CountMoviesByTitle(col: string, query?: string, page?: number, size?: number) {
//     try {
//         query = query ?? "";
//         page = page ?? 0;
//         size = size ?? 5;
//         const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/${col}/search/countByTitleIgnoreCaseContaining?title=${query}&page=${page - 1}&size=${size}`);
//         return data.json();
//     } catch (error) {
//         throw new Error("Failed to Fetch Movies: " + error);
//     }
// }

/* Find Movie By Genre */
// export async function FindByGenre(col: string, query?: string, page?: number, size?: number, sort?: string) {
//     try {
//         query = query ?? "";
//         page = page ?? 0;
//         size = size ?? 5;
//         sort = sort ?? "imdbrating,desc&sort=title,asc"; //"imdbrating,desc&sort=title,asc" - default sort
//         const data = await fetch(`http://${process.env.SPRING_API_DOMAIN}/${col}/search/findByGenreIgnoreCaseContaining?genre=${query}&page=${page - 1}&size=${size}&sort=${sort}`);
//         return data.json();
//     } catch (error) {
//         throw new Error("Failed to Fetch Movies By Genre from Database: " + error);
//     }
// }