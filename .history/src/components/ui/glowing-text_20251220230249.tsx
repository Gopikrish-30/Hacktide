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
    <div className={cn("relative inline-flex justify-center items-center", className)}>
      {/* Main Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ 
          duration: 0.8, 
          delay, 
          type: "spring",
          stiffness: 100 
        }}
        className="relative z-10 font-black italic tracking-tighter text-[#10d900] leading-none m-0"
        style={{
          textShadow: `
            0 0 20px rgba(16, 217, 0, 0.8),
            0 0 40px rgba(16, 217, 0, 0.4),
            0 0 80px rgba(16, 217, 0, 0.2)
          `,
        }}
      >
        {text}
      </motion.h1>

      {/* Background Glow Pulse */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
          filter: ["blur(20px)", "blur(30px)", "blur(20px)"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 z-0 text-[#10d900] font-black italic tracking-tighter leading-none flex items-center justify-center select-none pointer-events-none"
        aria-hidden="true"
      >
        {text}
      </motion.div>
      
      {/* Scanning Light Effect */}
       <motion.div
            className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/90 to-transparent bg-clip-text text-transparent select-none pointer-events-none mix-blend-overlay font-black italic tracking-tighter leading-none flex items-center justify-center"
            initial={{ x: "-150%", skewX: -20 }}
            animate={{ x: "150%", skewX: -20 }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
              repeatDelay: 1
            }}
          >
            {text}
      </motion.div>

      {/* Tech Sparkles */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1.5, 0],
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, (Math.random() - 0.5) * 20]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
              repeatDelay: Math.random()
            }}
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
