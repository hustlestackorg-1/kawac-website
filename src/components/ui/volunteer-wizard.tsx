"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have this or will use standard textarea
import { Check, ArrowRight, User, Globe, Clock, ChevronRight, ArrowLeft } from "lucide-react";

// Types
type Step = "role-selection" | "impact-area" | "readiness" | "application" | "success";

export function VolunteerWizard() {
    const [step, setStep] = useState<Step>("role-selection");
    const [role, setRole] = useState<"volunteer" | "intern" | null>(null);
    const [impactArea, setImpactArea] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        institution: "", // For interns
        linkedin: "",
        motivation: ""
    });

    const [error, setError] = useState<string | null>(null);

    const nextStep = (target: Step) => {
        setError(null);
        setStep(target);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!formData.firstName || !formData.lastName || !formData.email) {
            setError("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        const endpoint = role === "intern" ? "/api/internship/apply" : "/api/volunteer/apply";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    full_name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    persona: role === "intern" ? "student" : "professional", // Default persona logic
                    programs: [impactArea],
                    institution: formData.institution,
                    motivation: formData.motivation,
                    linkedin: formData.linkedin,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStep("success");
            } else {
                setError(result.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 min-h-[600px] flex flex-col md:flex-row">

            {/* Sidebar / Progress */}
            <div className="w-full md:w-1/3 bg-[#0C3B4E] text-white p-10 flex flex-col justify-between relative overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.png')] opacity-5"></div>

                <div className="relative z-10">
                    <h3 className="font-playfair text-3xl font-bold mb-6">Join the <br /> Frontlines.</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-8">
                        This isn't just volunteering. It's a structured pathway to systemic impact. We need dedicated minds for governance, advocacy, and field work.
                    </p>

                    {/* Steps Indicator */}
                    <div className="space-y-4">
                        <StepIndicator current={step} target="role-selection" label="01. Role Selection" />
                        <StepIndicator current={step} target="impact-area" label="02. Impact Area" />
                        <StepIndicator current={step} target="readiness" label="03. Readiness Check" />
                        <StepIndicator current={step} target="application" label="04. Application" />
                    </div>
                </div>

                <div className="relative z-10 pt-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-[#0C3B4E] font-bold">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest">Coordinator</p>
                            <p className="font-bold text-sm">Sarah Jenkins</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full md:w-2/3 p-10 md:p-16 relative">
                <AnimatePresence mode="wait">

                    {/* STEP 1: ROLE SELECTION */}
                    {step === "role-selection" && (
                        <motion.div
                            key="role"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col"
                        >
                            <h2 className="text-3xl font-playfair font-bold text-[#0C3B4E] mb-2">Identify Your Path</h2>
                            <p className="text-slate-500 mb-10">How do you envision contributing to the ecosystem?</p>

                            <div className="grid grid-cols-1 gap-6 mb-8">
                                <RoleCard
                                    title="General Volunteer"
                                    desc="I want to support events, community outreach, and on-the-ground activations."
                                    active={role === "volunteer"}
                                    onClick={() => setRole("volunteer")}
                                />
                                <RoleCard
                                    title="Strategic Intern"
                                    desc="I am looking for a structured placement in policy, research, or non-profit management."
                                    active={role === "intern"}
                                    onClick={() => setRole("intern")}
                                />
                            </div>

                            <div className="mt-auto flex justify-end">
                                <Button
                                    onClick={() => nextStep("impact-area")}
                                    disabled={!role}
                                    className="bg-[#0C3B4E] text-white px-8 py-6 rounded-full font-bold tracking-wide hover:bg-[#FBAF3C] hover:text-[#0C3B4E] transition-all"
                                >
                                    CONTINUE <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: IMPACT AREA */}
                    {step === "impact-area" && (
                        <motion.div
                            key="impact"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col"
                        >
                            <h2 className="text-3xl font-playfair font-bold text-[#0C3B4E] mb-2">Select Your Zone</h2>
                            <p className="text-slate-500 mb-10">Where can your skills drive the most equity?</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {["Policy & Advocacy", "Maternal Health", "Climate Justice", "Community Outreach", "Event Support", "Admin & Governance"].map((area) => (
                                    <button
                                        key={area}
                                        onClick={() => setImpactArea(area)}
                                        className={`p-4 rounded-xl border text-left transition-all ${impactArea === area ? 'border-[#0C3B4E] bg-[#0C3B4E]/5 ring-1 ring-[#0C3B4E]' : 'border-slate-200 hover:border-slate-300'}`}
                                    >
                                        <span className={`block font-bold ${impactArea === area ? 'text-[#0C3B4E]' : 'text-slate-600'}`}>{area}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-auto flex justify-between">
                                <Button variant="ghost" onClick={() => nextStep("role-selection")}>Back</Button>
                                <Button
                                    onClick={() => nextStep("readiness")}
                                    disabled={!impactArea}
                                    className="bg-[#0C3B4E] text-white px-8 py-6 rounded-full font-bold tracking-wide hover:bg-[#FBAF3C] hover:text-[#0C3B4E] transition-all"
                                >
                                    CONTINUE <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: READINESS */}
                    {step === "readiness" && (
                        <motion.div
                            key="readiness"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col"
                        >
                            <h2 className="text-3xl font-playfair font-bold text-[#0C3B4E] mb-2">Commitment Check</h2>
                            <p className="text-slate-500 mb-8">We value reliability over intensity. Can you meet these baselines?</p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                                    <Clock className="w-6 h-6 text-[#FBAF3C] mt-1" />
                                    <div>
                                        <h4 className="font-bold text-[#0C3B4E]">Time Commitment</h4>
                                        <p className="text-sm text-slate-600">Minimum 5 hours/month for Volunteers, 10 hours/week for Interns.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                                    <Globe className="w-6 h-6 text-[#FBAF3C] mt-1" />
                                    <div>
                                        <h4 className="font-bold text-[#0C3B4E]">Training Session</h4>
                                        <p className="text-sm text-slate-600">Must attend one virtual onboarding session (1.5 hours) before deployment.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mb-8">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="w-5 h-5 accent-[#0C3B4E]"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                />
                                <label htmlFor="agree" className="text-sm font-bold text-slate-700">I understand and agree to these requirements.</label>
                            </div>

                            <div className="mt-auto flex justify-between">
                                <Button variant="ghost" onClick={() => nextStep("impact-area")}>Back</Button>
                                <Button
                                    onClick={() => nextStep("application")}
                                    disabled={!agreedToTerms}
                                    className="bg-[#0C3B4E] text-white px-8 py-6 rounded-full font-bold tracking-wide hover:bg-[#FBAF3C] hover:text-[#0C3B4E] transition-all"
                                >
                                    START APPLICATION <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: APPLICATION FORM */}
                    {step === "application" && (
                        <motion.div
                            key="app"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col"
                        >
                            <h2 className="text-3xl font-playfair font-bold text-[#0C3B4E] mb-2">Your Details</h2>
                            <p className="text-slate-500 mb-6">Applying as: <span className="font-bold text-[#0C3B4E] capitalize">{role}</span> in <span className="font-bold text-[#0C3B4E]">{impactArea}</span></p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        name="firstName"
                                        placeholder="First Name"
                                        className="bg-slate-50 border-none py-6"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Input
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="bg-slate-50 border-none py-6"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <Input
                                    name="email"
                                    placeholder="Email Address"
                                    type="email"
                                    className="bg-slate-50 border-none py-6"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                {role === "intern" && (
                                    <Input
                                        name="institution"
                                        placeholder="Educational Institution"
                                        className="bg-slate-50 border-none py-6"
                                        value={formData.institution}
                                        onChange={handleInputChange}
                                        required
                                    />
                                )}
                                <Input
                                    name="linkedin"
                                    placeholder="LinkedIn Profile (Optional)"
                                    className="bg-slate-50 border-none py-6"
                                    value={formData.linkedin}
                                    onChange={handleInputChange}
                                />
                                <Textarea
                                    name="motivation"
                                    placeholder="Why do you want to join KAWAC? (Briefly)"
                                    className="bg-slate-50 border-none resize-none h-24"
                                    value={formData.motivation}
                                    onChange={handleInputChange}
                                    required
                                />

                                {error && (
                                    <p className="text-red-500 text-xs font-bold mt-2">{error}</p>
                                )}

                                <div className="mt-auto flex justify-between pt-6">
                                    <Button variant="ghost" type="button" onClick={() => nextStep("readiness")} disabled={isSubmitting}>Back</Button>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#FBAF3C] text-[#0C3B4E] px-10 py-6 rounded-full font-extrabold tracking-wide hover:bg-[#0C3B4E] hover:text-white transition-all shadow-xl"
                                    >
                                        {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {/* SUCCESS */}
                    {step === "success" && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                                <Check size={40} strokeWidth={4} />
                            </div>
                            <h2 className="text-4xl font-playfair font-bold text-[#0C3B4E] mb-4">Application Received.</h2>
                            <p className="text-slate-500 text-lg max-w-md mb-8">
                                Thank you. We review applications on a rolling basis. You will hear from our coordinator within 48 hours.
                            </p>
                            <Button className="bg-[#0C3B4E] text-white rounded-full px-8 py-4 font-bold" onClick={() => window.location.href = '/'}>
                                RETURN HOME
                            </Button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

        </div>
    );
}

function StepIndicator({ current, target, label }: { current: string, target: string, label: string }) {
    // Simple logic to determine if active/completed
    const steps = ["role-selection", "impact-area", "readiness", "application", "success"];
    const currentIndex = steps.indexOf(current);
    const targetIndex = steps.indexOf(target);

    const isCompleted = currentIndex > targetIndex;
    const isActive = currentIndex === targetIndex;

    return (
        <div className={`flex items-center gap-3 ${isActive ? 'opacity-100' : 'opacity-40'} transition-opacity`}>
            <div className={`w-3 h-3 rounded-full ${isCompleted ? 'bg-[#FBAF3C]' : isActive ? 'bg-white' : 'border border-white/50'}`}></div>
            <span className="font-bold tracking-widest text-xs uppercase">{label}</span>
        </div>
    )
}

function RoleCard({ title, desc, active, onClick }: { title: string, desc: string, active: boolean, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${active ? 'border-[#0C3B4E] bg-[#0C3B4E]/5' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}
        >
            <div className="flex justify-between items-center mb-2">
                <h4 className={`font-bold text-lg font-playfair ${active ? 'text-[#0C3B4E]' : 'text-slate-800'}`}>{title}</h4>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${active ? 'bg-[#0C3B4E] border-[#0C3B4E]' : 'border-slate-300'}`}>
                    {active && <Check size={14} className="text-white" />}
                </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        </div>
    )
}
