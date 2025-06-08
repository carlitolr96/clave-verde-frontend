import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { motion, useAnimationControls } from "framer-motion";

function Footer() {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const footerLinks = [
    { name: 'Inicio', id: 'home-page' },
    { name: 'Habitaciones', id: 'rooms-card' },
    { name: 'Experiencia', id: 'experience-sesion' },
    { name: 'Contacto', id: 'contact-us' },
    { name: 'Site Maps', path: 'site-maps' },
  ];

  const words = [
    { name: "Instagram", link: "https://www.instagram.com/claveverdeecolodge" },
    { name: "Facebook", link: "https://web.facebook.com/clave.verde/" },
    { name: "WhatsApp", link: "https://wa.me/18492051146" },
    { name: "Twitter", link: "https://twitter.com" }
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowButton(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 12,
        ease: "linear",
      },
    });
  }, [controls]);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        },
      });
    }
  }, [isHovered, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="md:px-16 lg:px-36 w-full bg-white text-gray-800 px-6 pt-16 pb-5 relative"
    >
      <div className="container mx-auto max-w-7xl space-y-16">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mt-10">
          <div className="flex-1 space-y-4 text-center lg:text-left mx-auto lg:mx-0 max-w-md lg:max-w-none">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-0">Haz tu reserva con nosotros.</h2>
            <h2 className="text-2xl sm:text-3xl font-semibold">Estamos listos para atenderte.</h2>
            <button className="bg-ecolodge text-white px-8 py-2.5 rounded-full hover:opacity-90 text-sm sm:text-base mt-4 cursor-pointer">
              Reservar
            </button>
          </div>

          {/* Enlaces y contacto */}
          <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">

            <div className="grid grid-cols-5 grid-rows-3 gap-4">
              <div className="col-span-2 row-span-2">
                <h4 className="font-semibold mb-4">Enlaces</h4>
                <ul className="space-y-2 text-sm">
                  {footerLinks.map((link, i) => (
                    link.id ? (
                      <ScrollLink
                        key={i}
                        to={link.id}
                        smooth={true}
                        duration={600}
                        offset={-50}
                      >
                        <li className="hover:opacity-60 cursor-pointer mb-4">{link.name}</li>
                      </ScrollLink>
                    ) : (
                      <Link
                        key={i}
                        to={`/${link.path}`}
                        onClick={() => window.location.href = '/site-maps'}
                      >
                        <li className="hover:opacity-60 cursor-pointer mb-4">{link.name}</li>
                      </Link>
                    )
                  ))}

                </ul>
              </div>
              <div className="col-span-2 col-start-3">
                <h4 className="font-semibold mb-4">Contáctanos</h4>
                <div className="space-y-2 text-sm">
                  <p>(849) 205-1146</p>
                  <a href="mailto:contacto@claveverde.com" className="text-ecolodge hover:underline">
                    contacto@claveverde.com
                  </a>
                </div>
              </div>
              <div className="col-span-3 col-start-3 row-start-2">
                <h4 className="font-semibold mb-4">Informacion</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      className="hover:opacity-60"
                      to="/politicas-privacidad"
                      onClick={() => window.location.href = '/politicas-privacidad'}>
                      Politicas de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:opacity-60"
                      to={'/terminos-condiciones'}
                      onClick={() => window.location.href = '/terminos-condiciones'}>
                      Terminos y condiciones
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Botón scroll-to-top */}
        <div
          className={`fixed z-50 pointer-events-none ${showButton ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
        >
          <div className="pointer-events-auto">
            <div className="fixed inset-x-0 bottom-52 flex justify-center sm:justify-center pr-4 sm:pr-0 pointer-events-none z-50">
              <button
                onClick={scrollToTop}
                className="w-16 h-16 cursor-pointer bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-xl hover:bg-[#fe9502] transition duration-300 animate-bounce pointer-events-auto"
                title="Ir arriba"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>


        {/* Texto decorativo en movimiento */}
        <div className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] w-full">
          <motion.div
            className="flex gap-10 text-4xl sm:text-5xl md:text-6xl font-light text-gray-400 whitespace-nowrap mb-1"
            animate={controls}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {[...Array(4)].map((_, i) =>
              words.map((item, j) => (
                <motion.a
                  key={`${i}-${j}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-6 cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    color: "#ff6900",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  • {item.name} •
                </motion.a>
              ))
            )}
          </motion.div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center text-xs/relaxed text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Clave Verde Hotel Boutique-Ecolodge. Todos los derechos reservados{" "}
          <Link className="font-bold" target="_blank" to={"https://github.com/carlitolr96"}>
            CroalsDev
          </Link>.
        </div>
      </div>
    </footer>
  );
}

export default Footer;