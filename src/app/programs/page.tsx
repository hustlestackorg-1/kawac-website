"use client";


import { motion } from "framer-motion";
import Link from "next/link";

import { programsData } from "@/data/programs";

function PageTitle({ title, breadcrumb }: { title: string, breadcrumb: string }) {
    return (
        <section className="relative py-32 md:py-48 bg-primary overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-[url('/assets/impact-community.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="relative z-10 px-4">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-extrabold text-white font-manrope mb-4"
                >
                    {title}
                </motion.h1>
                <div className="text-lg text-white/80 font-bold tracking-wider uppercase font-manrope">
                    Home / <span className="text-secondary">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
}

export default function ProgramsPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <PageTitle title="Our Programs" breadcrumb="Programs" />

            <section className="py-24 bg-[#F4F5F8]">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-4">/// SYSTEMIC INTERVENTIONS</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0C3B4E] font-playfair mb-6">
                            Engineered for Impact.
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            Our programs are not isolated projects. They are interconnected systems designed to address the root determinants of health and economic exclusion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programsData.map((program, index) => (
                            <motion.div
                                key={program.id}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-none border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col relative"
                            >
                                {/* Top colored line based on category */}
                                <div className="h-1 w-full" style={{ backgroundColor: program.color }}></div>

                                <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img src={program.image} alt={program.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-0 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 font-bold text-xs uppercase tracking-widest text-[#0C3B4E]">
                                        {program.category}
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-[#0C3B4E] mb-4 font-playfair leading-tight">
                                        {program.title}
                                    </h3>
                                    <p className="text-slate-500 mb-6 leading-relaxed text-sm flex-grow">
                                        {program.content}
                                    </p>

                                    <div className="mt-auto border-t border-slate-100 pt-6 flex items-center justify-between">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            Status: <span className="text-green-600">Active</span>
                                        </div>
                                        <button className="text-[#0C3B4E] font-bold text-xs uppercase tracking-widest hover:text-[#FBAF3C] transition-colors flex items-center gap-2">
                                            View Data <div className="w-1 h-1 bg-current rounded-full" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
