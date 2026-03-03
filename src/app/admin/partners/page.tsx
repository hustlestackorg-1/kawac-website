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
import { MoreHorizontal, Download, Globe, MessageSquare } from "lucide-react";

export default function PartnersAdminPage() {
    const [inquiries, setInquiries] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        if (!supabase) return;
        setIsLoading(true);
        const { data, error } = await supabase
            .from("partner_inquiries")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error) {
            setInquiries(data || []);
        }
        setIsLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        if (!supabase) return;
        const { error } = await supabase
            .from("partner_inquiries")
            .update({ status })
            .eq("id", id);

        if (!error) {
            fetchInquiries();
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-playfair font-bold text-[#4A1D6B]">Partner Inquiries</h1>
                    <p className="text-slate-500">Track institutional alignments and grant opportunities.</p>
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
                            <TableHead>Organization</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Message</TableHead>
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
                        ) : inquiries.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-32 text-center text-slate-400">
                                    No inquiries found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            inquiries.map((inq) => (
                                <TableRow key={inq.id}>
                                    <TableCell>
                                        <div className="font-bold text-[#4A1D6B]">{inq.organization_name}</div>
                                        <div className="text-xs text-slate-500">{inq.contact_name} ({inq.email})</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="capitalize">{inq.partnership_type}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <p className="text-xs text-slate-600 line-clamp-2 max-w-xs">{inq.message}</p>
                                    </TableCell>
                                    <TableCell>
                                        <Badge className="bg-slate-100 text-slate-800 border-none capitalize">
                                            {inq.status}
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
                                                <DropdownMenuItem onClick={() => updateStatus(inq.id, "contacted")}>Mark Contacted</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => updateStatus(inq.id, "negotiating")}>Negotiating</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => updateStatus(inq.id, "partnered")} className="text-green-600">Partnered</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => updateStatus(inq.id, "declined")} className="text-red-600">Decline</DropdownMenuItem>
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
