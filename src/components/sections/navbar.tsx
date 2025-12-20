"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Search, Twitter } from "lucide-react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch for theme-dependent icons or state
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* Announcement Bar */}
      <a 
        href="https://pro.aceternity.com" 
        className="block w-full bg-gradient-to-b from-[#3b82f6] to-[#2563eb]"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-2 text-left font-sans text-xs font-medium tracking-tight text-white sm:px-4 sm:py-3 sm:text-base md:text-center">
          Introducing <span className="rounded-sm bg-white/10 px-1 py-1 font-bold">Aceternity UI Pro</span> - 70+ premium component packs and templates to build amazing websites.
        </div>
      </a>

      {/* Sticky Header */}
      <header className="sticky top-0 z-[50] w-full border-b border-[#e5e7eb] bg-white/80 backdrop-blur-md">
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="mx-auto flex h-16 max-w-[1280px] items-center px-8">
            <div className="mr-4 hidden md:flex items-center">
              <Link 
                href="/" 
                className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-[#404040] selection:bg-emerald-500 mr-10"
              >
                <div className="relative h-6 w-6 bg-black border border-slate-800 text-white flex items-center justify-center rounded-md text-sm antialiased overflow-hidden">
                  <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"></div>
                  <div className="relative z-20 flex items-center justify-center">
                    <Image 
                      alt="Logo" 
                      width={24} 
                      height={24} 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5f5f1b8-5425-489a-99fd-2c963d0df51d-ui-aceternity-com/assets/icons/logo-1.png"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-black font-sans text-lg font-bold m-0 leading-none">Aceternity UI</h1>
                </div>
              </Link>
            </div>

            {/* Main Links */}
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="hover:text-black text-[#737373] transition-colors" href="/components">
                Components
              </Link>
              <Link className="hover:text-black text-[#737373] transition-colors" href="https://pro.aceternity.com/templates">
                Templates
              </Link>
              <Link className="hover:text-black text-[#737373] transition-colors" href="/pricing">
                Pricing
              </Link>
              <Link className="hover:text-black text-[#737373] transition-colors" href="/showcase">
                Showcase
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex flex-1 items-center justify-end gap-2 md:justify-end">
              <Link className="hover:text-black text-[#737373] mr-3 text-sm font-medium transition-colors" href="/playground">
                Playground
              </Link>
              
              {/* Discord Icon (Simple SVG) */}
              <Link className="hover:text-black text-[#737373] mr-3 text-sm font-medium transition-colors" href="https://discord.gg/ftZbQvCdN7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#737373]">
                  <path d="M9 10H9.01M15 10H15.01M21 12C21 16.22 17.16 19.67 12.31 19.67C11.41 19.67 10.55 19.54 9.74 19.3L5 21V16.73C3.15 15.43 2 13.8 2 12C2 7.58 6.48 4 12 4C17.52 4 22 7.58 22 12C22 12 22 12 21 12Z" />
                </svg>
              </Link>

              {/* Twitter Icon */}
              <Link className="hover:text-black text-[#737373] mr-3 text-sm font-medium transition-colors" href="https://twitter.com/mannupaaji">
                <Twitter className="h-4 w-4 text-[#737373]" />
              </Link>

              {/* Theme Toggle */}
              <button 
                className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-[#f5f5f5] h-10 w-10 flex items-center justify-center outline-none"
                aria-label="Toggle theme"
              >
                <Moon className="h-4 w-4 text-[#737373]" />
              </button>

              {/* Search Button */}
              <button className="flex relative justify-start items-center text-sm text-[#737373] py-2 w-fit border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 rounded-xl bg-white hover:bg-[#fafafa] transition-colors">
                <Search className="h-4 w-4 text-[#737373]" />
                <span className="transition-colors text-[#737373] text-xs sm:text-sm font-medium pl-2 pr-4">
                  Search <span className="hidden xl:inline-block">Components</span>
                </span>
                <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-[#e5e7eb] bg-[#f5f5f5] px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex text-[#737373]">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="block lg:hidden">
          <div className="flex w-full items-center justify-between px-4 py-4">
            <Link className="flex items-center gap-1.5" href="/">
              <Image 
                alt="Logo" 
                width={24} 
                height={24} 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5f5f1b8-5425-489a-99fd-2c963d0df51d-ui-aceternity-com/assets/icons/logo-1.png"
                className="h-6 w-6 object-contain"
              />
              <span className="font-bold text-black text-base">Aceternity UI</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="text-black">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;