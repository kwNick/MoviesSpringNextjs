import { FindMovieById } from "../resources/data";
import UpdateMovieForm from "./UpdateMovieForm";

const UpdateMovie = async ({ id }: { id: string }) => {

    // console.log(movie);
    // const data = await FindMovieByUserId_2(userId);
    // const movie = data._embedded.movie[0];
    // console.log(movie._links.self.href.match(/\/([^\/]+)$/)[1]); //for just the id
    // console.log(movie._links.self.href); //link to itself

    const movie = await FindMovieById(id);

    return (
        <div className="w-[50%] h-full">
            <p>
                UpdateMovieForm
            </p>

            <div className="w-full h-full border-2 border-colour rounded-lg">
                <UpdateMovieForm movie={movie} id={id} />
            </div>
        </div>
    )
}
export default UpdateMovie