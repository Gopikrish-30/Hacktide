"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingTextProps {
  text: string;
  glitchText?: string;
  className?: string;
  delay?: number;
}

export const GlowingText = ({ text, glitchText, className, delay = 0 }: GlowingTextProps) => {
  return (
    <div className={cn("flex flex-wrap items-baseline justify-center gap-2 sm:gap-4", className)}>
      {/* Main Text - White with Blue Glow */}
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay }}
        className="font-black italic tracking-tighter text-white relative z-10"
        style={{
          textShadow: `
            0 0 20px rgba(50, 150, 255, 0.6),
            0 0 40px rgba(50, 150, 255, 0.3),
            0 0 80px rgba(50, 150, 255, 0.1)
          `,
        }}
      >
        {text}
      </motion.h1>

      {/* Glitch Text - Chromatic Aberration */}
      {glitchText && (
        <div className="relative inline-block">
          {/* Base Layer */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            className="font-black italic tracking-tighter text-white block relative z-20"
          >
            {glitchText}
          </motion.span>
          
          {/* Cyan Glitch Layer */}
          <motion.span
            className="absolute top-0 left-0 text-[#00ffff] z-10 opacity-80 mix-blend-screen select-none pointer-events-none"
            animate={{ 
              x: [-2, 2, -1, 3, 0], 
              y: [1, -1, 0, 1, 0],
              opacity: [0.8, 0.5, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 0.15, 
              repeatType: "mirror",
              ease: "linear"
            }}
          >
            {glitchText}
          </motion.span>

          {/* Magenta Glitch Layer */}
          <motion.span
            className="absolute top-0 left-0 text-[#ff00ff] z-10 opacity-80 mix-blend-screen select-none pointer-events-none"
            animate={{ 
              x: [2, -2, 1, -3, 0], 
              y: [-1, 1, 0, -1, 0],
              opacity: [0.8, 0.5, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 0.2, 
              repeatType: "mirror",
              ease: "linear"
            }}
          >
            {glitchText}
          </motion.span>
        </div>
      )}
    </div>
  );
};
