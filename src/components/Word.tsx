import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface WordItemProps {
  word: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}

const WordItem = ({ word, index, scrollYProgress, total }: WordItemProps) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.span style={{ opacity }} className="word">
      {word}
    </motion.span>
  );
};

type WordProps = {
  value: string;
};

export default function Word({ value }: WordProps) {
  const element = useRef(null);
  const words = value.split(" ");
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start center", "end center"],
  });

  return (
    <section
      ref={element}
      className="relative h-[300vh] bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="sticky top-0 h-screen z-10 flex items-center justify-center px-4">
        <p className={`paragraph max-w-3xl text-white text-center font-marcellus text-2xl leading-relaxed`}>
          {words.map((word, i) => (
            <WordItem
              key={i}
              word={word}
              index={i}
              scrollYProgress={scrollYProgress}
              total={words.length}
            />
          ))}
        </p>
      </div>
    </section>
  );
}