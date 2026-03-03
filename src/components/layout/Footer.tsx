import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0b0818] text-white pt-24 pb-0 relative overflow-hidden border-t border-white/5">
            {/* HD Goldish Offtones - Subtle Gradients */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-hd/50 to-transparent opacity-30" />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Identity Column */}
                    <div className="space-y-10 group">
                        <div className="flex items-center gap-4">
                            <div className="bg-action-red p-2 rounded-sm ring-1 ring-white/20">
                                <img src="/assets/v3-leaf.png" alt="Heritage" className="w-8 h-8 invert brightness-200" />
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <img src="/assets/v3-logo.jpg" alt="KAWAC" className="h-12 w-auto object-contain brightness-110" />
                        </div>

                        <p className="text-slate-400 leading-relaxed font-manrope text-sm max-w-xs font-medium italic">
                            "Building the architecture of sovereignty through ethical stewardship and global standard excellence."
                        </p>

                        <div className="flex space-x-4">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-gold-hd hover:text-primary transition-all duration-500 border border-white/10 group/social">
                                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Pillars Column */}
                    <div>
                        <h3 className="text-xs font-black font-manrope mb-10 tracking-[0.4em] uppercase text-gold-hd/80">The Pillars</h3>
                        <ul className="space-y-4 font-manrope text-slate-400 text-[12px] font-bold">
                            {[
                                { name: "Our Origin", href: "/origin" },
                                { name: "Professional Programs", href: "/programs" },
                                { name: "Our Team", href: "/team" },
                                { name: "Transparency Engine", href: "/impact" },
                                { name: "Impact Hub", href: "/portal" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-gold-hd transition-all duration-300 flex items-center gap-3">
                                        <div className="h-[1px] w-4 bg-white/10" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-xs font-black font-manrope mb-10 tracking-[0.4em] uppercase text-gold-hd/80">Transmission</h3>
                        <ul className="space-y-8 font-manrope text-[12px]">
                            <li className="flex flex-col gap-2">
                                <span className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-black">Email Gateway</span>
                                <a href="mailto:info@kawac.ca" className="text-white hover:text-gold-hd transition-colors border-b border-white/5 pb-2">info@kawac.ca</a>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-black">Direct Protocol</span>
                                <a href="tel:+15551234567" className="text-white hover:text-gold-hd transition-colors border-b border-white/5 pb-2">+1 (555) 123-4567</a>
                            </li>
                        </ul>
                    </div>

                    {/* Bulletins Column */}
                    <div className="space-y-8">
                        <Link href="/newsletter" className="block hover:opacity-80 transition-opacity">
                            <h3 className="text-xs font-black font-manrope mb-10 tracking-[0.4em] uppercase text-gold-hd/80 hover:text-gold-hd transition-colors">Digital Intelligence</h3>
                        </Link>
                        <p className="text-slate-500 text-[12px] leading-relaxed font-medium">
                            Join the quarterly institutional intelligence feed for system updates.
                        </p>
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Secure Email Identifier"
                                className="w-full bg-white/[0.03] border border-white/10 p-4 font-manrope text-[11px] text-white focus:outline-none focus:border-gold-hd/50 transition-all"
                            />
                            <button className="absolute right-0 top-0 bottom-0 px-6 bg-gold-hd text-primary font-black text-[10px] tracking-widest hover:bg-white transition-all">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Institutional Bottom Bar */}
            <div className="bg-black/60 border-t border-white/5 py-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 font-manrope tracking-[0.3em] uppercase">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <p suppressHydrationWarning>&copy; {new Date().getFullYear()} KAWAC GLOBAL ORGANIZATION.</p>
                        <div className="flex items-center gap-4">
                            <span className="text-gold-hd/40 font-black">SYSTEM STATUS: OPTIMIZED FOR SOVEREIGNTY</span>
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        </div>
                    </div>
                    <div className="flex gap-10 mt-8 md:mt-0 font-bold">
                        <Link href="/privacy" className="hover:text-gold-hd transition-colors">Privacy Vault</Link>
                        <Link href="/terms" className="hover:text-gold-hd transition-colors">Legal Framework</Link>
                        <Link href="/security" className="hover:text-gold-hd transition-colors">Sovereignty Shield</Link>
                    </div>
                </div>
            </div>

            {/* The Masterpiece Colorless Bar */}
            <div className="h-2 bg-white w-full border-t border-slate-200" />
        </footer>
    );
}
