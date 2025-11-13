import { useRef, useState } from "react";
import imgHero from "../../assets/hero/house_hero.webp";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const heroRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  useMotionValue(scrollYProgress);

  scrollYProgress.on("change", (latest) => {
    setProgress(latest);
  });
  console.log(progress);
  const textOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.36],
    [1, 1, 0]
  );
  const textOpacity2 = useTransform(
    scrollYProgress,
    [0.36, 0.5, 0.63],
    [0, 1, 0]
  );
  const textOpacity3 = useTransform(
    scrollYProgress,
    [0.63, 0.74, 1],
    [0, 1, 0]
  );

  return (
    <section
      ref={heroRef}
      className="relative h-[300vh] w-full overflow-hidden  "
    >
      <motion.div className="fixed top-0 left-0 w-full h-screen">
        <img
          src={imgHero}
          alt="cabaña"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: textOpacity }}
        className="flex relative  xl:justify-center items-center h-screen w-[50%]"
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-5xl font-bold">PEACE</h3>
          <p className="text-gray-400 font-bold">
            Find and book a great experience
          </p>
          <motion.div
            initial={{ y: -10, opacity: 1 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex flex-col justify-center items-center text-amber-50"
          >
            <span>scroll</span>
            <i
              className="bxr  bxs-arrow-down bx-rotate-90 bx-flip-horizontal text-4xl"
              style={{ color: "#fffff" }}
            ></i>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: textOpacity2 }}
        className="flex  xl:justify-center items-center h-screen w-[100%]"
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-5xl font-bold">NATURE</h3>
          <p className="text-gray-400 font-bold">
            Find and book a great experience
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: textOpacity3 }}
        className="flex  xl:justify-center items-center h-screen w-[150%]"
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-5xl font-bold">DREAM</h3>
          <p className="text-gray-400 font-bold">
            Find and book a great experience
          </p>
        </div>
      </motion.div>
      <div className="relative z-10 justify-center items-center flex h-screen w-full">
        <p>SCROLL</p>
      </div>
    </section>
  );
};
