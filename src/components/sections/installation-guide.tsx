"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * InstallationGuide Component
 * 
 * Clones the installation section with CLI/Manual tabs and the code block 
 * showing the npx command for shadcn installation.
 * Adheres to the light theme and high-fidelity design specifications.
 */
export default function InstallationGuide() {
  const [activeTab, setActiveTab] = useState<"CLI" | "Manual">("CLI");
  const [copied, setCopied] = useState(false);

  // The command for shadcn installation for the specific component
  const cliCommand = "npx shadcn@latest add https://ui.aceternity.com/registry/dotted-glow-background.json";

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-10" id="installation">
      <div className="flex flex-col">
        {/* Section Heading - Matches h2 styles in globals.css */}
        <h2 className="mb-4 text-[1.5rem] font-semibold leading-[1.3] tracking-[-0.02em] text-black">
          Installation
        </h2>

        {/* Tab Navigation - Matches documentation style tab switcher */}
        <div className="mb-8 border-b border-[#e5e7eb]">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("CLI")}
              className={`relative pb-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                activeTab === "CLI"
                  ? "text-black"
                  : "text-[#737373] hover:text-black"
              }`}
            >
              CLI
              {activeTab === "CLI" && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-black" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("Manual")}
              className={`relative pb-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                activeTab === "Manual"
                  ? "text-black"
                  : "text-[#737373] hover:text-black"
              }`}
            >
              Manual
              {activeTab === "Manual" && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-black" />
              )}
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="mt-2 min-h-[140px]">
          {activeTab === "CLI" ? (
            <div className="flex flex-col space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-base font-semibold text-black leading-tight">
                Run the following command
              </h3>
              
              <div className="relative group max-w-3xl">
                {/* Code Block Container */}
                <div className="flex w-full items-center justify-between rounded-xl border border-[#1e293b] bg-[#020617] py-4 pl-4 pr-12 font-mono text-[14px] leading-relaxed shadow-lg overflow-hidden">
                  <div className="flex items-center gap-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <span className="text-[#38bdf8]">npx</span>
                    <span className="text-[#34d399]">shadcn@latest</span>
                    <span className="text-[#34d399]">add</span>
                    <span className="text-[#34d399] break-all">
                      https://ui.aceternity.com/registry/dotted-glow-background.json
                    </span>
                  </div>
                  
                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-md border border-[#1e293b] bg-[#0f172a] text-[#737373] transition-all hover:bg-[#1e293b] hover:text-white focus:ring-1 focus:ring-offset-1 focus:ring-ring focus:outline-none active:scale-95"
                    title="Copy to clipboard"
                    aria-label="Copy code command"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-[#10b981]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-8 max-w-3xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-black">
                  1. Install dependencies
                </h3>
                <div className="relative group max-w-2xl">
                  <div className="flex w-full items-center rounded-xl border border-[#1e293b] bg-[#020617] py-4 px-4 font-mono text-sm">
                    <div className="flex flex-wrap gap-x-2">
                      <span className="text-[#38bdf8]">npm</span>
                      <span className="text-[#34d399]">install</span>
                      <span className="text-[#34d399]">framer-motion clsx tailwind-merge</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-semibold text-black">
                  2. Copy the source code
                </h3>
                <p className="text-[1rem] leading-relaxed text-[#666666]">
                  Create a new file at <code className="bg-[#f5f5f5] px-1.5 py-0.5 rounded-md text-black font-mono text-[0.875rem]">src/components/ui/dotted-glow-background.tsx</code> and paste the component code from the repository.
                </p>
                <div className="h-32 w-full rounded-xl bg-[#f5f5f5] border border-[#e5e7eb] flex items-center justify-center text-[#737373] text-sm font-medium border-dashed">
                  Source code implementation details...
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
<ctrl63>