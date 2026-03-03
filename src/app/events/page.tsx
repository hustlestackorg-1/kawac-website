"use client";

import { EventsOne } from "@/components/sections/EventsOne";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="pt-48 pb-12 bg-[#100a26] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/pattern-overlay.png')] opacity-10" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-sm mb-8">
                            <Shield size={12} className="text-secondary" />
                            <span className="text-secondary font-black uppercase tracking-[0.3em] text-[9px]">Global Engagement</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-manrope tracking-tighter mb-6">
                            KAWAC <span className="text-secondary italic">Events.</span>
                        </h1>
                        <p className="text-white/60 text-xl font-light max-w-2xl mx-auto">
                            Join us in our mission. Connect, learn, and advocate at our upcoming global and local events.
                        </p>
                    </motion.div>
                </div>
            </section>

            <EventsOne />
        </main>
    );
}
