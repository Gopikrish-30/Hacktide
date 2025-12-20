"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const DottedGlowBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
  dotColor?: string;
  glowColor?: string;
}) => {
  return (
    <div className={cn("relative w-full min-h-screen bg-black", className)}>
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
