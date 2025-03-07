import { FindByTitleLike } from "../../resources/data"
import { NewMovie } from "../../resources/definitions";

const SlidingMarquee = async () => {
    const size = 10
    const col = "newmovie";
    const movies = await FindByTitleLike(col, undefined, undefined, size);
    return (
        <>
            <div className="group absolute bottom-0 left-0 w-full h-[20] flex items-center text-xs tracking-widest text-nowrap opacity-40 overflow-hidden hover:opacity-100  duration-300 before:absolute before:bg-accent before:opacity-40 before:bottom-0 before:left-0 before:w-full before:h-full ">
                <div className="flex">
                    <p className="px-5 animate-slidingMarquee group-active:[animation-play-state:paused]">
                        <span> --\ Top Rated movies for the week... </span>
                        {movies._embedded.newmovie.map((x: NewMovie, idx: number) => {
                            return (
                                <span key={idx} className="hover:text-sm hover:text-snow duration-300"> #{idx}. {x.title} - rated: {x.rated} - {x.year} | {x.genre}</span>
                            );
                        })}
                    </p>
                    <p className="px-5 animate-slidingMarquee group-active:[animation-play-state:paused]">
                        <span> --\ Top Rated movies for the week... </span>

                        {movies._embedded.newmovie.map((x: NewMovie, idx: number) => {
                            return (
                                <span key={idx} className="hover:text-sm hover:text-snow duration-300"> #{idx}. {x.title} - rated: {x.rated} - {x.year} | {x.genre}</span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </>
    )
}
export default SlidingMarquee