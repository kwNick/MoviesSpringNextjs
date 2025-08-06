import { FindAllByYearDesc, FindByGenre, FindByTitleLike } from "../../resources/data";
import TextFadeIn from "../../components/home/TextFadeIn";
import DevIntro from "../../components/home/DevIntro";
import RadioCardSection from "@/components/home/RadioCardSection";
import CardRevealSection from "@/components/home/CardRevealSection";
import LandingSection from "@/components/home/LandingSection";
import ThreeDCard from "@/components/home/ThreeDCard";

export default async function Home() {
  const col = "newmovie";
  // const topRatedSort = 'imdbrating,desc';
  const topRatedMovies = await FindByTitleLike(col, "", 1, 5, 'imdbrating,desc');
  // console.log(topRatedMovies);
  // const genre = "Comedy";
  // console.log(genre);
  const comedyMovies = await FindByGenre(col, "Comedy", 1, 5);

  const mostRecentMovies = await FindAllByYearDesc(col, 1, 5);

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">

      {/* Landing Header section */}
      <div className="relative p-2 w-full h-[85vh] flex flex-col items-center justify-around ">
        <LandingSection />
      </div>

      {/* Top rated movies section - Hover Reveal*/}
      <div className="py-10 px-5 hidden relative w-full h-[85vh] sm:flex items-center justify-center">
        <ThreeDCard movies={topRatedMovies._embedded.newmovie} />
      </div>

      {/* Intro to our movie collection and who we are section*/}
      <div className="w-full h-[85vh] flex flex-col items-center justify-center p-4 lg:px-5 xl:px-6">
        <TextFadeIn />
      </div>

      {/*Genre movies section - Hover Enlarge Animation*/}
      <div className="hidden relative w-full h-[85vh] sm:flex items-center justify-center">
        <CardRevealSection movies={comedyMovies._embedded.newmovie} genre={"Comedy"} />
      </div>

      <div className=" mb-4 py-3 px-2 w-full h-[85vh] flex items-center justify-center">
        {/* intro to dev section */}
        <div className=" mb-4 py-3 px-2 w-fit min-h-fit flex justify-center">
          <DevIntro />
        </div>

      </div>

      {/* Top Rated Movies Section - Radio Card Animation */}
      <div className="hidden relative w-full h-[85vh] pl-12 p-8 sm:flex items-center justify-center">
        <RadioCardSection movies={mostRecentMovies._embedded.newmovie} />
      </div>
      {/* 
      <div className="w-full h-[50vh] flex items-center justify-evenly">
        <TiltMouseCard />
        <TiltCard />
        <MouseTransformClsx />
      </div> */}

      {/* <HorizontalScroll /> */}

      {/* <AutoScroll /> */}

      {/* <div className="w-full h-[40vh] flex items-center justify-center">
        <MagneticButton />
      </div> */}

      {/* <HorizontalParallax /> */}

      {/* <DragScroll /> */}

      {/* <div className="w-full h-[60vh] flex items-center justify-center">
        <ScrollFadeIn />
      </div> */}

      {/* <div className="w-full h-[30vh] flex items-center justify-center">
        <ElasticButton />
      </div> */}

      {/* <div className=" w-full h-[40vh] flex items-center justify-center">
        <MagneticImage />
      </div> */}

      {/* <div className=" w-full h-[40vh] flex items-center justify-center tracking-widest leading-9">
        <WaveText />
      </div> */}

    </main>
  );
}
