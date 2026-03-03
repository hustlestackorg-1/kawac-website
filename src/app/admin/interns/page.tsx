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
import { MoreHorizontal, Download, Filter, GraduationCap, Building } from "lucide-react";

export default function InternsAdminPage() {
    const [applications, setApplications] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        if (!supabase) return;
        setIsLoading(true);
        const { data, error } = await supabase
            .from("internship_applications")
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
            .from("internship_applications")
            .update({ status })
            .eq("id", id);

        if (!error) {
            fetchApplications();
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-playfair font-bold text-[#4A1D6B]">Internship Applications</h1>
                    <p className="text-slate-500">Review strategic placements and academic partnerships.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="flex gap-2">
                        <Download size={16} /> Export CSV
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead>Intern</TableHead>
                            <TableHead>Institution</TableHead>
                            <TableHead>Study Area</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            Array(5).fill(0).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell colSpan={5} className="h-16 animate-pulse bg-slate-50/50"></TableCell>
                                </TableRow>
                            ))
                        ) : applications.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-32 text-center text-slate-400">
                                    No internship applications found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            applications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell>
                                        <div className="font-bold text-[#4A1D6B]">{app.full_name}</div>
                                        <div className="text-xs text-slate-500">{app.email}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Building size={14} className="text-slate-400" />
                                            {app.institution}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm capitalize">
                                            {app.program_of_study || app.target_program}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge className="bg-slate-100 text-slate-800 border-none capitalize">
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
