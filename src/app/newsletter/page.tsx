"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, ArrowRight, Activity, Globe, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const INSIGHT_TAGS = [
    { title: "Global Policy", icon: Globe, color: "text-blue-400", bg: "bg-blue-400/10" },
    { title: "Health Sovereignty", icon: Activity, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { title: "Advocacy Intel", icon: Shield, color: "text-amber-400", bg: "bg-amber-400/10" },
    { title: "Impact Data", icon: Zap, color: "text-purple-400", bg: "bg-purple-400/10" }
];

const ARCHIVE_ITEMS = [
    { date: "Q1 2017", title: "KENWA Narrative Report: Jan-Mar 2017", readTime: "15 min read", category: "Impact Data", link: "/newsletter/kenwa-report-2017-q1" },
    { date: "DEC 2024", title: "The Sovereign Health Framework: A New Era", readTime: "5 min read", category: "Strategy", link: "#" },
    { date: "NOV 2024", title: "Declassifying Impact: Yearly Report", readTime: "12 min read", category: "Data", link: "#" },
    { date: "OCT 2024", title: "Voices from the Frontline: KAWAC Fellows", readTime: "8 min read", category: "Field Ops", link: "#" }
];

export default function NewsletterPage() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <main className="min-h-screen bg-[#050308] text-white overflow-hidden relative selection:bg-secondary/30">
            {/* 8D Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-40 pb-20">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                                Kawac Intelligence Brief
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-cormorant font-bold mb-6 leading-none">
                            Strategic <span className="text-secondary italic">Insights.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-manrope font-light max-w-2xl mx-auto">
                            Decode the future of humanitarian action. Curated policy analysis, impact data, and field stories delivered to your secure feed.
                        </p>
                    </motion.div>

                    {/* Subscription Interface */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-2xl mx-auto mb-32"
                    >
                        {/* Glassmorphic Card */}
                        <div className="absolute inset-0 bg-secondary/20 blur-2xl opacity-20" />
                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-2 md:p-3 shadow-2xl">
                            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
                                <div className="flex-1 relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white transition-colors">
                                        <Send size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter secure comms address..."
                                        className="w-full h-16 bg-black/40 border border-white/5 rounded-2xl pl-14 pr-6 text-white placeholder:text-slate-600 focus:outline-none focus:bg-black/60 focus:border-secondary/30 transition-all font-manrope text-lg"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={status !== "idle"}
                                    className={cn(
                                        "h-16 px-10 rounded-2xl text-lg font-bold tracking-wide transition-all duration-500",
                                        status === "success"
                                            ? "bg-emerald-500 hover:bg-emerald-600 text-black"
                                            : "bg-secondary hover:bg-white hover:text-black text-white"
                                    )}
                                >
                                    {status === "loading" ? "Encrypting..." : status === "success" ? "Access Granted" : "Join Network"}
                                </Button>
                            </form>
                        </div>

                        <p className="text-center mt-6 text-xs text-slate-500 font-mono tracking-wider opacity-60">
                            SECURE TRANSMISSION // 256-BIT ENCRYPTION // NO SPAM PROTOCOL
                        </p>
                    </motion.div>

                    {/* Knowledge Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
                        {INSIGHT_TAGS.map((tag, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all cursor-crosshair text-center"
                            >
                                <div className={cn("w-12 h-12 mx-auto rounded-full mb-6 flex items-center justify-center transition-transform group-hover:scale-110", tag.bg, tag.color)}>
                                    <tag.icon size={24} />
                                </div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">{tag.title}</h3>
                                <div className="w-8 h-0.5 bg-white/10 mx-auto group-hover:bg-secondary/50 transition-colors" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Declassified Archive */}
                    <div className="border-t border-white/10 pt-20">
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-3xl font-cormorant text-white">
                                Declassified <span className="text-slate-500">Archive.</span>
                            </h2>
                            <button className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors flex items-center gap-2">
                                View Full Database <ArrowRight size={14} />
                            </button>
                        </div>

                        <div className="grid gap-6">
                            {ARCHIVE_ITEMS.map((item, idx) => (
                                <Link href={item.link} key={idx} className="block">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-secondary/30 hover:bg-white/[0.04] transition-all cursor-pointer"
                                    >
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-4 text-[10px] font-black tracking-widest uppercase opacity-50">
                                                <span className="text-secondary">{item.date}</span>
                                                <span>//</span>
                                                <span>{item.category}</span>
                                            </div>
                                            <h3 className="text-2xl font-manrope font-semibold text-white group-hover:text-secondary transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="mt-4 md:mt-0 flex items-center gap-4">
                                            <span className="text-xs font-mono text-slate-500">{item.readTime}</span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:bg-white group-hover:text-black transition-all">
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
