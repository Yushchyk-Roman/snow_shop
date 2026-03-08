export default function Hero (){

    return (
        <section className="flex flex-col items-center min-h-[85vh] text-center max-w-360 w-full mx-auto">
            <div className="flex gap-2 items-center mb-8 border-secondary-style/80 border
             rounded-3xl bg-secondary-style/8 px-4 py-2 ">
                <div className="w-2 h-2 rounded-full bg-secondary-style animate-pulse-slow "></div>
                <p className="text-secondary-style ">Winter 2026 Collection</p>
            </div>

            <h1 className="text-[160px] font-bold tracking-tighter leading-tight">RIDE THE <span className=" bg-future-grad text-transparent bg-clip-text block">FUTURE</span></h1>
        <p className="text-2xl text-zinc-400 mb-16">
            Experience the next generation of snowboarding with cutting-edge <br /> technology and precision-engineered boards designed for champions.
        </p>

        <div className="flex gap-6 justify-center mb-12">
            <button className="bg-future-grad px-8 py-4 rounded-xl font-semibold text-lg ">
                Shop Collection
            </button>
            <button className="bg-btn-clr/50 border border-gray-500/40 px-8 py-4 rounded-xl font-semibold text-lg">
                View 3D Tour
            </button>
        </div>

        <div className="w-6 h-12 rounded-xl border border-white flex justify-center">
            <div className="bg-white w-2 h-2 rounded m-1 animate-scroll"></div>
        </div>
        </section>
    )
}