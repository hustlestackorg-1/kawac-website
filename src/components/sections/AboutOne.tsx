"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";

export function AboutOne() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
            <div className="container px-4 md:px-0 mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

                    <div className="relative">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="relative rounded-tr-[100px] rounded-bl-[20px] overflow-hidden border-l-[10px] border-b-[10px] border-white shadow-2xl">
                                <img src="/assets/impact-community.jpg" alt="About KAWAC" className="w-full h-auto transform hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                            </div>

                            <div className="absolute top-10 right-10 md:-right-12 bg-[#0C3B4E] text-white w-48 h-48 rounded-full flex flex-col items-center justify-center text-center p-2 shadow-xl border-[6px] border-white">
                                <span className="text-4xl font-playfair font-bold leading-none">
                                    <CountUp end={20} suffix="+" />
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest leading-tight mt-2 text-[#FBAF3C]">
                                    Years of <br /> Governance
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-8">
                                <span className="text-secondary font-caveat text-3xl font-bold block mb-2">
                                    Our Approach
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 leading-tight font-playfair">
                                    We build systems, <br /> not just safety nets.
                                </h2>
                            </div>

                            <p className="text-[#6A7695] text-lg leading-relaxed mb-6 font-manrope">
                                KAWAC is not a disaster-relief agency. We are a <strong>systems-change organization</strong> engineered to dismantle the socio-economic traps affecting African, Caribbean, and Black (ACB) communities in Canada.
                            </p>

                            <div className="border-l-4 border-secondary pl-6 mb-8 py-2">
                                <p className="text-primary font-bold text-lg font-playfair italic">
                                    "We operate with the governance rigor of a corporation and the heart of a grassroots movement."
                                </p>
                            </div>

                            <ul className="grid grid-cols-1 gap-6 mb-10">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#0C3B4E] flex items-center justify-center text-white shrink-0">
                                        <span className="font-bold">01</span>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-primary font-manrope">Evidence-Based Methodology</h5>
                                        <p className="text-sm text-[#6A7695]">Every program is backed by longitudinal data and community consultation.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#0C3B4E] flex items-center justify-center text-white shrink-0">
                                        <span className="font-bold">02</span>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-primary font-manrope">Accountable Governance</h5>
                                        <p className="text-sm text-[#6A7695]">Full financial transparency and strict adherence to Canadian non-profit regulations.</p>
                                    </div>
                                </li>
                            </ul>

                            <Button className="bg-[#0C3B4E] hover:bg-[#FBAF3C] hover:text-[#0C3B4E] text-white rounded-none px-10 py-7 font-bold text-sm tracking-widest transition-all">
                                VIEW IMPACT REPORT
                            </Button>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
