import Link from "next/link";
import { FindByTitleLike } from "./resources/data";
import { Movie } from "./resources/definitions";
import TextFadeIn from "./components/TextFadeIn";
// import HomeCursor from "./components/HomeCursor";

export default async function Home() {
  const movies = await FindByTitleLike();

  return (
    <main className="w-full flex flex-col items-center">

      {/* Landing Header section */}
      <div className="m-2 p-2 w-full h-[30vh] flex items-center justify-center animate-headerFadeIn">
        <h1 className="relative landingHeader text-6xl lg:text-7xl xl:text-8xl border-accent after:h-[2%] after:absolute after:bg-accent after:bottom-[-8%] after:left-0 after:animate-lineLandingHeaderAnim">
          MovieRecs
        </h1>
      </div>

      {/* Top rated movies section */}
      <div className="list h-[65vh] w-[80vw] flex items-center gap-x-6 ">
        {movies._embedded.movie.map((x: Movie, idx: number) => {
          const href = x._links.self.href;
          const idMatch = href.match(/\/([^\/]+)$/);
          const id = idMatch ? idMatch[1] : "";

          // make the movie cards responsive so that the genres can fit and not mess up the size of the card and the screen
          return (
            <Link href={`/movies/${id}`} key={idx} className="relative item w-full h-3/5 px-2 py-1 border rounded-lg border-contrast bg-colour text-contrast transition-all ease-in duration-300 brightness-0 flex items-center animate-moviesFadeIn">
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <p>{x.title}</p>
                {/* <p className="">{x.genres}</p> */}
                <p>Rating: {x.rating}</p>
                <p>UserId: {x.userId}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Intro to our movie collection and who we are section*/}
      <div className="snowShadow relative w-full h-[60vh] flex flex-col items-center justify-center text-center p-4 lg:px-5 xl:px-6 gap-y-4 before:absolute before:bottom-[-3%] before:left-50% before:w-[50%] before:h-[50%] before:bg-snow before:rounded-full ">
        <p className="text-xl xl:text-3xl animate-textFadeIn animTextScroll">Movies for Everyone!</p>
        <TextFadeIn />
        {/* <SnowFall /> */}
      </div>

      {/* Top rated movies section */}
      <div className="list h-[65vh] w-[80%] flex items-center gap-x-6 ">
        {movies._embedded.movie.map((x: Movie, idx: number) => {
          const href = x._links.self.href;
          const idMatch = href.match(/\/([^\/]+)$/);
          const id = idMatch ? idMatch[1] : "";
          // make the movie cards responsive so that the genres can fit and not mess up the size of the card and the screen
          return (
            <Link href={`/movies/${id}`} key={idx} className="item w-full h-3/5 px-2 py-1 border rounded-lg border-contrast bg-colour text-contrast transition-all ease-in duration-300 brightness-0 flex items-center animate-moviesFadeIn">
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <p>{x.title}</p>
                {/* <p className="">{x.genres}</p> */}
                <p>Rating: {x.rating}</p>
                <p>UserId: {x.userId}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* intro to dev section */}
      <div className="mb-4 py-3 px-2 w-full min-h-fit flex justify-center">
        <div className="w-[50vw] min-h-fit text-colour bg-transparent border border-colour rounded-lg flex flex-col items-center gap-y-3 p-2 lg:p-3 xl:p-4">
          <section>
            <p className="text-lg lg:text-xl">
              <span>Dev:</span> Nickolas Piraino
            </p>
          </section>
          <section className="text-center">
            <p className="lg:text-lg">
              This project is mainly used to practice and showcase my software development skills using nextjs front-end framework, springboot back-end framework as an api layer to connect the movie data stored in a mongo database to the front-end user client. Most animations are created using css or tailwind css.
            </p>
          </section>
        </div>
      </div>

    </main>
  );
}
