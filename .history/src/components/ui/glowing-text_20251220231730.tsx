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
    const newSparkles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 120 - 10}%`,
        top: `${Math.random() * 120 - 10}%`,
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
      },
      duration: Math.random() * 0.8 + 0.4,
      delay: Math.random() * 3,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"
          style={s.style}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
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
        <h1 className={cn("font-black italic tracking-tighter text-[#00ffff] select-none leading-none m-0 whitespace-nowrap", className)}>
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
        <h1 className={cn("font-black italic tracking-tighter text-[#ff00ff] select-none leading-none m-0 whitespace-nowrap", className)}>
          {text}
        </h1>
      </motion.div>

      {/* Main Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay, type: "spring" }}
        className={cn("relative z-10 font-black italic tracking-tighter text-white leading-none m-0 whitespace-nowrap", className)}
        style={{
          textShadow: "0 0 30px rgba(16, 217, 0, 0.8), 0 0 60px rgba(16, 217, 0, 0.4)",
        }}
      >
        {text}
      </motion.h1>
      
      {/* Occasional Shock Flash */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none mix-blend-overlay"
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <h1 className={cn("font-black italic tracking-tighter text-white select-none leading-none m-0 whitespace-nowrap blur-md", className)}>
          {text}
        </h1>
      </motion.div>
    </div>
  );
};
