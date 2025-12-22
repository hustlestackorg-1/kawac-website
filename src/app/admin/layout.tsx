"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    FileText,
    MessageSquare,
    Settings,
    LogOut,
    ChevronRight,
    Menu,
    X,
    Database,
    BarChart3,
    GraduationCap,
    DollarSign
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/volunteers", label: "Volunteers", icon: Users },
    { href: "/admin/interns", label: "Strategic Interns", icon: GraduationCap },
    { href: "/admin/partners", label: "Partner Inquiries", icon: BarChart3 },
    { href: "/admin/donations", label: "Donation Records", icon: DollarSign },
    { href: "/admin/contacts", label: "General Messages", icon: MessageSquare },
    { href: "/admin/documents", label: "Resource Library", icon: FileText },
    { href: "/admin/settings", label: "Global Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { profile, signOut } = useAuth();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <ProtectedRoute requireAdmin>
            <div className="flex min-h-screen bg-slate-50 font-manrope">
                {/* Sidebar Desktop */}
                <aside className="hidden lg:flex flex-col w-72 bg-[#0C3B4E] text-white fixed h-full z-30">
                    <div className="p-8">
                        <Link href="/" className="block">
                            <h1 className="text-2xl font-bold font-playfair tracking-wider">KAWAC</h1>
                            <p className="text-[#FBAF3C] text-[10px] tracking-[0.2em] mt-1">ADMIN PORTAL</p>
                        </Link>
                    </div>

                    <nav className="flex-1 px-4 py-4 space-y-1">
                        {sidebarLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                        ? "bg-white/10 text-[#FBAF3C] font-bold"
                                        : "text-white/70 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{link.label}</span>
                                    {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-white/10">
                        <div className="flex items-center gap-3 px-4 py-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#FBAF3C] flex items-center justify-center text-[#0C3B4E] font-bold">
                                {profile?.full_name?.charAt(0) || profile?.email?.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold truncate">{profile?.full_name || 'Admin'}</p>
                                <p className="text-xs text-white/50 truncate uppercase tracking-tighter">{profile?.role}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => signOut()}
                            className="flex items-center gap-3 w-full px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </aside>

                {/* Mobile Header */}
                <div className="lg:hidden fixed top-0 w-full bg-[#0C3B4E] text-white z-40 px-6 py-4 flex items-center justify-between shadow-lg">
                    <Link href="/">
                        <h1 className="text-xl font-bold font-playfair tracking-wider">KAWAC</h1>
                    </Link>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Sidebar */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-50 bg-[#0C3B4E] p-6 pt-20">
                        <nav className="space-y-4">
                            {sidebarLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-4 text-xl text-white/80"
                                    >
                                        <Icon className="w-6 h-6" />
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <button
                                onClick={() => signOut()}
                                className="flex items-center gap-4 text-xl text-red-400 mt-12"
                            >
                                <LogOut className="w-6 h-6" />
                                Sign Out
                            </button>
                        </nav>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 lg:ml-72 pt-20 lg:pt-0">
                    <div className="p-6 md:p-10 max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    );
}
