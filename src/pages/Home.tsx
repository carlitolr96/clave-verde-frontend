import Hero from "../components/Hero"
import Partner from "../components/Partner"
import AboutUs from "../components/AboutUs"
import HotelCard from "../components/HotelCard"
import ContactUs from "../components/ContactUs"
import Testimonials from "../components/Testimonials"
// import SectionText from "../components/SectionText"

const Home = () => {
  return (
    <>
      <Hero />
      <div className="md:px-16 lg:px-36 w-full bg-white text-gray-800 px-6 py-10 pb-5 relative">
        <div className="container mx-auto max-w-7xl space-y-16">
          <Partner />
          <AboutUs />
          <HotelCard />
          <Testimonials />
          <ContactUs />
          {/* <SectionText /> */}
        </div>
      </div>
    </>
  )
}

export default Home