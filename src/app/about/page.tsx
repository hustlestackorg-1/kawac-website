"use client";

import { AboutOne } from "@/components/sections/AboutOne";
import { CounterOne } from "@/components/sections/CounterOne";
import { FeatureOne } from "@/components/sections/FeatureOne";
import { motion } from "framer-motion";
import { teamData } from "@/data/team";
import { Linkedin, Globe, Users, Heart, Target, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

function PageTitle({ title, breadcrumb }: { title: string, breadcrumb: string }) {
    return (
        <section className="relative py-32 md:py-48 bg-primary overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-[url('/assets/hero-health.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>

            <div className="relative z-10 px-4">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-extrabold text-white font-manrope mb-4 tracking-tight"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-white/80 font-bold tracking-widest uppercase font-manrope"
                >
                    Home / <span className="text-[#FBAF3C]">{breadcrumb}</span>
                </motion.p>
            </div>
        </section>
    );
}

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <PageTitle title="Institutional Profile" breadcrumb="About Us" />

            {/* Who We Are: Deep Mission */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2">
                            <span className="text-[#FBAF3C] font-bold tracking-widest text-xs uppercase block mb-4">/// WHO WE ARE</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-primary font-playfair mb-8 leading-tight">
                                A Network Built on <br /> Radical Resilience.
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    KAWAC (KACB Worldbank Alliance Canada) emerged from the crucible of the HIV/AIDS crisis in East Africa. Founded as an extension of <strong>KENWA (Kenya Network of Women with AIDS)</strong>, our origins are rooted in the lived experienced of women who refused to be defined by their diagnosis.
                                </p>
                                <p>
                                    As we migrated and expanded, we realized that health is never an isolated metric—it is the direct result of economic power, cultural identity, and institutional access. Today, KAWAC operates as a dual-continent architecture for Black excellence and equity.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <Target className="text-[#FBAF3C] w-8 h-8 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary mb-2">Our Mission</h4>
                                        <p className="text-sm text-slate-500">To architect sustainable systems that protect and empower ACB communities globally.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <ShieldCheck className="text-[#FBAF3C] w-8 h-8 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary mb-2">Governance</h4>
                                        <p className="text-sm text-slate-500">Adhering to ISO-aligned auditing and complete financial transparency for all funders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 group">
                                <img src="/assets/hero-justice.jpg" alt="Foundation" className="w-full h-auto group-hover:scale-110 transition-transform duration-[2000ms]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            {/* Floating Quote */}
                            <div className="absolute -bottom-10 -left-10 bg-[#C41E3A] text-white p-10 rounded-3xl shadow-xl max-w-sm hidden md:block border-8 border-white">
                                <p className="font-playfair italic text-xl">"We are the bridge between community wisdom and institutional power."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do: Strategic Methodology */}
            <section className="py-24 bg-primary text-white relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/assets/grid-pattern.png')] opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-[#FBAF3C] font-bold tracking-widest text-xs uppercase block mb-4">/// WHAT WE DO</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-8">Integrated Impact Framework</h2>
                        <p className="text-white/60 text-lg leading-relaxed">
                            We don't just run projects; we implement structural solutions that scale. Our methodology focuses on four primary pillars of community stability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <MethodologyCard
                            icon={Heart}
                            title="Healthcare Equity"
                            desc="Bridges the gap in ACB medical access through specialized clinics and senior support."
                        />
                        <MethodologyCard
                            icon={Users}
                            title="Youth Leadership"
                            desc="Mentorship frameworks that connect heritage with 21st-century professional skills."
                        />
                        <MethodologyCard
                            icon={Globe}
                            title="Global Mobility"
                            desc="Facilitating ethical and humanitarian placements (Beyond Borders) across 3 continents."
                        />
                        <MethodologyCard
                            icon={ShieldCheck}
                            title="Policy Advocacy"
                            desc="Lobbying for legislative changes that dismantle systemic exclusion in public health."
                        />
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section id="team" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-[#FBAF3C] font-bold tracking-widest text-xs uppercase block mb-4">/// OUR LEADERSHIP</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-8">Guided by Global Experts</h2>
                        <p className="text-slate-500 text-lg">
                            The KAWAC board and executive team bring together backgrounds in economics, medicine, and human rights to ensure institutional rigor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {teamData.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                                    <p className="text-sm font-bold text-[#FBAF3C] uppercase tracking-wider mb-4">{member.role}</p>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        {member.bio}
                                    </p>
                                    <a href={member.linkedIn} className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest hover:text-[#FBAF3C] transition-colors">
                                        <Linkedin className="w-4 h-4 mr-2" /> LinkedIn Profile
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FeatureOne />
        </main>
    );
}

function MethodologyCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-[#FBAF3C] text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Icon size={28} />
            </div>
            <h4 className="text-2xl font-bold mb-4 font-playfair">{title}</h4>
            <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
