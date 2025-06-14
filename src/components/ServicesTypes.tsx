import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TitleSection from "./TitleSection";

const servicestypes = [
  {
    id: 1,
    title: "Adventure",
    description: "Lorem Ipsum has been industry standard.",
    icon: "🧗‍♂️",
  },
  {
    id: 2,
    title: "Windsurfing",
    description: "Lorem Ipsum has been industry standard.",
    icon: "🏄‍♂️",
    active: false,
  },
  {
    id: 3,
    title: "Paragliding",
    description: "Lorem Ipsum has been industry standard.",
    icon: "🪂",
  },
  {
    id: 4,
    title: "Wildlife",
    description: "Lorem Ipsum has been industry standard.",
    icon: "🦌",
  },
  {
    id: 5,
    title: "Hang Gliding",
    description: "Lorem Ipsum has been industry standard.",
    icon: "🏕️",
  },
  {
    id: 6,
    title: "Snorkeling",
    description: "Lorem Ipsum has been industry standard.",
    icon: "🤿",
  },
  {
    id: 7,
    title: "Sky Diving",
    description: "Lorem Ipsum has been industry standard.",
    icon: "🪂",
  },
];

export default function TourTypes() {
  const cardWidth = 180;
  const gap = 24;
  const visibleCards = 5;
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxIndex = servicestypes.length - visibleCards;

  const handleScroll = (dir: "left" | "right") => {
    setScrollIndex((prev) => {
      if (dir === "left") return Math.max(prev - 1, 0);
      else return Math.min(prev + 1, maxIndex);
    });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      <div className="text-center mb-10">
        <p className="inline-block bg-ecolodge py-1 px-4 rounded-full text-white font-medium shadow-sm text-sm mb-4">
          Servicios
        </p>
        <TitleSection className="text-2xl md:text-3xl lg:text-4xl font-bold" title="Titulo" subTitle="" />
      </div>

      <div className="relative w-full flex justify-center">
        <div
          className="overflow-hidden relative"
          style={{
            width: `${cardWidth * visibleCards + gap * (visibleCards - 1)}px`,
            maskImage:
              "linear-gradient(to right, transparent 0%, black 64px, black calc(100% - 64px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 64px, black calc(100% - 64px), transparent 100%)",
          }}
        >
          <motion.div
            className="flex gap-6 my-6 mx-5"
            animate={{ x: -scrollIndex * (cardWidth + gap) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {servicestypes.map((tour) => (
              <motion.div
                key={tour.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex-shrink-0 w-[260px] px-6 py-8 rounded-2xl shadow-sm border relative flex flex-col items-center text-center ${tour.active
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-800 border-gray-200"
                  }`}
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold z-10 ${tour.active ? "bg-orange-500 text-white" : "bg-gray-300 text-white"
                    }`}
                >
                  {String(tour.id).padStart(2, "0")}
                </div>
                <div className="text-4xl mb-3">{tour.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>
                <p className="text-sm">{tour.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {scrollIndex > 0 && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaChevronLeft />
          </motion.button>
        )}
        {scrollIndex < maxIndex && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaChevronRight />
          </motion.button>
        )}
      </div>
    </section>
  );
}
