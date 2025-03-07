'use client';

import { useActionState, useEffect, useState } from "react";
import { AddMovie, State } from "../../resources/actions";


const CreateForm = () => {
    const initialState: State = { message: undefined, errors: {} };
    const [state, formAction, isPending] = useActionState(AddMovie, initialState);

    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [rated, setRated] = useState("");
    const [plot, setPlot] = useState("");
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");

    useEffect(() => {
        if (state?.message == null) {
            setYear("");
            setGenre("");
            setRated("");
            setPlot("");
            setTitle("");
            setPoster("");
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
                        <label htmlFor="year">Year</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="year"
                            name="year"
                            type="text"
                            value={year}
                            // defaultValue={""}
                            placeholder={"year"}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="genre">Genre</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="genre"
                            name="genre"
                            type="text"
                            value={genre}
                            // defaultValue={""}
                            placeholder={"genre: Action Comedy"}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="rated">Rated</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="rated"
                            name="rated"
                            type="text"
                            value={rated}
                            // defaultValue={""}
                            placeholder={"rated: 95%"}
                            onChange={(e) => setRated(e.target.value)}
                            required
                            aria-describedby="rated-error"
                        />
                        <div id="rated-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.rated &&
                                state.errors.rated.map((error: string) => (
                                    <p className="mt-2 text-sm text-accent" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="poster">Poster</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="poster"
                            name="poster"
                            type="text"
                            value={poster}
                            // defaultValue={""}
                            placeholder={"total amount of ratings"}
                            onChange={(e) => setPoster(e.target.value)}
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
                        <label htmlFor="plot">Plot</label>
                        <input className="border-2 border-colour rounded-lg text-contrast"
                            id="plot"
                            name="plot"
                            type="text"
                            value={plot}
                            // defaultValue={""}
                            placeholder={"plot"}
                            onChange={(e) => setPlot(e.target.value)}
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