import { NewMovie } from "@/resources/definitions"

const ShowMovie = ({ movie }: { movie: NewMovie }) => {
    return (
        <div className="w-4/5 flex flex-col gap-y-6 lg:gap-y-8 xl:gap-y-10 text-lg lg:text-xl xl:text-2xl text- border border-colour rounded-2xl p-6 lg:p-8 xl:p-10 bg-black/30 [text-shadow:_0px_3px_3px_var(--contrast)]">


            <div>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Rated:</strong> {movie.rated}</p>
                <p><strong>Released:</strong> {movie.released}</p>
                <p><strong>Runtime:</strong> {movie.runtime}</p>
                <p><strong>Actors:</strong> {movie.actors}</p>
                <p><strong>Directors:</strong> {movie.director}</p>
                <p><strong>Writer:</strong> {movie.writer}</p>
                {/* <p><strong>Language:</strong> {movie.language}</p> */}
                {/* <p><strong>Country:</strong> {movie.country}</p> */}
                {/* <p><strong>Poster:</strong> {movie.poster}</p> */}
                {/* <p><strong>Type:</strong> {movie.type}</p> */}
                <p><strong>Plot:</strong> {movie.plot}</p>
                <br />
                <p><strong>Awards:</strong> {movie.awards}</p>
                <p><strong>IMDB Rating:</strong> {movie.imdbrating}</p>
                <p><strong>IMDB Votes:</strong> {movie.imdbvotes}</p>
                <p><strong>MetaScore:</strong> {movie.metascore}</p>
                <p><strong>Box Office:</strong> {movie.boxoffice}</p>
            </div>


        </div>
    )
}
export default ShowMovie