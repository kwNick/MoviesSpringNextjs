import Link from "next/link";
import { FindByTitleLike } from "../../resources/data";
import { Movie } from "../../resources/definitions";
import TextFadeIn from "../../components/home/TextFadeIn";
import DevIntro from "../../components/home/DevIntro";
import RadioCard from "@/components/home/RadioCard";

export default async function Home() {
  const movies = await FindByTitleLike();
  // console.log(movies);

  return (
    <main className="w-full flex flex-col items-center justify-center">

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
      <div className=" w-full h-[85vh] flex flex-col items-center justify-center p-4 lg:px-5 xl:px-6">
        <div className="snowShadow relative w-3/4 h-3/4 flex flex-col items-center justify-center text-center gap-y-4 before:absolute before:bottom-[-3%] before:left-50% before:w-[50%] before:h-[50%] before:bg-accent before:rounded-full">
          <p className="text-xl xl:text-3xl animate-textFadeIn animTextScroll">Movies for Everyone!</p>
          <TextFadeIn />
        </div>
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
      <div className="w-full h-[85vh] flex items-center justify-center">
        <div className="w-4/5 h-full flex flex-nowrap items-center justify-center overflow-hidden">

          <RadioCard idx={0} title="Toy Story" description="adfa sf dfasdfasfas  af asdfasdf adsf asdf df sd" />

          <div className="group h-full flex flex-nowrap items-center justify-center overflow-hidden">
            <input type="radio" name="card" id="c1" className="hidden peer" />
            <label htmlFor="c1" className="mx-[10px] w-[100px] h-4/5 overflow-hidden flex items-end border rounded-3xl peer-checked:w-[600px] duration-500 [background-image:_url('/pictures/moviePic.jpg')] bg-cover">
              <div className="flex flex-nowrap">
                <div className="[margin:_15px] w-[50px] bg-snow rounded-full flex items-center justify-center">
                  1
                </div>
                <div className="h-[80px] w-[520px] flex flex-col justify-center overflow-hidden opacity-0 group-has-[.peer:checked]:opacity-100 transition-opacity duration-300">
                  <h4>
                    Winter
                  </h4>
                  <p>
                    Winter has so much to offer - creative activities
                  </p>
                </div>
              </div>
            </label>
          </div>

          <div className="group h-full flex flex-nowrap items-center justify-center overflow-hidden">
            <input type="radio" name="card" id="c2" className="hidden peer" />
            <label htmlFor="c2" className="mx-[10px] w-[100px] h-4/5 overflow-hidden flex items-end border rounded-3xl peer-checked:w-[600px] duration-500 [background-image:_url('/pictures/moviePic.jpg')] bg-cover">
              <div className="flex flex-nowrap">
                <div className="[margin:_15px] w-[50px] bg-snow rounded-full flex items-center justify-center">
                  2
                </div>
                <div className="h-[80px] w-[520px] flex flex-col justify-center overflow-hidden opacity-0 group-has-[.peer:checked]:opacity-100 transition-opacity duration-300">
                  <h4>
                    Winter
                  </h4>
                  <p>
                    Winter has so much to offer - creative activities
                  </p>
                </div>
              </div>
            </label>
          </div >

          <div className="group h-full flex flex-nowrap items-center justify-center overflow-hidden">
            <input type="radio" name="card" id="c3" className="hidden peer" />
            <label htmlFor="c3" className="mx-[10px] w-[100px] h-4/5 overflow-hidden flex items-end border rounded-3xl peer-checked:w-[600px] duration-500 [background-image:_url('/pictures/moviePic.jpg')] bg-cover">
              <div className="flex flex-nowrap">
                <div className="[margin:_15px] w-[50px] bg-snow rounded-full flex items-center justify-center">
                  3
                </div>
                <div className="h-[80px] w-[520px] flex flex-col justify-center overflow-hidden opacity-0 group-has-[.peer:checked]:opacity-100 transition-opacity duration-300">
                  <h4>
                    Winter
                  </h4>
                  <p>
                    Winter has so much to offer - creative activities
                  </p>
                </div>
              </div>
            </label>
          </div >

          <div className="group h-full flex flex-nowrap items-center justify-center overflow-hidden">
            <input type="radio" name="card" id="c4" className="hidden peer" />
            <label htmlFor="c4" className="mx-[10px] w-[100px] h-4/5 overflow-hidden flex items-end border rounded-3xl peer-checked:w-[600px] duration-500 [background-image:_url('/pictures/moviePic.jpg')] bg-cover">
              <div className="flex flex-nowrap">
                <div className="[margin:_15px] w-[50px] bg-snow rounded-full flex items-center justify-center">
                  4
                </div>
                <div className="h-[80px] w-[520px] flex flex-col justify-center overflow-hidden opacity-0 group-has-[.peer:checked]:opacity-100 transition-opacity duration-300">
                  <h4>
                    Winter
                  </h4>
                  <p>
                    Winter has so much to offer - creative activities
                  </p>
                </div>
              </div>
            </label>
          </div>

          <div className="group h-full flex flex-nowrap items-center justify-center overflow-hidden">
            <input type="radio" name="card" id="c5" className="hidden peer" />
            <label htmlFor="c5" className="mx-[10px] w-[100px] h-4/5 overflow-hidden flex items-end border rounded-3xl peer-checked:w-[600px] duration-500 [background-image:_url('/pictures/moviePic.jpg')] bg-cover">
              <div className="flex flex-nowrap">
                <div className="[margin:_15px] w-[50px] bg-snow rounded-full flex items-center justify-center">
                  5
                </div>
                <div className="h-[80px] w-[520px] flex flex-col justify-center overflow-hidden opacity-0 group-has-[.peer:checked]:opacity-100 transition-opacity duration-300">
                  <h4>
                    Winter
                  </h4>
                  <p>
                    Winter has so much to offer - creative activities
                  </p>
                </div>
              </div>
            </label>
          </div>

        </div>
      </div>

    </main>
  );
}
