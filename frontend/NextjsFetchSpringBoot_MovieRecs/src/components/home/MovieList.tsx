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
                <MovieListContainer />
            </div>
        </div>
    </div>
  )
}
export default MovieList