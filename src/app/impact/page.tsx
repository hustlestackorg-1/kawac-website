"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Users, Globe2, Heart, Award, ShieldCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImpactMetric {
    id: string;
    program_id: string;
    metric_label: string;
    metric_value: string;
    year: number;
}

export default function ImpactPage() {
    const [metrics, setMetrics] = useState<ImpactMetric[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // In a real scenario, we'd fetch from an API route that queries Supabase
        // For now, I'll use placeholders but set up the fetch logic
        const fetchMetrics = async () => {
            try {
                // Fetch from the API
                // const res = await fetch('/api/impact/metrics');
                // const data = await res.json();
                // setMetrics(data);

                // Mock data for initial render
                setMetrics([
                    { id: "1", program_id: "health", metric_label: "Screened Patients", metric_value: "15,000+", year: 2024 },
                    { id: "2", program_id: "health", metric_label: "Mobile Clinics Run", metric_value: "450", year: 2024 },
                    { id: "3", program_id: "climate", metric_label: "Trees Planted", metric_value: "50,000", year: 2024 },
                    { id: "4", program_id: "social", metric_label: "Cases Represented", metric_value: "1,200", year: 2024 },
                ]);
            } catch (err) {
                console.error("Failed to load metrics", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMetrics();
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* Dark Institutional Header */}
            <section className="bg-[#0C3B4E] pt-32 pb-48 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-[#FBAF3C] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">/// RADICAL TRANSPARENCY</span>
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 leading-tight">
                            Measurable<br />Equity.
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10">
                            We don't just tell stories; we track data points. Explore our real-time impact metrics across Canada and Kenya, audited and validated for funder accountability.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-[#FBAF3C] text-[#0C3B4E] font-bold px-8 py-6 rounded-full">
                                DOWNLOAD 2023 ANNUAL REPORT
                            </Button>
                            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 font-bold px-8 py-6 rounded-full">
                                VIEW AUDIT TRAIL
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Grid */}
            <section className="-mt-24 pb-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {isLoading ? (
                            Array(4).fill(0).map((_, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl h-48 animate-pulse"></div>
                            ))
                        ) : (
                            metrics.map((metric) => (
                                <motion.div
                                    key={metric.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:border-secondary transition-all group"
                                >
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{metric.metric_label}</p>
                                    <h3 className="text-4xl font-bold text-[#0C3B4E] font-playfair mb-4 group-hover:text-secondary transition-colors">{metric.metric_value}</h3>
                                    <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                                        <div className="w-3/4 h-full bg-[#FBAF3C] rounded-full"></div>
                                    </div>
                                    <p className="mt-4 text-[10px] text-slate-400 uppercase font-medium">Reporting Year: {metric.year}</p>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Program Impact Breakdown */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-playfair font-bold text-[#0C3B4E] mb-6">Structural Health Equity</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Our medical programs are designed to bypass institutional barriers. We bring specialized care to rural settlements through mobile units and community-led screening protocols.
                            </p>
                            <ul className="space-y-4">
                                <ImpactBar label="Maternal Survival Rate" percentage={98.2} />
                                <ImpactBar label="Rural Clinic Access" percentage={89.5} />
                                <ImpactBar label="HIV Support Retention" percentage={94.1} />
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/assets/hero-health.jpg" alt="Health Impact" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <FeatureBox
                            icon={Globe2}
                            title="Global Footprint"
                            desc="Operations spanning 15 districts across two continents with local localized governance."
                        />
                        <FeatureBox
                            icon={ShieldCheck}
                            title="Governance Excellence"
                            desc="100% compliance with CRA and Kenya NGO Coordination Board regulations."
                        />
                        <FeatureBox
                            icon={Users}
                            title="Community Led"
                            desc="80% of our program coordinators are residents of the communities we serve."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-50 py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-2xl border border-slate-100">
                        <h3 className="text-3xl font-playfair font-bold text-[#0C3B4E] mb-4">Validate Our Work</h3>
                        <p className="text-slate-500 mb-10">
                            We invite researchers, donors, and governmental agencies to review our detailed audit trails and datasets.
                        </p>
                        <Button className="bg-[#0C3B4E] text-white px-10 py-6 rounded-full font-bold group">
                            REQUEST DATA ACCESS <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ImpactBar({ label, percentage }: { label: string, percentage: number }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-[#0C3B4E]">
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#0C3B4E]"
                />
            </div>
        </div>
    );
}

function FeatureBox({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-8">
            <div className="w-16 h-16 bg-slate-50 text-[#0C3B4E] rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold text-[#0C3B4E] mb-3">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
