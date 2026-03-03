"use client";

import { CountUp } from "@/components/ui/count-up";
import { motion } from "framer-motion";

export function LiveImpact() {
    return (
        <section className="w-full bg-white border-b border-black/5 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center justify-center divide-y md:divide-y-0 md:divide-x divide-black/10">

                    {/* Metric 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center px-4"
                    >
                        <span className="text-6xl md:text-7xl font-cormorant font-black text-[#050308] leading-none mb-2 tracking-tighter">
                            <CountUp end={5000} duration={2.5} suffix="+" />
                        </span>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 font-manrope">
                            Lives Impacted
                        </span>
                    </motion.div>

                    {/* Metric 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center text-center px-4 pt-12 md:pt-0"
                    >
                        <span className="text-6xl md:text-7xl font-cormorant font-black text-[#050308] leading-none mb-2 tracking-tighter">
                            <CountUp end={850} duration={2.5} suffix="+" />
                        </span>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 font-manrope">
                            Families Supported
                        </span>
                    </motion.div>

                    {/* Metric 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center text-center px-4 pt-12 md:pt-0"
                    >
                        <div className="flex items-baseline gap-1">
                            <span className="text-6xl md:text-7xl font-cormorant font-black text-[#050308] leading-none mb-2 tracking-tighter">
                                <CountUp end={2} duration={2} />
                            </span>
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 font-manrope">
                            Regions Active (Niagara & Kenya)
                        </span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
