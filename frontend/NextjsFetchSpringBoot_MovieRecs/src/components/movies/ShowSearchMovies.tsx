import { FindByTitleLike } from "../../resources/data";
import { NewMovie } from "../../resources/definitions";
import { DeleteMovieButton } from "./DeleteMovieButton";
import UpdateMovieButton from "./UpdateMovieButton";

const ShowSearchMovies = async ({ query, page }: { query: string, page: number }) => {

    const col = "newmovie";
    const SearchData = await FindByTitleLike(col, query, page);
    // console.log(SearchData);
    // console.log(page + " " + query);
    // console.log(SearchData._embedded.movie._links.self.href);
    return (
        <div className="w-4/5">
            <div className="flex flex-wrap justify-center">
                {SearchData._embedded.newmovie.map((m: NewMovie, idx: number) => {
                    const href = m._links.self.href;
                    // console.log("href: " + href)
                    // const userId = href.match(/\/([^\/]+)$/)[1];
                    // console.log(m.title + " " + idx)
                    return (
                        <div key={idx} className="w-full">
                            <div className="flex flex-col p-3 m-3 items-center justify-center gap-y-4">
                                {/* <p>id: {m._links?.self?.href}</p>  */}
                                <div>
                                    <p>{m.title}</p>
                                    <p>{m.year + " " + m.rated}</p>
                                    <p>{m.genre}</p>
                                    <p>{m.plot}</p>
                                </div>
                                <div className="container flex gap-3 justify-around">
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