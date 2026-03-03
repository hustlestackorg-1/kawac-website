"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, FileText, Settings, Bell, ExternalLink, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
    { label: "New Applications", value: "34", trend: "+12%", color: "text-secondary" },
    { label: "Partner Inquiries", value: "8", trend: "+2", color: "text-green-500" },
    { label: "Vetting Queue", value: "142", trend: "Normal", color: "text-slate-400" },
    { label: "System Uptime", value: "99.9%", trend: "Optimal", color: "text-primary" }
];

export default function AdminDashboard() {
    return (
        <main className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-slate-200 p-12 flex flex-col">
                <div className="flex items-center gap-4 mb-20">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black italic">K</div>
                    <span className="text-xl font-black font-manrope tracking-tighter text-primary uppercase">Institution</span>
                </div>

                <nav className="space-y-4 flex-1">
                    {[
                        { label: "Dashboard", icon: LayoutDashboard, active: true },
                        { label: "Applications", icon: FileText },
                        { label: "Partner Hub", icon: Users },
                        { label: "Global Intel", icon: Bell },
                        { label: "Settings", icon: Settings }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-400 hover:bg-slate-50 hover:text-primary'}`}
                        >
                            <item.icon className="h-5 w-5" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                        </div>
                    ))}
                </nav>

                <div className="p-8 bg-slate-50 rounded-[30px] border border-slate-200">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Admin Session</div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200" />
                        <div>
                            <div className="text-xs font-bold text-primary">Governance Lead</div>
                            <div className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Live Session</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Panel */}
            <div className="flex-1 p-12 lg:p-24 overflow-y-auto">
                <header className="flex justify-between items-center mb-16">
                    <h1 className="text-4xl font-black text-primary font-manrope tracking-tighter">Command Centre.</h1>
                    <div className="flex gap-4">
                        <div className="relative">
                            <Bell className="text-slate-400 h-6 w-6 mt-2" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border-2 border-slate-50" />
                        </div>
                        <Button className="bg-primary text-secondary rounded-full px-8 py-6 text-xs font-black uppercase tracking-widest">
                            Deploy Protocol
                        </Button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100"
                        >
                            <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{stat.label}</div>
                            <div className="text-xs font-bold text-primary/40 italic">{stat.trend}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex justify-between items-end">
                            <h3 className="text-2xl font-black text-primary font-manrope italic">Incoming Admissions</h3>
                            <span className="text-xs font-black text-secondary cursor-pointer border-b-2 border-secondary leading-none">View All Pipeline</span>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: "John Doe", role: "Software Eng", time: "2m ago", status: "New" },
                                { name: "Mary Jane", role: "Registered Nurse", time: "1h ago", status: "Vetting" },
                                { name: "Strategic Partners Ltd", role: "Employer", time: "3h ago", status: "Pending" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="p-8 bg-white rounded-3xl border border-slate-100 flex items-center justify-between group cursor-pointer transition-all hover:shadow-xl"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary transition-colors">
                                            {idx === 2 ? <Users className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
                                        </div>
                                        <div>
                                            <div className="font-bold text-primary">{item.name}</div>
                                            <div className="text-xs text-slate-400">{item.role}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.time}</div>
                                        <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.status === 'New' ? 'bg-secondary/10 text-secondary' : 'bg-slate-100 text-slate-400'}`}>
                                            {item.status}
                                        </div>
                                        <ExternalLink className="h-4 w-4 text-slate-200 group-hover:text-primary" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Verification Status */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-black text-primary font-manrope italic">System Integrity</h3>
                        <div className="p-10 bg-primary rounded-[40px] text-white space-y-8">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em]">Sovereignty Check</span>
                                <h4 className="text-2xl font-manrope font-black">All Protocols Active.</h4>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: "Supabase Connection", status: "Active", icon: CheckCircle },
                                    { label: "Resend Gateway", status: "Active", icon: CheckCircle },
                                    { label: "Encryption Vault", status: "Secure", icon: Clock }
                                ].map((check, i) => (
                                    <div key={i} className="flex justify-between items-center text-xs">
                                        <span className="text-white/40 font-bold uppercase tracking-widest">{check.label}</span>
                                        <span className="text-secondary font-black flex items-center gap-2">
                                            <check.icon className="h-3 w-3" /> {check.status}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full bg-secondary text-primary hover:bg-white rounded-xl py-6 uppercase tracking-widest text-xs font-black transition-all">
                                Run Verification Suite
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
