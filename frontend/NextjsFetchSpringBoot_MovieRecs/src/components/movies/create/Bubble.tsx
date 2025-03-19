const Bubble = () => {
    return (
        <div className="absolute top-[50%] left-[10%] w-[20vw] h-[20vw] rounded-full [zoom:_0.5] [box-shadow:_inset_0_0_25px_rgba(255,255,255,0.25),_0_0_25px_rgba(255,255,255,0.25)] before:absolute before:top-[12%] before:left-[26%] before:w-[17%] before:h-[17%] before:rounded-full before:bg-white before:[filter:_blur(2px)] before:z-10 after:absolute after:top-[30.5%] after:left-[41.5%] after:w-[10%] after:h-[10%] after:rounded-full after:bg-white after:[filter:_blur(2px)] after:z-10">

            <span className="absolute inset-0 rounded-full border-l-2 border-l-snow [filter:_blur(2.5px)]" />
            <span className="absolute inset-0 rounded-full border-r-4 border-r-accent [filter:_blur(2.5px)]" />
            <span className="absolute inset-0 rounded-full border-t-4 border-t-[#ffeb3b] [filter:_blur(2.5px)] rotate-12" />
            <span className="absolute inset-[2%] rounded-full border-b-4 border-b-white [filter:_blur(2.5px)] -rotate-45" />
            <span className="absolute inset-[3%] rounded-full border-l-8 border-l-accent [filter:_blur(2.5px)]" />
            <span className="absolute inset-[4%] rounded-full bg-gradient-to-br from-white/10 to-transparent" />

        </div>
    )
}
export default Bubble