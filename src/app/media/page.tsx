"use client";

import { motion } from "framer-motion";
import { Play, FileText, ArrowRight } from "lucide-react";

export default function MediaPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-40 pb-20 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px]">Institutional Intelligence</span>
                        <h1 className="text-6xl md:text-9xl font-black font-manrope tracking-tighter mt-8">
                            Thought <br />
                            <span className="text-secondary italic">Leadership</span>.
                        </h1>
                        <p className="text-white/60 text-xl font-light mt-8 max-w-2xl">
                            Strategic analysis and reports on ethical labour mobility, community resilience,
                            and the macroeconomics of survival.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Serie: The Unfinished War */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="bg-slate-900 rounded-[60px] p-12 md:p-24 overflow-hidden relative group">
                        <div className="absolute inset-0 opacity-40">
                            <img src="/assets/kawac-hero-legacy.jpg" className="w-full h-full object-cover grayscale transition-transform duration-[5s] group-hover:scale-110" alt="Legacy" />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                        </div>

                        <div className="relative z-10 max-w-2xl">
                            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Featured Series</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white font-manrope tracking-tighter mt-6 mb-8">
                                The Unfinished War.
                            </h2>
                            <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                                A multi-part documentary and essay series exploring the evolution
                                of the HIV/AIDS struggle into a fight for global economic agency.
                            </p>
                            <button className="bg-white text-primary rounded-full px-12 py-6 flex items-center gap-4 text-xs font-black uppercase tracking-widest hover:bg-secondary transition-all">
                                <Play className="h-4 w-4 fill-primary" /> Watch Prologue
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reports Grid */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-24">
                        <div>
                            <h2 className="text-4xl font-black text-primary font-manrope">Strategic Dossiers</h2>
                            <p className="text-slate-500 mt-4">Verified institutional reports and whitepapers.</p>
                        </div>
                        <span className="text-xs font-black text-secondary cursor-pointer border-b-2 border-secondary pb-1 uppercase tracking-widest">
                            View Full Archive
                        </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "The 2026 Mobility Outlook", type: "Research Paper", length: "45 Pages" },
                            { title: "Building Trust Machines", type: "Whitepaper", length: "12 Pages" },
                            { title: "The Asunta Effect: Final Report", type: "Impact Study", length: "32 Pages" }
                        ].map((doc, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-12 bg-white rounded-[40px] institutional-shadow border border-slate-100 group cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                    <FileText className="text-primary h-6 w-6 group-hover:text-white" />
                                </div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{doc.type}</div>
                                <h3 className="text-2xl font-black text-primary font-manrope mb-6 leading-tight">{doc.title}</h3>
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-300">
                                    <span>{doc.length}</span>
                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
