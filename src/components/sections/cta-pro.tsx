import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function CTAPro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-48 border-t border-neutral-100">
      {/* Background Dotted Grid - Replicating the design system effect */}
      <div className="absolute inset-0 -z-10 bg-dotted-grid opacity-20 [mask-image:radial-gradient(circle_at_center,black_20%,transparent_80%)]" />
      
      {/* Decorative Glows - Subtle blue ambient lighting */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-blue-50/40 blur-[120px] rounded-full" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
            Aceternity UI Pro
          </div>
          
          <h2 className="max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-black sm:text-6xl lg:text-7xl">
            Build websites faster and 10x better than your competitors with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Aceternity UI Pro
            </span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-neutral-600">
                Next.js 15, Tailwind CSS v4 and Motion for react powered templates
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-neutral-600">
                70+ templates and component blocks combined
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-neutral-600">
                Ready to copy paste component blocks, save days of development time
              </p>
            </div>
          </div>

          <div className="mt-14">
            <a
              href="https://pro.aceternity.com"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-black px-10 text-base font-bold text-white transition-all hover:bg-neutral-900 active:scale-95"
            >
              <span className="relative z-10">Get Aceternity UI Pro</span>
              <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-white/10 to-transparent transition-transform duration-300 group-hover:translate-y-0" />
            </a>
          </div>
        </div>

        {/* Large composite image of dashboards/templates with floating interface windows */}
        <div className="relative mt-20 md:mt-32">
          <div className="relative mx-auto max-w-6xl">
            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.15)] md:p-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5f5f1b8-5425-489a-99fd-2c963d0df51d-ui-aceternity-com/assets/images/cta-demo-light-2.webp"
                alt="Aceternity UI Pro Dashboard and Templates Preview showing multiple interface windows"
                width={2000}
                height={1200}
                className="w-full rounded-xl transition-transform duration-700 group-hover:scale-[1.005]"
                priority
              />
              {/* Internal subtle shadow for depth */}
              <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-black/5" />
            </div>
            
            {/* Bottom fading mask to blend with the following section or footer */}
            <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
          </div>
          
          {/* Large background decorative glow specific to image container */}
          <div className="absolute -inset-x-20 -top-20 -z-10 h-[120%] w-[calc(100%+160px)] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_70%)] opacity-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}