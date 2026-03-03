"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
    "/assets/hero-community.jpg",
    "/assets/hero-health.jpg",
    "/assets/program-youth.jpg"
];

export function Hero() {
    const { scrollY } = useScroll();
    const [index, setIndex] = useState(0);

    // Parallax Transforms
    const yText = useTransform(scrollY, [0, 1000], [0, 150]);
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[120vh] overflow-hidden bg-[#050308] flex justify-center items-center">
            {/* 1. CINEMATIC BACKGROUND - KEN BURNS SLIDESHOW */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${HERO_IMAGES[index]}')` }}
                        animate={{ scale: 1.15 }}
                        transition={{ duration: 10, ease: "linear" }}
                    />
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/40" />
                    {/* Gradient Overlay for Text Pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050308] via-transparent to-[#050308]/30" />
                </motion.div>
            </AnimatePresence>

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] opacity-80" />
                <div className="absolute inset-0 opacity-[0.03] bg-noise mix-blend-overlay" />
            </div>

            {/* 2. MAIN CONTENT */}
            <motion.div
                style={{ y: yText, opacity: opacityHero }}
                className="container relative z-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center"
            >
                {/* Institutional Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="px-6 py-2 bg-black/40 border border-white/10 backdrop-blur-md rounded-full flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
                        <span className="text-[10px] font-black text-white/90 tracking-[0.3em] uppercase font-manrope">
                            Our Operational Model
                        </span>
                    </div>
                </motion.div>

                {/* THE HEADLINE - Centralized with Gradient */}
                <div className="relative mb-12 p-12 -mx-12 rounded-3xl">
                    {/* Subtle Dark Gradient Behind Text */}
                    <div className="absolute inset-0 bg-radial-gradient from-black/60 to-transparent blur-2xl -z-10 opacity-80" />

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white font-cormorant leading-tight drop-shadow-2xl"
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        Empowering Communities. <br />
                        <span className="text-secondary italic">Advancing Equity.</span>
                    </motion.h1>
                </div>

                <motion.p
                    className="text-xl md:text-2xl text-slate-200 max-w-2xl mb-16 leading-relaxed font-manrope font-light px-8 text-balance drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                >
                    We act as the genetic memory of survival, building logic-defying infrastructure for those the world left behind.
                </motion.p>

                {/* Editorial Actions */}
                <motion.div
                    className="flex flex-col md:flex-row gap-6 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <MagneticButton strength={40}>
                        <Link href="/programs">
                            <Button className="bg-white hover:bg-slate-200 text-[#050308] h-14 px-10 text-xs font-black tracking-[0.25em] uppercase rounded-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Enter The System
                            </Button>
                        </Link>
                    </MagneticButton>
                </motion.div>

            </motion.div>

            {/* Fog Overlay for Depth */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050308] to-transparent z-[15] pointer-events-none" />
        </section>
    );
}
