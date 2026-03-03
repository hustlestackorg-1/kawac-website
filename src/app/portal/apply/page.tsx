"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, ArrowRight, ArrowLeft, Upload, CheckCircle2 } from "lucide-react";

export default function ApplyPage() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    if (submitted) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-12 md:p-20 rounded-[40px] shadow-2xl text-center max-w-2xl"
                >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h1 className="text-4xl font-black text-primary font-manrope mb-6">Transmission Received.</h1>
                    <p className="text-slate-500 text-lg font-light leading-relaxed mb-12">
                        Your credentials have been securely uploaded to the KAWAC Institutional Vault.
                        A background vetting specialist will contact you within 7-10 business days.
                    </p>
                    <Button className="bg-primary text-white rounded-full px-12 py-6 uppercase tracking-widest text-xs">
                        Return to Exchange
                    </Button>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 py-32 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-16">
                    <div>
                        <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Candidate Gateway</span>
                        <h1 className="text-4xl font-black text-primary font-manrope tracking-tighter mt-2">Corridor Admission.</h1>
                    </div>
                    <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`w-12 h-1 bg-${i <= step ? 'secondary' : 'slate-200'} rounded-full transition-colors duration-500`} />
                        ))}
                    </div>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-[40px] institutional-shadow overflow-hidden">
                    <div className="p-12 md:p-20">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-black text-primary font-manrope">Personal Matrix</h2>
                                        <p className="text-slate-400 text-sm italic">Institutional identity verification.</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <Label className="uppercase tracking-widest text-[10px] font-black text-slate-400">Full Name</Label>
                                            <Input placeholder="As specified in passport" className="rounded-xl border-slate-100 p-6 h-14" />
                                        </div>
                                        <div className="space-y-4">
                                            <Label className="uppercase tracking-widest text-[10px] font-black text-slate-400">Email Architecture</Label>
                                            <Input type="email" placeholder="Institutional or personal" className="rounded-xl border-slate-100 p-6 h-14" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="uppercase tracking-widest text-[10px] font-black text-slate-400">Current Geographical Node</Label>
                                        <Input placeholder="City, Country" className="rounded-xl border-slate-100 p-6 h-14" />
                                    </div>
                                    <Button onClick={nextStep} className="w-full bg-primary hover:bg-secondary text-white hover:text-primary rounded-xl h-16 uppercase tracking-widest text-xs font-black transition-all duration-500">
                                        Next Protocol <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-black text-primary font-manrope">Skills Assessment</h2>
                                        <p className="text-slate-400 text-sm italic">Economic capability mapping.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="uppercase tracking-widest text-[10px] font-black text-slate-400">Primary Specialization</Label>
                                        <Input placeholder="e.g. Registered Nurse, Solar Engineer" className="rounded-xl border-slate-100 p-6 h-14" />
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="uppercase tracking-widest text-[10px] font-black text-slate-400">Years of Verifiable Experience</Label>
                                        <Input type="number" className="rounded-xl border-slate-100 p-6 h-14" />
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="uppercase tracking-widest text-[10px] font-black text-slate-400">Professional Summary</Label>
                                        <Textarea placeholder="Briefly describe your institutional history" className="rounded-xl border-slate-100 p-6 min-h-[150px]" />
                                    </div>
                                    <div className="flex gap-4">
                                        <Button variant="ghost" onClick={prevStep} className="h-16 px-10 rounded-xl uppercase tracking-widest text-xs border border-slate-100">
                                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                        </Button>
                                        <Button onClick={nextStep} className="flex-1 bg-primary hover:bg-secondary text-white hover:text-primary rounded-xl h-16 uppercase tracking-widest text-xs font-black transition-all duration-500">
                                            Final Submission <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-black text-primary font-manrope">Security & Verification</h2>
                                        <p className="text-slate-400 text-sm italic">Document upload and ethical agreement.</p>
                                    </div>

                                    <div className="border-2 border-dashed border-slate-100 rounded-3xl p-12 text-center space-y-4 hover:border-secondary transition-colors group cursor-pointer">
                                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-secondary/10 transition-colors">
                                            <Upload className="h-8 w-8 text-slate-300 group-hover:text-secondary" />
                                        </div>
                                        <div className="text-sm font-bold text-primary italic uppercase tracking-widest">Upload CV / Global Passport</div>
                                        <p className="text-xs text-slate-400">PDF, DOCX up to 10MB</p>
                                    </div>

                                    <div className="p-6 bg-primary/5 rounded-2xl flex gap-4 items-start">
                                        <ShieldCheck className="h-6 w-6 text-secondary shrink-0 mt-1" />
                                        <p className="text-xs text-slate-600 leading-relaxed font-light">
                                            I hereby attest that the information provided is factually accurate. I understand that
                                            KAWAC maintains a zero-tolerance policy for unethical recruitment and will verify all
                                            claims through the institutional corridor protocol.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button variant="ghost" onClick={prevStep} className="h-16 px-10 rounded-xl uppercase tracking-widest text-xs border border-slate-100">
                                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                        </Button>
                                        <Button onClick={() => setSubmitted(true)} className="flex-1 bg-secondary text-primary hover:bg-white hover:text-primary rounded-xl h-16 uppercase tracking-widest text-xs font-black transition-all duration-500 shadow-xl shadow-secondary/20">
                                            Transmit to Vault
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="mt-12 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Encrypted with 256-bit institutional grade security
                </div>
            </div>
        </main>
    );
}
