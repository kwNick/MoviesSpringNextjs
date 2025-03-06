import Link from "next/link";
import { FindByTitleLike, FindNewMovieByTitleLike } from "../../resources/data";
import { Movie, NewMovie } from "../../resources/definitions";
import TextFadeIn from "../../components/home/TextFadeIn";
import DevIntro from "../../components/home/DevIntro";
import RadioCard from "@/components/home/RadioCard";
import TiltMouseCard from "@/components/home/TiltMouseCard";
import MagneticButton from "@/components/home/MagneticButton";
import ScrollFadeIn from "@/components/home/ScrollFadeIn";
import ElasticButton from "@/components/home/ElasticButton";
import MagneticImage from "@/components/home/MagneticImage";
import WaveText from "@/components/home/WaveText";
import TiltCard from "@/components/home/TiltCard";
import MouseTransformClsx from "@/components/home/MouseTransformClsx";

export default async function Home() {
  const movies = await FindByTitleLike();
  // console.log(movies);

  const newMovies = await FindNewMovieByTitleLike();
  // console.log(newMovies);

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">

      {/* Landing Header section */}
      <div className="relative p-2 w-full h-[85vh] flex flex-col items-center justify-around ">
        <video className="absolute inset-0 z-[-10] w-full h-full object-cover animate-bgFadeIn" autoPlay loop muted>
          <source src={"/videos/theaterPan.mp4"} type="video/mp4" />
        </video>

        <div className="w-full h-full flex items-center justify-center animate-headerFadeIn">
          <h1 className="relative landingHeader text-7xl lg:text-8xl xl:text-9xl border-accent after:h-[2%] after:absolute after:bg-accent after:bottom-[-8%] after:left-0 after:animate-lineLandingHeaderAnim">
            MovieRecs
          </h1>
        </div>
      </div>

      {/* Top rated movies section */}
      <div className="hidden relative w-full h-[85vh] sm:flex items-center justify-center">
        <div className="absolute inset-0 bg-black z-[-10] opacity-0 animate-bgFadeOut animTextScroll" />

        <div className=" w-3/4 h-3/4 flex items-center justify-center gap-x-8 ">

          <div className="text-center relative w-full h-full flex items-center justify-center rounded-full [box-shadow:0_0_5px_1px_rgba(239,68,68,.3)] overflow-hidden">
            <div className={`absolute inset-0 rounded-lg [background-image:_url('/pictures/retroTv.jpg')] bg-cover object-contain bg-[50%] z-[-10] before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.5)] before:z-[-10]`} />
            {/* <Image src={"/pictures/retroTv.jpg"} width={100} height={100} alt={"retroTV background"} className={`absolute w-full h-full inset-0 rounded-lg object-contain z-[-10] before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.4)] before:z-[-10]`} /> */}

            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent [text-shadow:0_0_5px_var(--accent),_0_0_1px_var(--colour)]">
              Top Rated Movies
            </h2>
          </div>

          <div className="hidden list px-6 h-full w-4/5 sm:flex items-center justify-center gap-x-4 ">
            {movies._embedded.movie.map((x: Movie, idx: number) => {
              const href = x._links.self.href;
              // console.log(href);
              const idMatch = href.match(/\/([^\/]+)$/);
              const id = idMatch ? idMatch[1] : "";
              // console.log(id);
              return (
                <Link href={`/movies/${id}`} key={idx} className=" item w-full h-1/2 px-2 py-1 border rounded-lg border-contrast bg-colour text-contrast transition-all ease-in duration-300 brightness-0 text-xs md:text-sm lg:text-base flex items-center justify-center animate-moviesFadeIn">
                  <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <p>{x.title}</p>
                    <p>Rating: {x.averageRating}</p>
                    <p>Released: {x.releaseYear}</p>
                    <p>Genres: {x.genres.join(" ")}</p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* Intro to our movie collection and who we are section*/}
      <div className="w-full h-[85vh] flex flex-col items-center justify-center p-4 lg:px-5 xl:px-6">
        <TextFadeIn />
      </div>

      {/* Top rated movies section */}
      <div className="hidden relative w-full h-[85vh] sm:flex items-center justify-center">

        <div className="absolute inset-0 bg-black z-[10] opacity-0 animate-bgFadeOut animTextScroll pointer-events-none" />

        <div className=" h-3/4 w-3/4 flex items-center justify-center gap-x-8">

          <div className="hidden text-center relative w-full h-full lg:flex items-center justify-center rounded-lg shadow-accent [box-shadow:0_0_5px_1px_rgba(239,68,68,.3)] overflow-hidden">
            <div className={`absolute inset-0 rounded-lg [background-image:_url('/pictures/camera.jpg')] bg-cover object-contain bg-[50%] z-[-10] before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.5)] before:z-[-10]`} />

            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent [text-shadow:0_0_5px_var(--accent),_0_0_1px_var(--colour)]">
              Top Rated Movies
            </h2>
          </div>
          {/* <h2 className="text-3xl lg:text-4xl xl:text-5xl text-accent text-center">Top Rated Movies</h2> */}
          <div className="w-full h-full flex items-center gap-x-4">
            {movies._embedded.movie.map((x: Movie, idx: number) => {
              const href = x._links.self.href;
              const idMatch = href.match(/\/([^\/]+)$/);
              const id = idMatch ? idMatch[1] : "";
              return (
                <Link href={`/movies/${id}`} key={idx} className="group relative w-2/5 h-1/2 border rounded-lg border-contrast bg-colour text-contrast overflow-hidden text-xs md:text-sm lg:text-base duration-500 hover:h-3/5 animate-moviesFadeIn">

                  <div className="rounded-lg w-full h-4/5 block" >
                    <div className={`rounded-lg bg-contrast w-full h-full [background-image:_url('/pictures/moviePic.jpg')] bg-cover bg-[100%] [filter:_blur(1px)] group-hover:[filter:_none] duration-300 before:absolute before:inset-0 before:bg-[rgb(0,0,0,0.4)] before:z-[-10] group-hover:before:bg-[rgb(0,0,0,0.0)] before:transition-all before:duration-300`} />
                  </div>

                  <div className="p-2 w-full min-h-fit flex flex-col items-center justify-start rounded-lg bg-colour text-center group-hover:-translate-y-[100%] duration-500 ">
                    <div className="w-full h-fit truncate ">
                      <p>{x.title}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 duration-500 text-wrap">
                      <p>Rating: {x.averageRating}</p>
                      <p>released: {x.releaseYear}</p>
                      <p>genres: {x.genres.join(" ")}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] flex items-center justify-center">
        {/* intro to dev section */}
        <div className=" mb-4 py-3 px-2 w-fit min-h-fit flex justify-center">
          <DevIntro />
        </div>

      </div>

      {/* Radio Card Animation */}
      <div className="hidden relative w-full h-[85vh] sm:flex items-center justify-center">
        <div className="absolute inset-0 bg-black z-[10] opacity-0 animate-bgFadeOut animTextScroll pointer-events-none" />

        <div className="w-4/5 h-full flex flex-nowrap items-center justify-center overflow-hidden">
          {
            newMovies._embedded.newmovie.map((x: NewMovie, idx: number) => {
              return (
                <RadioCard key={idx} idx={idx} title={x.title} rated={x.rated} released={x.released} genre={x.genre} description={x.plot} poster={x.poster} />
              )
            })
          }
        </div>
      </div>

      <div className="w-full h-[50vh] flex items-center justify-evenly">
        <TiltMouseCard />
        <TiltCard />
        {/* <MouseTransformClsx /> */}
      </div>

      <div className="w-full h-[40vh] flex items-center justify-center">
        <MagneticButton />
      </div>

      <div className="w-full h-[60vh] flex items-center justify-center">
        <ScrollFadeIn />
      </div>

      <div className="w-full h-[30vh] flex items-center justify-center">
        <ElasticButton />
      </div>

      <div className=" w-full h-[40vh] flex items-center justify-center">
        <MagneticImage />
      </div>

      <div className=" w-full h-[40vh] flex items-center justify-center tracking-widest leading-9">
        <WaveText />
      </div>

    </main>
  );
}
