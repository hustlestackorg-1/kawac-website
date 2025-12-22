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
        <div className="w-full bg-[#0C3B4E]/90 backdrop-blur-sm overflow-hidden py-2 relative z-30">
            {/* Gradient Masks for fade effect */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0C3B4E] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0C3B4E] to-transparent z-10"></div>

            <div className="flex">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60 // Slower, more majestic
                    }}
                >
                    {[...headlines, ...headlines, ...headlines, ...headlines].map((text, i) => (
                        <div key={i} className="inline-flex items-center mx-8">
                            <span className="w-1.5 h-1.5 bg-[#FBAF3C] rounded-full mr-3"></span>
                            <span className="text-white text-sm font-medium tracking-wide">
                                {text}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
