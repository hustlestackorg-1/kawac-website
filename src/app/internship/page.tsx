"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Target, Globe, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PageTitle = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <section className="relative py-48 md:py-72 bg-[#100a26] overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Artistic Background Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay grayscale"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#100a26_100%)]"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 space-y-8 px-6 max-w-5xl"
            >
                <div className="text-secondary font-black tracking-[0.6em] text-[10px] uppercase mb-4">/// ELITE INSTITUTIONAL STANDARD</div>
                <h1 className="text-7xl md:text-9xl font-black text-white font-cormorant tracking-tight leading-[0.85] text-glow-purple">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-inter italic max-w-2xl mx-auto font-light">
                    {subtitle}
                </p>
                <div className="flex justify-center pt-8">
                    <div className="h-0.5 w-32 bg-secondary/50" />
                </div>
            </motion.div>
        </section>
    );
}

export default function InternshipPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <PageTitle
                title="The Elite Internship"
                subtitle="Exceeding the standards of world-class institutional excellence to architect your global career."
            />

            {/* THE ARCHITECTURE Section */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase">WHO WE SERVE</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-primary font-cormorant leading-tight">
                            For Creators of <span className="text-secondary italic">Legacy.</span>
                        </h2>
                        <p className="text-lg text-slate-500 leading-[2] font-inter">
                            Serving Black, Racialized, and Immigrant Youth who seek more than just a placement. We serve those seeking <span className="text-primary font-bold">Meaningful Employment</span>, global standard skills, and clear pathways to influence in Canada and beyond.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* THREE PILLARS - Da Vinci Grid */}
            <section className="py-32 bg-[#F4F5F8] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200 hidden lg:block" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="mb-24">
                        <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase block mb-6">THE CORE FRAMEWORK</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary font-cormorant">Strategic Program Pillars</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-slate-200">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="p-16 flex flex-col items-center group hover:bg-white transition-all duration-700 bg-white/50 border-r border-slate-200 last:border-r-0">
                                <div className="p-6 rounded-full bg-primary/5 mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-bold text-primary font-cormorant mb-6 tracking-tight">{pillar.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-inter">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MCKINSEY BEATING CONTENT - Detailed Narrative */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-square">
                            {/* Geometric Background */}
                            <div className="absolute inset-0 border border-primary/10 rounded-full scale-110 pointer-events-none" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000')] bg-cover bg-center shadow-institutional-shadow grayscale group-hover:grayscale-0 transition-all duration-1000" />
                        </div>
                        <div className="space-y-12">
                            <span className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase">A PEER-POWERED ECOSYSTEM</span>
                            <h3 className="text-5xl md:text-7xl font-bold text-primary font-cormorant leading-tight">What We Do.</h3>
                            <div className="space-y-8 max-w-xl">
                                <p className="text-lg text-slate-600 leading-relaxed font-inter italic border-l-2 pl-8 border-secondary">
                                    "Our program is not a sandbox; it is a launchpad for institutional leadership."
                                </p>
                                <p className="text-slate-500 leading-[1.8] font-inter">
                                    We provide a Peer-Powered Inclusive Program designed specifically for internship, volunteering, and placement career goals. Every participant is matched with a mentor who has traversed the same path, ensuring that your transition into the Canadian workforce is backed by social and professional capital.
                                </p>
                                <div className="space-y-4 pt-4">
                                    {features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-secondary" />
                                            <span className="text-sm font-bold text-primary tracking-wide uppercase">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-40 bg-[#100a26] text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/dust.png')]" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative z-10 px-6 max-w-3xl mx-auto space-y-12"
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white font-cormorant leading-none">Ready to Begin?</h2>
                    <p className="text-white/40 text-lg font-inter max-w-xl mx-auto leading-relaxed">
                        Admission into the KACB Internship program is highly competitive and follows global standards of institutional vetting.
                    </p>
                    <Link href="/portal/apply">
                        <Button className="bg-secondary hover:bg-white text-primary font-black px-16 py-8 rounded-none text-xs tracking-[0.4em] uppercase transition-all duration-500 shadow-institutional-shadow">
                            Secure Admission
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}

const pillars = [
    {
        title: "System Navigation",
        icon: Globe,
        description: "Mastering the complexities of the Canadian professional landscape and core career pathways."
    },
    {
        title: "Global Skill Standard",
        icon: Target,
        description: "Validating and aligning your existing expertise with international Student and Professional standards."
    },
    {
        title: "Mentorship Matching",
        icon: Award,
        description: "Direct connection to leading industry professionals for placement and long-term career growth."
    }
];

const features = [
    "Institutional System Navigation",
    "Skill-to-Market Alignment",
    "High-Performance Mentorship",
    "Global Career Mobility"
];
