import Link from "next/link"
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent ';
const SearchMoviesSkeleton = () => {
    return (
        <div className={` w-full h-[90%] overflow-hidden`}>
                <div className={` w-full h-[90%] flex flex-wrap justify-center overflow-hidden`}>

                    <div className={`${shimmer} relative w-2/5 h-[90%] flex flex-col p-3 m-3 items-center rounded-lg border border-colour/20 overflow-hidden`}>
                        {/* MovieDaTa */}
                        <div className={``}>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                        </div>
                        <div className={`container flex gap-3 justify-around overflow-hidden`}>
                            {/* UpdateMoviebutton */}
                            <Link
                                href={`#`}
                                className={`w-20 h-12 border border-colour/20 rounded-lg p-2 duration-500`}
                            >
                            </Link>
                            {/* DeletMovieButton */}
                            <form
                                action={`#`}
                                 className={``}
                            >
                                <button type="submit" className={` w-20 h-12 border border-colour/20 [box-shadow:_0_0_.5em_var(--colour)/20] p-2 duration-500 `}>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className={`${shimmer} relative w-2/5 h-[90%] flex flex-col p-3 m-3 items-center rounded-lg border border-colour/20 overflow-hidden`}>
                        {/* MovieDaTa */}
                        <div className={``}>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                        </div>
                        <div className={`container flex gap-3 justify-around overflow-hidden`}>
                            {/* UpdateMoviebutton */}
                            <Link
                                href={`#`}
                                className={`w-20 h-12 border border-colour/20 rounded-lg p-2 duration-500`}
                            >
                            </Link>
                            {/* DeletMovieButton */}
                            <form
                                action={`#`}
                                className={``}
                            >
                                <button type="submit" className={` w-20 h-12 border border-colour/20 [box-shadow:_0_0_.5em_var(--colour)/20] p-2 duration-500 `}>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className={`${shimmer} relative w-2/5 h-[90%] flex flex-col p-3 m-3 items-center rounded-lg border border-colour/20 overflow-hidden`}>
                        {/* MovieDaTa */}
                        <div className={``}>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                        </div>
                        <div className={`container flex gap-3 justify-around overflow-hidden`}>
                            {/* UpdateMoviebutton */}
                            <Link
                                href={`#`}
                                className={`w-20 h-12 border border-colour/20 rounded-lg p-2 duration-500`}
                            >
                            </Link>
                            {/* DeletMovieButton */}
                            <form
                                action={`#`}
                                 className={``}
                            >
                                <button type="submit" className={` w-20 h-12 border border-colour/20 [box-shadow:_0_0_.5em_var(--colour)/20] p-2 duration-500 `}>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className={`${shimmer} relative w-2/5 h-[90%] flex flex-col p-3 m-3 items-center rounded-lg border border-colour/20 overflow-hidden`}>
                        {/* MovieDaTa */}
                        <div className={``}>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                            <p className={``}></p>
                        </div>
                        <div className={`container flex gap-3 justify-around overflow-hidden`}>
                            {/* UpdateMoviebutton */}
                            <Link
                                href={`#`}
                                className={`w-20 h-12 border border-colour/20 rounded-lg p-2 duration-500`}
                            >
                            </Link>
                            {/* DeletMovieButton */}
                            <form
                                action={`#`}
                                className={``}
                            >
                                <button type="submit" className={` w-20 h-12 border border-colour/20 [box-shadow:_0_0_.5em_var(--colour)/20] p-2 duration-500 `}>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
        </div >
    )
}
export default SearchMoviesSkeleton