"use client";

import { motion } from "framer-motion";

const programsList = [
    "Maternal & Child Health",
    "HIV and AIDS Support",
    "Human Rights & Advocacy",
    "Youth & Culture",
    "Climate Justice",
    "Community Empowerment",
    "Policy Reform",
    "KAWAC"
];

export function ProgramsTicker() {
    return (
        <div className="w-full bg-[#C41E3A] overflow-hidden py-6 relative">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#C41E3A] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#C41E3A] to-transparent z-10"></div>

            <div className="flex">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25
                    }}
                >
                    {/* Double the list for seamless loop */}
                    {[...programsList, ...programsList, ...programsList, ...programsList].map((program, i) => (
                        <div key={i} className="inline-flex items-center mx-8">
                            <span className="text-white text-2xl md:text-3xl font-bold font-playfair tracking-wide">
                                {program}
                            </span>
                            <span className="mx-8 text-white/50 text-4xl">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
