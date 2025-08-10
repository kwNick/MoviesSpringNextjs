import { DeleteMovie } from "../../resources/actions";

export function DeleteMovieButton({ id }: { id: string }) {

    const DeleteMovieWithId = DeleteMovie.bind(null, id);
    return (
        <>
            <form
                action={DeleteMovieWithId}
            >
                <button type="submit" className="border rounded-lg p-2 duration-500 ">
                    Delete Movie
                </button>
            </form>
        </>
    )
}