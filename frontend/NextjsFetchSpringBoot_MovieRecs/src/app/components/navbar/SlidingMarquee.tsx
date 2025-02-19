// import Link from "next/link";
import { FindByTitleLike } from "../../resources/data"
import { Movie } from "../../resources/definitions";

const SlidingMarquee = async () => {
    const movies = await FindByTitleLike();
    return (
        <>
            <div className="group absolute bottom-0 left-0 w-full h-[20] flex items-center text-xs tracking-widest text-nowrap opacity-40 overflow-hidden hover:opacity-100  duration-300 before:absolute before:bg-accent before:opacity-40 before:bottom-0 before:left-0 before:w-full before:h-full ">
                <div className="flex">
                    <p className="animate-slidingMarquee group-active:[animation-play-state:paused]">--\ Top Rated movies for the week...
                        {movies._embedded.movie.map((x: Movie, idx: number) => {
                            return (
                                <span key={idx}> #{x.movieId}. {x.title} - rating: {x.averageRating} - {x.releaseYear} | </span>
                            );
                        })}
                    </p>
                    <p className="animate-slidingMarquee group-active:[animation-play-state:paused]">--\ Top Rated movies for the week...
                        {movies._embedded.movie.map((x: Movie, idx: number) => {
                            return (
                                <span key={idx}> #{x.movieId}. {x.title} - rating: {x.averageRating} - {x.releaseYear} | </span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </>
    )
}
export default SlidingMarquee