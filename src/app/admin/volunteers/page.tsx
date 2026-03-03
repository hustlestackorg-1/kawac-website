"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Download, Filter, Mail, Phone, Calendar } from "lucide-react";

export default function VolunteersAdminPage() {
    const [applications, setApplications] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        if (!supabase) return;
        setIsLoading(true);
        const { data, error } = await supabase
            .from("volunteer_applications")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error) {
            setApplications(data || []);
        }
        setIsLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        if (!supabase) return;
        const { error } = await supabase
            .from("volunteer_applications")
            .update({ status })
            .eq("id", id);

        if (!error) {
            fetchApplications();
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending": return "bg-yellow-100 text-yellow-800";
            case "shortlisted": return "bg-blue-100 text-blue-800";
            case "accepted": return "bg-green-100 text-green-800";
            case "rejected": return "bg-red-100 text-red-800";
            default: return "bg-slate-100 text-slate-800";
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-playfair font-bold text-[#4A1D6B]">Volunteer Applications</h1>
                    <p className="text-slate-500">Manage and review all incoming volunteer submissions.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="flex gap-2">
                        <Download size={16} /> Export CSV
                    </Button>
                    <Button className="bg-[#4A1D6B] text-white">
                        <Filter size={16} className="mr-2" /> Filter
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead>Applicant</TableHead>
                            <TableHead>Persona</TableHead>
                            <TableHead>Programs</TableHead>
                            <TableHead>Applied Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            Array(5).fill(0).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell colSpan={6} className="h-16 animate-pulse bg-slate-50/50"></TableCell>
                                </TableRow>
                            ))
                        ) : applications.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-32 text-center text-slate-400">
                                    No applications found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            applications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell>
                                        <div className="font-bold text-[#4A1D6B]">{app.full_name}</div>
                                        <div className="text-xs text-slate-500 flex gap-2 mt-1">
                                            <Mail size={12} /> {app.email}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="capitalize">{app.persona}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-1">
                                            {app.programs?.map((p: string, i: number) => (
                                                <span key={i} className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">{p}</span>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-500">
                                        {new Date(app.created_at).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        <Badge className={`${getStatusColor(app.status)} border-none capitalize`}>
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal size={16} />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => window.open(`mailto:${app.email}`)}>Contact</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => updateStatus(app.id, "shortlisted")}>Shortlist</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => updateStatus(app.id, "accepted")}>Accept</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => updateStatus(app.id, "rejected")} className="text-red-600">Reject</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
