// import { CountMoviesByTitle } from "../../resources/data";
import PageButtons from "./PageButtons";

const Pagination = async ({ size }: { size: number }) => {
    // console.log(query);

    // const size = await CountMoviesByTitle("newmovie", query);
    return (
        <div className="w-3/5 text-center">
            <PageButtons totalPages={Math.ceil(size / 10)} />
        </div>
    )
}
export default Pagination