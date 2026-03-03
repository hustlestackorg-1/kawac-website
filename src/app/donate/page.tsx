"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, DollarSign, ShieldCheck, Zap, Globe, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DonatePage() {
    const [amount, setAmount] = useState<string>("50");
    const [customAmount, setCustomAmount] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const donationAmounts = ["25", "50", "100", "500", "1000"];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const finalAmount = amount === "custom" ? customAmount : amount;

        try {
            const response = await fetch("/api/donate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    amount: finalAmount,
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
            }
        } catch (error) {
            console.error("Donation submission error", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F4F5F8]">
            {/* Sovereign Hero Section */}
            <section className="relative py-32 md:py-48 bg-[#0d0a1a] overflow-hidden flex items-center justify-center text-center">
                {/* 8D Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a1a] via-[#1a0f2e] to-[#0d0a1a]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent)]" />
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-center mb-8">
                            <div className="bg-secondary/10 p-4 rounded-full border border-secondary/20 backdrop-blur-md">
                                <Heart className="w-8 h-8 text-secondary fill-secondary/20" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black font-cormorant text-white mb-6 tracking-tight leading-[0.9]">
                            Investing in Sustainable Systems That <br /> <span className="text-secondary italic">Uplift Communities</span>.
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-manrope font-light italic">
                            We go beyond charity by funding structural solutions that strengthen local economies, empower communities, and drive self-sustaining growth across the Global South.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 relative">
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[#0d0a1a] skew-y-1 transform origin-top-left -z-10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">

                        {/* Left: The Investment Thesis */}
                        <div className="w-full lg:w-1/2 space-y-12 pt-10">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-black font-cormorant text-white lg:text-[#0d0a1a] mb-6">The Equity Return</h2>
                                <p className="text-slate-400 lg:text-slate-600 text-lg leading-relaxed font-manrope">
                                    KAWAC operates on a protocol of absolute transparency. 90% of your capital deployment goes directly to field operations, bypassing administrative bloat to secure freedom.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <ImpactCard
                                    icon={Zap}
                                    title="Rapid Deployment"
                                    desc="Immediate mobilization of medical assets and emergency response units."
                                />
                                <ImpactCard
                                    icon={Globe}
                                    title="Policy Architecture"
                                    desc="Research and legal frameworks to challenge systemic health inequality."
                                />
                                <ImpactCard
                                    icon={ShieldCheck}
                                    title="Sovereign Safety"
                                    desc="Protection protocols for marginalized defenders and community leaders."
                                />
                                <ImpactCard
                                    icon={DollarSign}
                                    title="Economic Seeds"
                                    desc="Direct capital injection for sustainable agricultural sovereignty."
                                />
                            </div>

                            <div className="bg-[#1a0f2e] p-10 relative overflow-hidden group border border-secondary/20">
                                <div className="relative z-10">
                                    <h3 className="font-black text-2xl text-white font-cormorant mb-4 uppercase tracking-widest">The Inner Circle</h3>
                                    <p className="text-slate-400 text-sm mb-8 leading-relaxed font-manrope">
                                        Become a pillar of the alliance. Monthly recurring investments provide the baseline stability for multi-year liberation strategies.
                                    </p>
                                    <Button className="bg-secondary text-[#0d0a1a] hover:bg-white font-black rounded-none px-8 py-6 uppercase tracking-[0.2em] transition-all">
                                        Initialize Recurring
                                    </Button>
                                </div>
                                <div className="absolute right-0 bottom-0 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                    <ShieldCheck size={180} />
                                </div>
                            </div>
                        </div>

                        {/* Right: The Transaction Interface */}
                        <div className="w-full lg:w-1/2">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white p-12 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-t-4 border-secondary text-center h-full flex flex-col items-center justify-center"
                                    >
                                        <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8">
                                            <CheckCircle2 className="w-12 h-12" />
                                        </div>
                                        <h2 className="text-4xl font-black font-cormorant text-[#0d0a1a] mb-6">Transaction Verified.</h2>
                                        <p className="text-slate-500 mb-10 font-manrope max-w-sm mx-auto">
                                            Your contribution of <span className="font-bold text-[#0d0a1a]">${amount === "custom" ? customAmount : amount}</span> has been deployed to the sovereignty fund. A receipt has been dispatched.
                                        </p>
                                        <Button
                                            onClick={() => window.location.href = "/"}
                                            className="bg-[#0d0a1a] text-white px-12 py-6 font-black uppercase tracking-widest hover:bg-secondary hover:text-black transition-all rounded-none"
                                        >
                                            Return to Nexus
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-white p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-t-4 border-secondary relative"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                            <Heart size={100} />
                                        </div>

                                        <h3 className="text-3xl font-black font-cormorant text-[#0d0a1a] mb-10 text-center uppercase tracking-wider">One-Time Capital Injection</h3>

                                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                            {/* Amount Selection */}
                                            <div>
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-4">Select Deployment Amount (CAD)</label>
                                                <div className="grid grid-cols-3 gap-3 mb-4">
                                                    {donationAmounts.map((amt) => (
                                                        <button
                                                            key={amt}
                                                            type="button"
                                                            onClick={() => { setAmount(amt); setCustomAmount(""); }}
                                                            className={`py-6 font-black font-manrope text-lg transition-all border border-transparent ${amount === amt ? 'bg-[#0d0a1a] text-white shadow-xl scale-105' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                                        >
                                                            ${amt}
                                                        </button>
                                                    ))}
                                                    <button
                                                        type="button"
                                                        onClick={() => setAmount("custom")}
                                                        className={`py-6 font-black font-manrope text-sm uppercase transition-all border border-transparent ${amount === "custom" ? 'bg-[#0d0a1a] text-white shadow-xl scale-105' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                                    >
                                                        Custom
                                                    </button>
                                                </div>
                                                {amount === "custom" && (
                                                    <div className="relative animate-in fade-in zoom-in duration-300">
                                                        <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                                        <Input
                                                            placeholder="Enter custom amount"
                                                            className="pl-14 py-8 bg-slate-50 border-none text-xl font-black font-manrope"
                                                            type="number"
                                                            value={customAmount}
                                                            onChange={(e) => setCustomAmount(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Personal Info */}
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">First Name</label>
                                                    <Input
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="bg-slate-50 border-none py-6 rounded-none focus:ring-1 focus:ring-secondary"
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Last Name</label>
                                                    <Input
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="bg-slate-50 border-none py-6 rounded-none focus:ring-1 focus:ring-secondary"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Email Address</label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="bg-slate-50 border-none py-6 rounded-none focus:ring-1 focus:ring-secondary"
                                                />
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Message (Optional)</label>
                                                <Textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="bg-slate-50 border-none resize-none h-24 rounded-none focus:ring-1 focus:ring-secondary"
                                                />
                                            </div>

                                            <div className="pt-6">
                                                <Button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    className="w-full bg-action-red hover:bg-[#b91c1c] text-white font-black py-8 shadow-2xl transition-all text-sm tracking-[0.25em] uppercase rounded-none group"
                                                >
                                                    {isSubmitting ? "PROCESSING..." : "AUTHORIZE TRANSACTION"}
                                                </Button>
                                                <p className="text-[9px] text-center text-slate-400 mt-6 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                                                    <ShieldCheck size={12} /> Secure Protocol
                                                </p>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ImpactCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 border border-slate-100 hover:border-secondary/30 transition-all duration-500 group">
            <div className="w-12 h-12 bg-secondary/5 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon size={20} strokeWidth={1.5} />
            </div>
            <h4 className="font-black text-[#0d0a1a] mb-2 font-cormorant text-xl tracking-wide">{title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{desc}</p>
        </div>
    );
}
