import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PrivacyPolicies from './pages/PrivacyPolicies'
import TermsCondition from './pages/TermsCondition'
import SiteMaps from './pages/SiteMaps';
import Footer from './components/Footer';

function App() {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <NavBar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/politicas-privacidad" element={<PrivacyPolicies />} />
          <Route path="/terminos-condiciones" element={<TermsCondition />} />
          <Route path="/site-maps" element={<SiteMaps />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
