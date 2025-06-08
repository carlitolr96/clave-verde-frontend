import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { Link as ScrollLink } from 'react-scroll';
import { FaRegAddressBook } from "react-icons/fa6";
import LeavesEcology from "../assets/leaves-ecology.svg"
import LeavesWhite from "../assets/leaves-white.svg"

function NavBar() {
  const navLinks = [
    { name: 'Inicio', id: 'home-page' },
    { name: 'Habitaciones', id: 'rooms-card' },
    { name: 'Experiencia', id: 'experience-sesion' },
    { name: 'Contacto', id: 'contact-us' },
  ];


  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isNotHome = location.pathname !== '/';
    setIsScrolled(isNotHome || window.scrollY > 10);

    const handleScroll = () => {
      setIsScrolled(isNotHome || window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 primary left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={isScrolled ? LeavesEcology : LeavesWhite} alt="Leaves logo" className="h-8 w-auto" />
        <h1 className={`h-9 text-2xl transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
          Clave Verde
        </h1>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <ScrollLink
            key={i}
            to={link.id}
            smooth={true}
            duration={600}
            offset={-50}
            className={`cursor-pointer group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            {link.name}
            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
          </ScrollLink>
        ))}
      </div>


      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<FaRegAddressBook />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="cursor-pointer bg-ecolodge text-white px-7 py-1 rounded-full ml-4 transition-all duration-500 hover:opacity-90"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-6 w-6 cursor-pointer"
          fill="none"
          stroke={isScrolled ? "black" : "white"}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>

        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<FaRegAddressBook />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="cursor-pointer bg-ecolodge text-white text-sm px-7 py-1 rounded-full transition-all duration-500 hover:opacity-90"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="w-full flex flex-col items-center gap-4 pt-16">
          <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <ScrollLink
              key={i}
              to={link.id}
              smooth={true}
              duration={600}
              offset={-50}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}

        </div>

        {user && (
          <button
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/owner');
            }}
            className="px-4 py-1 bg-primary border-primary text-white font-medium text-sm rounded-full cursor-pointer transition-all border hover:opacity-90"
          >
            Dashboard
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;