import type { Metadata } from "next";
import { Manrope, Caveat, Playfair_Display } from "next/font/google"; // Added Playfair for "Psychological" logo
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProgramsTicker } from "@/components/ui/programs-ticker";
import { CinematicTicker } from "@/components/ui/cinematic-ticker";
import { AuthProvider } from "@/components/auth/AuthProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAWAC | Building Locally Led Solutions",
  description: "Marginalized women, seniors, and communities are excluded from systems. KAWAC builds locally led, SDG-aligned solutions that work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${caveat.variable} ${playfair.variable} antialiased min-h-screen flex flex-col font-manrope`}
      >
        <AuthProvider>
          <Header />
          <CinematicTicker />
          <main className="flex-1">
            {children}
          </main>
          <ProgramsTicker />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
