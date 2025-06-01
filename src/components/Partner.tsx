import { motion } from "framer-motion";

const logos = [
    "./public/partner1.svg",
    "./public/partner2.svg",
    "./public/partner3.svg",
    "./public/partner4.svg",
];

export default function InfiniteScroll() {
    return (
        <div className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] whitespace-nowrap w-full bg-white py-6 ">
            <motion.div
                className="flex gap-16 items-center"
                animate={{ x: ["-100%", "0%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                }}
            >
                {[...logos, ...logos].map((src, idx) => (
                    <div key={idx} className="flex-shrink-0">
                        <img
                            src={src}
                            alt={`Logo ${idx}`}
                            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
