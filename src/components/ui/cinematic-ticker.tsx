"use client";

import { motion } from "framer-motion";

const headlines = [
    "KAWAC secures $2.5M multi-year partnership for maternal health initiatives.",
    "New Governance Framework ratified by the Board of Directors.",
    "Upcoming Town Hall: 'The Future of Black Health in Canada' - Register Now.",
    "Volunteer Applications for Summer 2026 are now open.",
    "Impact Report: 90% viral suppression achieved in our pilot cohort."
];

export function CinematicTicker() {
    return (
        <div className="w-full bg-[#0d0a1a] border-b border-white/5 py-2 relative z-30 overflow-hidden">
            <div className="flex justify-center">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60
                    }}
                >
                    {[...headlines, ...headlines].map((text, i) => (
                        <div key={i} className="inline-flex items-center mx-8">
                            <span className="w-1 h-1 bg-secondary rounded-full mr-3 opacity-50"></span>
                            <span className="text-slate-300 text-[10px] font-medium tracking-widest uppercase font-manrope">
                                {text}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
