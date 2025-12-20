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
    const newSparkles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        background: Math.random() > 0.5 ? '#ffffff' : '#00ff00',
        boxShadow: '0 0 5px #00ff00',
      },
      duration: Math.random() * 1 + 0.5,
      delay: Math.random() * 2,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-sm"
          style={s.style}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -20],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            repeatDelay: s.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const GlowingText = ({ text, className, delay = 0 }: GlowingTextProps) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Ambient Aura */}
      <div className="absolute inset-0 blur-[80px] bg-[#10d900]/10 rounded-full opacity-50 pointer-events-none" />
      
      <Sparkles />
      
      {/* Top Half Glitch (Cyan) */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center mix-blend-screen"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
        animate={{
          x: [-2, 2, -1, 0],
          opacity: [1, 0.8, 1],
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

      {/* Bottom Half Glitch (Magenta) */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center mix-blend-screen"
        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
        animate={{
          x: [2, -2, 1, 0],
          opacity: [1, 0.8, 1],
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
        className={cn("relative z-20 font-black italic tracking-tighter text-white leading-none m-0 whitespace-nowrap", className)}
        style={{
          textShadow: "0 0 20px rgba(16, 217, 0, 0.6), 0 0 40px rgba(16, 217, 0, 0.4), 0 0 10px rgba(255,255,255,0.8)",
        }}
      >
        {text}
      </motion.h1>
      
      {/* Scanner Beam */}
      <motion.div 
        className="absolute w-[120%] h-[2px] bg-[#10d900]/50 z-30 blur-[1px]"
        animate={{ top: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Occasional Shock Flash */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none mix-blend-overlay"
        animate={{
          opacity: [0, 0.6, 0],
          scale: [1, 1.02, 1],
          filter: ["blur(0px)", "blur(4px)", "blur(0px)"],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      >
        <h1 className={cn("font-black italic tracking-tighter text-white select-none leading-none m-0 whitespace-nowrap", className)}>
          {text}
        </h1>
      </motion.div>
    </div>
  );
};
