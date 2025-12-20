"use client";

import React from "react";

/**
 * HeroHeader Component
 * 
 * Clones the hero header section for the "Dotted Glow Background" component.
 * Features:
 * - High-contrast H1 title with precise tracking and leading.
 * - Descriptive paragraph with readable line height and specific text color.
 * - A row of metadata badges with subtle background and neutral text.
 */
const HeroHeader = () => {
  // Tags associated with the component as per design instructions
  const tags = ["Card", "Background", "Gradient", "Special", "Call To Action"];

  return (
    <div className="flex flex-col w-full mb-10 pt-4">
      {/* 
        Main Title:
        - Font size: 2.25rem (36px)
        - Font weight: 800 (Extrabold)
        - Letter spacing: -0.025em (Tracking tight)
        - Line height: 1.2
        - Color: #000000 (Black)
      */}
      <h1 className="text-[2.25rem] font-extrabold tracking-[-0.025em] leading-[1.2] text-black mb-4">
        Dotted Glow Background
      </h1>

      {/* 
        Description Paragraph:
        - Font size: 1rem (16px)
        - Line height: 1.625
        - Color: #666666 (Secondary text)
        - Max-width: 42rem (2xl) for optimal readability
        - text-balance: To ensure harmonious line breaks
      */}
      <p className="text-[1rem] leading-[1.625] text-[#666666] mb-5 max-w-2xl text-balance">
        A background effect with opacity animation, glow effect and more.
      </p>

      {/* 
        Metadata Tags/Badges:
        - Container: Flexbox with gap-2
        - Padding: px-2 py-0.5 (Slim horizontal badges)
        - Border radius: 6px (Rounded-md)
        - Background: #f5f5f5 (Muted background)
        - Text color: #737373 (Muted foreground)
        - Font size: 12px (text-xs)
      */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#f5f5f5] text-[#737373] text-[12px] font-medium transition-colors hover:bg-[#ebebeb] cursor-default select-none"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroHeader;