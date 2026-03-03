"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { VolunteerWizard } from "@/components/ui/volunteer-wizard";
import { Shield, Sparkles, Stethoscope, ArrowRight } from "lucide-react";

function PageTitle({ title, breadcrumb }: { title: string, breadcrumb: string }) {
    return (
        <section className="relative py-32 md:py-48 bg-[#0d0a1a] overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-[url('/assets/impact-community.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1a] via-[#0d0a1a]/40 to-transparent"></div>
            <div className="relative z-10 px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.3em]">Join The Frontline</span>
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-black text-white font-cormorant mb-6 leading-[0.9] tracking-tight">
                    {title}
                </h1>
                <p className="text-lg text-slate-300 font-manrope font-light max-w-2xl mx-auto">
                    Your agency is the currency of change. Choose your pathway to impact.
                </p>
            </div>
        </section>
    );
}

const pathways = [
    {
        icon: Shield,
        title: "Standard Corps",
        subtitle: "Support & Operations",
        desc: "Join our active volunteer corps for events, community outreach, and administrative support.",
        color: "bg-blue-500",
        action: "Join Corps"
    },
    {
        icon: Sparkles,
        title: "Own A Program",
        subtitle: "Leadership Track",
        desc: "Have a vision? Propose and lead a micro-program under the KAWAC umbrella with our institutional backing.",
        color: "bg-amber-500",
        action: "Submit Proposal",
        highlight: true
    },
    {
        icon: Stethoscope,
        title: "IEHP Hub Project",
        subtitle: "Health Professionals",
        desc: "Specialized track for Internationally Educated Health Professionals seeking licensure and placement.",
        color: "bg-green-500",
        action: "Access Hub"
    }
];

export default function VolunteerPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#F8F9FA]">
            <PageTitle title="Mobilize With Us" breadcrumb="Volunteer" />

            {/* Pathways Section - High Value Options */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-primary font-manrope uppercase tracking-tight mb-2">Select Your Vector</h2>
                        <div className="w-12 h-1 bg-secondary mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pathways.map((p, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative group p-8 rounded-2xl border transition-all duration-500 ${p.highlight ? 'bg-[#0d0a1a] border-secondary/50 shadow-2xl scale-105' : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-xl'}`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${p.highlight ? 'bg-secondary/20 text-secondary' : 'bg-slate-100 text-slate-600'}`}>
                                    <p.icon size={24} />
                                </div>
                                <div className="mb-6">
                                    <span className={`text-[10px] font-black uppercase tracking-widest block mb-2 ${p.highlight ? 'text-secondary' : 'text-slate-400'}`}>{p.subtitle}</span>
                                    <h3 className={`text-2xl font-bold font-cormorant mb-3 ${p.highlight ? 'text-white' : 'text-primary'}`}>{p.title}</h3>
                                    <p className={`text-sm leading-relaxed ${p.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                                    <span className={p.highlight ? 'text-white' : 'text-primary'}>{p.action}</span>
                                    <ArrowRight size={14} className={p.highlight ? 'text-secondary' : 'text-primary'} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                        {/* Content Column */}
                        <div className="sticky top-24">
                            <span className="text-secondary font-black text-xs uppercase tracking-widest block mb-4">Application Protocol</span>
                            <h2 className="text-5xl font-black text-primary font-cormorant mb-6 leading-none">
                                Begin Your <br />
                                <span className="italic text-secondary">Service</span>.
                            </h2>
                            <p className="text-slate-500 leading-relaxed mb-10 text-lg font-light">
                                Whether you are proposing a new program, joining the Health Hub, or volunteering your time—it starts here. Fill out the intake form and our coordinators will route you to the correct department.
                            </p>

                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-primary mb-2">Need Assistance?</h4>
                                <p className="text-sm text-slate-500 mb-4">Our volunteer coordination team is available for queries.</p>
                                <a href="mailto:volunteer@kawac.ca" className="text-secondary font-bold text-sm hover:underline">volunteer@kawac.ca</a>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="w-full bg-white shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden border border-slate-100">
                            <div className="bg-[#0d0a1a] px-8 py-6 border-b border-white/10">
                                <h3 className="text-white font-bold font-manrope">Intake Form</h3>
                                <p className="text-white/40 text-xs mt-1">Please select your pathway inside.</p>
                            </div>
                            <div className="p-8">
                                <VolunteerWizard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
