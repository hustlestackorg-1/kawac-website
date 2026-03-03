"use client";

import { motion } from "framer-motion";
import { TheCorridor } from "@/components/sections/TheCorridor";
import { InstitutionalBrief } from "@/components/sections/InstitutionalBrief";
import { ShieldCheck, UserCheck, Search, Database } from "lucide-react";

export default function MobilityPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="/assets/ngo-professional-bg.png" className="w-full h-full object-cover" alt="Corridor" />
                </div>
                <div className="container relative z-10 px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px]">Flagship Protocol</span>
                        <h1 className="text-6xl md:text-9xl font-black text-white font-manrope tracking-tighter mt-8">
                            The Mobility <br />
                            <span className="text-secondary italic">Corridor</span>.
                        </h1>
                        <p className="text-white/60 text-xl font-light mt-8 max-w-2xl border-l-2 border-secondary pl-8">
                            A sovereign bridge between Kenyan human capital and global economic demand.
                            Ethical, institutional, and impact-verified.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Pipeline Visualization */}
            <TheCorridor />

            {/* The Protocol Details */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-5xl font-black text-primary font-manrope tracking-tighter">The Vetting Protocol</h2>
                                <p className="text-slate-500 mt-6 text-lg font-light leading-relaxed">
                                    We solve the "Trust Problem" in international recruitment. Every candidate
                                    undergoes a rigorous 6-month accreditation process.
                                </p>
                            </div>

                            <div className="grid gap-8">
                                {[
                                    { icon: UserCheck, title: "Identity Validation", desc: "Biometric and institutional background verification." },
                                    { icon: ShieldCheck, title: "Ethical Safeguards", desc: "Anti-exploitation and trafficking prevention shielding." },
                                    { icon: Search, title: "Skills Mapping", desc: "Alignment with Canadian NAICS/NOC standards." },
                                    { icon: Database, title: "Anonymized Vault", desc: "Secure employer access to vetted talent profiles." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 institutional-shadow">
                                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                                            <item.icon className="text-primary h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-primary uppercase tracking-widest text-xs mb-2">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-primary rounded-[60px] overflow-hidden institutional-shadow p-1">
                                <div className="bg-slate-900 w-full h-full rounded-[58px] p-12 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="text-secondary font-black uppercase tracking-widest text-[10px]">Real-Time Corridor Data</div>
                                        <div className="text-4xl text-white font-manrope font-black tracking-tighter">Active Talent Pipeline</div>
                                    </div>

                                    <div className="space-y-8">
                                        {[
                                            { label: "Vetted Candidates", val: "1,240", color: "bg-secondary" },
                                            { label: "In-Processing", val: "450", color: "bg-green-500" },
                                            { label: "Successfully Placed", val: "85", color: "bg-white" }
                                        ].map((m, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/40">
                                                    <span>{m.label}</span>
                                                    <span>{m.val}</span>
                                                </div>
                                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: '70%' }}
                                                        className={`h-full ${m.color}`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 border-t border-white/10 text-[10px] text-white/20 font-bold uppercase tracking-widest">
                                        Last updated: 32 MINUTES AGO
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 bg-secondary text-primary">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-black font-manrope tracking-tighter mb-12">
                        Ready to Invest <br /> in Resilience?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <button className="bg-primary text-white font-black px-12 py-6 rounded-full uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all duration-500">
                            Partner Portal Access
                        </button>
                        <button className="bg-transparent border-2 border-primary text-primary font-black px-12 py-6 rounded-full uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all duration-500">
                            Apply to the Corridor
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
