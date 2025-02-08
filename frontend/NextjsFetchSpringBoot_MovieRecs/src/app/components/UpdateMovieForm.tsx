// 'use client';
// import { useActionState, useEffect, useState } from "react";
// import { PatchState, UpdateMovie_2 } from "../resources/actions_2";
import { Movie } from "../resources/definitions";

const UpdateMovieForm = ({ movie, id }: { movie: Movie, id: string }) => {
    console.log(movie + " " + id);
    // const UpdateMovieWithId = UpdateMovie_2.bind(null, id);
    // const initialState: PatchState = { message: null, errors: {} }
    // const [state, formAction, isPending] = useActionState(UpdateMovieWithId, initialState);

    // const [isUpdated, setIsUpdated] = useState(false);
    // const [formMessage, setFormMessage] = useState("Must update a field to submit!");

    // const [movieId, setMovieId] = useState(movie.movieId.toString());
    // const [rating, setRating] = useState(movie.rating.toString());
    // const [genres, setGenres] = useState(movie.genres);
    // const [userId, setUserId] = useState(movie.userId.toString());
    // const [title, setTitle] = useState(movie.title);

    // useEffect(() => {
    //     if (isPending) {
    //         setFormMessage("...Pending update");
    //     }
    //     if (isUpdated && !isPending) {
    //         setFormMessage("");
    //     }
    //     if (!isUpdated) {
    //         setFormMessage("Must update a field to submit!");
    //     }
    // }, [isPending, isUpdated]);
    // useEffect(() => {
    //     if (movie.movieId.toString() == movieId && movie.rating.toString() == rating && movie.genres == genres &&
    //         movie.userId.toString() == userId && movie.title == title) {
    //         setIsUpdated(false);
    //     } else {
    //         setIsUpdated(true);
    //     }
    // }, [movie, movieId, rating, genres, userId, title]);
    return (
        <div></div>
        // <form className="py-2 w-full h-full flex flex-col gap-y-3 items-center " action={formAction}>
        //     <div className="flex flex-col items-center">
        //         <label htmlFor="movieId">MovieId</label>
        //         <input className="border border-colour rounded-lg text-colour"
        //             id="movieId"
        //             name="movieId"
        //             type="number"
        //             value={movieId}
        //             // defaultValue={movie.movieId}
        //             onChange={(e) => setMovieId(e.target.value)}
        //             placeholder={"movieId"}
        //             required
        //         />
        //     </div>

        //     <div className="flex flex-col items-center">
        //         <label htmlFor="genres">Genres</label>
        //         <input className="border border-colour rounded-lg text-colour"
        //             id="genres"
        //             name="genres"
        //             type="text"
        //             value={genres}
        //             // defaultValue={movie.genres}
        //             onChange={(e) => setGenres(e.target.value)}
        //             placeholder={"genres: Action|Comedy"}
        //             required
        //         />
        //     </div>

        //     <div className="flex flex-col items-center">
        //         <label htmlFor="rating">Rating</label>
        //         <input className="border border-colour rounded-lg text-colour"
        //             id="rating"
        //             name="rating"
        //             type="number"
        //             value={rating}
        //             // defaultValue={movie.rating}
        //             onChange={(e) => setRating(e.target.value)}
        //             placeholder={"rating: 0-10"}
        //             required
        //             aria-describedby="rating-error"
        //         />
        //         <div id="rating-error" aria-live="polite" aria-atomic="true">
        //             {state.errors?.rating &&
        //                 state.errors.rating.map((error: string) => (
        //                     <p className="mt-2 text-sm text-accent" key={error}>
        //                         {error}
        //                     </p>
        //                 ))}
        //         </div>
        //     </div>
        //     <div className="flex flex-col items-center">
        //         <label htmlFor="title">Title</label>
        //         <input className="border border-colour rounded-lg text-colour"
        //             id="title"
        //             name="title"
        //             type="text"
        //             value={title}
        //             // defaultValue={movie.title}
        //             onChange={(e) => setTitle(e.target.value)}
        //             placeholder={"title"}
        //             required
        //         />
        //     </div>
        //     <div className="flex flex-col items-center">
        //         <label htmlFor="userId">UserId</label>
        //         <input className="border rounded-md"
        //             id="userId"
        //             name="userId"
        //             type="number"
        //             value={userId}
        //             // defaultValue={movie.userId}
        //             onChange={(e) => setUserId(e.target.value)}
        //             placeholder={"userId"}
        //             required
        //         />
        //     </div>
        //     <div className="flex flex-col items-center">
        //         <label htmlFor="timestamp">Timestamp</label>
        //         <input className="border border-colour rounded-lg text-colour"
        //             id="timestamp"
        //             name="timestamp"
        //             type="text"
        //             defaultValue={movie.timestamp}
        //             placeholder={"timestamp"}
        //             readOnly
        //         />
        //     </div>
        //     <div className="flex flex-col items-center">
        //         <button type="submit" className="block border-2 border-colour rounded-lg p-2 disabled:bg-slate-300 duration-500" disabled={!(isPending || isUpdated)}>Update Movie</button>
        //         <p className={` relative opacity-0 mt-2 text-xs text-accent duration-500 ${(isPending || !isUpdated) && 'opacity-100'}`}>{formMessage}</p>
        //     </div>
        // </form>
    )
}
export default UpdateMovieForm