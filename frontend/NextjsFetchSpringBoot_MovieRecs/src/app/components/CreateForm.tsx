'use client';

import { useActionState, useEffect, useState } from "react";
import { AddMovie_2, State } from "../resources/actions_2";


const CreateForm = () => {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction, isPending] = useActionState(AddMovie_2, initialState);

    const [movieId, setMovieId] = useState("");
    const [genres, setGenres] = useState("");
    const [rating, setRating] = useState("");
    const [title, setTitle] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (state?.message == null) {
            setMovieId("");
            setGenres("");
            setRating("");
            setTitle("");
            setUserId("");
        }
    }, [state])
    return (
        <div className="w-[50%] h-full">
            <p>
                CreateForm
            </p>
            <div className="w-full h-full">
                <form className="py-2 w-full h-full border-2 border-colour flex flex-col gap-y-3 items-center rounded-lg" action={formAction}>
                    <div className="flex flex-col items-center">
                        {/* might not need value or onChange attr for input fields */}
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
                        <label htmlFor="rating">Rating</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="rating"
                            name="rating"
                            type="number"
                            value={rating}
                            // defaultValue={""}
                            placeholder={"rating: 0-10"}
                            onChange={(e) => setRating(e.target.value)}
                            required
                            aria-describedby="rating-error"
                        />
                        <div id="rating-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.rating &&
                                state.errors.rating.map((error: string) => (
                                    <p className="mt-2 text-sm text-accent" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
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
                        <label htmlFor="userId">UserId</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="userId"
                            name="userId"
                            type="number"
                            value={userId}
                            // defaultValue={""}
                            placeholder={"userId"}
                            onChange={(e) => setUserId(e.target.value)}
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