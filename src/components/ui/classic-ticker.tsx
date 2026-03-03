"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe, Calendar } from "lucide-react";

const headlines = [
    "KAWAC International: Bridging Heritage & Future",
    "New Maternal Health Initiative Launched in Nairobi",
    "Global Partnership for Health Equity - 2026 Strategic Plan",
    "Volunteer Corps: Recruitment Now Open for Summer Cohort"
];

export function ClassicTicker() {
    return (
        <div className="w-full bg-primary text-white h-9 flex items-center relative z-50 overflow-hidden text-[10px] font-bold tracking-widest uppercase font-manrope border-b border-white/10">
            {/* Static Label - Left Removed as per request */}

            {/* Scrolling Content */}
            <div className="flex-1 overflow-hidden relative h-full flex items-center">
                <div className="absolute left-0 w-8 h-full bg-gradient-to-r from-[#0d0a1a] to-transparent z-10" />
                <div className="absolute right-0 w-8 h-full bg-gradient-to-l from-[#0d0a1a] to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap items-center"
                    animate={{ x: [0, -1000] }} // Adjusted for manual loop or use percent
                    style={{ x: 0 }} // Reset
                >
                    <TickerTrack />
                </motion.div>
            </div>

            {/* Static Date - Right */}
            <div className="hidden md:flex items-center h-full px-6 bg-[#1a1433] text-slate-400 z-20 shrink-0 ml-auto border-l border-white/5">
                <Calendar className="w-3 h-3 mr-2" />
                <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
        </div>
    );
}

function TickerTrack() {
    return (
        <motion.div
            className="flex items-center"
            animate={{ x: "-50%" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
            {[...headlines, ...headlines, ...headlines].map((text, i) => (
                <div key={i} className="inline-flex items-center mx-6">
                    <span className="w-1 h-1 bg-secondary rounded-full mr-3" />
                    {text}
                </div>
            ))}
        </motion.div>
    );
}
