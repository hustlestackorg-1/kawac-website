"use client";

import { motion } from "framer-motion";
import { User, Building2, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PortalPage() {
    return (
        <main className="min-h-screen bg-[#050308] text-white flex items-center justify-center py-40 px-6 relative overflow-hidden">
            {/* 8D Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]" />
            </div>

            <div className="max-w-6xl w-full relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8 backdrop-blur-md"
                    >
                        <ShieldCheck className="h-4 w-4 text-secondary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Secure Institutional Gateway</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-white font-manrope tracking-tighter leading-none"
                    >
                        The Kawac <span className="text-secondary italic">Nexus</span>.
                    </motion.h1>
                    <p className="text-slate-400 text-xl font-light mt-8 max-w-2xl mx-auto">
                        Authorized entry point for Global Mobility applicants and Institutional Partners.
                        All connections are encrypted and SDG-verified.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Candidate Portal */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative p-12 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-secondary/50 transition-all duration-700 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-secondary group-hover:text-black transition-all duration-500 relative z-10">
                            <User className="h-8 w-8 text-white group-hover:text-black transition-colors" />
                        </div>
                        <h2 className="text-3xl font-black text-white font-manrope mb-4 relative z-10">Talent Protocol</h2>
                        <p className="text-slate-400 mb-10 group-hover:text-white/80 leading-relaxed font-light relative z-10">
                            Submit credentials for the Global Mobility Corridor. Track application status
                            and complete institutional vetting requirements.
                        </p>
                        <Link href="/portal/apply" className="relative z-10 inline-block">
                            <button className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:text-secondary transition-colors">
                                INITIATE LOGIN <ArrowRight className="h-4 w-4" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* Partner Portal */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative p-12 rounded-[40px] border border-secondary/20 bg-[#1a1033] overflow-hidden group hover:border-secondary/60 transition-all duration-500"
                    >
                        {/* Premium Glow */}
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-secondary/20 blur-[100px] animate-pulse-slow" />

                        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-secondary/20 relative z-10">
                            <Building2 className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-black text-white font-manrope mb-4 relative z-10">Partner Command</h2>
                        <p className="text-slate-300 mb-10 leading-relaxed font-light relative z-10">
                            Access anonymized candidate profiles, manage placement logistics, and
                            verify SDG impact metrics for your organization.
                        </p>
                        <Link href="/portal/partner" className="relative z-10 inline-block">
                            <button className="flex items-center gap-4 text-secondary font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
                                ACCESS DASHBOARD <ArrowRight className="h-4 w-4" />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-slate-600 text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-2">
                        <ShieldCheck size={12} />
                        Secured by KAWAC 256-BIT Sovereignty Shield
                    </p>
                </div>
            </div>
        </main>
    );
}
