import Link from "next/link"
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
const SearchMoviesSkeleton = () => {
    return (
        <div className={`${shimmer} w-4/5 min-h-24 `}>
            <div className={`${shimmer} w-full flex flex-wrap justify-center`}>
                <div className={`${shimmer} w-full`}>
                    <div className={`${shimmer} flex flex-col p-3 m-3 items-center`}>
                        {/* MovieDaTa */}
                        <div className={`${shimmer}`}>
                            <p className={`${shimmer}`}></p>
                            <p className={`${shimmer}`}></p>
                            <p className={`${shimmer}`}></p>
                            <p className={`${shimmer}`}></p>
                            <p className={`${shimmer}`}></p>
                            <p className={`${shimmer}`}></p>
                        </div>
                        <div className={`${shimmer} container flex gap-3 justify-around`}>
                            {/* UpdateMoviebutton */}
                            <Link
                                href={`#`}
                                className={`border rounded-lg p-2 duration-500`}
                            >
                            </Link>
                            {/* DeletMovieButton */}
                            <form
                                action={`#`}
                            >
                                <button type="submit" className={`${shimmer} border p-2 duration-500 `}>
                                </button>
                            </form>
                        </div>
                    </div>
                    <hr className={`${shimmer} w-full border-colour`} />
                </div>
            </div >
        </div >
    )
}
export default SearchMoviesSkeleton