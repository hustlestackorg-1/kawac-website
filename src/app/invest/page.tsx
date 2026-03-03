"use client";

import { motion } from "framer-motion";
import { Heart, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolios = [
    {
        title: "The Mobility Seed",
        desc: "Direct funding for candidate vetting, passport logistics, and institutional accreditation.",
        impact: "Funds 5 candidates per $10k",
        color: "bg-primary"
    },
    {
        title: "Healthcare Continuity",
        desc: "Sustaining the KENWA network and frontline maternal health interventions in Nairobi.",
        impact: "Supports 500 mothers per $5k",
        color: "bg-secondary"
    },
    {
        title: "Sovereignty Fund",
        desc: "Unrestricted institutional support for policy advocacy and global corridor architecture.",
        impact: "Systemic transformation catalyst",
        color: "bg-slate-900"
    }
];

export default function InvestPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="/assets/ngo-professional-bg.png" className="w-full h-full object-cover" alt="Invest" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px]">Strategic Philanthropy</span>
                        <h1 className="text-6xl md:text-9xl font-black font-manrope tracking-tighter mt-8">
                            Investing in Sustainable Systems That <br />
                            <span className="text-secondary italic">Uplift Communities</span>.
                        </h1>
                        <p className="text-white/60 text-xl font-light mt-8 max-w-2xl">
                            We go beyond charity by funding structural solutions that strengthen local economies, empower communities, and drive self-sustaining growth across the Global South.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <h2 className="text-5xl font-black text-primary font-manrope tracking-tighter leading-tight">
                                The ROI of <span className="text-secondary">Human Dignity</span>.
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                                        <TrendingUp className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-primary uppercase tracking-widest text-xs mb-2">Sustainable Returns</h4>
                                        <p className="text-slate-500 font-light leading-relaxed">Unlike emergency aid, investment in the Corridor creates tax-paying, community-building citizens.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                                        <ShieldCheck className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-primary uppercase tracking-widest text-xs mb-2">Institutional Transparency</h4>
                                        <p className="text-slate-500 font-light leading-relaxed">Every dollar is mapped to a specific SDG outcome through our Transparency Engine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-12 rounded-[60px] institutional-shadow border border-slate-100">
                            <div className="text-center space-y-8">
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Systemic Investment (2025)</div>
                                <div className="text-7xl font-black text-primary font-manrope">$2,450,000</div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} className="h-full bg-secondary" />
                                </div>
                                <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase tracking-widest">
                                    <span>$0</span>
                                    <span>Goal: $4M</span>
                                </div>
                                <Button className="w-full bg-primary text-white rounded-full py-8 uppercase tracking-widest text-xs font-black shadow-xl shadow-primary/20 hover:bg-secondary hover:text-primary transition-all duration-500">
                                    Invest Now via Secure Gateway
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl font-black font-manrope tracking-tighter">Your Investment Portfolio</h2>
                        <p className="text-white/40 mt-4 max-w-xl mx-auto">Select a strategic area to allocate your capital for maximum systemic impact.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {portfolios.map((p, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -20 }}
                                className={`p-12 rounded-[50px] border border-white/5 transition-all duration-500 group cursor-pointer ${p.color === 'bg-slate-900' ? 'bg-white/5 border-white/10' : p.color}`}
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                        <Heart className="h-8 w-8 text-secondary" />
                                    </div>
                                    <ArrowRight className="h-6 w-6 text-white/20 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
                                </div>
                                <h3 className="text-3xl font-black font-manrope mb-6">{p.title}</h3>
                                <p className="text-white/60 font-light mb-12 leading-relaxed">{p.desc}</p>
                                <div className="pt-8 border-t border-white/10">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">Projected Impact</div>
                                    <div className="text-lg font-bold">{p.impact}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
