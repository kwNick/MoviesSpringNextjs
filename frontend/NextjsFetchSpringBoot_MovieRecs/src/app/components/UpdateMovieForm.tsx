'use client';
import { useActionState, useEffect, useState } from "react";
import { PatchState, UpdateMovie_2 } from "../resources/actions_2";
import { Movie } from "../resources/definitions";

const UpdateMovieForm = ({ movie, id }: { movie: Movie, id: string }) => {
    const UpdateMovieWithId = UpdateMovie_2.bind(null, id);
    const initialState: PatchState = { message: null, errors: {} }
    const [state, formAction, isPending] = useActionState(UpdateMovieWithId, initialState);

    const [isUpdated, setIsUpdated] = useState(false);
    const [formMessage, setFormMessage] = useState("Must update a field to submit!");

    const [movieId, setMovieId] = useState(movie.movieId.toString());
    const [averageRating, setAverageRating] = useState(movie.averageRating.toString());
    const [totalRatings, setTotalRatings] = useState(movie.totalRatings.toString());
    const [genres, setGenres] = useState(movie.genres);
    const [releaseYear, setReleaseYear] = useState(movie.releaseYear.toString());
    const [title, setTitle] = useState(movie.title);

    useEffect(() => {
        if (isPending) {
            setFormMessage("...Pending update");
        }
        if (isUpdated && !isPending) {
            setFormMessage("");
        }
        if (!isUpdated) {
            setFormMessage("Must update a field to submit!");
        }
    }, [isPending, isUpdated]);
    useEffect(() => {
        if (movie.movieId.toString() == movieId && movie.averageRating.toString() == averageRating && movie.genres == genres &&
            movie.releaseYear.toString() == releaseYear && movie.title == title && movie.totalRatings.toString() == totalRatings) {
            setIsUpdated(false);
        } else {
            setIsUpdated(true);
        }
    }, [movie, movieId, averageRating, totalRatings, genres, releaseYear, title]);
    return (
        <form className="py-2 w-full h-full flex flex-col gap-y-3 items-center " action={formAction}>
            <div className="flex flex-col items-center">
                <label htmlFor="movieId">MovieId</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="movieId"
                    name="movieId"
                    type="number"
                    value={movieId}
                    // defaultValue={movie.movieId}
                    onChange={(e) => setMovieId(e.target.value)}
                    placeholder={"movieId"}
                    required
                />
            </div>

            <div className="flex flex-col items-center">
                <label htmlFor="genres">Genres</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="genres"
                    name="genres"
                    type="text"
                    value={genres}
                    // defaultValue={movie.genres}
                    onChange={(e) => setGenres(e.target.value)}
                    placeholder={"genres: Action|Comedy"}
                    required
                />
            </div>

            <div className="flex flex-col items-center">
                <label htmlFor="averageRating">averageRating</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="averageRating"
                    name="averageRating"
                    type="number"
                    value={averageRating}
                    // defaultValue={movie.rating}
                    onChange={(e) => setAverageRating(e.target.value)}
                    placeholder={"avg rating: 0-10"}
                    required
                    aria-describedby="rating-error"
                />
                <div id="rating-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.averageRating &&
                        state.errors.averageRating.map((error: string) => (
                            <p className="mt-2 text-sm text-accent" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <label htmlFor="title">Title</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    // defaultValue={movie.title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={"title"}
                    required
                />
            </div>
            <div className="flex flex-col items-center">
                <label htmlFor="releaseYear">releaseYear</label>
                <input className="border rounded-md"
                    id="releaseYear"
                    name="releaseYear"
                    type="number"
                    value={releaseYear}
                    // defaultValue={movie.userId}
                    onChange={(e) => setReleaseYear(e.target.value)}
                    placeholder={"releaseYear"}
                    required
                />
            </div>
            <div className="flex flex-col items-center">
                <label htmlFor="totalRatings">totalRatings</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="totalRatings"
                    name="totalRatings"
                    type="text"
                    value={totalRatings}
                    onChange={(e) => setTotalRatings(e.target.value)}
                    placeholder={"totalRatings"}
                    readOnly
                />
            </div>
            <div className="flex flex-col items-center">
                <button type="submit" className="block border-2 border-colour rounded-lg p-2 disabled:bg-slate-300 duration-500" disabled={!(isPending || isUpdated)}>Update Movie</button>
                <p className={` relative opacity-0 mt-2 text-xs text-accent duration-500 ${(isPending || !isUpdated) && 'opacity-100'}`}>{formMessage}</p>
            </div>
        </form>
    )
}
export default UpdateMovieForm