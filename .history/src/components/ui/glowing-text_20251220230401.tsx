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
    <div className={cn("flex flex-col items-center justify-center gap-0 leading-none relative", className)}>
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: [0, 0.4, 0, 0.6, 0, 0.8, 0.2, 1, 0.3, 1, 0.1, 1, 0.5, 1, 0.8, 1],
            scale: 1 
          }}
            transition={{ 
              duration: 3, 
              delay,
              times: [0, 0.1, 0.2, 0.4, 0.5, 0.7, 0.8, 0.85, 0.9, 0.92, 0.94, 0.96, 0.97, 0.98, 0.99, 1],
              ease: "easeInOut" 
            }}
          className="relative block font-black tracking-tighter italic"
        style={{
          color: "#10d900",
          textShadow: `
            0 0 15px rgba(16, 217, 0, 0.9),
            0 0 30px rgba(16, 217, 0, 0.5),
            0 0 60px rgba(16, 217, 0, 0.3)
          `,
        }}
      >
        {/* Main Text */}
        <span className="relative z-10">{text}</span>
        
        {/* Animated Glow Layer */}
        <motion.span
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            delay: delay + 3, // Start after main text animation finishes or roughly so
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-0 blur-xl text-[#10d900] select-none pointer-events-none"
          aria-hidden="true"
        >
          {text}
        </motion.span>
      </motion.span>
    </div>
  );
};
