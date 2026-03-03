"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export function DirectorsInsight() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-40 mix-blend-multiply" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <div className="px-4 py-1.5 border border-black/10 rounded-full flex items-center gap-2 mb-6 bg-white/50 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-manrope">
                            From the Director&apos;s Desk
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center max-w-6xl mx-auto">

                    {/* LEFT: Portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] md:aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl skew-y-1">
                            {/* Image - Grayscale & Candid */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                                style={{ backgroundImage: "url('/assets/asunta-director.jpg')" }}
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="font-cormorant font-bold text-3xl italic">Asunta Wagura</h3>
                                <p className="font-manrope text-xs font-bold uppercase tracking-widest text-white/70 mt-1">
                                    Executive Director, KAWAC
                                </p>
                            </div>
                        </div>
                        {/* Decorative Border */}
                        <div className="absolute -inset-4 border border-black/5 -z-10 translate-x-4 translate-y-4 skew-y-1" />
                    </motion.div>

                    {/* RIGHT: Insight */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <Quote className="w-20 h-20 text-secondary/10 absolute -top-12 -left-8 -z-10" />

                        <blockquote className="text-4xl md:text-5xl font-cormorant font-medium leading-[1.1] text-[#050308] mb-10">
                            "We do not just offer aid; we build <span className="italic text-secondary font-semibold">resilience</span>. We are constructing the bridge between survival and sovereignty."
                        </blockquote>

                        <div className="prose prose-lg text-slate-600 font-manrope font-light mb-12 leading-relaxed">
                            <p>
                                At KAWAC, our mandate goes beyond the immediate. We are rigorously documenting the genetic memory of our community's survival and translating it into scalable, logic-defying infrastructure for the future.
                            </p>
                        </div>

                        <Link href="/team/asunta">
                            <Button className="bg-[#050308] text-white hover:bg-secondary transition-all h-14 px-8 text-xs font-black uppercase tracking-[0.25em] rounded-none flex items-center gap-4 group shadow-xl">
                                Read Her Story
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
