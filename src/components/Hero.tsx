import { FaLocationArrow } from "react-icons/fa6";
import { LuCalendarCheck2, LuCalendarX2 } from "react-icons/lu";
import { MdPerson } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import TitleSection from "./TitleSection"
import { useTranslation } from "react-i18next";

function Hero() {

    const { t } = useTranslation();

    return (
        <div className="relative h-screen bg-no-repeat bg-cover bg-center bg-[url('/Hero.jpg')]" id="home-page">
            <div className="absolute inset-0 bg-black/70 z-0" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 xl:px-32 text-white">
                <div className="flex items-center space-x-2.5 border border-green-500/30 rounded-full bg-green-500/20 p-1 text-sm text-white">
                    <p className="pl-3">Hotel Boutique-Ecolodge</p>
                    <div className="flex items-center space-x-1 bg-ecolodge text-white border border-green-500 rounded-2xl px-3 py-1">
                        <p>Las Terrenas</p>
                        <FaLocationArrow />
                    </div>
                </div>

                <TitleSection
                    title={t("hero.title")}
                    subTitle={t("hero.subTitle")}
                />

                <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto max-md:w-full">
                    {/* <div className="max-md:w-full md:w-auto">
                        <div className="flex items-center gap-2">
                            <IoLocationOutline />
                            <label htmlFor="destinationInput">País de Origen</label>
                        </div>
                        <input
                            list="destinations"
                            id="destinationInput"
                            type="text"
                            className="max-md:w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                            placeholder="Ingrese su país de origen"
                            required
                        />
                    </div> */}

                    <div className="max-md:w-full md:w-auto">
                        <div className="flex items-center gap-2">
                            <LuCalendarCheck2 />
                            <label htmlFor="checkIn">Llegada</label>
                        </div>
                        <input
                            id="checkIn"
                            type="date"
                            className="max-md:w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                        />
                    </div>

                    <div className="max-md:w-full md:w-auto">
                        <div className="flex items-center gap-2">
                            <LuCalendarX2 />
                            <label htmlFor="checkOut">Salida</label>
                        </div>
                        <input
                            id="checkOut"
                            type="date"
                            className="max-md:w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                        />
                    </div>

                    <div className="max-md:w-full md:w-auto">
                        <div className="flex items-center gap-2">
                            <MdPerson />
                            <label htmlFor="guests">Personas</label>
                        </div>
                        <input
                            min={1}
                            max={4}
                            id="guests"
                            type="number"
                            className="max-md:w-full md:max-w-16 rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                            placeholder="0"
                        />
                    </div>

                    <button className="max-md:w-full flex items-center justify-center gap-1 bg-primary px-8 py-2.5 rounded-full text-white my-auto cursor-pointer max-md:py-1">
                        <IoSearchSharp />
                        <span>Buscar</span>
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Hero;