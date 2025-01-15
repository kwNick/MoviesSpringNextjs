import Link from "next/link"

const UpdateMovieButton = ({ href }: { href: string }) => {
    // console.log("button: " + href)
    const idMatch = href.match(/\/([^\/]+)$/);
    const id = idMatch ? idMatch[1] : "";
    return (
        <Link
            href={`/movies/${id}`}
            className="border rounded-lg p-2 duration-500"
        >
            Update Movie
        </Link>
    )
}
export default UpdateMovieButton