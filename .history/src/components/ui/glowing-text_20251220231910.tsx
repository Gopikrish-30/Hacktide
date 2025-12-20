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
    const newSparkles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        background: Math.random() > 0.5 ? '#ffffff' : '#00ff00',
      },
      duration: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 2,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          style={s.style}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
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
          x: [-4, 4, -2, 0],
          y: [2, -2, 0],
          filter: ["blur(0px)", "blur(4px)", "blur(0px)"],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.15,
          repeatDelay: 2.5,
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
          x: [4, -4, 2, 0],
          y: [-2, 2, 0],
          filter: ["blur(0px)", "blur(4px)", "blur(0px)"],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.15,
          repeatDelay: 3.5,
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
          textShadow: "0 0 30px rgba(16, 217, 0, 0.8), 0 0 60px rgba(16, 217, 0, 0.4), 0 0 10px rgba(255,255,255,0.8)",
        }}
      >
        {text}
      </motion.h1>
      
      {/* Occasional Shock Flash */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none mix-blend-screen"
        animate={{
          opacity: [0, 0.8, 0],
          scale: [1, 1.05, 1],
          filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <h1 className={cn("font-black italic tracking-tighter text-white select-none leading-none m-0 whitespace-nowrap", className)}>
          {text}
        </h1>
      </motion.div>
    </div>
  );
};
