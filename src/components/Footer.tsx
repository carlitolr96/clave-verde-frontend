import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { motion, useAnimationControls } from "framer-motion";

function Footer() {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const words = [
    { name: "Instagram", link: "https://www.instagram.com" },
    { name: "Facebook", link: "https://www.facebook.com" },
    { name: "WhatsApp", link: "https://wa.me/18492051146" },
    { name: "Twitter", link: "https://twitter.com" }
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    // Autoplay al cargar
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
    <footer className="md:px-16 lg:px-36 w-full bg-white text-gray-800 px-6 pt-16 pb-5 relative">
      <div className="container mx-auto max-w-7xl space-y-16">
        {/* Info principal */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="flex-1 space-y-4 text-center lg:text-left mx-auto lg:mx-0 max-w-md lg:max-w-none">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-0">Haz tu reserva con nosotros.</h2>
            <h2 className="text-2xl sm:text-3xl font-semibold">Estamos listos para atenderte.</h2>
            <button className="bg-ecolodge text-white px-8 py-2.5 rounded-full hover:opacity-90 text-sm sm:text-base mt-4">Booking</button>
          </div>

          {/* Enlaces y contacto */}
          <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contactanos</h4>
              <div className="space-y-2 text-sm">
                <p>(849) 205-1146</p>
                <p>contacto@claveverde.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de scroll */}
        <div className="fixed inset-x-0 bottom-10 sm:inset-0 sm:flex sm:items-center sm:justify-center pointer-events-none z-50">
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="pointer-events-auto cursor-pointer w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-xl hover:bg-[#df8615] transition duration-300 animate-bounce"
              title="Ir arriba"
            >
              <FaArrowUp />
            </button>
          )}
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
