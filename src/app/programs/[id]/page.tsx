"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { findProgramById } from "@/data/programs";
import { cn } from "@/lib/utils";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ProgramDetail({ params }: PageProps) {
    const { id } = use(params);
    const program = findProgramById(id);

    if (!program) {
        notFound();
    }

    const brandColor = "#4c1d95"; // Primary Deep Purple

    return (
        <main className="flex flex-col min-h-screen bg-white">
            {/* HERO SECTION - Institutional Majesty */}
            {/* HERO SECTION - Institutional Majesty */}
            <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden text-center py-40">
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.3] ken-burns"
                    style={{ backgroundImage: `url(${program.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#100a26]/90 via-[#100a26]/40 to-white"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-20 px-6 max-w-6xl mx-auto"
                >
                    <Link href="/programs" className="inline-flex items-center text-secondary hover:text-white mb-10 uppercase tracking-[0.4em] text-[10px] font-black transition-all group">
                        <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-2 transition-transform" />
                        Return to Global Strategy
                    </Link>

                    <span className="block text-white/50 font-black tracking-[0.5em] uppercase text-[10px] mb-8">
                        PILLAR PROTOCOL // {program.category}
                    </span>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white font-cormorant tracking-tight leading-[0.9] text-glow-purple text-balance break-words">
                        {program.title}
                    </h1>
                </motion.div>

                {/* Da Vinci Geometric Ring */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/5 rounded-full translate-y-1/2 pointer-events-none" />
            </section>

            {/* STRATEGIC MISSION ARCHITECTURE */}
            <section className="py-40 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                        {/* Narrative - Markdown Supported */}
                        <div className="lg:col-span-8 space-y-24">
                            <div className="space-y-10">
                                <h2 className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] flex items-center gap-4">
                                    <div className="w-8 h-px bg-secondary" /> 01. KEY AREAS OF FOCUS
                                </h2>
                                <div className="text-3xl md:text-3xl text-primary font-cormorant leading-[1.2] font-semibold text-balance space-y-8">
                                    <SimpleMarkdown content={program.challenge} />
                                </div>
                            </div>

                            <div className="space-y-10">
                                <h2 className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] flex items-center gap-4">
                                    <div className="w-8 h-px bg-secondary" /> 02. STRATEGIC SOLUTION
                                </h2>
                                <div className="space-y-10 max-w-2xl">
                                    <div className="text-lg text-slate-500 leading-relaxed font-inter border-l-2 pl-10 border-primary/20 space-y-6">
                                        <SimpleMarkdown content={program.solution} />
                                    </div>
                                    <p className="text-lg text-slate-600 leading-[1.9] font-inter">
                                        {program.content}
                                    </p>
                                </div>
                            </div>

                            {/* Da Vinci Design Feature - Strategic Objectives */}
                            <div className="relative p-16 bg-[#F4F5F8] border border-slate-100 group overflow-hidden">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-xl font-bold text-primary mb-12 font-cormorant tracking-widest uppercase">Mission Objectives</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {[
                                        "Architecting sustainable community systems.",
                                        "Integrating global standard expertise.",
                                        "Ensuring zero-exclusion participation."
                                    ].map((obj, i) => (
                                        <div key={i} className="flex items-start gap-5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5" />
                                            <span className="text-slate-500 text-sm font-medium tracking-wide uppercase leading-relaxed">{obj}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Impact Sidebar - Institutional Glass */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-40">
                                <div className="bg-[#100a26] p-16 text-white shadow-institutional-shadow relative overflow-hidden group">
                                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                                    <div className="relative z-10 space-y-16">
                                        <h3 className="font-manrope text-[9px] font-black uppercase tracking-[0.4em] text-secondary">
                                            Impact Metrics
                                        </h3>

                                        <div className="space-y-16">
                                            {program.impact.map((metric, idx) => (
                                                <div key={idx} className="relative group/metric">
                                                    <div className="text-6xl font-black font-cormorant mb-3 tracking-tighter text-white group-hover/metric:text-secondary transition-colors duration-500">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold transition-all duration-500 group-hover/metric:translate-x-2">
                                                        {metric.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-16 border-t border-white/10 flex flex-col gap-6">
                                            <Link href="/partnership">
                                                <Button className="w-full bg-secondary hover:bg-white text-primary font-black py-8 rounded-none text-[10px] tracking-[0.3em] transition-all duration-700">
                                                    PARTNER ARCHITECTURE
                                                </Button>
                                            </Link>
                                            <Link href="/donate">
                                                <Button variant="outline" className="w-full border-white/10 text-white hover:bg-secondary hover:text-primary py-8 rounded-none text-[10px] tracking-[0.3em] transition-all duration-700">
                                                    CAPITAL ALLOCATION
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PROGRAM GALLERY - FIELD EVIDENCE */}
            {program.gallery && program.gallery.length > 0 && (
                <section className="py-24 bg-[#050308] relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,0,75,0.1),transparent_70%)]" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col items-center mb-16 text-center">
                            <span className="text-secondary text-[10px] uppercase font-black tracking-[0.3em] mb-4">
                                Visual Documentation
                            </span>
                            <h2 className="text-4xl md:text-5xl font-cormorant text-white">
                                Field <span className="text-secondary italic">Evidence.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {program.gallery.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-white/5 bg-slate-900"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.caption}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white text-xs font-manrope font-bold tracking-wider">
                                            {item.caption}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

        </main>
    );
}

// Simple Parser for specific project needs (Header ##, Bold **, List *)
function SimpleMarkdown({ content }: { content: string }) {
    if (!content) return null;

    // Split by newlines to handle blocks
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];

    let listBuffer: React.ReactNode[] = [];

    lines.forEach((line, i) => {
        const trimmed = line.trim();

        // Handle Lists
        if (trimmed.startsWith('* ')) {
            const text = parseBold(trimmed.substring(2));
            listBuffer.push(
                <li key={`li-${i}`} className="flex items-start gap-3 text-base text-slate-600 font-manrope">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>{text}</span>
                </li>
            );
            return;
        }

        // Flush List if not a list item
        if (listBuffer.length > 0) {
            elements.push(<ul key={`ul-${i}`} className="space-y-3 pl-2 mb-6">{listBuffer}</ul>);
            listBuffer = [];
        }

        if (!trimmed) return; // Skip empty lines

        // Headers
        if (trimmed.startsWith('## ')) {
            elements.push(
                <h3 key={i} className="text-2xl font-cormorant font-bold text-primary mt-8 mb-4 tracking-wide border-b border-primary/10 pb-2">
                    {parseBold(trimmed.substring(3))}
                </h3>
            );
        }
        else {
            // Regular Paragraph
            elements.push(
                <p key={i} className="text-slate-600 mb-4 leading-relaxed font-manrope">
                    {parseBold(trimmed)}
                </p>
            );
        }
    });

    // Flush any remaining list
    if (listBuffer.length > 0) {
        elements.push(<ul key="ul-end" className="space-y-3 pl-2 mb-6">{listBuffer}</ul>);
    }

    return <>{elements}</>;
}

function parseBold(text: string): React.ReactNode {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="font-bold text-primary/90">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}
