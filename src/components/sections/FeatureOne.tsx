"use client";

import Link from "next/link";
import { Check, Heart, HelpCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeatureOne() {
    return (
        <section className="py-32 bg-white px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Volunteer Box - Amethyst Stewardship */}
                    <div className="bg-[#100a26] p-16 md:p-24 rounded-sm relative overflow-hidden group border border-white/5 shadow-institutional-shadow">
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-20 -mt-20 pointer-events-none blur-3xl"></div>

                        <div className="flex flex-col items-start space-y-8 relative z-10">
                            <div className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase">/// SERVICE PROTOCOL</div>
                            <h3 className="text-4xl md:text-6xl font-bold text-white font-cormorant leading-tight group-hover:text-secondary transition-colors duration-500">
                                Join Our <br /> <span className="italic">Agency.</span>
                            </h3>
                            <p className="text-white/50 text-lg font-inter leading-relaxed max-w-sm">
                                Leverage your expertise in advocacy, healthcare, or logistics to architect systemic equity in ACB communities.
                            </p>
                            <Link href="/volunteer">
                                <Button className="bg-secondary hover:bg-white text-primary font-black px-12 py-8 rounded-none text-xs tracking-[0.3em] uppercase transition-all duration-700">
                                    APPLY TO SERVE
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Donation Box - Gold Capital */}
                    <div className="bg-[#F4F5F8] p-16 md:p-24 rounded-sm relative overflow-hidden group border border-slate-100 shadow-institutional-shadow">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 pointer-events-none blur-3xl"></div>

                        <div className="flex flex-col items-start space-y-8 relative z-10">
                            <div className="text-primary font-black tracking-[0.4em] text-[10px] uppercase">/// CAPITAL ALLOCATION</div>
                            <h3 className="text-4xl md:text-6xl font-bold text-primary font-cormorant leading-tight group-hover:text-secondary transition-colors duration-500">
                                Invest in <br /> <span className="italic">Sovereignty.</span>
                            </h3>
                            <p className="text-slate-500 text-lg font-inter leading-relaxed max-w-sm">
                                Your contributions are strategic capital investments in community resilience, health, and economic power.
                            </p>
                            <Link href="/donate">
                                <Button className="bg-primary hover:bg-secondary text-white font-black px-12 py-8 rounded-none text-xs tracking-[0.3em] uppercase transition-all duration-700">
                                    INITIATE CAPITAL
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
