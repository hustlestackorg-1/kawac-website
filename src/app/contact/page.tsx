"use client";


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

function PageTitle({ title, breadcrumb }: { title: string, breadcrumb: string }) {
    return (
        <section className="relative py-32 md:py-48 bg-primary overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-[url('/assets/hero-health.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white font-manrope mb-4">{title}</h1>
                <div className="text-lg text-white/80 font-bold tracking-wider uppercase font-manrope">
                    Home / <span className="text-secondary">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
}

// ... imports ...

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setIsSuccess(false);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setError(result.error || "Failed to send message. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="flex flex-col min-h-screen">
            {/* Institutional Header */}
            <section className="relative py-32 md:py-52 bg-[#0d0a1a] overflow-hidden flex items-center justify-center text-center">
                {/* 8D Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a1a] via-[#1a0f2e] to-[#0d0a1a]" />
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="relative z-10 px-4">
                    <span className="text-secondary font-black tracking-[0.5em] text-[10px] uppercase block mb-6">Global Embassy</span>
                    <h1 className="text-5xl md:text-8xl font-black text-white font-manrope mb-4 tracking-tighter">Strategic <span className="text-secondary italic font-cormorant">Nexus.</span></h1>
                    <div className="h-px w-24 bg-white/20 mx-auto my-8" />
                    <div className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase font-manrope">
                        Protocol 004 / <span className="text-white opacity-100">Contact</span>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </section>

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 relative z-10">

                    {/* Info Cards - Protocol Style */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100 mb-24 max-w-6xl mx-auto shadow-2xl">
                        {[
                            { icon: Mail, title: "Alliance Inquiries", line1: "partnerships@kawac.ca", line2: "grants@kawac.ca" },
                            { icon: Phone, title: "Command Center", line1: "+1 (555) 123-4567", line2: "Mon - Fri: 09:00 - 17:00 EST" },
                            { icon: MapPin, title: "Operations Base", line1: "123 Main Street, Suite 100", line2: "Toronto, ON, Canada" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-16 text-center group hover:bg-[#fafafa] transition-colors duration-500">
                                <div className="w-12 h-12 bg-secondary/5 text-secondary flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon strokeWidth={1.5} size={20} />
                                </div>
                                <h4 className="font-black text-[#0d0a1a] text-lg mb-4 font-cormorant tracking-wider uppercase">{item.title}</h4>
                                <p className="text-slate-400 text-xs font-manrope font-medium tracking-wide">{item.line1}</p>
                                <p className="text-slate-400 text-xs font-manrope font-medium tracking-wide">{item.line2}</p>
                            </div>
                        ))}
                    </div>

                    {/* Form Section - Clean & Sharp */}
                    <div className="max-w-5xl mx-auto bg-[#F4F5F8] p-12 md:p-24 border border-slate-200">
                        <div className="text-center mb-16">
                            <span className="text-secondary font-black tracking-[0.4em] text-[9px] uppercase block mb-6">Secure Channel</span>
                            <h2 className="text-4xl md:text-5xl font-black text-[#0d0a1a] font-cormorant mb-6">
                                Initiate Strategic Dialogue
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto font-manrope font-light text-lg leading-relaxed italic">
                                For funding validation, program partnership, or governance audits. Access the alliance.
                            </p>
                        </div>

                        {isSuccess ? (
                            <div className="text-center py-20 animate-in fade-in zoom-in duration-500 bg-white border border-slate-100 p-12">
                                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-black text-[#0d0a1a] mb-4 font-cormorant">Protocol Acknowledged.</h3>
                                <p className="text-slate-500 mb-10 font-manrope">Your transmission has been logged. Our secretariat will respond within 24 hours.</p>
                                <Button
                                    onClick={() => setIsSuccess(false)}
                                    className="bg-[#0d0a1a] text-white px-10 py-6 rounded-none font-black uppercase tracking-widest text-[10px] hover:bg-secondary transition-all"
                                >
                                    Reset Transmission
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0d0a1a]/60">Organization / Name</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="bg-white border-none py-8 rounded-none focus:ring-1 focus:ring-secondary font-manrope text-lg shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0d0a1a]/60">Official Email</label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="bg-white border-none py-8 rounded-none focus:ring-1 focus:ring-secondary font-manrope text-lg shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0d0a1a]/60">Inquiry Context</label>
                                    <Input
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white border-none py-8 rounded-none focus:ring-1 focus:ring-secondary font-manrope text-lg shadow-sm"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0d0a1a]/60">Detailed Brief</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white border-none h-48 resize-none rounded-none focus:ring-1 focus:ring-secondary font-manrope text-lg shadow-sm p-6"
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-600 text-[10px] font-black uppercase tracking-widest border-l-2 border-red-600 pl-4 py-2 bg-red-50">{error}</p>
                                )}

                                <div className="pt-8">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#0d0a1a] hover:bg-secondary text-white font-black py-8 rounded-none shadow-2xl tracking-[0.3em] text-[11px] uppercase transition-all duration-500"
                                    >
                                        {isSubmitting ? "TRANSMITTING..." : "SUBMIT PROTOCOL"}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>

                </div>
            </section>

            {/* Map Placeholder - Artistic */}
            <div className="h-[400px] w-full bg-slate-900 relative grayscale invert-[0.9] contrast-125">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.5728952084!2d-79.51814131238497!3d43.71815525791238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1716382946772!5m2!1sen!2sca" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="opacity-60"></iframe>
                <div className="absolute inset-0 bg-[#0d0a1a] mix-blend-color pointer-events-none" />
            </div>
        </main>
    );
}
