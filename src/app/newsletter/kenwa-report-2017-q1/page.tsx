"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, CheckCircle2, AlertCircle, BarChart3, Shield, Users, Activity } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function KenwaReport2017Q1() {
    return (
        <main className="min-h-screen bg-[#050308] text-white pt-32 pb-24 selection:bg-secondary/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/newsletter" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft size={14} /> Back to Intelligence
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="px-3 py-1 rounded-full border border-secondary/20 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest">
                            Declassified Impact Report
                        </div>
                        <span className="text-slate-500 text-xs font-mono uppercase">Ref: KENWA-2017-Q1</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black font-manrope leading-tight mb-6">
                        KENWA Narrative Report: <br />
                        <span className="text-slate-500">Jan - Mar 2017 (SD/OVC Programme)</span>
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-400 font-mono border-y border-white/10 py-6">
                        <div>
                            <span className="block text-slate-600 mb-1">Region</span>
                            Central (Nyeri, Murang'a, Kiambu)
                        </div>
                        <div>
                            <span className="block text-slate-600 mb-1">Partner</span>
                            APHIAPLUS KAMILI
                        </div>
                        <div>
                            <span className="block text-slate-600 mb-1">Period</span>
                            Q1 2017
                        </div>
                        <div>
                            <span className="block text-slate-600 mb-1">Status</span>
                            <span className="text-emerald-500">Verified Complete</span>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="space-y-16">

                    {/* Objectives */}
                    <Section title="02 // Mission Objectives" icon={Shield}>
                        <ul className="space-y-4 text-slate-300 font-light list-disc pl-6 leading-relaxed">
                            <li>Minimize burnout for Community OVC Coordinators (C.O.Cs).</li>
                            <li>Facilitate medical access for bedridden clients.</li>
                            <li>Establish institutional linkages to prevent dependency syndrome.</li>
                            <li>Advocacy against HIV stigma and discrimination in village units.</li>
                            <li>Scale down counseling and testing among youth.</li>
                            <li>Household Economic Strengthening (HES) to reduce aid reliance.</li>
                        </ul>
                    </Section>

                    {/* Progress Matrix */}
                    <Section title="04 // Work Plan Status" icon={Activity}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <StatusCard
                                category="Food & Nutrition"
                                items={[
                                    "Porridge flour Distribution",
                                    "Rice Distribution (HIV+ OVC)",
                                    "Kitchen Garden Maintenance",
                                    "Nutrition Counseling"
                                ]}
                            />
                            <StatusCard
                                category="Health Care"
                                items={[
                                    "Deworming Operations",
                                    "HTC & Dejiggering",
                                    "Referral Linkages",
                                    "Health Education"
                                ]}
                            />
                            <StatusCard
                                category="Education"
                                items={[
                                    "School Fees Payment",
                                    "ECD Support",
                                    "Vocational Training Links"
                                ]}
                            />
                            <StatusCard
                                category="Psychosocial Support"
                                items={[
                                    "Child Therapy Sessions",
                                    "Disclosure Counseling",
                                    "Peer Group Linkages"
                                ]}
                            />
                        </div>
                        <div className="mt-6 p-4 bg-red-900/10 border border-red-500/20 rounded-xl flex gap-4 items-start">
                            <AlertCircle className="text-red-400 shrink-0" size={20} />
                            <div>
                                <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">Variance Report</h4>
                                <p className="text-red-200/60 text-sm">Delay in fund disbursement affected OVC Quality Improvement (QI) team formation and mattress procurement during this period.</p>
                            </div>
                        </div>
                    </Section>

                    {/* Narrative Highlights */}
                    <Section title="05 // Impact Narrative" icon={FileText}>
                        <div className="space-y-8 text-slate-300 leading-relaxed font-light">
                            <div className="p-6 bg-white/5 border-l-2 border-secondary rounded-r-xl">
                                <h4 className="text-white font-bold mb-2">Health Care & Hygiene</h4>
                                <p>Supported 700 OVC through referrals. 1,350 boys and 1,510 girls sensitized on reproductive health. 20 households verified for hygiene improvements.</p>
                            </div>

                            <div className="p-6 bg-white/5 border-l-2 border-emerald-500 rounded-r-xl">
                                <h4 className="text-white font-bold mb-2">Economic Strengthening (HES)</h4>
                                <p>436 Households benefited from livestock and business kits.
                                    <br />Distribution: 171 Dairy Goats, 156 Cereal Stocks, 28 Salon Kits, 7 Pig Farming Units.</p>
                            </div>

                            <div className="p-6 bg-white/5 border-l-2 border-primary rounded-r-xl">
                                <h4 className="text-white font-bold mb-2">Shelter Renovation</h4>
                                <p>87 OVC received mattresses. 5 OVC in Gitathini benefited from full house renovations, replacing leaking roofs to prevent cold-related ailments.</p>
                            </div>

                            <div className="p-6 bg-white/5 border-l-2 border-amber-500 rounded-r-xl">
                                <h4 className="text-white font-bold mb-2">Legal Protection</h4>
                                <p>Partnered with Kenya NGO Consortium to train facilitators on basic legal protection aimed at safeguarding children in communities.</p>
                            </div>
                        </div>
                    </Section>

                    {/* Key Results */}
                    <Section title="09 // Quantitative Achievements" icon={BarChart3}>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-xs text-slate-500 uppercase tracking-widest">
                                        <th className="py-4">Core Service</th>
                                        <th className="py-4 text-right">Male</th>
                                        <th className="py-4 text-right">Female</th>
                                        <th className="py-4 text-right text-white">Total Impact</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-300 font-mono">
                                    <ResultRow service="Health Care" m="1,350" f="1,510" t="2,860" />
                                    <ResultRow service="Education & Vocational" m="400" f="510" t="910" />
                                    <ResultRow service="Food & Nutrition" m="1,200" f="1,408" t="2,608" />
                                    <ResultRow service="Shelter & Care" m="1,300" f="1,500" t="2,800" />
                                    <ResultRow service="Psychosocial Support" m="1,303" f="1,507" t="2,810" />
                                    <ResultRow service="Legal Protection" m="1,203" f="1,307" t="2,510" />
                                    <tr className="border-t border-white/20 font-bold text-white bg-white/5">
                                        <td className="py-4 pl-4">TOTAL OVC SERVED</td>
                                        <td className="py-4 text-right">1,626</td>
                                        <td className="py-4 text-right">2,174</td>
                                        <td className="py-4 text-right pr-4 text-secondary">3,800</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                </div>

                {/* Footer Signature */}
                <div className="mt-20 border-t border-white/10 pt-8 flex justify-between items-center text-xs text-slate-600 font-mono uppercase">
                    <div>
                        Authored: Project Coordinator<br />
                        Verified: APHIA Team
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        Archived Securely
                    </div>
                </div>

            </div>
        </main>
    );
}

function Section({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/5 pt-8"
        >
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Icon className="text-secondary" size={20} />
                <span className="font-mono uppercase tracking-widest text-slate-500 text-sm">{title}</span>
            </h2>
            {children}
        </motion.div>
    );
}

function StatusCard({ category, items }: { category: string, items: string[] }) {
    return (
        <div className="bg-white/5 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
            <h3 className="text-secondary font-bold uppercase text-xs tracking-widest mb-4">{category}</h3>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                        <CheckCircle2 className="text-emerald-500/80 shrink-0 mt-0.5" size={14} />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ResultRow({ service, m, f, t }: { service: string, m: string, f: string, t: string }) {
    return (
        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
            <td className="py-3">{service}</td>
            <td className="py-3 text-right text-slate-500">{m}</td>
            <td className="py-3 text-right text-slate-500">{f}</td>
            <td className="py-3 text-right font-bold text-white">{t}</td>
        </tr>
    );
}
