"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const milestones = [
    {
        year: "1993",
        title: "The Crucible",
        subtitle: "Nairobi, Kenya",
        desc: "Kenya Network of Women with AIDS (KENWA) is founded by Asunta Wagura. A mission born from necessity to provide dignity and systems of survival in the face of the HIV/AIDS epidemic."
    },
    {
        year: "2010",
        title: "The Expansion",
        subtitle: "Toronto, Canada",
        desc: "Registered as KENWA Canada. We established a bridge between grassroots African support and the growing diasporic needs of ACB communities in Canada."
    },
    {
        year: "2020",
        title: "Systemic Shift",
        subtitle: "KAWAC Identity",
        desc: "Recognizing that health equity is impossible without economic power, we expanded into KAWAC—architecting solutions for poverty, education, and systemic exclusion."
    },
    {
        year: "2026",
        title: "The Corridor",
        subtitle: "Global Mobility",
        desc: "Launch of the 'Opportunities Beyond Borders' institutional pipeline. Ethical international recruitment matching specialized skills to global opportunities."
    }
];

export default function OriginPage() {
    return (
        <main className="min-h-screen bg-[#F8F9FA]">
            {/* HER0: PHOENIX GENESIS (Original Design) */}
            <section className="relative h-[85vh] flex items-center justify-center bg-[#0d0a1a] overflow-hidden">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    {/* Background Image: The New Uploaded Image */}
                    <img
                        src="/assets/origin-hero.jpg"
                        alt="KAWAC Origin"
                        className="w-full h-full object-cover object-top opacity-50 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1a] via-transparent to-transparent" />
                </div>

                <div className="container relative z-10 px-6 text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-4 mb-8 border border-white/10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-manrope font-bold">Institutional Legacy</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black text-white font-cormorant tracking-tighter leading-[0.9]"
                    >
                        From Nairobi’s grassroots to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">global institutions in Canada</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 text-xl text-slate-400 font-manrope font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Over three decades of building community-led systems, partnerships, and sustainable development initiatives.
                    </motion.p>
                </div>
            </section>

            {/* SECTION: INSTITUTIONAL MANIFESTO (Styled like InstitutionalBrief but with New Content) */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        {/* Left: Image / Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative sticky top-32"
                        >
                            <div className="aspect-[4/5] bg-[#F4F5F8] rounded-sm overflow-hidden shadow-institutional-shadow relative group">
                                <img
                                    src="/assets/origin_group_photo.jpg"
                                    alt="Legacy of Resistance"
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-12 -right-12 bg-[#100a26] p-12 rounded-sm shadow-institutional-shadow border border-white/10"
                            >
                                <div className="text-5xl font-black text-secondary font-cormorant leading-none">1993</div>
                                <div className="text-white/40 font-bold uppercase tracking-[0.3em] text-[9px] mt-4">Moment of Origin</div>
                            </motion.div>
                        </motion.div>

                        {/* Right: The New Content (Moral Necessity & Gap) */}
                        <div className="flex flex-col space-y-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px]">THE MORAL NECESSITY</span>
                                <h2 className="text-5xl md:text-7xl font-bold text-primary mt-8 font-cormorant leading-[0.9] tracking-tight">
                                    Legacy of <br />
                                    <span className="text-secondary italic">Resistance.</span>
                                </h2>
                            </motion.div>

                            <div className="space-y-10 prose prose-lg prose-slate max-w-none">
                                <p className="text-2xl text-slate-600 font-cormorant italic leading-relaxed">
                                    "KAWAC did not emerge from ambition; it emerged from patterns of harm. It began in the silence between hospital discharge and the home, where families were left to navigate complex crises alone."
                                </p>

                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">The Systemic Gap</h3>
                                    <p className="text-slate-500 leading-relaxed font-manrope">
                                        Healthcare and social service systems operate in silos. For newcomers in the Niagara Region, or African Caribbean Black communities navigating unfamiliar protocols, these silos become barriers. Patients face delayed care and preventable harm simply because there is no one to translate their needs into institutional language.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Dignity-First Intervention</h3>
                                    <p className="text-slate-500 leading-relaxed font-manrope">
                                        Use language with teeth: We do not replace systems — we navigate them. We intervene when silence becomes harm. We stand beside people when institutions step back. This is not charity; it is <strong>active accompaniment</strong>.
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-slate-100">
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">Built For:</h3>
                                    <ul className="text-sm font-manrope space-y-3 text-slate-500">
                                        <li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full" />Mothers detained after hospital discharge</li>
                                        <li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full" />Seniors facing emergency instability</li>
                                        <li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full" />Niagara residents navigating poverty</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION (Original Design) */}
            <section className="py-32 bg-[#F4F5F8] relative">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-24 text-center">
                            <h2 className="text-4xl font-black font-cormorant text-primary mb-4">Historical Milestones</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto" />
                        </div>
                        <div className="space-y-0 relative border-l border-slate-200 ml-4 md:ml-0 md:border-none">
                            {milestones.map((m, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 last:mb-0 items-center group"
                                >
                                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 group-last:bottom-auto group-last:h-full" />
                                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-secondary rounded-full z-10 shadow-lg" />
                                    <div className={cn("text-right pl-8 md:pl-0 pr-0 md:pr-12 order-2 md:order-1", idx % 2 !== 0 && "md:text-left md:order-2 md:pl-12 md:pr-0")}>
                                        <span className={cn("text-9xl font-black text-slate-300 font-manrope leading-none absolute -top-8 -left-4 md:static select-none z-0", idx % 2 !== 0 ? "md:mr-auto" : "md:ml-auto")}>{m.year}</span>
                                    </div>
                                    <div className={cn("pl-8 md:pl-12 order-1 md:order-2", idx % 2 !== 0 && "md:text-right md:order-1 md:pr-12 md:pl-0")}>
                                        <div className="relative z-10">
                                            <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">{m.subtitle}</span>
                                            <h3 className="text-3xl font-bold text-primary font-cormorant mb-4">{m.title}</h3>
                                            <p className="text-slate-600 font-manrope leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: THE KAWAC DISTINCTION */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] block mb-8">THE KAWAC DISTINCTION</span>

                    <div className="grid md:grid-cols-2 gap-16 text-left items-center mb-24">
                        <div>
                            <h3 className="text-3xl font-bold font-cormorant text-primary mb-6">Intersection of Care & Justice</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-manrope">
                                What makes KAWAC distinct is our position at the intersection of <strong>rapid emergency response</strong> and <strong>long-term hospital advocacy support</strong>. We do not choose between charity and justice; we practice compassionate intervention that addresses immediate hunger while fighting the systemic root causes.
                            </p>
                            <p className="text-slate-600 leading-relaxed font-manrope">
                                As a community-rooted organization in the Niagara Region, our support for newcomers and seniors is not a program—it is a covenant of protection.
                            </p>
                        </div>
                        <div className="relative p-10 bg-[#F4F5F8] border border-slate-100 rounded-sm">
                            <div className="absolute top-0 left-0 w-2 h-2 bg-secondary" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-secondary" />
                            <h4 className="font-bold text-primary mb-4 font-cormorant text-xl">System-Literate Action</h4>
                            <p className="text-sm text-slate-500 font-manrope leading-relaxed">
                                "We provide more than aid; we provide leverage. We use our institutional knowledge to unlock doors that remain closed to individuals acting alone."
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-16">
                        <h2 className="text-3xl font-bold font-cormorant text-primary mb-6">Our Forward Commitment</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-12 font-cormorant italic max-w-2xl mx-auto">
                            "We are here to stay. KAWAC commits to long-term presence and institutional accountability. We will continue to build community trust through consistency and measurable intervention."
                        </p>
                        <div className="inline-flex gap-8 justify-center">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary font-cormorant">100%</div>
                                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Accountability</div>
                            </div>
                            <div className="w-px h-12 bg-slate-200" />
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary font-cormorant">24/7</div>
                                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Presence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Motto (Original Design) */}
            <section className="py-40 bg-[#0d0a1a] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed opacity-10 grayscale mix-blend-overlay" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto border-y border-white/20 py-20"
                    >
                        <div className="mb-10 text-6xl text-secondary opacity-50 font-serif">"</div>
                        <h2 className="text-4xl md:text-5xl font-light italic font-cormorant leading-tight mb-10 tracking-wide text-gray-200">
                            We were never supposed to survive. <br />
                            Now, we build the <span className="text-white font-bold border-b border-secondary/50">systems</span> that ensure <br />
                            no one else has to just survive.
                        </h2>
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-white font-black uppercase tracking-[0.2em] font-manrope text-sm">Asunta Wagura</div>
                            <div className="text-secondary text-xs uppercase tracking-widest opacity-80">Founder & Executive Director</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
