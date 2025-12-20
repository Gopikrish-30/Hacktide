"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const GlowingText = ({ text, className, delay = 0 }: GlowingTextProps) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Glitch Layers */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50 mix-blend-screen"
        animate={{
          x: [-2, 2, -1, 0],
          y: [1, -1, 0],
          filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          repeatDelay: 3,
          repeatType: "reverse",
        }}
      >
        <h1 className="font-black italic tracking-tighter text-[#00ffff] select-none">
          {text}
        </h1>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 opacity-50 mix-blend-screen"
        animate={{
          x: [2, -2, 1, 0],
          y: [-1, 1, 0],
          filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          repeatDelay: 4,
          repeatType: "reverse",
        }}
      >
        <h1 className="font-black italic tracking-tighter text-[#ff00ff] select-none">
          {text}
        </h1>
      </motion.div>

      {/* Main Text with Gradient and Stroke */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay, type: "spring" }}
        className="relative z-10 font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50"
        style={{
          WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
          filter: "drop-shadow(0 0 20px rgba(16, 217, 0, 0.5))",
        }}
      >
        {text}
        
        {/* Overlay Gradient for Depth */}
        <span className="absolute inset-0 bg-gradient-to-t from-[#10d900] to-transparent opacity-30 bg-clip-text text-transparent select-none pointer-events-none" aria-hidden="true">
          {text}
        </span>
      </motion.h1>

      {/* Scanline Effect */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
      >
        <motion.div
          className="w-full h-[2px] bg-white/50 shadow-[0_0_10px_white]"
          animate={{ top: ["0%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
        />
      </motion.div>
    </div>
  );
};
