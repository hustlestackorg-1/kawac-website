"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CinematicWatermark() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Parallax and Opacity effects
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.08, 0.03]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
            <motion.div
                style={{ y, opacity, scale }}
                className="text-[20vw] font-playfair font-black text-primary tracking-tighter select-none whitespace-nowrap"
            >
                KAWAC
            </motion.div>

            {/* Optional: Add a subtle grid or texture overlay for 'Game-like' feel */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] opacity-[0.02] mix-blend-overlay"></div>
        </div>
    );
}
