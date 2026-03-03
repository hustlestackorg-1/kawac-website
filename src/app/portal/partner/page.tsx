"use client";

import { motion } from "framer-motion";
import { Building2, Search, Filter, ShieldCheck, Download, GraduationCap, MapPin, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockCandidates = [
    { id: "KW-772", role: "Critical Care Nurse", exp: "12 Years", location: "Nairobi", skills: ["ICU", "Pediatrics"], status: "Vetted" },
    { id: "KW-819", role: "Renewable Energy Tech", exp: "8 Years", location: "Mombasa", skills: ["Solar", "Grid Mgt"], status: "In-Review" },
    { id: "KW-994", role: "Agricultural Scientist", exp: "15 Years", location: "Kisumu", skills: ["Irrigation", "Grain"], status: "Vetted" },
    { id: "KW-104", role: "Software Architect", exp: "6 Years", location: "Eldoret", skills: ["Next.js", "Java"], status: "Vetted" },
];

export default function PartnerPortal() {
    return (
        <main className="min-h-screen bg-slate-50 flex">
            {/* Sidebar Navigation */}
            <aside className="w-80 bg-primary text-white p-12 hidden lg:flex flex-col border-r border-white/5">
                <div className="flex items-center gap-4 mb-20">
                    <Building2 className="text-secondary h-8 w-8" />
                    <span className="text-xl font-black font-manrope tracking-tighter">PARTNER</span>
                </div>

                <nav className="space-y-4 flex-1">
                    {["Talent Vault", "My Placements", "Impact Metrics", "Compliance Hub"].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ x: 10 }}
                            className={`p-4 rounded-xl cursor-pointer transition-colors ${idx === 0 ? 'bg-white/10 text-secondary' : 'text-white/40 hover:text-white'}`}
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest">{item}</span>
                        </motion.div>
                    ))}
                </nav>

                <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-black text-xs">UN</div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold">UN ECOSOC Partner</span>
                            <span className="text-[10px] text-white/30 truncate">Institutional Access</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 p-12 lg:p-24 overflow-y-auto pt-32 max-w-[1400px] mx-auto w-full">
                <header className="flex justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px]">Institutional Vault</span>
                        <h1 className="text-5xl font-black text-primary font-manrope tracking-tighter mt-4 italic">Vetted Candidate Selection.</h1>
                    </div>
                    <div className="flex gap-4">
                        <Button className="bg-white text-primary border border-slate-200 rounded-full px-8 py-6 text-xs font-black uppercase tracking-widest hover:bg-slate-50">
                            <Download className="mr-2 h-4 w-4" /> Download Report
                        </Button>
                        <Button className="bg-secondary text-primary rounded-full px-8 py-6 text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-secondary/20">
                            New Search Pipeline
                        </Button>
                    </div>
                </header>

                {/* Search & Filters */}
                <div className="grid md:grid-cols-4 gap-4 mb-20">
                    <div className="md:col-span-2 relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-secondary h-5 w-5 transition-colors" />
                        <Input
                            placeholder="Search by Specialization or NOC Code..."
                            className="h-16 pl-16 rounded-2xl border-slate-200 institutional-shadow outline-none focus:ring-secondary"
                        />
                    </div>
                    <div className="flex gap-4 md:col-span-2">
                        <Button variant="outline" className="h-16 flex-1 rounded-2xl border-slate-200 uppercase tracking-widest text-[10px] font-black">
                            <Filter className="mr-2 h-4 w-4" /> Filter Location
                        </Button>
                        <Button variant="outline" className="h-16 flex-1 rounded-2xl border-slate-200 uppercase tracking-widest text-[10px] font-black">
                            <GraduationCap className="mr-2 h-4 w-4" /> Experience
                        </Button>
                    </div>
                </div>

                {/* Candidate Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {mockCandidates.map((c, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[40px] institutional-shadow border border-transparent hover:border-secondary transition-all group overflow-hidden relative"
                        >
                            {/* Decorative ID */}
                            <div className="absolute -top-4 -right-4 text-primary/5 text-9xl font-black">{c.id}</div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-secondary">
                                        <Briefcase className="h-8 w-8" />
                                    </div>
                                    <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${c.status === 'Vetted' ? 'bg-green-100 text-green-700' : 'bg-secondary/10 text-secondary'}`}>
                                        <ShieldCheck className="inline h-3 w-3 mr-1" /> {c.status}
                                    </div>
                                </div>

                                <div className="space-y-2 mb-10">
                                    <h3 className="text-3xl font-black text-primary font-manrope">{c.role}</h3>
                                    <div className="flex items-center gap-4 text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3" /> <span className="text-[10px] font-bold uppercase tracking-widest">{c.location}</span>
                                        </div>
                                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{c.exp} Experience</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-12">
                                    {c.skills.map((s, i) => (
                                        <span key={i} className="bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-[10px] font-bold border border-slate-100 uppercase tracking-tighter">
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                <Button className="w-full bg-primary text-white rounded-xl py-8 uppercase tracking-widest text-xs font-black group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                                    Request Full Verified Dossier
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Note */}
                <div className="mt-24 p-12 bg-primary/5 rounded-[40px] flex flex-col md:flex-row items-center gap-12 border border-primary/10">
                    <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-lg">
                        <ShieldCheck className="text-secondary h-12 w-12" />
                    </div>
                    <div>
                        <h4 className="text-xl font-black text-primary font-manrope mb-2">Zero-Exploitation Guarantee</h4>
                        <p className="text-slate-500 font-light leading-relaxed text-sm">
                            KAWAC certifies that all candidates accessible in this vault are processed through our ethical
                            recruitment protocol, ensuring no recruitment fees were charged and all human rights
                            standards are met.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
