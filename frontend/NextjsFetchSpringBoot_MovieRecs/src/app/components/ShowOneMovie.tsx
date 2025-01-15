// import { Movie } from "../resources/definitions";

import { FindMovieById } from "../resources/data"

// import { FindMovieByUserId_2 } from "../resources/data"

const ShowOneMovie = async ({ id }: { id: string }) => {
    // const data = await FindMovieByUserId_2(userId);
    // const movie = data._embedded.movie[0];
    // console.log(data._embedded.movie[0]);

    const movie = await FindMovieById(id);
    // console.log();
    return (
        <div className="flex flex-col items-center">
            <div>ShowOneMovie</div>
            {/* <p>id: {movie.id}</p> */}
            <p>Title: {movie.title}</p>
            <p>Rating: {movie.rating}</p>
            <p>Genres: {movie.genres}</p>
            <p>UserId: {movie.userId}</p>
            <p>MovieId: {movie.movieId}</p>
            <p>TimeStamp: {movie.timestamp}</p>
        </div>
    )
}
export default ShowOneMovie