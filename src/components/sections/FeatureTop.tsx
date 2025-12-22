"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        id: 1,
        title: "Partner with Us",
        description: "For institutions seeking proven, scalable impact models in health and climate.",
        icon: "icon-charity",
        link: "/contact",
        bg: "bg-[#0C3B4E]" // Deep Teal
    },
    {
        id: 2,
        title: "Join the Frontlines",
        description: "For volunteers and interns ready to engage in governance and fieldwork.",
        icon: "icon-unity",
        link: "/volunteer",
        bg: "bg-[#164e63]" // Slightly lighter teal
    },
    {
        id: 3,
        title: "Invest in Equity",
        description: "For donors demanding transparency and high social return on investment.",
        icon: "icon-donation",
        link: "/donate",
        bg: "bg-[#0C3B4E]" // Deep Teal
    }
];

export function FeatureTop() {
    return (
        <section className="relative -mt-24 z-20 px-4 md:px-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + (index * 0.2), duration: 0.8 }}
                            className={`${feature.bg} text-white p-10 rounded-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10`}
                        >
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 group-hover:scale-125 transition-transform duration-700">
                                <div className="w-32 h-32 rounded-full border-4 border-white border-dashed animate-spin-slow"></div>
                            </div>

                            <h3 className="text-2xl font-bold font-playfair mb-4 relative z-10">{feature.title}</h3>
                            <p className="text-white/70 mb-8 relative z-10 leading-relaxed text-sm font-manrope">
                                {feature.description}
                            </p>
                            <Link href={feature.link} className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs relative z-10 hover:gap-4 transition-all text-[#FBAF3C]">
                                Start Dialogue <MoveRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
