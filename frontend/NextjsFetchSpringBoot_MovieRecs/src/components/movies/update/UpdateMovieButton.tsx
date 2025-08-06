import Link from "next/link"

const UpdateMovieButton = ({ id }: { id: string }) => {
    // console.log("button: " + href)
    // const idMatch = href.match(/\/([^\/]+)$/);
    // const id = idMatch ? idMatch[1] : "";
    return (
        <Link
            href={`/movies/${id}/edit-movie`}
            className="border rounded-lg p-2 duration-500"
        >
            Update Movie
        </Link>
    )
}
export default UpdateMovieButton