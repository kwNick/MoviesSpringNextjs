import Link from "next/link"

const UpdateMovieButton = ({ id }: { id: string }) => {

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