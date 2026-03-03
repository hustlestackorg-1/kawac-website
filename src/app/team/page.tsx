"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Users, FileCheck } from "lucide-react";

const boardMembers = [
    { name: "Asunta Wagura", role: "Founder & Strategic Visionary", bio: "Recipient of the Order of the Grand Warrior of Kenya.", link: "/team/asunta" },
    { name: "Executive Council", role: "ACB Global Governance", bio: "Ensuring institutional standards across Canada and Africa." },
    { name: "Transparency Board", role: "SDG Metrics Oversight", bio: "Verification of humanitarian impact and financial accountability." }
];

import Link from "next/link";

export default function GovernancePage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Page Header */}
            <section className="pt-48 pb-24 bg-[#100a26] text-white overflow-hidden relative">
                {/* Amazing Background Element */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                    <Shield className="w-[800px] h-[800px] text-white" />
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-sm mb-8">
                            <Scale size={12} className="text-secondary" />
                            <span className="text-secondary font-black uppercase tracking-[0.3em] text-[9px]">Institutional Integrity Protocol</span>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-black font-manrope tracking-tighter leading-none mb-8">
                            Sovereign <br />
                            <span className="text-secondary italic">Governance.</span>
                        </h1>
                        <p className="text-white/60 text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                            KAWAC operates under a strict protocol of institutional accountability, ensuring that our mission to serve the ACB community is met with the highest standards of transparency.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pillars of Governance */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Accountability", icon: Scale, desc: "Direct oversight by the KAWAC Board of Directors ensuring mission alignment." },
                            { title: "Transparency", icon: FileCheck, desc: "Open-source data protocols for impact reporting and financial auditing." },
                            { title: "Sovereignty", icon: Shield, desc: "Building independent, community-led systems that resist systemic exclusion." }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-12 bg-white border border-slate-100 rounded-sm institutional-shadow hover:border-secondary transition-all group"
                            >
                                <pillar.icon className="h-10 w-10 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-black text-primary mb-4 font-manrope uppercase tracking-tight">{pillar.title}</h3>
                                <p className="text-slate-500 font-light leading-relaxed">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl font-black text-primary font-manrope tracking-tighter">The Leadership Nexus</h2>
                        <p className="text-slate-400 mt-4 uppercase tracking-[0.3em] text-[10px] font-black">Guiding the Global Alliance</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {boardMembers.map((member, idx) => {
                            const CardContent = (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="text-center group cursor-pointer"
                                >
                                    <div className="aspect-square bg-slate-50 rounded-full mb-8 relative overflow-hidden flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <Users className="h-20 w-20 text-slate-200 group-hover:text-secondary/20 transition-all" />
                                        <div className="absolute inset-0 border-[20px] border-white" />
                                    </div>
                                    <h4 className="text-2xl font-black text-primary font-manrope">{member.name}</h4>
                                    <p className="text-secondary font-bold uppercase tracking-widest text-[9px] mt-2 mb-4">{member.role}</p>
                                    <p className="text-slate-500 text-sm font-light max-w-[200px] mx-auto italic">{member.bio}</p>
                                </motion.div>
                            );

                            return member.link ? (
                                <Link href={member.link} key={idx}>
                                    {CardContent}
                                </Link>
                            ) : (
                                <div key={idx}>{CardContent}</div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Institutional Charter Call to Action */}
            <section className="py-32 bg-secondary text-primary">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black font-manrope tracking-tighter mb-8 leading-none">
                        Dignity in Governance. <br />
                        Standard in Action.
                    </h2>
                    <p className="max-w-xl mx-auto text-primary font-medium opacity-70 mb-12">
                        Our governance model is designed to transcend traditional non-profit structures, building a resilient pipeline for global ACB sovereignty.
                    </p>
                    <div className="inline-block border-2 border-primary px-12 py-5 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-primary hover:text-white transition-all cursor-pointer">
                        Access Protocol Charter
                    </div>
                </div>
            </section>
        </main>
    );
}
