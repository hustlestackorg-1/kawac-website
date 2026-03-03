"use client";

import { motion } from "framer-motion";

export function InstitutionalBrief() {
    return (
        <section className="py-40 bg-white relative overflow-hidden">
            {/* Da Vinci Geometric Ring */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-[#F4F5F8] rounded-sm overflow-hidden shadow-institutional-shadow relative group">
                            <img
                                src="/assets/program-hiv-new.jpg"
                                alt="Institutional Legacy"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-1000" />
                        </div>
                        {/* Floating Metric - Amethyst Standard */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -bottom-12 -right-12 bg-[#100a26] p-16 rounded-sm shadow-institutional-shadow border border-white/10"
                        >
                            <div className="text-7xl font-black text-secondary font-cormorant leading-none">12K+</div>
                            <div className="text-white/40 font-bold uppercase tracking-[0.3em] text-[9px] mt-4">Pioneer Beneficiaries</div>
                        </motion.div>
                    </motion.div>

                    <div className="flex flex-col space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px]">THE INSTITUTIONAL MANIFESTO</span>
                            <h2 className="text-5xl md:text-8xl font-bold text-primary mt-8 font-cormorant leading-[0.9] tracking-tight">
                                Legacy of <br />
                                <span className="text-secondary italic">Resistance.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="space-y-10"
                        >
                            <p className="text-2xl text-slate-600 font-cormorant italic leading-relaxed">
                                "KAWAC is not merely an organization; it is a genetic memory of survival, evolving from the legacy of the KENWA clinics to the architecture of global sovereignty."
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed font-inter max-w-xl">
                                We stand at the intersection of Healthcare Support, Education for Empowerment, and Social Inclusion. Our mission is to dismantle the poverty traps fueled by lack of access and systemic inequities among ACB communities in Canada, ensuring a future where opportunity is an absolute standard.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="flex gap-20 border-t border-slate-100 pt-16"
                        >
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-primary font-cormorant tracking-tighter">33+</div>
                                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Years Agency</div>
                            </div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-primary font-cormorant tracking-tighter">SDG</div>
                                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">ECOSOC System</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
