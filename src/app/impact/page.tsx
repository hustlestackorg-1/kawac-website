"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Globe2, BarChart3 } from "lucide-react";

const sdgs = [
    { id: 1, title: "No Poverty", desc: "Economic sovereignty through ethical mobility.", icon: Globe2 },
    { id: 3, title: "Good Health", desc: "Psychosocial support for HIV beneficiaries.", icon: ShieldCheck },
    { id: 8, title: "Decent Work", desc: "Fair wages and safe international placement.", icon: FileText },
    { id: 17, title: "Partnerships", desc: "Canada-Kenya institutional collaboration.", icon: BarChart3 },
];

export default function ImpactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-40 pb-20 bg-primary text-white text-center flex flex-col items-center justify-center">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px]">Institutional Accountability</span>
                        <h1 className="text-6xl md:text-9xl font-black font-manrope tracking-tighter mt-8 leading-none">
                            The Transparency <br />
                            <span className="text-secondary italic">Engine.</span>
                        </h1>
                        <p className="text-white/60 text-xl font-light mt-8 max-w-2xl mx-auto">
                            Verification of impact is the foundation of our legitimacy.
                            We track every dollar and every life through an SDG-aligned protocol.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Live Metrics Grid & Pulse */}
            <section className="py-24 border-b border-slate-100 bg-slate-50 relative overflow-hidden">
                {/* Abstract Pulse Background */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
                    <div className="w-[800px] h-[800px] border-[40px] border-primary rounded-full animate-pulse-slow"></div>
                    <div className="absolute w-[600px] h-[600px] border-[20px] border-secondary rounded-full"></div>
                    <div className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { label: "Beneficiaries Moved", value: "850+", trend: "+12% this qtr" },
                            { label: "Maternal Health Deliveries", value: "3,000+", trend: "Since 2020" },
                            { label: "Viral Suppression Rate", value: "92%", trend: "KENWA Verified" },
                            { label: "Youth Placed in Excellence", value: "1,200+", trend: "Global Mobility" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-4 text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100/50 hover:shadow-lg hover:border-secondary/30 transition-all duration-300 group"
                            >
                                <div className="text-6xl font-black text-primary font-manrope group-hover:text-secondary transition-colors">{stat.value}</div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                                    <div className="text-[9px] font-mono text-emerald-500 bg-emerald-50 inline-block px-2 py-0.5 rounded-full">{stat.trend}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SDG Alignment */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-black text-primary font-manrope tracking-tighter">SDG Alignment Matrix</h2>
                            <p className="text-slate-500 mt-6 text-lg">Our strategies are mapped directly to the United Nations Sustainable Development Goals for 2030.</p>
                        </div>
                        <div className="bg-secondary text-primary font-black px-8 py-3 rounded-full text-xs tracking-widest uppercase">
                            Download 2026 Strategy
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sdgs.map((sdg, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-10 border border-slate-100 rounded-[40px] institutional-shadow group hover:bg-primary transition-all duration-500"
                            >
                                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary">
                                    <sdg.icon className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-4xl font-black text-primary/10 mb-4 group-hover:text-white/20">SDG {sdg.id}</div>
                                <h3 className="text-2xl font-black text-primary mb-4 font-manrope group-hover:text-white">{sdg.title}</h3>
                                <p className="text-slate-500 text-sm font-light group-hover:text-white/60">{sdg.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transparency Documents */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="text-center">
                            <h2 className="text-4xl font-black text-primary font-manrope">Repository of Trust</h2>
                            <p className="text-slate-500 mt-4">Verified institutional reports and audits.</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "2023 Audited Financial Statements",
                                "Mobility Corridor Impact Report (Q4)",
                                "Ethical Recruitment Guidelines",
                                "Board of Directors Governance Charter"
                            ].map((doc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-secondary transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-6">
                                        <FileText className="text-slate-400 group-hover:text-secondary h-6 w-6" />
                                        <span className="font-bold text-primary">{doc}</span>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">PDF [2.4MB]</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
