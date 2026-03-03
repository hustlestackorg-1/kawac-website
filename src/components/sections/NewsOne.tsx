"use client";

import Link from "next/link";
import { MessageCircle, User, ArrowRight, Share2 } from "lucide-react";

export function NewsOne() {
    return (
        <section className="py-24 bg-[#fffcf5] border-t border-slate-200">
            <div className="container mx-auto max-w-5xl px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 border-b border-black pb-12 mb-12">
                    <div className="max-w-xl">
                        <span className="font-cormorant italic text-xl mb-4 block text-slate-800">The Intelligence Briefing</span>
                        <h2 className="text-5xl md:text-6xl font-serif font-black text-black leading-none tracking-tight mb-6">
                            Global Impact <br /> Weekly.
                        </h2>
                        <p className="font-serif text-lg text-slate-600 leading-relaxed">
                            Critical updates from the field, policy analysis, and strategic sovereignty reports.
                            Delivered to 12,000+ partners.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-8">
                        <form className="flex flex-col gap-0 border border-black">
                            <div className="grid md:grid-cols-2">
                                <input
                                    type="email"
                                    placeholder="Institutional Email Address"
                                    className="p-6 bg-transparent font-serif text-lg border-b md:border-b-0 md:border-r border-black outline-none placeholder:text-slate-400 text-black"
                                />
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Organization"
                                        className="p-6 bg-transparent font-serif text-lg border-r-0 md:border-r border-black outline-none w-full placeholder:text-slate-400 text-black"
                                    />
                                    <button className="bg-black text-white px-10 font-sans font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors whitespace-nowrap hidden md:block">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <button className="bg-black text-white py-6 font-sans font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors md:hidden w-full">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-[10px] font-sans text-slate-500 uppercase tracking-widest">
                            Secure, Encrypted, & Spam-Free. Read our <Link href="/privacy" className="underline hover:text-secondary">Privacy Protocol</Link>.
                        </p>
                    </div>

                    <div className="md:col-span-4 border-l border-slate-200 pl-8 hidden md:block">
                        <h4 className="font-sans font-black text-xs uppercase tracking-widest mb-6">Latest Dispatches</h4>
                        <ul className="space-y-6">
                            {[
                                "The Architecture of Sovereignty",
                                "Medical Camp Outcomes: Rift Valley",
                                "Policy Watch: Bill C-19 Updates"
                            ].map((item, i) => (
                                <li key={i} className="group cursor-pointer">
                                    <ArrowRight className="inline w-3 h-3 mr-2 text-secondary -ml-5 opacity-0 group-hover:opacity-100 transition-all" />
                                    <span className="font-serif text-lg leading-tight group-hover:underline decoration-secondary underline-offset-4 transition-all">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
