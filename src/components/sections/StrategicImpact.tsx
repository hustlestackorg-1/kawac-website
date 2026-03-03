"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Globe } from "lucide-react";

const pillars = [
    {
        icon: Zap,
        title: "Emergency Stabilization",
        desc: "Rapid response food, health, and shelter interventions for 48-hour crisis stabilization.",
        metric: "48h Response"
    },
    {
        icon: ShieldCheck,
        title: "Systemic Advocacy",
        desc: "Navigating institutional barriers to unlock healthcare, housing, and legal status for the vulnerable.",
        metric: "100% Justice"
    },
    {
        icon: Globe,
        title: "Global Mobility",
        desc: "Ethical corridors matching African talent with verified opportunities in the Global North.",
        metric: "Intl. Scale"
    }
];

export function StrategicImpact() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="mb-20 max-w-2xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] block mb-4"
                    >
                        Our Operational Model
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-primary font-cormorant leading-[0.9] tracking-tighter"
                    >
                        ARCHITECTING <br /> <span className="italic font-normal text-secondary">SYSTEMIC CHANGE.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="group"
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <pillar.icon size={20} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-bold font-cormorant text-primary mb-4">{pillar.title}</h3>
                            <p className="text-slate-500 font-manrope leading-relaxed text-sm mb-8 pr-8">
                                {pillar.desc}
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-secondary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{pillar.metric}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
