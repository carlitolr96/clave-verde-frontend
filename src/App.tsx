import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PrivacyPolicies from './pages/PrivacyPolicies'
import TermsCondition from './pages/TermsCondition'
import Faq from './pages/Faq';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import NotFound from "./components/NotFound";

function App() {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <NavBar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path="/politicas-privacidad" element={<PrivacyPolicies />} />
          <Route path="/terminos-condiciones" element={<TermsCondition />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
