import { useEffect, useRef } from 'react'
import styles from '../page.module.scss'
import { motion, useScroll } from 'framer-motion'

type WordProps = {
  value: string;
};

export default function Word({ value }: WordProps) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"]
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, [scrollYProgress]);

  return (
    <motion.p
      className={styles.paragraph}
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
}
