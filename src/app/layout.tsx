import type { Metadata } from "next";
import { Inter, Manrope, Caveat, Playfair_Display, Cormorant_Garamond } from "next/font/google"; // Import fonts
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProgramsTicker } from "@/components/ui/programs-ticker";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { KawacAI } from "@/components/ui/KawacAI";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" }); // Body font
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAWAC | Niagara Emergency Relief & Advocacy",
  description: "A locally-led emergency relief and advocacy organization serving the Niagara Region, St. Catharines, and Welland. We provide poverty reduction, newcomer support, and seniors assistance for the African Caribbean Black (ACB) community and all vulnerable populations.",
  keywords: "Niagara Emergency Relief, Food Bank St. Catharines, Newcomer Support Niagara, ACB Community Niagara, Poverty Reduction, Hospital Advocacy, Seniors Help Niagara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} ${caveat.variable} ${playfair.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col font-sans bg-[#F8F9FA]`}
      >
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            {/* KAWAC INTELLIGENCE LAYER */}
            {/* KAWAC INTELLIGENCE LAYER */}
            <KawacAI />

            <div className="grain-overlay" />

            <SmoothScroll>
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <ProgramsTicker />
              <Footer />
            </SmoothScroll>
          </div>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
