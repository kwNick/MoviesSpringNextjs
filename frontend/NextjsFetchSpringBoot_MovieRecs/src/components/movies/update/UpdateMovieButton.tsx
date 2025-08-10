import Link from "next/link"

const UpdateMovieButton = ({ id }: { id: string }) => {

    return (
        <Link
            href={`/movies/${id}/edit-movie`}
            className="border rounded-lg p-2 duration-500"
        >
            Edit Movie
        </Link>
    )
}
export default UpdateMovieButton