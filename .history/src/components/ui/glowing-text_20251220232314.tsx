"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Array<{id: number, style: React.CSSProperties, duration: number, delay: number}>>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        background: '#ffffff',
        boxShadow: '0 0 4px #ffffff',
      },
      duration: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 2,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={s.style}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -15], // Float up
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            repeatDelay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const GlowingText = ({ text, className, delay = 0 }: GlowingTextProps) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      
      <Sparkles />

      {/* 1. Red Chromatic Layer (Pulse) */}
      <motion.h1
        className={cn("absolute top-0 left-0 text-[#ff0000] mix-blend-screen select-none z-10", className)}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0, 0.6, 0],
          x: [0, -4, 0],
          filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
        }}
        transition={{ 
          duration: 0.4, 
          repeat: Infinity, 
          repeatDelay: 3,
          ease: "circOut"
        }}
      >
        {text}
      </motion.h1>

      {/* 2. Blue Chromatic Layer (Pulse) */}
      <motion.h1
        className={cn("absolute top-0 left-0 text-[#0000ff] mix-blend-screen select-none z-10", className)}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0, 0.6, 0],
          x: [0, 4, 0],
          filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
        }}
        transition={{ 
          duration: 0.4, 
          repeat: Infinity, 
          repeatDelay: 3,
          ease: "circOut"
        }}
      >
        {text}
      </motion.h1>

      {/* 3. Green Glow Aura (Breathing) */}
      <motion.div
        className="absolute inset-0 z-0 blur-[40px] bg-[#10d900]/20 rounded-full"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 4. Main Text with Shine Mask */}
      <div className="relative z-20 overflow-hidden py-2"> {/* Added padding to prevent clipping glow */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay, type: "spring" }}
          className={cn("relative font-black italic tracking-tighter text-white leading-none m-0 whitespace-nowrap", className)}
          style={{
            textShadow: "0 0 20px rgba(16, 217, 0, 0.5), 0 0 40px rgba(16, 217, 0, 0.3)",
          }}
        >
          {text}
        </motion.h1>

        {/* Moving Shine/Sheen */}
        <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
            initial={{ x: '-150%' }}
            animate={{ x: '150%' }}
            transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1, ease: "easeInOut" }}
            style={{ mixBlendMode: 'overlay' }}
        />
      </div>

      {/* 5. Occasional "Electric" Flash Overlay */}
      <motion.h1
        className={cn("absolute top-0 left-0 text-white select-none z-30 pointer-events-none mix-blend-overlay", className)}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 5 }}
      >
        {text}
      </motion.h1>

    </div>
  );
};
