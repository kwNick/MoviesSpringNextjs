'use client';
import { useActionState, useEffect, useState } from "react";
import { PatchState, UpdateMovie } from "@/resources/actions";
import { NewMovie } from "@/resources/definitions";
import Colours from "./Colours";

const UpdateMovieForm = ({ movie, id }: { movie: NewMovie, id: string }) => {
    const UpdateMovieWithId = UpdateMovie.bind(null, id);
    const initialState: PatchState = { message: undefined, errors: {} }
    const [state, formAction, isPending] = useActionState(UpdateMovieWithId, initialState);

    const [isUpdated, setIsUpdated] = useState(false);
    const [formMessage, setFormMessage] = useState("Must update a field to submit!");

    const [year, setYear] = useState(movie.year);
    const [rated, setRated] = useState(movie.rated);
    const [plot, setPlot] = useState(movie.plot);
    const [genre, setGenre] = useState(movie.genre);
    const [poster, setPoster] = useState(movie.poster);
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
        if (movie.year == year && movie.rated == rated && movie.genre == genre &&
            movie.plot == plot && movie.title == title && movie.poster == poster) {
            setIsUpdated(false);
        } else {
            setIsUpdated(true);
        }
    }, [movie, year, rated, plot, genre, title, poster]);
    return (

        <div className="p-5 w-3/4 h-full flex flex-col items-center justify-center gap-y-3">
            <div className="text-3xl lg:text-4xl xl:text-6xl font-bold tracking-widest">
                <p className="underline">Edit Movie page!</p>
            </div>
            <div className="w-full h-full p-4 flex flex-col gap-y-3">
                <Colours />
                <form className="p-4 w-full h-full border border-[#ffffff80] rounded-lg flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-y-3 backdrop-blur-md bg-[#ffffff1a] text-lg lg:text-xl xl:text-2xl font-semibold tracking-wider [box-shadow:_0_25px_45px_var(--colour)]" action={formAction}>
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="title">Title</label>
                        <input className="p-1 border border-accent rounded-lg text-accent bg-[#ffffff33]"
                            id="title"
                            name="title"
                            type="text"
                            value={title}
                            // defaultValue={movie.movieId}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={"Toy Story..."}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="genre">Genre</label>
                        <input className="p-1 border border-accent rounded-lg text-accent bg-[#ffffff33]"
                            id="genre"
                            name="genre"
                            type="text"
                            value={genre}
                            // defaultValue={movie.genres}
                            onChange={(e) => setGenre(e.target.value)}
                            placeholder={"Action Comedy"}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="rated">Rated</label>
                        <input className="p-1 border border-accent rounded-lg text-accent bg-[#ffffff33]"
                            id="rated"
                            name="rated"
                            type="text"
                            value={rated}
                            // defaultValue={movie.rated}
                            onChange={(e) => setRated(e.target.value)}
                            placeholder={"(R, PG, etc.)"}
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
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="plot">Plot</label>
                        <input className="p-1 border border-accent rounded-lg text-accent bg-[#ffffff33]"
                            id="plot"
                            name="plot"
                            type="text"
                            value={plot}
                            // defaultValue={movie.plot}
                            onChange={(e) => setPlot(e.target.value)}
                            placeholder={"This story is about..."}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="year">Year</label>
                        <input className="p-1 border border-accent rounded-lg text-accent bg-[#ffffff33]"
                            id="year"
                            name="year"
                            type="number"
                            value={year}
                            // defaultValue={movie.userId}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder={"1998"}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="poster">Poster</label>
                        <input className="p-1 border border-accent rounded-lg text-accent bg-[#ffffff33]"
                            id="poster"
                            name="poster"
                            type="text"
                            value={poster}
                            // defaultValue={movie.userId}
                            onChange={(e) => setPoster(e.target.value)}
                            placeholder={"url"}
                            required
                        />
                    </div>
                    <div className="m-3 col-span-2 flex flex-col items-center justify-center gap-y-3 duration-300">
                        <button type="submit" className="block border border-colour rounded-lg p-2 disabled:bg-slate-300 enabled:text-accent enabled:border-accent duration-500 hover:drop-shadow-xl shadow-accent" disabled={!(isPending || isUpdated)}>Update Movie</button>
                        <p className={` relative opacity-0 mt-2 text-xs text-accent duration-500 ${(isPending || !isUpdated) && 'opacity-100'}`}>{formMessage}</p>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default UpdateMovieForm