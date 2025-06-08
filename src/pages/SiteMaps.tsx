import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SiteMaps() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-ecolodge">Mapa del Sitio</h1>
      <p className="text-center max-w-xl text-lg text-gray-600">
        Aquí puedes explorar todas las secciones importantes de nuestro sitio web para una navegación más fácil.
      </p>

      <ul className="mt-8 space-y-4 text-center">
        <li><Link to={''} className="text-ecolodge hover:underline">Inicio</Link></li>
        <li><Link to={''} className="text-ecolodge hover:underline">Habitaciones</Link></li>
        <li><Link to={''} className="text-ecolodge hover:underline">Experiencia</Link></li>
        <li><Link to={''} className="text-ecolodge hover:underline">Contacto</Link></li>
        <li><Link to={''} className="text-ecolodge hover:underline">Políticas de Privacidad</Link></li>
        <li><Link to={''} className="text-ecolodge hover:underline">Términos y Condiciones</Link></li>
      </ul>
    </motion.div>
  );
}
