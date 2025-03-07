'use client';
import { useActionState, useEffect, useState } from "react";
import { PatchState, UpdateMovie } from "../../resources/actions";
import { NewMovie } from "../../resources/definitions";

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
        <form className="py-2 w-full h-full flex flex-col gap-y-3 items-center " action={formAction}>
            <div className="flex flex-col items-center">
                <label htmlFor="title">Title</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    // defaultValue={movie.movieId}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={"Title"}
                    required
                />
            </div>

            <div className="flex flex-col items-center">
                <label htmlFor="genre">Genre</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="genre"
                    name="genre"
                    type="text"
                    value={genre}
                    // defaultValue={movie.genres}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder={"genre: Action Comedy"}
                    required
                />
            </div>

            <div className="flex flex-col items-center">
                <label htmlFor="rated">Rated</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="rated"
                    name="rated"
                    type="text"
                    value={rated}
                    // defaultValue={movie.rated}
                    onChange={(e) => setRated(e.target.value)}
                    placeholder={"rated: 95%"}
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
                <label htmlFor="plot">Plot</label>
                <input className="border border-colour rounded-lg text-colour"
                    id="plot"
                    name="plot"
                    type="text"
                    value={plot}
                    // defaultValue={movie.plot}
                    onChange={(e) => setPlot(e.target.value)}
                    placeholder={"plot"}
                    required
                />
            </div>
            <div className="flex flex-col items-center">
                <label htmlFor="year">Year</label>
                <input className="border rounded-md"
                    id="year"
                    name="year"
                    type="number"
                    value={year}
                    // defaultValue={movie.userId}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder={"year"}
                    required
                />
            </div>
            <div className="flex flex-col items-center">
                <label htmlFor="poster">Poster</label>
                <input className="border rounded-md"
                    id="poster"
                    name="poster"
                    type="number"
                    value={poster}
                    // defaultValue={movie.userId}
                    onChange={(e) => setPoster(e.target.value)}
                    placeholder={"poster"}
                    required
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