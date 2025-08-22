import { FindBySearch } from "../../resources/data";
import TextFadeIn from "../../components/home/TextFadeIn";
import DevIntro from "../../components/home/DevIntro";
import RadioCardSection from "@/components/home/RadioCardSection";
import CardRevealSection from "@/components/home/CardRevealSection";
import LandingSection from "@/components/home/LandingSection";
import ThreeDCard from "@/components/home/ThreeDCard";
import CallToAction from "@/components/home/CallToAction";

export default async function Home() {

  // const topRatedMovies = await FindByTitleLike("newmovie", "", 1, 5, 'imdbrating,desc&sort=title,asc'); //change
  const topRatedMovies = await FindBySearch("", undefined, 1, 5, 'imdbrating,desc&sort=title,asc');

  // const comedyMovies = await FindByGenre("newmovie", "Comedy", 1, 5, 'imdbrating,desc&sort=title,asc'); //change
  const comedyMovies = await FindBySearch(undefined, "Comedy", 1, 5, 'imdbrating,desc&sort=title,asc');

  // const mostRecentMovies = await FindByTitleLike("newmovie", "", 1, 5, 'year,desc&sort=imdbrating,desc'); //change
  const mostRecentMovies = await FindBySearch("", undefined, 1, 5, 'year,desc&sort=imdbrating,desc');

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">

      {/* Landing Header section */}
      <div className="relative p-2 w-full h-[85vh] flex flex-col items-center ">
        <LandingSection />
      </div>

      {/* Top rated movies section - Hover Reveal*/}
      <div className="py-10 px-5 hidden relative w-full h-[85vh] sm:flex items-center justify-center">
        <ThreeDCard movies={topRatedMovies._embedded.newmovie} />
      </div>

      {/* Intro to our movie collection and who we are section*/}
      <div className="bg-colour w-full h-[85vh] flex flex-col items-center justify-center p-4 lg:px-5 xl:px-6">
        <TextFadeIn />
      </div>

      {/*Genre movies section - Hover Enlarge Animation*/}
      <div className="hidden relative w-full h-[85vh] sm:flex items-center justify-center">
        <CardRevealSection movies={comedyMovies._embedded.newmovie} genre={"Comedy"} />
      </div>

      <div className=" mb-4 py-3 px-2 w-full h-[75vh] flex items-center justify-center">
        {/* intro to dev section */}
        <div className=" mb-4 py-3 px-2 w-fit min-h-fit flex justify-center">
          <DevIntro />
        </div>

      </div>

      {/* Top Rated Movies Section - Radio Card Animation */}
      <div className="hidden relative bg-colour w-full h-[85vh] pl-12 p-8 sm:flex items-center justify-center">
        <RadioCardSection movies={mostRecentMovies._embedded.newmovie} />
      </div>

      <div className="w-full  flex items-center justify-center">
        <CallToAction />
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
