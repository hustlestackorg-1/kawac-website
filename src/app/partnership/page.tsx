"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Users,
    Handshake,
    Globe,
    Scale,
    CheckCircle2,
    Building2,
    ShieldCheck,
    Library,
    ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PartnershipPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        organization_name: "",
        contact_name: "",
        email: "",
        phone: "",
        partnership_type: "implementation",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSuccess(true);
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-[#050308] text-white overflow-hidden">
            {/* 8D Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            {/* Immersive Hero Section */}
            <section className="relative pt-48 pb-32 flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 max-w-5xl"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10">
                        <Handshake className="w-4 h-4 text-gold-hd" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Strategic Alliance Protocol</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black font-manrope tracking-tighter leading-none mb-10">
                        Build with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary animate-shine bg-[200%_auto]">KAWAC.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                        We don't just accept grants; we architect ecosystems. Join us in scaling locally led interventions that dismantle systemic exclusion through
                        <span className="text-white font-medium"> Sovereignty-Based Design.</span>
                    </p>
                </motion.div>

                {/* Scrolldown Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </motion.div>
            </section>

            {/* Why Partner Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-black font-manrope tracking-tight mb-8">Scalability Through Synergy</h2>
                        <p className="text-slate-500 text-lg">
                            We partner with government agencies, NGOs, and the private sector to bridge the gap between policy and community reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={Building2}
                            title="Government & Policy"
                            desc="We serve as the bridge for implementing health and social mandates in hard-to-reach settlements."
                        />
                        <ValueCard
                            icon={Handshake}
                            title="Institutional Funders"
                            desc="Rigorous audit trails, real-time data reporting, and multi-year systemic outcome tracking."
                        />
                        <ValueCard
                            icon={Library}
                            title="Academic Research"
                            desc="Access to ground-level data and community samples for social equity research."
                        />
                    </div>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden">

                        <div className="flex flex-col lg:flex-row gap-20 items-start relative z-10">
                            <div className="w-full lg:w-5/12 sticky top-24">
                                <h2 className="text-4xl font-black font-manrope mb-8 leading-tight">Formal Partnership <br /><span className="text-gold-hd">Inquiry.</span></h2>
                                <p className="text-slate-400 mb-12 leading-relaxed text-lg font-light">
                                    Our partnerships are tailored to the specific strengths of each organization. Please complete this brief profile to initiate a high-level strategic review.
                                </p>

                                <div className="space-y-6">
                                    <ListItem text="Technical Implementation Support" />
                                    <ListItem text="Resource Mobilization & Grants" />
                                    <ListItem text="Human Rights Advocacy Coalitions" />
                                    <ListItem text="Community Health Infrastructure" />
                                </div>
                            </div>

                            <div className="w-full lg:w-7/12">
                                <AnimatePresence mode="wait">
                                    {isSuccess ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-black/40 p-12 rounded-3xl border border-secondary/30 text-center flex flex-col items-center justify-center min-h-[400px]"
                                        >
                                            <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-8 border border-secondary/30">
                                                <CheckCircle2 className="w-10 h-10" />
                                            </div>
                                            <h3 className="text-3xl font-black text-white mb-4">Transmission Secured.</h3>
                                            <p className="text-slate-400 mb-8 max-w-sm">
                                                Your organizational profile has been submitted to our Board of Directors. Our partnerships lead will contact you within 48 hours.
                                            </p>
                                            <Button
                                                onClick={() => setIsSuccess(false)}
                                                className="bg-white text-black hover:bg-secondary hover:text-white px-8 py-6 rounded-full font-bold tracking-widest text-xs"
                                            >
                                                RELOAD FORM
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-8"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Organization Name</label>
                                                    <Input
                                                        name="organization_name"
                                                        value={formData.organization_name}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="UN, Global Fund, etc."
                                                        className="bg-black/20 border-white/10 h-14 rounded-xl text-white placeholder:text-white/20 focus:border-secondary/50 focus:bg-black/40 transition-all px-6"
                                                    />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Contact Person</label>
                                                    <Input
                                                        name="contact_name"
                                                        value={formData.contact_name}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="Authorized Representative"
                                                        className="bg-black/20 border-white/10 h-14 rounded-xl text-white placeholder:text-white/20 focus:border-secondary/50 focus:bg-black/40 transition-all px-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Secure Email</label>
                                                    <Input
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="official@organization.org"
                                                        className="bg-black/20 border-white/10 h-14 rounded-xl text-white placeholder:text-white/20 focus:border-secondary/50 focus:bg-black/40 transition-all px-6"
                                                    />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Direct Line</label>
                                                    <Input
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="+1 (555) ..."
                                                        className="bg-black/20 border-white/10 h-14 rounded-xl text-white placeholder:text-white/20 focus:border-secondary/50 focus:bg-black/40 transition-all px-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Strategic Vector</label>
                                                <div className="relative">
                                                    <select
                                                        name="partnership_type"
                                                        value={formData.partnership_type}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-black/20 border border-white/10 h-14 rounded-xl text-white px-6 focus:border-secondary/50 focus:bg-black/40 transition-all appearance-none outline-none"
                                                    >
                                                        <option value="implementation" className="bg-black text-white">Implementation Partnership</option>
                                                        <option value="funding" className="bg-black text-white">Direct Grant / Funding</option>
                                                        <option value="technical" className="bg-black text-white">Technical Advisory</option>
                                                        <option value="research" className="bg-black text-white">Academic Research</option>
                                                        <option value="other" className="bg-black text-white">Other Collaboration</option>
                                                    </select>
                                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                                        ▼
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Collaboration Objectives</label>
                                                <Textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Outline your strategic objectives for this partnership..."
                                                    className="bg-black/20 border-white/10 min-h-[160px] rounded-xl text-white placeholder:text-white/20 focus:border-secondary/50 focus:bg-black/40 transition-all p-6 resize-none"
                                                />
                                            </div>

                                            <Button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full bg-white text-black hover:bg-gold-hd hover:text-black font-black py-8 rounded-xl shadow-lg hover:shadow-gold-hd/20 transition-all text-sm tracking-[0.2em]"
                                            >
                                                {isSubmitting ? "ENCRYPTING DATA..." : "INITIATE PROTOCOL"}
                                            </Button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ValueCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="group p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-secondary/30 hover:bg-white/10 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-black transition-all duration-500 text-gold-hd border border-white/10">
                <Icon size={24} />
            </div>
            <h4 className="text-2xl font-black text-white mb-4 font-manrope">{title}</h4>
            <p className="text-slate-400 font-light leading-relaxed">{desc}</p>
        </div>
    );
}

function ListItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-colors">
                <CheckCircle2 size={12} />
            </div>
            <span className="font-bold text-white text-sm uppercase tracking-wide group-hover:text-secondary transition-colors">{text}</span>
        </div>
    );
}
