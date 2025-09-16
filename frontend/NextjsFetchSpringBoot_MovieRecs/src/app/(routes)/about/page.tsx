import Link from "next/link"

const page = () => {
    return (
        <div className="w-full min-h-[120vh] flex flex-col items-center space-y-8 lg:space-y-10 xl:space-y-12 p-4 lg:px-5 xl:px-6 py-6 lg:py-7 xl:py-8">
            <div className="text-accent text-3xl lg:text-4xl xl:text-6xl flex items-center justify-center underline">
                <h1>About MovieRecs</h1>
            </div>
            <div className="w-full min-h-[200vh] border-x-2 border-colour/40">
                <div className="w-full h-full flex flex-col items-center justify-start space-y-4 lg:space-y-6 xl:space-y-8">

                    <div className="w-full min-h-[70vh] pt-16 lg:pt-24 xl:pt-28 flex justify-start ">
                        <div className="min-w-1/5 h-fit border-b-2 border-colour/40 pr-10 lg:pr-12 xl:pr-14">
                            <div className="flex justify-end">
                                <h2 className="text-2xl lg:text-3xl xl:text-4xl text-accent border-b-2 border-accent/40 duration-300">Our Mission</h2>
                            </div>
                        </div>
                        <div className="flex-1 border-l-2 border-colour/40">
                            <p className="w-1/2 text-base lg:text-lg xl:text-xl text-justify indent-8 border-l-2 border-accent/40 pl-8 lg:pl-12 xl:pl-14 duration-300">
                            At MovieRecs, our mission is to provide a comprehensive and user-friendly platform for movie enthusiasts to discover, explore, and share their favorite films. We aim to create a vibrant community where users can find personalized movie recommendations based on their unique tastes and preferences. By leveraging advanced algorithms and user-generated content, we strive to enhance the movie-watching experience, making it easier for individuals to find hidden gems and timeless classics alike. Our commitment is to foster a love for cinema by connecting people through the magic of movies.
                            </p>
                        </div>
                    </div>

                    <div className="w-full min-h-[70vh] flex justify-start">
                        <div className="min-w-2/5 h-fit border-b-2 border-colour/40 pr-10 lg:pr-12 xl:pr-14">
                            <div className="flex justify-end">
                                <h2 className="text-2xl lg:text-3xl xl:text-4xl text-accent border-b-2 border-accent/40">About Us</h2>
                            </div>
                        </div>
                        <div className="flex-1 border-l-2 border-colour/40">
                            <p className="w-1/2 text-base lg:text-lg xl:text-xl text-justify indent-8 border-l-2 border-accent/40 pl-8 lg:pl-12 xl:pl-14">
                            MovieRecs was founded in 2025 by a passionate movie lover and tech enthusiast who recognized the need for a more personalized approach to movie recommendations. Our team is dedicated to curating a diverse collection of films from various genres, eras, and cultures, ensuring that there is something for everyone. We believe that movies have the power to inspire, entertain, and bring people together, and we are committed to creating a platform that celebrates this art form. With a focus on user experience and community engagement, MovieRecs continues to evolve and grow, driven by our shared love for cinema and our desire to help others discover their next favorite movie.
                            </p>
                        </div>
                    </div>

                    <div className="w-full min-h-[70vh] flex justify-start">
                        <div className="min-w-3/5 h-fit border-b-2 border-colour/40 pr-10 lg:pr-12 xl:pr-14">
                            <div className="flex justify-end">
                                <h2 className="text-2xl lg:text-3xl xl:text-4xl text-accent border-b-2 border-accent/40">Contact Us</h2>
                            </div>
                        </div>
                        <div className="flex-1 border-l-2 border-colour/40">
                            <p className="w-1/2 text-base lg:text-lg xl:text-xl text-justify indent-8 border-l-2 border-accent/40 pl-8 lg:pl-12 xl:pl-14">
                            We would love to hear from you! Whether you have questions, feedback, or suggestions, please feel free to reach out to us. You can contact us via email at <Link href="mailto:"
                            className="text-accent underline hover:text-accent/70 transition duration-300">example@email.com</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default page