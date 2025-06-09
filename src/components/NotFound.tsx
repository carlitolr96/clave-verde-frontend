// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-sm max-md:px-4 bg-white">
      <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
      <div className="h-1 w-16 rounded bg-primary my-5 md:my-7"></div>
      <p className="text-2xl md:text-3xl font-bold text-gray-800">
        Página no encontrada
      </p>
      <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">
        La página que buscas pudo haber sido eliminada, renombrada o está
        temporalmente fuera de servicio.
      </p>
      <div className="flex items-center gap-4 mt-6">
        <Link
          to="/"
          className="bg-gray-800 px-7 py-2.5 text-white rounded-md active:scale-95 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
