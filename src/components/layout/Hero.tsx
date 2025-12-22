"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/assets/hero-new.jpg",
        tagline: "Systemic Change • Proven Model • Safe to Partner",
        heading: "Building locally led solutions for communities excluded from economic, digital, health, and climate systems.",
    }
];

export function Hero() {
    const [currentSlide] = useState(0);

    return (
        <section className="relative w-full h-[700px] md:h-[900px] overflow-hidden bg-primary flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />
                    {/* Enhanced Gradient for Better Text Readability */}
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
                </motion.div>
            </AnimatePresence>

            <div className="container relative z-10 px-4 md:px-0 text-center mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-6"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Empowering Communities. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-300">
                            Advancing Equity.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed text-center mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Partnering to uplift vulnerable voices and create lasting impact.
                        We believe dignity is non‑negotiable.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-6 justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <Button
                            size="lg"
                            className="bg-[#FBAF3C] hover:bg-white hover:text-primary text-white rounded-full px-10 py-8 text-base font-extrabold tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(251,175,60,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            PARTNER WITH US
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-primary px-10 py-8 text-base font-extrabold tracking-wider backdrop-blur-sm"
                        >
                            SEE OUR IMPACT
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
