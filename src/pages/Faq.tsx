import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import TitleSection from "../components/TitleSection";

const faqs = [
  {
    question: "¿Cuál es el horario de check-in y check-out?",
    answer: "El check-in es a partir de las 3:00 PM y el check-out es hasta las 12:00 PM.",
    category: "Estadía",
  },
  {
    question: "¿Se permite llevar mascotas?",
    answer: "Sí, admitimos mascotas pequeñas bajo ciertas condiciones. Contáctanos para más detalles.",
    category: "Políticas",
  },
  {
    question: "¿Hay Wi-Fi en todas las habitaciones?",
    answer: "Sí, ofrecemos conexión Wi-Fi gratuita en todas las áreas del alojamiento.",
    category: "Servicios",
  },
  {
    question: "¿El desayuno está incluido en la tarifa?",
    answer: "Sí, el desayuno ecológico está incluido para todos los huéspedes registrados.",
    category: "Alimentos",
  },
  {
    question: "¿Tienen estacionamiento disponible?",
    answer: "Sí, contamos con estacionamiento gratuito para todos los huéspedes.",
    category: "Servicios",
  },
];

const categories = ["Todas", "Estadía", "Servicios", "Políticas", "Alimentos"];

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("Todas");

  const filteredFaqs = filter === "Todas" ? faqs : faqs.filter((faq) => faq.category === filter);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-24 px-4 md:px-16 lg:px-28">

      {/* Columna izquierda */}
      <div className="w-full lg:w-2/3 pr-0 lg:pr-12">
        <Breadcrumb />
        <TitleSection
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
          title="Preguntas Frecuentes"
          subTitle="Encuentra respuestas a tus dudas más comunes sobre nuestro alojamiento."
        />

        {/* Preguntas frecuentes */}
        <div className="mt-10 space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-medium text-gray-800 flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white w-full lg:w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Filtrar por categoría</h3>
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  setFilter(cat);
                  setActiveIndex(null);
                }}
                className={`w-full text-left py-1 px-3 rounded-md transition-all cursor-pointer ${filter === cat
                    ? "bg-ecolodge text-white"
                    : "hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Faq;
