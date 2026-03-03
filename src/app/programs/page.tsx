"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Leaf, Scale, Utensils, TrendingUp, Users, ShieldAlert, Wallet, Handshake } from "lucide-react";

import { programsData, programPillars, getProgramsByPillar } from "@/data/programs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const pillarIcons = {
    "community-care": HeartHandshake,
    "climate-justice": Leaf,
    "inclusive-development": Scale,
};

const pillarGradients: Record<string, string> = {
    "community-care": "from-rose-500/20 via-pink-500/10 to-transparent",
    "climate-justice": "from-emerald-500/20 via-green-500/10 to-transparent",
    "inclusive-development": "from-violet-400/20 via-purple-400/10 to-transparent",
};

const pillarAccent: Record<string, string> = {
    "community-care": "bg-rose-500",
    "climate-justice": "bg-emerald-500",
    "inclusive-development": "bg-violet-500",
};

const pillarText: Record<string, string> = {
    "community-care": "text-rose-400",
    "climate-justice": "text-emerald-400",
    "inclusive-development": "text-violet-400",
};

const pillarBorder: Record<string, string> = {
    "community-care": "border-rose-500/20 hover:border-rose-500/40",
    "climate-justice": "border-emerald-500/20 hover:border-emerald-500/40",
    "inclusive-development": "border-violet-500/20 hover:border-violet-500/40",
};

const pillarGlow: Record<string, string> = {
    "community-care": "group-hover:bg-rose-500/15",
    "climate-justice": "group-hover:bg-emerald-500/15",
    "inclusive-development": "group-hover:bg-violet-500/15",
};

const PageTitle = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => {
    return (
        <section className="relative py-48 md:py-72 bg-[#0d0a1a] overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 z-0">
                <img src="/assets/ngo-professional-bg.png" className="w-full h-full object-cover opacity-20 ken-burns grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a1a] via-transparent to-[#0d0a1a]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,141,232,0.15),transparent)]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5 }}
                className="relative z-10 space-y-8 px-6"
            >
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-secondary/40" />
                    <span className="text-secondary font-black tracking-[0.6em] text-[10px] uppercase">Our Strategic Pillars</span>
                    <div className="h-px w-12 bg-secondary/40" />
                </div>
                <h1 className="text-7xl md:text-9xl font-black text-white font-manrope tracking-tighter leading-none mb-4 lowercase italic opacity-90">
                    {title}.<span className="text-secondary">_</span>
                </h1>
                <div className="text-[11px] text-white/30 font-bold tracking-[0.4em] uppercase font-manrope">
                    Genesis / Protocol / <span className="text-secondary opacity-100">{breadcrumb}</span>
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        </section>
    );
};

export default function ProgramsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#0d0a1a]">
            <PageTitle title="Our Programs" breadcrumb="Programs" />

            {/* 3 Pillars Navigation Strip */}
            <section className="py-0 bg-[#0f0c1e] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
                        {programPillars.map((pillar) => {
                            const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];
                            const programs = getProgramsByPillar(pillar.id);
                            return (
                                <a
                                    key={pillar.id}
                                    href={`#${pillar.id}`}
                                    className="flex items-center gap-5 px-8 py-6 hover:bg-white/[0.02] transition-all group"
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all",
                                        pillarAccent[pillar.id], "bg-opacity-10 group-hover:bg-opacity-100"
                                    )}>
                                        <Icon size={22} className={cn("transition-colors", pillarText[pillar.id], "group-hover:text-white")} />
                                    </div>
                                    <div>
                                        <div className="text-white font-black text-sm tracking-wide">{pillar.title}</div>
                                        <div className="text-white/30 text-[10px] font-medium tracking-wider mt-0.5">{programs.length} Programs</div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Programs Sections by Pillar */}
            {programPillars.map((pillar, pIndex) => {
                const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];
                const programs = getProgramsByPillar(pillar.id);
                return (
                    <section
                        key={pillar.id}
                        id={pillar.id}
                        className="py-20 md:py-32 bg-[#0d0a1a] relative scroll-mt-40"
                    >
                        {/* Side stripes */}
                        <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5 hidden xl:block" />
                        <div className="absolute right-10 top-0 bottom-0 w-px bg-white/5 hidden xl:block" />

                        <div className="container mx-auto px-6 relative z-10">
                            {/* Pillar Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8"
                            >
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", pillarAccent[pillar.id])}>
                                            <Icon size={20} className="text-white" />
                                        </div>
                                        <span className={cn("font-black tracking-[0.4em] text-[10px] uppercase", pillarText[pillar.id])}>
                                            Pillar {pIndex + 1}
                                        </span>
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-black text-white font-manrope tracking-tighter leading-[0.9]">
                                        {pillar.title}<span className={pillarText[pillar.id]}>.</span>
                                    </h2>
                                    <p className="text-lg text-slate-400 font-manrope font-light leading-relaxed mt-6 max-w-2xl">
                                        {pillar.description}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-black text-white/10 font-manrope">{programs.length}</div>
                                    <div className="text-[9px] text-white/30 uppercase tracking-widest font-black">Programs</div>
                                </div>
                            </motion.div>

                            {/* Programs grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {programs.map((program, index) => (
                                    <motion.div
                                        key={program.id}
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link href={`/programs/${program.id}`}>
                                            <div className={cn(
                                                "group relative bg-[#13102a] border rounded-2xl overflow-hidden transition-all duration-500 hover:bg-[#181438] h-full",
                                                pillarBorder[pillar.id]
                                            )}>
                                                {/* Image header */}
                                                <div className="relative h-48 overflow-hidden">
                                                    <img
                                                        src={program.image}
                                                        alt={program.title}
                                                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 scale-105 group-hover:scale-100"
                                                    />
                                                    <div className={cn(
                                                        "absolute inset-0 bg-gradient-to-t",
                                                        pillarGradients[pillar.id],
                                                        "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    )} />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#13102a] via-transparent to-transparent" />

                                                    {/* Category badge */}
                                                    <div className="absolute top-4 left-4">
                                                        <span className={cn(
                                                            "text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10",
                                                            pillarText[pillar.id]
                                                        )}>
                                                            {program.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 space-y-4">
                                                    <h3 className="text-xl font-black text-white font-manrope tracking-tight leading-snug group-hover:text-secondary transition-colors duration-300">
                                                        {program.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-400 font-manrope font-light leading-relaxed line-clamp-2">
                                                        {program.description}
                                                    </p>

                                                    {/* Impact stats */}
                                                    <div className="flex gap-6 pt-3 border-t border-white/5">
                                                        {program.impact.slice(0, 2).map((stat, i) => (
                                                            <div key={i}>
                                                                <div className="text-lg font-black text-white font-manrope tracking-tight">{stat.value}</div>
                                                                <div className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Arrow CTA */}
                                                    <div className="flex items-center gap-2 pt-2">
                                                        <span className={cn("text-[10px] font-black uppercase tracking-widest", pillarText[pillar.id])}>
                                                            Learn More
                                                        </span>
                                                        <ArrowRight size={12} className={cn(
                                                            "transition-transform group-hover:translate-x-2",
                                                            pillarText[pillar.id]
                                                        )} />
                                                    </div>
                                                </div>

                                                {/* Glow */}
                                                <div className={cn(
                                                    "absolute -inset-10 bg-transparent blur-[80px] -z-10 transition-all duration-700",
                                                    pillarGlow[pillar.id]
                                                )} />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Section divider */}
                        {pIndex < programPillars.length - 1 && (
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        )}
                    </section>
                );
            })}

            {/* Tactical Interventions Grid */}
            <section className="py-20 md:py-32 bg-[#0d0a1a] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24 space-y-4">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-secondary font-black tracking-[0.5em] text-[11px] uppercase block"
                        >
                            Our Response Vectors
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-white font-manrope tracking-tighter">
                            Tactical <span className="text-secondary">Interventions.</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                            Beyond our strategic framework, we deploy rapid-response units addressing immediate community needs through six core vectors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ActivityCard
                            icon={Utensils}
                            title="Basic Needs & Security"
                            items={[
                                { header: "Monthly Feeding Program", text: "Nutritious meals & hampers for orphans and seniors." },
                                { header: "Emergency Grocery Assistance", text: "$50–$100 vouchers for women fleeing violence or managing chronic illness." },
                                { header: "Winter Relief", text: "Distribution of coats, blankets, and hygiene kits." }
                            ]}
                        />
                        <ActivityCard
                            icon={TrendingUp}
                            title="Economic Empowerment"
                            items={[
                                { header: "Digital Skills Training", text: "Bootcamps for seniors & immigrants on email, Zoom, and government services." },
                                { header: "Job Readiness", text: "Résumé support & interview coaching for women returning to work." },
                                { header: "Micro-Enterprise Support", text: "Training accessible budgeting & bookkeeping for home-based businesses." }
                            ]}
                        />
                        <ActivityCard
                            icon={Users}
                            title="Seniors Welfare"
                            items={[
                                { header: "Intergenerational Computing", text: "Youth volunteers teaching seniors tablet use." },
                                { header: "Transportation Support", text: "Stipends & volunteer drivers for medical appointments." },
                                { header: "Social Circles", text: "Weekly 'Tea & Talk' sessions to reduce isolation." }
                            ]}
                        />
                        <ActivityCard
                            icon={ShieldAlert}
                            title="Crisis Response"
                            items={[
                                { header: "GBV Emergency Relief", text: "Safe referrals & care packages for survivors relocating." },
                                { header: "Orphans in Care", text: "School supplies & meal support for children raised by grandparents." },
                                { header: "Disability Support", text: "Adaptive tools & mobility support for disabled clients." }
                            ]}
                        />
                        <ActivityCard
                            icon={Wallet}
                            title="Poverty Reduction"
                            items={[
                                { header: "Financial Literacy", text: "Workshops on budgeting, debt management, and fraud avoidance." },
                                { header: "Benefits Navigation", text: "Assistance applying for ODSP, OW, OAS, GIS, and housing support." },
                                { header: "Community Education", text: "Sessions on tenant rights, mental health, and online safety." }
                            ]}
                        />
                        <ActivityCard
                            icon={Handshake}
                            title="Strategic Partnerships"
                            items={[
                                { header: "Health & Food Banks", text: "Wraparound support collaborations with local agencies." },
                                { header: "Newcomer Settlement", text: "Joint crisis programs for refugee and immigrant families." },
                                { header: "Volunteer Mobilization", text: "Youth teams for snow shoveling, cleaning, and food delivery." }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-32 bg-[#0d0a1a] relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="pt-20 border-t border-white/5 text-center space-y-10"
                    >
                        <h4 className="text-4xl md:text-6xl font-black text-white font-manrope tracking-tighter">Ready to Architect Change?</h4>
                        <div className="flex justify-center gap-10">
                            <Link href="/contact">
                                <Button variant="outline" className="border-white/20 text-white rounded-none px-12 py-8 text-[11px] tracking-[0.3em] uppercase hover:bg-white/5">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link href="/donate">
                                <Button className="bg-action-red hover:bg-[#b91c1c] text-white rounded-none px-12 py-8 text-[11px] tracking-[0.3em] uppercase shadow-2xl">
                                    Fuel the Future
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

function ActivityCard({ icon: Icon, title, items }: { icon: any; title: string; items: { header: string; text: string }[] }) {
    return (
        <div className="bg-[#151226] border border-white/5 p-8 rounded-2xl hover:border-secondary/30 transition-all group h-full">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-black transition-colors duration-300">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-black text-white mb-6 font-manrope">{title}</h3>
            <div className="space-y-5">
                {items.map((item, idx) => (
                    <div key={idx} className="relative pl-4 border-l border-white/10 group-hover:border-secondary/30 transition-colors">
                        <h4 className="text-secondary text-[10px] font-black uppercase tracking-wider mb-1">{item.header}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
