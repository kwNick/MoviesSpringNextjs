const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

const UpdateMovieFormSkeleton = () => {
    return (
        <form className={`${shimmer} py-2 w-full min-h-full flex flex-col gap-y-3 items-center `} >
            <div className={`${shimmer} flex flex-col items-center`}>
                <label htmlFor="movieId" className={`${shimmer} border rounded-md`}></label>
                <input className={`${shimmer} border border-colour rounded-lg text-colour`}
                    id="movieId"
                    name="movieId"
                    type="number"
                    // placeholder={"movieId"}
                    required
                />
            </div>

            <div className={`${shimmer} flex flex-col items-center`}>
                <label htmlFor="genres" className={`${shimmer} border rounded-md`}></label>
                <input className={`${shimmer} border border-colour rounded-lg text-colour`}
                    id="genres"
                    name="genres"
                    type="text"
                    // placeholder={"genres: Action|Comedy"}
                    required
                />
            </div>
            <div className={`${shimmer} flex flex-col items-center`}>
                <label htmlFor="rating" className={`${shimmer} border rounded-md`}></label>
                <input className={`${shimmer} border border-colour rounded-lg text-colour`}
                    id="rating"
                    name="rating"
                    type="number"
                    // placeholder={"rating: 0-10"}
                    required
                    aria-describedby="rating-error"
                />
            </div>
            <div className={`${shimmer} flex flex-col items-center`}>
                <label htmlFor="title" className={`${shimmer} border rounded-md`}></label>
                <input className={`${shimmer} border border-colour rounded-lg text-colour`}
                    id="title"
                    name="title"
                    type="text"
                    // placeholder={"title"}
                    required
                />
            </div>
            <div className={`${shimmer} flex flex-col items-center`}>
                <label htmlFor="userId" className={`${shimmer} border rounded-md`}></label>
                <input className={`${shimmer} border rounded-md`}
                    id="userId"
                    name="userId"
                    type="number"
                    // placeholder={"userId"}
                    required
                />
            </div>
            <div className={`${shimmer} flex flex-col items-center`}>
                <label htmlFor="timestamp" className={`${shimmer} border rounded-md`}></label>
                <input className={`${shimmer} border border-colour rounded-lg text-colour`}
                    id="timestamp"
                    name="timestamp"
                    type="text"
                    // placeholder={"timestamp"}
                    readOnly
                />
            </div>
            <div className={`${shimmer} flex flex-col items-center`}>
                <button type="submit" className={`block border-2 border-colour rounded-lg p-2 disabled:bg-slate-300 duration-500`} >
                </button>
                <p className={`${shimmer}  relative opacity-0 mt-2 text-xs text-accent duration-500 opacity-100'}`}></p>
            </div>
        </form>
    )
}
export default UpdateMovieFormSkeleton