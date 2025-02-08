// import { DeleteMovie } from "../resources/actions";
// import { DeleteMovie_2 } from "../../resources/actions_2";

export function DeleteMovieButton({ href }: { href: string }) {
    // const DeleteMovieWithId = DeleteMovie.bind(null, href);
    // const idMatch = href.match(/\/([^\/]+)$/);
    // const id = idMatch ? idMatch[1] : "";
    // const DeleteMovieWithId = DeleteMovie_2.bind(null, id);
    console.log(href);
    return (
        <>
            {/* <form
                action={DeleteMovieWithId}
            > */}
            <button type="submit" className="border p-2 duration-500 ">
                Delete Movie
            </button>
            {/* </form> */}
        </>
    )
}