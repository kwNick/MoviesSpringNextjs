import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./../components/navbar/Navbar";
import { hind } from "../resources/fonts";
import Footer from "./../components/footer/Footer";
import { FavoritesProvider } from "@/context/FavoritesContext";
// import HomeCursor from "./components/cursors/HomeCursor";
// import RisingBlocks from "./components/RisingBlocks";

export const metadata: Metadata = {
  title: "MovieRecs - Movie Recommendations App",
  description: "Discover your next favorite movie with MovieRecs! Explore personalized recommendations, top-rated films, and hidden gems across all genres. Start your cinematic journey today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hind.className} relative antialiased max-w-screen min-h-screen tracking-wide selection:bg-fuchsia-300 scroll-smooth cursor-none`}
      >
        <FavoritesProvider>
          {/* cursor */}
          {/* <HomeCursor /> */}

          <header className="sticky top-0 z-20">
            <Navbar />
          </header>

          <div className="footBlur relative w-full min-h-[150%] bg-contrast z-10">
            {children}
          </div>

          <footer className=" w-full min-h-[50vh] flex flex-col justify-center bg-colour text-contrast border-t-2 border-accent md:sticky md:bottom-0 md:z-0">
            <Footer />

            <div className="m-auto w-3/5 flex items-center justify-center text-center">
              <h1 className="text-3xl w-full h-full">
                Sticky Footer!
              </h1>
            </div>
          </footer>

          {/*RisingBlocksAnimation  */}
          {/* <RisingBlocks /> */}
        </FavoritesProvider>
      </body>
    </html>
  );
}
