type Link = {
    self: { href: string };
    movie: { href: string };
}
export type Movie = {
    id: string;
    movieId: number;
    title: string;
    genres: string[];
    averageRating: number;
    totalRatings: number;
    releaseYear: number;
    _links: Link;
}

export type NewMovie = {
    id: string;
    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    metascore: string;
    imdbrating: string;
    imdbvotes: string;
    type: string;
    boxoffice: string;
    _links: Link;
}