"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, GraduationCap, MapPin } from "lucide-react";

const steps = [
    {
        icon: HeartPulse,
        title: "KENWA Network",
        desc: "12,000+ Vetted Beneficiaries",
        accent: "bg-hint-yellow"
    },
    {
        icon: GraduationCap,
        title: "Skills Validation",
        desc: "Institutional Certification",
        accent: "bg-hint-orange"
    },
    {
        icon: ShieldCheck,
        title: "Ethical Protocol",
        desc: "Trafficking-Prevention Vetting",
        accent: "bg-hint-blue"
    },
    {
        icon: MapPin,
        title: "Strategic Placement",
        desc: "Canada-Kenya Integration",
        accent: "bg-secondary"
    }
];

export function TheCorridor() {
    return (
        <section className="py-40 bg-[#080614] text-white overflow-hidden relative">
            {/* HD Goldish Offtones Background */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,var(--gold-hd),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none" />

            {/* Cinematic Da Vinci Geometry */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-10 pointer-events-none" />
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="h-px w-10 bg-gold-hd" />
                        <span className="text-gold-hd font-black uppercase tracking-[0.6em] text-[10px]">
                            SOVEREIGN INFRASTRUCTURE
                        </span>
                        <div className="h-px w-10 bg-gold-hd" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="text-7xl md:text-9xl font-bold font-cormorant tracking-tight max-w-5xl leading-[0.85]"
                    >
                        Architecting <span className="text-gold-hd italic">Global</span> <span className="text-white">Dignity.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-400 text-xl font-light mt-12 max-w-2xl italic leading-relaxed"
                    >
                        "We build humanity-centered migration pipelines that protect dignity and construct global economies through ethical protocol."
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 shadow-2xl">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative z-10 p-12 bg-[#080614] hover:bg-[#0c0a1f] transition-all duration-500 group"
                        >
                            <div className="relative mb-10">
                                <div className={cn("w-14 h-14 flex items-center justify-center text-white/50 group-hover:text-gold-hd transition-colors")}>
                                    <step.icon className="h-8 w-8" strokeWidth={1} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold font-cormorant mb-6 tracking-wide text-white group-hover:text-gold-hd transition-colors">{step.title}</h3>
                            <p className="text-slate-500 text-[11px] font-medium font-manrope uppercase tracking-widest leading-relaxed">{step.desc}</p>

                            <div className="absolute top-6 right-6 text-white/[0.05] text-4xl font-black font-manrope group-hover:text-gold-hd/10 transition-colors">
                                0{idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-32 flex flex-col items-center gap-10"
                >
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-14 h-14 rounded-full border-2 border-primary bg-primary overflow-hidden shadow-2xl ring-4 ring-white/5 transform hover:-translate-y-2 transition-transform">
                                <img src={`/assets/impact-community.jpg`} alt="vetted candidate" className="w-full h-full object-cover grayscale brightness-110" />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-8 bg-white/10 px-12 py-6 rounded-none border border-white/20 group cursor-pointer hover:bg-gold-hd transition-all duration-700">
                        <div className="text-[11px] font-black uppercase tracking-[0.4em] text-gold-hd group-hover:text-primary transition-colors">
                            Engage Sovereignty Infrastructure
                        </div>
                        <ArrowRight className="text-gold-hd group-hover:text-primary h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import { cn } from "@/lib/utils";
