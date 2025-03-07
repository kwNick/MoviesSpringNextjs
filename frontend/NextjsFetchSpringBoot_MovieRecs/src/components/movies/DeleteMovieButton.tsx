import { DeleteMovie } from "../../resources/actions";

export function DeleteMovieButton({ href }: { href: string }) {
    const idMatch = href.match(/\/([^\/]+)$/);
    const id = idMatch ? idMatch[1] : "";
    const DeleteMovieWithId = DeleteMovie.bind(null, id);
    // console.log(href);
    return (
        <>
            <form
                action={DeleteMovieWithId}
            >
                <button type="submit" className="border p-2 duration-500 ">
                    Delete Movie
                </button>
            </form>
        </>
    )
}