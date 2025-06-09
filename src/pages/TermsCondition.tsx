import TitleSection from '../components/TitleSection';

export default function TérminosCondición() {
    return (

        <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-28 px-4 md:px-16 lg:px-28">
            <div>
                <TitleSection
                    title="Terms and Conditions"
                    subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />

            </div>

            <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 rounded-lg shadow-lg p-6">

            </div >
        </div>
    );
}
