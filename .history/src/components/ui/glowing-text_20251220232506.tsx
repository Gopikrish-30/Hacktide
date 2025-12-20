"use client";

import React, { useEffect, useState } from "react";
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
      
      {/* 1. Cyan Chromatic Layer (Pulse) */}
      <motion.h1
        className={cn("absolute top-0 left-0 text-[#00ffff] mix-blend-screen select-none z-10 opacity-50", className)}
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0, 0.4, 0],
          x: [0, -3, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.h1>

      {/* 2. White Chromatic Layer (Pulse) */}
      <motion.h1
        className={cn("absolute top-0 left-0 text-white mix-blend-screen select-none z-10 opacity-50", className)}
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0, 0.4, 0],
          x: [0, 3, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        {text}
      </motion.h1>

      {/* 3. Green Glow Aura (Breathing) */}
      <motion.div
        className="absolute inset-0 z-0 blur-[60px] bg-[#10d900]/30 rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 4. Main Text - NEON GREEN */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
            opacity: 1, 
            scale: 1,
            textShadow: [
                "0 0 20px rgba(16, 217, 0, 0.5), 0 0 40px rgba(16, 217, 0, 0.3)",
                "0 0 40px rgba(16, 217, 0, 0.8), 0 0 80px rgba(16, 217, 0, 0.5)",
                "0 0 20px rgba(16, 217, 0, 0.5), 0 0 40px rgba(16, 217, 0, 0.3)"
            ]
        }}
        transition={{ 
            duration: 1, 
            delay, 
            type: "spring",
            textShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }}
        className={cn("relative z-20 font-black italic tracking-tighter text-[#10d900] leading-none m-0 whitespace-nowrap", className)}
      >
        {text}
      </motion.h1>

      {/* 5. Occasional "Electric" Flash Overlay */}
      <motion.h1
        className={cn("absolute top-0 left-0 text-white select-none z-30 pointer-events-none mix-blend-overlay", className)}
        animate={{ opacity: [0, 1, 0], filter: ["blur(0px)", "blur(4px)", "blur(0px)"] }}
        transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4 }}
      >
        {text}
      </motion.h1>

    </div>
  );
};
