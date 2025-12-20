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
        className="absolute inset-0 z-0 opacity-50 mix-blend-screen flex items-center justify-center"
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
        <h1 className="font-black italic tracking-tighter text-[#00ffff] select-none leading-none m-0">
          {text}
        </h1>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 opacity-50 mix-blend-screen flex items-center justify-center"
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
        <h1 className="font-black italic tracking-tighter text-[#ff00ff] select-none leading-none m-0">
          {text}
        </h1>
      </motion.div>

      {/* Main Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay, type: "spring" }}
        className="relative z-10 font-black italic tracking-tighter text-white leading-none m-0"
        style={{
          textShadow: "0 0 30px rgba(16, 217, 0, 0.8), 0 0 60px rgba(16, 217, 0, 0.4)",
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
};
