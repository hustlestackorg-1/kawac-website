"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { supabase } from "@/lib/supabase/client";
import {
    Users,
    BarChart3,
    MessageSquare,
    TrendingUp,
    Clock,
    CheckCircle2,
    AlertCircle,
    GraduationCap,
    DollarSign
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
    const { profile } = useAuth();
    const [stats, setStats] = useState({
        volunteers: 0,
        interns: 0,
        partners: 0,
        donations: 0,
        messages: 0
    });
    const [recentActivity, setRecentActivity] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        setIsLoading(true);

        // 1. Fetch Counts
        const [volRes, intRes, parRes, donRes, msgRes] = await Promise.all([
            supabase.from("volunteer_applications").select("id", { count: "exact", head: true }),
            supabase.from("internship_applications").select("id", { count: "exact", head: true }),
            supabase.from("partner_inquiries").select("id", { count: "exact", head: true }),
            supabase.from("donations").select("id", { count: "exact", head: true }),
            supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
        ]);

        setStats({
            volunteers: volRes.count || 0,
            interns: intRes.count || 0,
            partners: parRes.count || 0,
            donations: donRes.count || 0,
            messages: msgRes.count || 0
        });

        // 2. Fetch Recent Activity (Combining latest from different tables)
        const [volAct, intAct, parAct] = await Promise.all([
            supabase.from("volunteer_applications").select("id, full_name, created_at, status").order("created_at", { ascending: false }).limit(2),
            supabase.from("internship_applications").select("id, full_name, created_at, status").order("created_at", { ascending: false }).limit(2),
            supabase.from("partner_inquiries").select("id, organization_name, created_at, status").order("created_at", { ascending: false }).limit(2),
        ]);

        const combined = [
            ...(volAct.data || []).map(v => ({ ...v, type: "Volunteer App", name: v.full_name })),
            ...(intAct.data || []).map(i => ({ ...i, type: "Internship App", name: i.full_name })),
            ...(parAct.data || []).map(p => ({ ...p, type: "Partner Inquiry", name: p.organization_name })),
        ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 5);

        setRecentActivity(combined);
        setIsLoading(false);
    };

    const statCards = [
        { label: "Volunteers", value: stats.volunteers, icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
        { label: "Interns", value: stats.interns, icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-100" },
        { label: "Partners", value: stats.partners, icon: BarChart3, color: "text-[#FBAF3C]", bg: "bg-orange-100" },
        { label: "Donations", value: stats.donations, icon: DollarSign, color: "text-green-600", bg: "bg-green-100" },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold text-[#0C3B4E] font-playfair mb-2">Portfolio Overview</h1>
                <p className="text-slate-500">System heartbeat and aggregate metrics for KAWAC operations.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label} className="border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                                        <Icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                    <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        Active
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-[#0C3B4E] mb-1">{isLoading ? "..." : stat.value}</h3>
                                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Recent Activity */}
                <Card className="lg:col-span-2 border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle className="text-xl font-bold text-[#0C3B4E]">Live Activity</CardTitle>
                            <CardDescription>Latest interactions across all portals</CardDescription>
                        </div>
                        <Clock className="text-slate-400 w-5 h-5" />
                    </CardHeader>
                    <CardContent>
                        <div className="divide-y divide-slate-100">
                            {isLoading ? (
                                Array(3).fill(0).map((_, i) => <div key={i} className="h-16 animate-pulse bg-slate-50 rounded-lg mb-2"></div>)
                            ) : recentActivity.length === 0 ? (
                                <p className="py-10 text-center text-slate-400">No recent activity found.</p>
                            ) : (
                                recentActivity.map((activity) => (
                                    <div key={`${activity.type}-${activity.id}`} className="py-4 flex items-center justify-between hover:bg-slate-50 px-2 rounded-lg transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[#0C3B4E] text-xs">
                                                {activity.name?.charAt(0) || "P"}
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#0C3B4E] text-sm">{activity.name}</p>
                                                <p className="text-xs text-slate-400">{activity.type}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <Badge variant="outline" className="text-[10px] capitalize">
                                                {activity.status}
                                            </Badge>
                                            <p className="text-[10px] text-slate-400 mt-1">
                                                {new Date(activity.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* System Health / Quick Links */}
                <div className="space-y-6">
                    <Card className="border-none shadow-sm bg-[#0C3B4E] text-white">
                        <CardHeader>
                            <CardTitle className="text-lg">Environment Status</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <StatusRow label="Supabase Auth" status={!!process.env.NEXT_PUBLIC_SUPABASE_URL} />
                            <StatusRow label="Database API" status={!!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY} />
                            <StatusRow label="Resend Mail" status={true} /> {/* Placeholder as env keys are server-side */}
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 gap-3">
                            <button className="bg-slate-50 hover:bg-slate-100 text-[#0C3B4E] text-xs font-bold py-3 px-4 rounded-lg transition-all text-left flex items-center gap-3">
                                <AlertCircle className="w-4 h-4 text-[#FBAF3C]" />
                                DOWNLOAD SCHEMA.SQL
                            </button>
                            <button className="bg-slate-50 hover:bg-slate-100 text-[#0C3B4E] text-xs font-bold py-3 px-4 rounded-lg transition-all text-left flex items-center gap-3">
                                <MessageSquare className="w-4 h-4 text-[#FBAF3C]" />
                                MANAGE TEMPLATES
                            </button>
                            <button className="bg-[#FBAF3C] text-[#0C3B4E] text-xs font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-none transition-all text-left flex items-center gap-3">
                                <TrendingUp className="w-4 h-4" />
                                GENERATE IMPACT REPORT
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function StatusRow({ label, status }: { label: string, status: boolean }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">{label}</span>
            <span className={`flex items-center text-[10px] font-bold ${status ? 'text-green-400' : 'text-red-400'}`}>
                {status ? <CheckCircle2 className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
                {status ? "CONFIGURED" : "MISSING"}
            </span>
        </div>
    );
}
