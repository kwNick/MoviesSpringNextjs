type Link = {
    self: { href: string };
    movie: { href: string };
}
export type Movie = {
    id: string;
    movieId: number;
    title: string;
    genres: string;
    averageRating: number;
    totalRatings: number;
    releaseYear: number;
    _links: Link;
}