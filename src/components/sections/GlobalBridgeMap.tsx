"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function GlobalBridgeMap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-32 bg-[#050308] relative overflow-hidden min-h-[80vh] flex items-center">

            {/* Background Gird - Tech Aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

            <div className="container mx-auto px-6 relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-4 px-4 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 backdrop-blur-md"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-500/90 font-manrope">
                            Global Infrastructure
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white font-manrope tracking-tighter"
                    >
                        The KAWAC <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">Bridge</span>
                    </motion.h2>
                </div>

                {/* Map Visualization */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[2/1] bg-[#0A0612] rounded-3xl border border-white/5 shadow-2xl overflow-hidden group">

                    {/* Abstract World Map Dots (Simplified) */}
                    <div className="absolute inset-0 opacity-20">
                        {/* This would be simplified dots representing continents */}
                        <svg className="w-full h-full" viewBox="0 0 1000 500">
                            {/* North America Shape (Abstract) */}
                            <path d="M 150 150 Q 200 100 250 150 T 350 200" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                            {/* Africa Shape (Abstract) */}
                            <path d="M 450 250 Q 500 350 550 300 T 600 250" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                        </svg>
                    </div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(251, 191, 36, 0.1)" />
                                <stop offset="50%" stopColor="#fbbf24" />
                                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.1)" />
                            </linearGradient>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
                            </marker>
                        </defs>

                        {/* The Arc */}
                        <motion.path
                            d="M 280 200 Q 450 50 540 320" // Approx Niagara to Kenya coords on a 1000x500 box? adjusting scaling
                            fill="none"
                            stroke="url(#goldGradient)"
                            strokeWidth="3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        {/* Pulse Circle at Niagara (Resource Hub) */}
                        <g transform="translate(280, 200)">
                            <circle r="6" fill="#fbbf24" />
                            <circle r="12" fill="none" stroke="#fbbf24" opacity="0.5">
                                <animate attributeName="r" from="6" to="24" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
                            </circle>
                        </g>

                        {/* Pulse Circle at Kenya (Impact Zone) */}
                        <g transform="translate(540, 320)"> // Adjusted coordinates for abstract visualization
                            <circle r="6" fill="#fbbf24" />
                            <circle r="12" fill="none" stroke="#fbbf24" opacity="0.5">
                                <animate attributeName="r" from="6" to="24" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
                            </circle>
                        </g>
                    </svg>

                    {/* SVG Coordinates need to be responsive... making it simpler with % positioning divs */}

                    {/* Niagara Label */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute left-[20%] top-[35%] -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="bg-black/80 backdrop-blur-md border border-amber-500/40 px-4 py-2 rounded-lg text-center shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                            <div className="text-[10px] font-black uppercase tracking-widest text-amber-400">Resource Hub</div>
                            <div className="text-sm font-bold text-white">Niagara, Canada</div>
                        </div>
                    </motion.div>

                    {/* Kenya Label */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute right-[30%] bottom-[30%] translate-x-1/2 translate-y-1/2" // Adjusting position
                    >
                        <div className="bg-black/80 backdrop-blur-md border border-amber-500/40 px-4 py-2 rounded-lg text-center shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                            <div className="text-[10px] font-black uppercase tracking-widest text-amber-400">Impact Zone</div>
                            <div className="text-sm font-bold text-white">Nairobi, Kenya</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
