import MovieListContainer from "./MovieListContainer"

const MovieList = () => {
  return (
    <div className=" relative bg-accent w-full h-[120vh] flex-col items-center justify-center ">
        <div className="w-full h-[25vh] flex items-center justify-center">
            <h1 className=" text-5xl lg:text-8xl text-contrast underline tracking-wide font-sans">Extra Movies</h1>
        </div>

        <div className="w-full h-[clamp(75vh,75%,90vh)] flex items-center justify-center">
            <div className="bg-colour text-contrast w-1/2 h-full  rounded-lg py-6 lg:py-10">
                {/* {Total Movies List Section } */}
                {/* <div ref={containerRef} className="py-6 lg:py-10 px-6 lg:px-12 w-full h-full max-h-[90vh] rounded-lg overflow-y-auto scrollbar-thumb-accent">
                    <ul className="w-full h-full flex flex-col items-start justify-start text-lg lg:text-xl 2xl:text-2xl rounded-lg">
                        {extraMoviesList.map((x: ExtraMoviesList, idx: number) => {
                            return (
                                <li key={idx} className="border-b-2 border-accent py-3 w-full flex items-start justify-between hover:text-accent transition-colors duration-300 hover:[text-shadow:0px_3px_5px_var(--accent)]">
                                    <div>{x.title}</div> <div>({x.year})</div>
                                </li>
                            )
                        })}
                    </ul>
                </div> */}
                <MovieListContainer />
            </div>
        </div>
    </div>
  )
}
export default MovieList