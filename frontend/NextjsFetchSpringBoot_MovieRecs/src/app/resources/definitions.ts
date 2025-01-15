type Link = {
    self: { href: string };
    movie: { href: string };
}
export type Movie = {
    id: string;
    movieId: number;
    title: string;
    genres: string;
    userId: number;
    rating: number;
    timestamp: string;
    _links: Link;
}