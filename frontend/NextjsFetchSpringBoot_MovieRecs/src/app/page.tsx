import Link from "next/link";
import { FindByTitleLike } from "./resources/data";
import { Movie } from "./resources/definitions";
import TextFadeIn from "./components/home/TextFadeIn";
import DevIntro from "./components/home/DevIntro";

export default async function Home() {
  const movies = await FindByTitleLike();
  // console.log(movies);
  return (
    <main className="w-full flex flex-col items-center">

      {/* Landing Header section */}
      <div className="m-2 p-2 w-full h-[30vh] flex items-center justify-center animate-headerFadeIn">
        <h1 className="relative landingHeader text-6xl lg:text-7xl xl:text-8xl border-accent after:h-[2%] after:absolute after:bg-accent after:bottom-[-8%] after:left-0 after:animate-lineLandingHeaderAnim">
          MovieRecs
        </h1>
      </div>

      {/* Top rated movies section */}
      <div className="hidden list px-6 min-h-fit min-w-fit sm:flex items-center justify-center gap-x-4 ">
        {movies._embedded.movie.map((x: Movie, idx: number) => {
          const href = x._links.self.href;
          const idMatch = href.match(/\/([^\/]+)$/);
          const id = idMatch ? idMatch[1] : "";
          return (
            <Link href={`/movies/${id}`} key={idx} className=" item w-full h-fit px-2 py-1 border rounded-lg border-contrast bg-colour text-contrast transition-all ease-in duration-300 brightness-0 flex items-center justify-center animate-moviesFadeIn">
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <p>{x.title}</p>
                <p>Rating: {x.rating}</p>
                <p>UserId: {x.userId}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Intro to our movie collection and who we are section*/}
      <div className="snowShadow relative w-full h-[50vh] flex flex-col items-center justify-center text-center p-4 lg:px-5 xl:px-6 gap-y-4 before:absolute before:bottom-[-3%] before:left-50% before:w-[50%] before:h-[50%] before:bg-accent before:rounded-full ">
        <p className="text-xl xl:text-3xl animate-textFadeIn animTextScroll">Movies for Everyone!</p>
        <TextFadeIn />
      </div>

      {/* Top rated movies section */}
      <div className="hidden h-[45vh] w-[85vw] sm:flex items-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent">Top Rated Movies</h2>
        <div className="w-full h-full flex items-center gap-x-4">
          {movies._embedded.movie.map((x: Movie, idx: number) => {
            const href = x._links.self.href;
            const idMatch = href.match(/\/([^\/]+)$/);
            const id = idMatch ? idMatch[1] : "";
            return (
              <Link href={`/movies/${id}`} key={idx} className="group relative w-2/5 h-1/2 border rounded-lg border-contrast bg-colour text-contrast overflow-hidden text-xs md:text-sm lg:text-base duration-500 hover:h-3/5 animate-moviesFadeIn">

                <div className="rounded-lg w-full h-3/5 block" >
                  <div className={`rounded-lg bg-contrast w-full h-full [background-image:_url('./resources/pictures/moviePic.jpg')] bg-cover bg-[100%] [filter:_blur(1px)] group-hover:[filter:_none] duration-300`} />
                </div>

                <div className="p-2 w-full min-h-fit flex flex-col items-center justify-start rounded-lg bg-colour text-center group-hover:-translate-y-[50%] duration-500 ">
                  <p>{x.title}</p>
                  <span className="opacity-0 group-hover:opacity-100 duration-500">
                    <p>Rating: {x.rating}</p>
                    <p>UserId: {x.userId}</p>
                  </span>
                </div>

              </Link>
            );
          })}
        </div>
      </div>

      {/* intro to dev section */}
      <div className=" mb-4 py-3 px-2 w-fit min-h-fit flex justify-center">
        <DevIntro />
      </div>

    </main>
  );
}
