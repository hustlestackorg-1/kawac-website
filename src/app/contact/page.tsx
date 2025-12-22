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
            <PageTitle title="Contact Us" breadcrumb="Contact" />

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 md:px-0">

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            { icon: Mail, title: "Partnership Inquiries", line1: "partnerships@kawac.ca", line2: "grants@kawac.ca" },
                            { icon: Phone, title: "Headquarters", line1: "+1 (555) 123-4567", line2: "Mon - Fri: 09:00 - 17:00 EST" },
                            { icon: MapPin, title: "Operations Base", line1: "123 Main Street, Suite 100", line2: "Toronto, ON, Canada" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-slate-100 p-12 text-center group hover:shadow-xl transition-all duration-500 hover:border-[#FBAF3C]/30">
                                <div className="w-12 h-12 bg-[#0C3B4E]/5 text-[#0C3B4E] rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0C3B4E] group-hover:text-white transition-colors duration-500">
                                    <item.icon strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-[#0C3B4E] text-lg mb-4 font-playfair">{item.title}</h4>
                                <p className="text-slate-500 text-sm">{item.line1}</p>
                                <p className="text-slate-500 text-sm">{item.line2}</p>
                            </div>
                        ))}
                    </div>

                    {/* Form Section */}
                    <div className="max-w-4xl mx-auto bg-[#F4F5F8] p-12 md:p-20">
                        <div className="text-center mb-16">
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-4">/// INITIATE DIALOGUE</span>
                            <h2 className="text-4xl font-bold text-[#0C3B4E] font-playfair mb-4">
                                Strategic Alignment
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto">
                                Whether for funding validation, program partnership, or governance audits, our team is ready to provide documentation and insight.
                            </p>
                        </div>

                        {isSuccess ? (
                            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0C3B4E] mb-2 font-playfair">Message Sent Successfully</h3>
                                <p className="text-slate-500 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                                <Button
                                    onClick={() => setIsSuccess(false)}
                                    className="bg-[#0C3B4E] text-white px-8 py-4 rounded-none"
                                >
                                    SEND ANOTHER MESSAGE
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#0C3B4E]">Organization / Name</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="bg-white border-none py-6 rounded-none focus:ring-1 focus:ring-[#0C3B4E]"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#0C3B4E]">Official Email</label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="bg-white border-none py-6 rounded-none focus:ring-1 focus:ring-[#0C3B4E]"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#0C3B4E]">Inquiry Context</label>
                                    <Input
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white border-none py-6 rounded-none focus:ring-1 focus:ring-[#0C3B4E]"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#0C3B4E]">Detailed Brief</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-white border-none h-40 resize-none rounded-none focus:ring-1 focus:ring-[#0C3B4E]"
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-500 text-xs font-bold">{error}</p>
                                )}

                                <div className="text-center pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        size="lg"
                                        className="bg-[#0C3B4E] hover:bg-[#FBAF3C] hover:text-[#0C3B4E] text-white font-bold py-8 px-12 rounded-none shadow-xl tracking-widest text-xs uppercase transition-all"
                                    >
                                        {isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>

                </div>
            </section>

            {/* Map Placeholder */}
            <div className="h-96 w-full bg-slate-200">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.5728952084!2d-79.51814131238497!3d43.71815525791238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1716382946772!5m2!1sen!2sca" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    );
}
