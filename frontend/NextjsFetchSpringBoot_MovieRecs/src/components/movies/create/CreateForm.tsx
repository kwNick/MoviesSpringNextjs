'use client';

import { useActionState, useEffect, useState } from "react";
import { AddMovie, State } from "@/resources/actions";


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
        <div className="pb-6 w-3/5 h-full flex flex-col items-center justify-center gap-y-5">
            <div className="text-3xl lg:text-4xl xl:text-6xl font-bold text-colour">
                <p className="underline">CreateForm</p>
            </div>

            <div className="pb-6 w-full h-full flex flex-col ">

                <form className="py-7 w-full h-full flex flex-col items-center justify-center gap-y-6 lg:gap-y-8 xl:gap-y-10 text-lg lg:text-xl xl:text-2xl" action={formAction}>
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="year" className="underline">Year</label>
                        <input className="border-2 border-colour rounded-lg text-colour"
                            id="year"
                            name="year"
                            type="number"
                            value={year}
                            // defaultValue={""}
                            placeholder={"1998"}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="genre" className="underline">Genre</label>
                        <input className="border-2 border-colour rounded-lg text-colour"
                            id="genre"
                            name="genre"
                            type="text"
                            value={genre}
                            placeholder={"Action Comedy"}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="rated" className="underline">Rated</label>
                        <input className="border-2 border-colour rounded-lg text-colour"
                            id="rated"
                            name="rated"
                            type="text"
                            value={rated}
                            placeholder={"(R, PG, etc.)"}
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
                        <label htmlFor="poster" className="underline">Poster</label>
                        <input className="border-2 border-colour rounded-lg text-colour"
                            id="poster"
                            name="poster"
                            type="text"
                            value={poster}
                            placeholder={"url"}
                            onChange={(e) => setPoster(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label htmlFor="title" className="underline">Title</label>
                        <input className="border-2 border-colour rounded-lg text-colour"
                            id="title"
                            name="title"
                            type="text"
                            value={title}
                            placeholder={"Toy Story..."}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="plot" className="underline">Plot</label>
                        <input className="border-2 border-colour rounded-lg text-colour"
                            id="plot"
                            name="plot"
                            type="text"
                            value={plot}
                            placeholder={"This story is about..."}
                            onChange={(e) => setPlot(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <button type="submit" className="border-2 border-colour rounded-lg p-3" disabled={isPending}>Add Movie</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateForm