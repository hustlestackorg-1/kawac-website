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

    const donationAmounts = ["25", "50", "100", "250", "500"];

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
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-[#0C3B4E] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/hero-health.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heart className="w-16 h-16 text-[#FBAF3C] mx-auto mb-6 animate-pulse" />
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Invest in Systemic Change</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Your gift powers KAWAC's mission to uplift vulnerable voices across Canada and Kenya through healthcare, advocacy, and climate justice.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">

                        {/* Left: Why Give */}
                        <div className="w-full lg:w-1/2 space-y-10">
                            <div>
                                <h2 className="text-3xl font-playfair font-bold text-[#0C3B4E] mb-6">Where Your Money Goes</h2>
                                <p className="text-slate-600 mb-8">
                                    At KAWAC, transparency is our core pillar. We ensure that 90% of every dollar donated goes directly toward program implementation and field-level impact.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <ImpactCard
                                    icon={Zap}
                                    title="Rapid Response"
                                    desc="Emergency medical supplies and mobile clinic operational costs."
                                />
                                <ImpactCard
                                    icon={Globe}
                                    title="Policy Growth"
                                    desc="Funding research and advocacy for constitutional health reforms."
                                />
                                <ImpactCard
                                    icon={ShieldCheck}
                                    title="Security"
                                    desc="Protecting marginalized communities and human rights defenders."
                                />
                                <ImpactCard
                                    icon={DollarSign}
                                    title="Sustainability"
                                    desc="Seed funding for smallholder farmers and clean energy projects."
                                />
                            </div>

                            <div className="bg-[#0C3B4E] p-8 rounded-2xl text-white">
                                <h3 className="font-bold text-xl mb-4">Monthly Giving Circle</h3>
                                <p className="text-slate-300 text-sm mb-6">
                                    Join our "Pillar of KAWAC" program. Monthly donors provide the reliable baseline stability needed for multi-year program planning.
                                </p>
                                <Button className="bg-[#FBAF3C] text-[#0C3B4E] font-bold rounded-full px-8 py-3 w-full sm:w-auto">
                                    JOIN THE CIRCLE
                                </Button>
                            </div>
                        </div>

                        {/* Right: Donation Form */}
                        <div className="w-full lg:w-1/2">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-slate-100 text-center h-full flex flex-col items-center justify-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h2 className="text-3xl font-playfair font-bold text-[#0C3B4E] mb-4">Thank You for Your Generosity!</h2>
                                        <p className="text-slate-500 mb-8">
                                            Your donation of ${amount === "custom" ? customAmount : amount} has been successfully recorded. You will receive a tax receipt via email shortly.
                                        </p>
                                        <Button
                                            onClick={() => window.location.href = "/"}
                                            className="bg-[#0C3B4E] text-white px-10 py-6 rounded-full font-bold shadow-xl"
                                        >
                                            RETURN HOME
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-slate-100"
                                    >
                                        <h3 className="text-2xl font-playfair font-bold text-[#0C3B4E] mb-8 text-center">One-Time Gift</h3>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Amount Selection */}
                                            <div>
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Select Amount (CAD)</label>
                                                <div className="grid grid-cols-3 gap-3 mb-4">
                                                    {donationAmounts.map((amt) => (
                                                        <button
                                                            key={amt}
                                                            type="button"
                                                            onClick={() => { setAmount(amt); setCustomAmount(""); }}
                                                            className={`py-4 rounded-xl font-bold border-2 transition-all ${amount === amt ? 'bg-[#0C3B4E] text-white border-[#0C3B4E]' : 'bg-white text-slate-600 border-slate-100 hover:border-slate-300'}`}
                                                        >
                                                            ${amt}
                                                        </button>
                                                    ))}
                                                    <button
                                                        type="button"
                                                        onClick={() => setAmount("custom")}
                                                        className={`py-4 rounded-xl font-bold border-2 transition-all ${amount === "custom" ? 'bg-[#0C3B4E] text-white border-[#0C3B4E]' : 'bg-white text-slate-600 border-slate-100 hover:border-slate-300'}`}
                                                    >
                                                        Custom
                                                    </button>
                                                </div>
                                                {amount === "custom" && (
                                                    <div className="relative">
                                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                                        <Input
                                                            placeholder="Enter custom amount"
                                                            className="pl-12 py-7 bg-slate-50 border-none text-lg font-bold"
                                                            type="number"
                                                            value={customAmount}
                                                            onChange={(e) => setCustomAmount(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Personal Info */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-700">First Name</label>
                                                    <Input
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="bg-slate-50 border-none py-6"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-700">Last Name</label>
                                                    <Input
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="bg-slate-50 border-none py-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-700">Email Address</label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="bg-slate-50 border-none py-6"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-700">Message (Optional)</label>
                                                <Textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="bg-slate-50 border-none resize-none h-24"
                                                />
                                            </div>

                                            <div className="pt-4">
                                                <Button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    className="w-full bg-[#FBAF3C] hover:bg-[#0C3B4E] text-[#0C3B4E] hover:text-white font-extrabold py-8 rounded-full shadow-xl transition-all text-lg tracking-wide"
                                                >
                                                    {isSubmitting ? "PROCESSING..." : "COMPLETE DONATION"}
                                                </Button>
                                                <p className="text-[10px] text-center text-slate-400 mt-6 uppercase tracking-[0.2em]">
                                                    Secure Payment Processing via Integrated Systems
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
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#FBAF3C]/10 text-[#FBAF3C] rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} />
            </div>
            <h4 className="font-bold text-[#0C3B4E] mb-2">{title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
        </div>
    );
}
