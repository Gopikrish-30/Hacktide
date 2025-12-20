"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 8000, mass: 0.01 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
      const moveCursor = (e: MouseEvent) => {
        if (!isVisible) setIsVisible(true);
        
        const target = e.target as HTMLElement;
        const magneticTarget = target.closest("[data-magnetic-target='true']");
        
        if (magneticTarget) {
          const rect = magneticTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          cursorX.set(centerX);
          cursorY.set(centerY);
          setIsHovering(true);
        } else {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
          setIsHovering(false);
        }
      };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 rounded-full bg-[#10d900] shadow-[0_0_15px_#10d900]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
            scale: isHovering ? 3.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ scale: { type: "spring", stiffness: 400, damping: 25 } }}
        />
        <motion.div
          className="absolute top-0 left-0 w-8 h-8 rounded-full border border-[#10d900]/50"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
            scale: isHovering ? 2.5 : 1,
            opacity: isVisible ? 0.6 : 0,
          }}
          transition={{ scale: { type: "spring", stiffness: 400, damping: 25 } }}
        />
    </div>
  );
}
