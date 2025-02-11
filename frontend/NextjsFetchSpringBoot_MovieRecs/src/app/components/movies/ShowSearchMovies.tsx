import { FindByTitleLike } from "../../resources/data";
import { Movie } from "../../resources/definitions";
import { DeleteMovieButton } from "./DeleteMovieButton";
import UpdateMovieButton from "./UpdateMovieButton";

const ShowSearchMovies = async ({ query, page }: { query: string, page: number }) => {

    const SearchData = await FindByTitleLike(query, page);
    // console.log(SearchData);
    // console.log(page + " " + query);
    // console.log(SearchData._embedded.movie._links.self.href);
    return (
        <div className="w-4/5">
            <div className="flex flex-wrap justify-center">
                {SearchData._embedded.movie.map((m: Movie, idx: number) => {
                    const href = m._links.self.href;
                    // console.log("href: " + href)
                    // const userId = href.match(/\/([^\/]+)$/)[1];
                    return (
                        <div key={idx} className="w-full">
                            <div className="flex flex-col p-3 m-3 items-center">
                                {/* <p>id: {m._links?.self?.href}</p>  */}
                                <div>
                                    <p>MovieId: {m.movieId}</p>
                                    <p>Title: {m.title}</p>
                                    <p>Rating: {m.rating}</p>
                                    <p>UserId: {m.userId}</p>
                                    <p>Genres: {m.genres}</p>
                                    <p>TimeStamp: {m.timestamp}</p>
                                </div>
                                <div className="container flex gap-3 justify-between">
                                    <UpdateMovieButton href={href} />
                                    <DeleteMovieButton href={href} />
                                </div>
                            </div>
                            <hr className="w-full border-colour" />
                        </div>
                    )
                })}
            </div >
        </div >
    )
}
export default ShowSearchMovies