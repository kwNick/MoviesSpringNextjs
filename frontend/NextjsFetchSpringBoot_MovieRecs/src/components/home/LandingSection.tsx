const LandingSection = () => {
    return (
        <>
            <video className="absolute inset-0 z-[-10] w-full h-full object-cover animate-bgFadeIn" autoPlay loop muted>
                <source src={"/videos/theaterPan.mp4"} type="video/mp4" />
            </video>

            <div className="w-full h-full flex items-center justify-center animate-headerFadeIn">
                <h1 className="relative landingHeader text-7xl lg:text-8xl xl:text-9xl border-accent after:h-[2%] after:absolute after:bg-accent after:bottom-[-8%] after:left-0 after:animate-lineLandingHeaderAnim">
                    MovieRecs
                </h1>
            </div>
        </>
    )
}
export default LandingSection