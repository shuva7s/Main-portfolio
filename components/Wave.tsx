"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const WaveAnimation = ({ className }: { className?: string }) => {
  return (
    // <div className="w-full overflow-hidden">
    <div className={cn("w-full overflow-hidden", className)}>
      <svg
        viewBox="-20 -20 1977 127"
        strokeLinecap="round"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <motion.path
          fill="none"
          stroke="#22C55E"
          strokeWidth="30"
          d="M0.5 86.5C91 22.1667 604.9 -67.9 1936.5 86.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
            delay: 0.6,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

export default WaveAnimation;
