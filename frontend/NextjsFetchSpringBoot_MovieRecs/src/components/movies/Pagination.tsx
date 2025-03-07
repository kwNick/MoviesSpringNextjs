import { CountMoviesByTitle } from "../../resources/data";
import PageButtons from "./PageButtons";

const Pagination = async ({ query }: { query: string }) => {
    const col = "newmovie";
    const size = await CountMoviesByTitle(col, query);
    // console.log(query);
    return (
        <div className="w-3/5 text-center">
            <PageButtons totalPages={Math.ceil(size / 5)} />
        </div>
    )
}
export default Pagination