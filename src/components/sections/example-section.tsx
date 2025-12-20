"use client";

import React from "react";
import { Eye, Code2 } from "lucide-react";

/**
 * DottedGlowBackground component that replicates the visual effect seen in the screenshots.
 * It uses a dotted grid background with a radial mask and animated/static glow spots.
 */
const DottedGlowBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative w-full h-[500px] md:h-[600px] rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden flex flex-col items-center justify-center ${className}`}
    >
      {/* The Dotted Grid Layer */}
      <div 
        className="absolute inset-0 bg-dotted-grid mask-radial-faded pointer-events-none" 
        style={{ opacity: 0.5 }}
      />

      {/* Glow Effects - Simulating the "Dotted Glow" spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" 
        />
        <div 
          className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-500/10 blur-[100px] rounded-full" 
        />
        <div 
          className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-sky-400/10 blur-[110px] rounded-full" 
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
};

export default function ExampleBackgroundSection() {
  return (
    <section className="container py-20 bg-white">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] leading-[1.3] text-black mb-6">
          Example Background
        </h2>

        {/* Tab Switcher - Visual Only */}
        <div className="flex items-center gap-1 mb-6">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F5F5F5] border border-[#E5E7EB] text-[13px] font-medium text-black transition-colors">
            <Eye className="w-3.5 h-3.5" />
            Preview
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-[#F5F5F5] text-[13px] font-medium text-[#737373] transition-colors">
            <Code2 className="w-3.5 h-3.5" />
            Code
          </button>
        </div>
      </div>

      {/* Main Hero Card with Dotted Glow Effect */}
      <DottedGlowBackground>
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-[4.5rem] font-extrabold tracking-[-0.04em] leading-[1.1] text-black">
            Ready to buy <br className="hidden md:block" /> Aceternity Pro?
          </h1>
          <p className="max-w-2xl mx-auto text-[1rem] md:text-[1.125rem] leading-relaxed text-[#666666]">
            Unlock premium components, advanced animations, and exclusive
            templates to build stunning modern interfaces.
          </p>
          
          {/* Optional CTA Button to match the vibe if needed, 
              though the prompt specifically mentions the text and effect. */}
          <div className="pt-4">
            <button className="px-8 py-3 rounded-xl bg-black text-white font-semibold text-sm hover:bg-black/90 transition-all active:scale-95 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
              Get Started Now
            </button>
          </div>
        </div>
      </DottedGlowBackground>
    </section>
  );
}