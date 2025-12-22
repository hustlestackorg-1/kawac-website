"use client";

import { use } from "react";
import { programsData } from "@/data/programs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

// Correctly defined params type for Next.js 15+ / React 19
// In Next.js 15, params is a Promise.
interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ProgramDetail({ params }: PageProps) {
    const { id } = use(params);
    const program = programsData.find((p) => p.id === id);

    if (!program) {
        notFound();
    }

    return (
        <main className="flex flex-col min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${program.image})` }}
                ></div>
                <div className="absolute inset-0 bg-[#0C3B4E]/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C3B4E] to-transparent"></div>

                <div className="container mx-auto px-4 md:px-0 relative z-10">
                    <Link href="/programs" className="inline-flex items-center text-white/70 hover:text-white mb-6 uppercase tracking-widest text-xs font-bold transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Systemic View
                    </Link>
                    <div className="w-16 h-2 mb-6" style={{ backgroundColor: program.color }}></div>
                    <span className="block text-white/80 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                        PROGRAM INTERVENTION
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair max-w-4xl leading-tight">
                        {program.title}
                    </h1>
                </div>
            </section>

            {/* STRATEGIC BRIEF */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Main Narrative */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-[#0C3B4E] font-playfair mb-8">
                                The Challenge
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-12 border-l-4 border-slate-200 pl-6">
                                {program.challenge}
                            </p>

                            <h2 className="text-3xl font-bold text-[#0C3B4E] font-playfair mb-8">
                                Our Intervention Model
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {program.solution}
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                {program.content}
                            </p>

                            <div className="bg-[#F4F5F8] p-8 rounded-none border-l-4" style={{ borderColor: program.color }}>
                                <h4 className="font-bold text-[#0C3B4E] mb-4 uppercase tracking-wider text-sm">Key Objectives</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1" style={{ color: program.color }} />
                                        <span className="text-slate-600">Secure sustainable funding for direct interventions.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1" style={{ color: program.color }} />
                                        <span className="text-slate-600">Establish community-led governance structures.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1" style={{ color: program.color }} />
                                        <span className="text-slate-600">Scale evidence-based practices to new regions.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Impact Sidebar */}
                        <div className="bg-[#0C3B4E] text-white p-10 h-fit rounded-none relative overflow-hidden">
                            {/* Abstract Decorative Line */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="font-playfair text-2xl font-bold mb-8">Impact Metrics</h3>

                            <div className="space-y-8">
                                {program.impact.map((metric, idx) => (
                                    <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                        <div className="text-4xl font-bold mb-1" style={{ color: program.color }}>{metric.value}</div>
                                        <div className="text-sm uppercase tracking-wider text-white/70">{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/20">
                                <h4 className="font-bold mb-4">Partner with us on this.</h4>
                                <Link href="/partnership">
                                    <Button className="w-full bg-white text-[#0C3B4E] hover:bg-[#FBAF3C] font-bold py-6 rounded-none transition-colors">
                                        STRATEGIC PARTNERSHIP
                                    </Button>
                                </Link>
                                <Link href="/donate" className="mt-4 block">
                                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 font-bold py-6 rounded-none transition-colors">
                                        DIRECT DONATION
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
