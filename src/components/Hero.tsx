function Hero() {
    return (
        <div className="relative h-screen bg-no-repeat bg-cover bg-center bg-[url('/src/assets/Hero.jpg')]">
            <div className="absolute inset-0 bg-black/70 z-0" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 xl:px-32 text-white">
                <div className="flex items-center space-x-2.5 border border-green-500/30 rounded-full bg-green-500/20 p-1 text-sm text-white">
                    <p className="pl-3">Hotel Boutique-Ecolodge</p>
                    <div className="flex items-center space-x-1 bg-ecolodge text-white border border-green-500 rounded-2xl px-3 py-1">
                        <p>Las Terrenas</p>
                        <svg width="14" height="11" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.5h14M9.5 1 15 6.5 9.5 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <h1 className="font-playfair text-4xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
                    Descubre tu destino ecológico perfecto
                </h1>
                <p className="max-w-130 mt-2 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea sit voluptas nihil qui culpa molestias non maiores a! Delectus.
                </p>
            </div>
        </div>
    );
}

export default Hero;
