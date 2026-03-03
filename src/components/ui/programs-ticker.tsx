"use client";

import { motion } from "framer-motion";

const programsList = [
    "Inclusive Development",
    "Maternal ChildCare",
    "Community Care & Support",
    "HIV/AIDS Support",
    "Human Rights & Advocacy",
    "Climate Justice",
    "Opportunities Beyond Borders",
    "Youth For Youth"
];

export function ProgramsTicker() {
    return (
        <div className="w-full bg-[#7c3aed] overflow-hidden py-6 relative border-t border-white/10">
            {/* Amethyst Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

            <div className="flex">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 45 // Slower pace
                    }}
                >
                    {[...programsList, ...programsList].map((program, i) => (
                        <div key={i} className="inline-flex items-center mx-12">
                            <span className="text-white text-xl md:text-2xl font-bold font-cormorant tracking-widest uppercase">
                                {program}
                            </span>
                            <span className="mx-12 text-white/30 text-3xl font-light">|</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
