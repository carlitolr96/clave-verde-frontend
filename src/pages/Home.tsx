import Hero from "../components/Hero"
// import Partner from "../components/Partner"
// import AboutUs from "../components/AboutUs"
import ContactUs from "../components/ContactUs"
// import Testimonials from "../components/Testimonials"
import FeacturedDestination from '../components/FeacturedDestination'
import SectionText from "../components/SectionText"
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Pagina de Inicio - Clave Verde"
        description="Descubre tu destino ecológico perfecto"
      />
      <Hero />
      {/* <Partner /> */}
      <FeacturedDestination />
      <SectionText />
      {/* <AboutUs /> */}
      {/* <Testimonials /> */}
      <ContactUs />
    </>
  )
}

export default Home