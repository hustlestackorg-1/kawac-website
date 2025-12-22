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
    Library
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

        try {
            const response = await fetch("/api/partner/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
            }
        } catch (error) {
            console.error("Partnership submission error", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Split Hero Section */}
            <section className="relative flex flex-col lg:flex-row h-auto lg:h-[80vh]">
                <div className="w-full lg:w-1/2 bg-[#0C3B4E] p-12 md:p-24 flex flex-col justify-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] opacity-5"></div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative z-10"
                    >
                        <span className="text-[#FBAF3C] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                            /// STRATEGIC ALLIANCE
                        </span>
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 leading-tight">
                            Build with<br />KAWAC.
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-lg mb-12">
                            We don't just accept grants; we architect ecosystems. Join us in scaling locally led interventions that dismantle systemic exclusion.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Globe className="text-[#FBAF3C] w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-wider">Dual Continent Presence</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <ShieldCheck className="text-[#FBAF3C] w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-wider">ISO Aligned Governance</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2 bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
                    <img
                        src="/assets/hero-justice.jpg"
                        alt="Partnership"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#0C3B4E] mb-6">Scalability Through Synergy</h2>
                        <p className="text-slate-600 text-lg">
                            We partner with government agencies, NGOs, and the private sector to bridge the gap between policy and community reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 max-w-6xl mx-auto items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-playfair font-bold text-[#0C3B4E] mb-8">Formal Partnership Inquiry</h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Our partnerships are tailored to the specific strengths of each organization. Please complete this brief profile to initiate a high-level strategic review.
                            </p>

                            <div className="space-y-6">
                                <ListItem icon={CheckCircle2} text="Technical Implementation Support" />
                                <ListItem icon={CheckCircle2} text="Resource Mobilization & Grants" />
                                <ListItem icon={CheckCircle2} text="Human Rights Advocacy Coalitions" />
                                <ListItem icon={CheckCircle2} text="Community Health Infrastructure" />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-playfair font-bold text-[#0C3B4E] mb-4">Inquiry Recorded.</h3>
                                        <p className="text-slate-500 mb-8">
                                            Your organizational profile has been submitted to our Board of Directors. Our partnerships lead will contact you within 48 hours.
                                        </p>
                                        <Button
                                            onClick={() => setIsSuccess(false)}
                                            className="bg-[#0C3B4E] text-white px-8 py-4 rounded-full"
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
                                        className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-slate-100 space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase">Organization Name</label>
                                                <Input
                                                    name="organization_name"
                                                    value={formData.organization_name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Global Fund, WHO, etc."
                                                    className="bg-slate-50 border-none py-6"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase">Contact Person</label>
                                                <Input
                                                    name="contact_name"
                                                    value={formData.contact_name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Full Name"
                                                    className="bg-slate-50 border-none py-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase">Work Email</label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="collab@yourorg.org"
                                                    className="bg-slate-50 border-none py-6"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase">Phone (Optional)</label>
                                                <Input
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+1..."
                                                    className="bg-slate-50 border-none py-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 uppercase">Primary Interest</label>
                                            <select
                                                name="partnership_type"
                                                value={formData.partnership_type}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 border-none py-4 px-3 rounded-lg text-sm text-slate-600 focus:ring-1 focus:ring-secondary outline-none appearance-none"
                                            >
                                                <option value="implementation">Implementation Partnership</option>
                                                <option value="funding">Direct Grant / Funding</option>
                                                <option value="technical">Technical Advisory</option>
                                                <option value="research">Academic Research</option>
                                                <option value="other">Other Collaboration</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 uppercase">Collaboration Brief</label>
                                            <Textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Outline your strategic objectives for this partnership..."
                                                className="bg-slate-50 border-none h-32 resize-none"
                                            />
                                        </div>

                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full bg-[#0C3B4E] hover:bg-[#FBAF3C] text-white hover:text-[#0C3B4E] font-bold py-8 rounded-full shadow-lg transition-all text-lg"
                                        >
                                            {isSubmitting ? "PROCESSING..." : "SUBMIT STRATEGIC PROFILE"}
                                        </Button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ValueCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-slate-50 text-[#0C3B4E] rounded-xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-[#FBAF3C] group-hover:text-white transition-colors">
                <Icon size={28} />
            </div>
            <h4 className="text-xl font-bold text-[#0C3B4E] mb-4">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function ListItem({ icon: Icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <Icon size={14} />
            </div>
            <span className="font-bold text-[#0C3B4E] text-sm uppercase tracking-wide">{text}</span>
        </div>
    );
}
