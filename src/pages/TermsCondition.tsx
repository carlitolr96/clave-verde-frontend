import TitleSection from '../components/TitleSection';
import SEO from "../components/SEO";
import Breadcrumb from '../components/Breadcrumb';

export default function TérminosCondición() {
    return (
        <>
        <SEO
                title="Terminos y Condiciones - Clave Verde"
                description="Conoce nuestros Terminos y Condiciones"
            />        
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-24 px-4 md:px-16 lg:px-28">
            <div>
                <Breadcrumb />
                <TitleSection
                    title="Terms and Conditions"
                    subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />

            </div>

            <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 rounded-lg shadow-lg p-6">

            </div >
        </div>
        </>
    );
}
