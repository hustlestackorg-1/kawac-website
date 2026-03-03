"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Accessibility, Globe, Binary, LayoutTemplate, Smartphone, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PageTitle = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <section className="relative py-48 md:py-64 bg-[#100a26] overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Pulsing Digital Grain */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none grayscale"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#100a26] via-transparent to-transparent"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="relative z-10 space-y-8 px-6 max-w-5xl"
            >
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-secondary/10 border border-secondary/20 shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                        <Terminal className="text-secondary w-8 h-8" />
                    </div>
                </div>
                <h1 className="text-6xl md:text-9xl font-black text-white font-cormorant tracking-tight leading-none text-glow-purple">
                    {title}
                </h1>
                <p className="text-xl text-white/50 font-inter max-w-2xl mx-auto font-light leading-relaxed">
                    {subtitle}
                </p>
                <div className="pt-10">
                    <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
                </div>
            </motion.div>
        </section>
    );
}

export default function ComputerHubPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <PageTitle
                title="Computer Hub"
                subtitle="Empowering the Black & Caribbean diaspora with frontier digital skills and Assistive Technology."
            />

            {/* THE MISSION - Digital Visual Impairment */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-12">
                    <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase">THE VISION</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-primary font-cormorant leading-tight">
                        Bridging the <span className="text-secondary italic">Digital Divide.</span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-[2] font-inter">
                        The KAWAC Computer Hub is a dedicated ecosystem for <span className="text-primary font-bold">Digital Inclusion.</span> We specialize in empowering individuals with Digital Visual Impairment and those from racialized communities with the technology needed to transcend systemic barriers.
                    </p>
                </div>
            </section>

            {/* TECH GRID - Creative Features */}
            <section className="py-32 bg-[#F4F5F8] relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 border border-slate-100 shadow-institutional-shadow hover:-translate-y-2 transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-primary font-cormorant mb-4 tracking-tight">{feature.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-inter">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ACCESSIBILITY & IMPACT */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <span className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase">ACCESSIBLE EXCELLENCE</span>
                            <h3 className="text-5xl md:text-7xl font-bold text-primary font-cormorant leading-tight">Technology without Borders.</h3>
                            <div className="space-y-6">
                                <p className="text-slate-600 leading-relaxed font-inter">
                                    Our hub is equipped with state-of-the-art Assistive Technology (AT) devices and specialized training modules designed for accessibility. We don't just provide computers; we provide the keys to a digital future.
                                </p>
                                <ul className="space-y-4 pt-6">
                                    {points.map((pt, i) => (
                                        <li key={i} className="flex items-center gap-4 text-sm font-bold text-primary tracking-widest uppercase">
                                            <div className="w-2 h-2 rounded-full bg-secondary" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-40 rounded-sm" />
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000"
                                className="w-full h-full object-cover rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                                alt="Digital Inclusion"
                            />
                            {/* Geometric Accent */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-secondary/10 rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 bg-[#100a26] text-white text-center">
                <div className="container mx-auto px-6 max-w-3xl space-y-10">
                    <h2 className="text-5xl md:text-8xl font-black font-cormorant tracking-tight leading-none">Join the Hub.</h2>
                    <p className="text-white/40 text-lg font-inter max-w-xl mx-auto italic">
                        Access training, mentorship, and technology designed for your unique career path.
                    </p>
                    <div className="pt-10">
                        <Link href="/portal">
                            <Button className="bg-secondary hover:bg-white text-primary font-black px-12 py-8 rounded-none tracking-[0.3em] uppercase transition-all duration-500">
                                Entrance Protocol
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

const features = [
    {
        title: "Digital Visual Training",
        icon: Accessibility,
        description: "Specialized training for individuals with visual impairments using advanced screen readers and AT."
    },
    {
        title: "Frontier Tech Skills",
        icon: Binary,
        description: "From coding to digital literacy, building the foundation for high-value employment."
    },
    {
        title: "AT Device Access",
        icon: Smartphone,
        description: "Direct access to assistive technology hardware and software resources."
    },
    {
        title: "Career Pathways",
        icon: LayoutTemplate,
        description: "Bridging technical training with real-world placements in the tech sector."
    }
];

const points = [
    "Digital Skills Empowerment",
    "Accessible Digital Training",
    "AT Hardware Provisioning",
    "Community Tech Support"
];
