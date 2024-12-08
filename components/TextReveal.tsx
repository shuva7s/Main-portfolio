// "use client";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

// interface TextRevealProps {
//   word: string;
//   startingDelay?: number;
//   className?: string;
// }

// const TextReveal = ({
//   word,
//   startingDelay = 0,
//   className = "",
// }: TextRevealProps) => {
//   const letters = word.split("");
//   return (
//     <span className={cn(className)}>
//       {letters.map((letter, index) => (
//         <motion.text
//           className="inline-block"
//           key={index}
//           initial={{
//             opacity: 0,
//             scale: 1.7,
//             filter: "blur(30px)",
//             y: 40,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             filter: "blur(0px)",
//             y: 0,
//           }}
//           transition={{
//             delay: startingDelay + index * 0.1,
//             duration: 0.5,
//           }}
//         >
//           {letter}
//         </motion.text>
//       ))}
//     </span>
//   );
// };

// export default TextReveal;

"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TextRevealProps {
  word: string;
  startingDelay?: number;
  className?: string;
}

const TextReveal = ({
  word,
  startingDelay = 0,
  className = "",
}: TextRevealProps) => {
  const letters = word.split("");

  // Helper function to generate random values
  const getRandom = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  return (
    <span className={cn(className)}>
      {letters.map((letter, index) => (
        <motion.span // Changed from motion.text to motion.span
          className="inline-block"
          key={index}
          initial={{
            opacity: 0,
            scale: 1.7,
            filter: "blur(10px)",
            x: getRandom(-40, 40), // Random x position
            y: getRandom(-40, 40), // Random y position
            rotate: getRandom(-45, 45), // Random rotation
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            x: 0,
            y: 0,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: startingDelay + index * 0.1,
            duration: 0.5,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default TextReveal;
