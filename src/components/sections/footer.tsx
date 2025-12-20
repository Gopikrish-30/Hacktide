import Image from 'next/image';
import Link from 'next/link';

/**
 * Footer component for Aceternity UI.
 * Cloned with pixel-perfect accuracy based on the provided design system and screenshots.
 * 
 * Assets used:
 * - Logo: https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5f5f1b8-5425-489a-99fd-2c963d0df51d-ui-aceternity-com/assets/icons/logo-1.png
 */

const LOGO_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5f5f1b8-5425-489a-99fd-2c963d0df51d-ui-aceternity-com/assets/icons/logo-1.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white py-20 font-sans antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <Link 
              href="/" 
              className="flex items-center justify-center space-x-2 text-2xl font-bold text-neutral-600 no-underline"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-black text-sm text-white antialiased md:h-6 md:w-6">
                <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl"></div>
                <div className="relative z-20 text-sm text-emerald-500">
                  <Image 
                    src={LOGO_URL} 
                    alt="Aceternity UI Logo" 
                    width={20} 
                    height={20} 
                    className="h-5 w-5 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="m-0 text-lg font-bold tracking-tight text-black sm:text-xl">
                  Aceternity UI
                </h2>
              </div>
            </Link>
            
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm leading-relaxed text-neutral-500">
                A product by{" "}
                <a 
                  href="https://aceternity.com" 
                  className="font-medium text-neutral-600 transition-colors hover:text-black"
                >
                  Aceternity
                </a>
              </p>
              <p className="m-0 text-sm leading-relaxed text-neutral-500">
                Building in public at{" "}
                <a 
                  href="https://twitter.com/mannupaaji" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-neutral-600 transition-colors hover:text-black"
                >
                  @mannupaaji
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16 lg:gap-24">
            {/* Products Column */}
            <div className="flex flex-col gap-3">
              <Link href="/pricing" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Pricing
              </Link>
              <Link href="/components" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Components
              </Link>
              <a href="https://pro.aceternity.com/templates" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Templates
              </a>
              <Link href="/categories" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Categories
              </Link>
              <Link href="/blog" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Blog
              </Link>
              <Link href="/box-shadows" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Box Shadows
              </Link>
              <Link href="/showcase" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Showcase
              </Link>
              <Link href="/playground" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Playground
              </Link>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <a href="https://pro.aceternity.com" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Aceternity UI Pro
              </a>
              <a href="https://aceternity.com" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Aceternity
              </a>
              <a href="https://github.com/sponsors/manuarora700" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Sponsor
              </a>
              <Link href="/affiliate" className="text-sm font-medium text-neutral-500 transition-colors hover:text-black">
                Affiliate
              </Link>
            </div>

            {/* Community Column */}
            <div className="flex flex-col gap-3">
              <a 
                href="https://twitter.com/mannupaaji" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-black"
              >
                Twitter
              </a>
              <a 
                href="https://discord.gg/ftZbQvCdN7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-black"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;