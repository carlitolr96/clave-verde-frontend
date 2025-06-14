import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { Location } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Hero from "../components/Hero";
// import Partner from "../components/Partner"
import ContactUs from "../components/ContactUs";
// import Testimonials from "../components/Testimonials"
import FeacturedDestination from '../components/FeacturedDestination';
import SectionText from "../components/SectionText";
// import ServicesTypes from '../components/ServicesTypes';

interface LocationState {
  scrollTo?: string;
}

const Home = () => {
  // Indicamos que location.state tiene tipo LocationState o undefined
  const location = useLocation() as Location & { state?: LocationState };

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        offset: -50,
        duration: 600,
      });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <div id="home-page"><Hero /></div>
      {/* <Partner /> */}
      <div id="rooms-card"><FeacturedDestination /></div>
      <div id="experience-sesion"><SectionText /></div>
      {/* <div id="services-types"><ServicesTypes /></div> */}
      {/* <AboutUs /> */}
      {/* <Testimonials /> */}
      <div id="contact-us"><ContactUs /></div>
    </>
  );
}

export default Home;
