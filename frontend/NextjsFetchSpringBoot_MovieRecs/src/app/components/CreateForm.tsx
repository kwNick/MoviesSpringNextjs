'use client';

import { useActionState, useEffect, useState } from "react";
import { AddMovie_2, State } from "../resources/actions_2";


const CreateForm = () => {
    const initialState: State = { message: undefined, errors: {} };
    const [state, formAction, isPending] = useActionState(AddMovie_2, initialState);

    const [movieId, setMovieId] = useState("");
    const [genres, setGenres] = useState("");
    const [averageRating, setAverageRating] = useState("");
    const [totalRatings, setTotalRatings] = useState("");
    const [title, setTitle] = useState("");
    const [releaseYear, setReleaseYear] = useState("");

    useEffect(() => {
        if (state?.message == null) {
            setMovieId("");
            setGenres("");
            setAverageRating("");
            setTotalRatings("");
            setTitle("");
            setReleaseYear("");
        }
    }, [state])
    return (
        <div className="w-[50%] h-full text-center">
            <p>
                CreateForm
            </p>
            <div className="w-full h-full ">
                <form className="py-2 w-full h-full border-2 border-colour flex flex-col gap-y-3 items-center rounded-lg" action={formAction}>
                    <div className="flex flex-col items-center">
                        <label htmlFor="movieId">MovieId</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="movieId"
                            name="movieId"
                            type="number"
                            value={movieId}
                            // defaultValue={""}
                            placeholder={"movieId"}
                            onChange={(e) => setMovieId(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="genres">Genres</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="genres"
                            name="genres"
                            type="text"
                            value={genres}
                            // defaultValue={""}
                            placeholder={"genres: Action|Comedy"}
                            onChange={(e) => setGenres(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="averageRating">Average Rating</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="averageRating"
                            name="averageRating"
                            type="number"
                            value={averageRating}
                            // defaultValue={""}
                            placeholder={"avg rating: 0-10"}
                            onChange={(e) => setAverageRating(e.target.value)}
                            required
                            aria-describedby="rating-error"
                        />
                        <div id="rating-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.averageRating &&
                                state.errors.averageRating.map((error: string) => (
                                    <p className="mt-2 text-sm text-accent" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="totalRatings">Total Ratings</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="totalRatings"
                            name="totalRatings"
                            type="number"
                            value={totalRatings}
                            // defaultValue={""}
                            placeholder={"total amount of ratings"}
                            onChange={(e) => setAverageRating(e.target.value)}
                            required

                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="title">Title</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="title"
                            name="title"
                            type="text"
                            value={title}
                            // defaultValue={""}
                            placeholder={"title"}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="releaseYear">ReleaseYear</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="releaseYear"
                            name="releaseYear"
                            type="number"
                            value={releaseYear}
                            // defaultValue={""}
                            placeholder={"releaseYear"}
                            onChange={(e) => setReleaseYear(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="border-2 border-colour rounded-lg p-2" disabled={isPending}>Add Movie</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateForm