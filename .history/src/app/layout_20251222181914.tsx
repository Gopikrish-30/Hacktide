import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hacktide",
  description: "A 24-hour intense hackathon organized by our department.",
  icons: {
    icon: "/anokha-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
        <body
          className={`${monaSans.variable} font-sans antialiased bg-black text-white selection:bg-blue-500/30`}
        >
          {children}
        </body>
    </html>
  );
}
