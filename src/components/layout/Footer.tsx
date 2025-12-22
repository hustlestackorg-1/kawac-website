import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-0">
            <div className="container mx-auto px-4 md:px-0">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-3">
                                {/* Footer Logo */}
                                <img src="/assets/logo-icon.png" alt="KAWAC" className="h-20 w-auto brightness-0 invert" />
                                <span className="text-3xl font-extrabold font-manrope tracking-tight">KAWAC</span>
                            </div>
                        </Link>
                        <p className="text-[#9CA3AF] leading-relaxed font-manrope">
                            We connect Canadian and Kenyan ecosystems to build locally led solutions for marginalized communities.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="h-10 w-10 rounded-full bg-[#1F4C5E] flex items-center justify-center hover:bg-secondary transition-colors duration-300 group">
                                <Twitter className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-[#1F4C5E] flex items-center justify-center hover:bg-secondary transition-colors duration-300 group">
                                <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-[#1F4C5E] flex items-center justify-center hover:bg-secondary transition-colors duration-300 group">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-[#1F4C5E] flex items-center justify-center hover:bg-secondary transition-colors duration-300 group">
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h3 className="text-2xl font-extrabold font-manrope mb-8">Explore</h3>
                        <ul className="space-y-3 font-manrope font-medium text-[#9CA3AF]">
                            <li><Link href="/about" className="hover:text-secondary transition-colors flex items-center gap-2">About us</Link></li>
                            <li><Link href="/programs" className="hover:text-secondary transition-colors flex items-center gap-2">Our Programs</Link></li>
                            <li><Link href="/impact" className="hover:text-secondary transition-colors flex items-center gap-2">Impact Reporting</Link></li>
                            <li><Link href="/volunteer" className="hover:text-secondary transition-colors flex items-center gap-2">Volunteers</Link></li>
                            <li><Link href="/donate" className="hover:text-secondary transition-colors flex items-center gap-2">Gift & Support</Link></li>
                            <li><Link href="/contact" className="hover:text-secondary transition-colors flex items-center gap-2">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-2xl font-extrabold font-manrope mb-8">Contact</h3>
                        <ul className="space-y-6 font-manrope text-[#9CA3AF]">
                            <li className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-white">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-white/50 mb-1">Email Address</span>
                                    <a href="mailto:info@kawac.ca" className="text-white font-bold hover:text-secondary">info@kawac.ca</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-white">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-white/50 mb-1">Phone Number</span>
                                    <a href="tel:+15551234567" className="text-white font-bold hover:text-secondary">+1 (555) 123-4567</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-white">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-white/50 mb-1">Location</span>
                                    <span className="text-white font-bold">Toronto, Ontario, Canada</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-2xl font-extrabold font-manrope mb-8">Newsletter</h3>
                        <p className="text-[#9CA3AF] mb-6 font-manrope">
                            Subscribe to get the latest impact reports and news.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-[#1F4C5E] border-none rounded-full py-4 pl-6 pr-14 text-white placeholder:text-white/30 focus:ring-1 focus:ring-secondary outline-none"
                            />
                            <button type="submit" className="absolute right-2 top-2 h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300">
                                <Mail className="w-4 h-4" />
                            </button>
                        </form>
                        <p className="text-xs text-white/30 mt-4">* We never share your details.</p>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#082836] py-6 border-t border-white/5">
                <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center text-sm text-[#9CA3AF] font-manrope">
                    <p>&copy; {new Date().getFullYear()} <span className="text-white font-bold">KAWAC</span>. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-secondary">Terms of Service</Link>
                        <Link href="#" className="hover:text-secondary">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
