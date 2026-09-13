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

// NewMovie type definition
//No caps, no camelcase, nodashes, just all lowercase
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


export interface Recommendation extends NewMovie {
    similarity: number;
    match_percentage: number;
    description: string;
}

export type ExtraMoviesList = {
    title: string;
    year: string;
}

export interface RatingChartData {
  decade: number;
  averageRating: number;
}

export interface RatingStatsData {
  count: number;
  mean: number;
  median: number;
  standardDeviation: number;
  minimum: number;
  maximum: number;
}