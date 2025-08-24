const LandingSection = () => {
    return (
        <>
            <video className="absolute inset-0 z-[-10] w-full h-full object-cover animate-bg-fade-in" autoPlay loop muted>
                <source src={"/videos/theaterPan.mp4"} type="video/mp4" />
            </video>

            <div className="w-full h-full flex flex-col gap-y-5 lg:gap-y-8 items-center justify-center animate-header-fade-in ">
                <h1 className="relative landingHeader text-7xl lg:text-8xl xl:text-9xl tracking-wide border-accent after:h-[2%] after:absolute after:bg-accent after:bottom-[-8%] after:left-0 after:animate-line-landing-header-anim ">
                    MovieRecs
                </h1>
                <div className="absolute bottom-5 right-5 text-white text-center">
                    <p className="uppercase lg:text-lg">
                        More Than A Movie
                    </p>
                    <p className="uppercase lg:text-lg">
                        Captivate Imagination
                    </p>
                </div>
            </div>
        </>
    )
}
export default LandingSection