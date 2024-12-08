"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeImageCard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(30px)",
        x: -100,
        rotate: -45,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
        rotate: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 1.5,
      }}
    >
      <div className="aspect-[3/4] w-[44vw] md:w-[30vw] max-w-[350px] bg-background border-2 rotate-12 border-green-500 rounded-2xl _glow translate-x-0 lg:-translate-x-[5%] _wobble _blink">
        <motion.div
          initial={{
            filter: "blur(10px)",
            opacity: 0.5,
            clipPath: "circle(0% at 50% 50%)",
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            clipPath: "circle(100% at 50% 50%)",
          }}
          transition={{
            delay: 2.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full h-full bg-background rounded-2xl overflow-hidden"
        >
          <Image
            className="w-full h-full object-cover"
            src="/potrait.jpg"
            alt="potrait"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeImageCard;
