import React from 'react';
import Image from 'next/image';
import { ArrowRight, Eye, Code } from 'lucide-react';

const ComponentShowcase = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Title and Description */}
      <div className="mb-10">
        <h1 className="text-[36px] font-extrabold tracking-tight leading-[1.2] text-black mb-4">
          Dotted Glow Background
        </h1>
        <p className="text-[16px] leading-[1.625] text-[#666666] max-w-2xl mb-8">
          A background effect with opacity animation, glow effect and more.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-2 py-0.5 text-[12px] font-medium text-[#737373] bg-[#f5f5f5] rounded-md border border-[#e5e7eb]">
            Card
          </span>
          <span className="px-2 py-0.5 text-[12px] font-medium text-[#737373] bg-[#f5f5f5] rounded-md border border-[#e5e7eb]">
            Background
          </span>
          <span className="px-2 py-0.5 text-[12px] font-medium text-[#737373] bg-[#f5f5f5] rounded-md border border-[#e5e7eb]">
            Gradient
          </span>
          <span className="px-2 py-0.5 text-[12px] font-medium text-[#737373] bg-[#f5f5f5] rounded-md border border-[#e5e7eb]">
            Special
          </span>
          <span className="px-2 py-0.5 text-[12px] font-medium text-[#737373] bg-[#f5f5f5] rounded-md border border-[#e5e7eb]">
            Call To Action
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-4">
        <button className="flex items-center gap-2 px-3 py-1.5 text-[14px] font-medium text-black bg-[#f5f5f5] border border-[#e5e7eb] rounded-md transition-colors">
          <Eye className="w-4 h-4" />
          Preview
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 text-[14px] font-medium text-[#737373] hover:text-black transition-colors">
          <Code className="w-4 h-4" />
          Code
        </button>
      </div>

      {/* Preview Card Container */}
      <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[600px] border border-[#e5e7eb] rounded-2xl overflow-hidden bg-white flex items-center justify-center p-4 md:p-12">
        {/* Main Card */}
        <div className="relative w-full max-w-[280px] h-[440px] border border-[#e5e7eb] rounded-2xl bg-white shadow-sm overflow-hidden flex flex-col p-6">
          
          {/* Dotted Glow Background Effect */}
          <div className="absolute inset-0 z-0 opacity-40">
            {/* The dotted grid pattern */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />
            {/* Animated Glow Overlay (Simulated) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/30 to-emerald-50/20 blur-2xl" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-100/40 rounded-full blur-[60px]" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-emerald-100/40 rounded-full blur-[60px]" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Logo Section */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-[100px] h-[100px] bg-black rounded-2xl flex items-center justify-center overflow-hidden shadow-xl border border-black/10">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5f5f1b8-5425-489a-99fd-2c963d0df51d-ui-aceternity-com/assets/images/calcom-1.png"
                  alt="Cal Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom Text Section */}
            <div className="mt-auto flex items-end justify-between">
              <div className="max-w-[160px]">
                <p className="text-[14px] font-medium leading-[1.4] text-[#666666]">
                  The modern call scheduling app
                </p>
              </div>
              <div className="mb-1">
                <ArrowRight className="w-4 h-4 text-[#737373]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;

/**
 * Styling Notes Based on Computed Styles & Global Design:
 * - H1: 36px font-size, 800 weight, -0.025em tracking, 1.2 line-height.
 * - P: 16px font-size, 400 weight, #666666 (text-secondary).
 * - Border: #e5e7eb (neutral-200).
 * - Background: #ffffff.
 * - Tabs: 14px text, 500 weight, #f5f5f5 for background of active tab.
 * - Card: 280x440px dimensions based on visual aspect in screenshots.
 * - Dotted Background: radial-gradient pattern as defined in globals.css.
 * - Logo Image: Using the specific asset URL provided.
 */