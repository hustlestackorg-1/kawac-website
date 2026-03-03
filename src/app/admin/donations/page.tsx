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
import { MoreHorizontal, Download, DollarSign, TrendingUp } from "lucide-react";

export default function DonationsAdminPage() {
    const [donations, setDonations] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        if (!supabase) return;
        setIsLoading(true);
        const { data, error } = await supabase
            .from("donations")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error) {
            setDonations(data || []);
        }
        setIsLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        if (!supabase) return;
        const { error } = await supabase
            .from("donations")
            .update({ status })
            .eq("id", id);

        if (!error) {
            fetchDonations();
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-playfair font-bold text-[#4A1D6B]">Donation Records</h1>
                    <p className="text-slate-500">Monitor funding inflows and philanthropic interest.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="flex gap-2 text-[#4A1D6B]">
                        <Download size={16} /> Export Financial Report
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Invoiced (CAD)</p>
                    <h4 className="text-2xl font-bold text-[#4A1D6B]">$0.00</h4>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Pending Inquiries</p>
                    <h4 className="text-2xl font-bold text-[#4A1D6B]">{donations.filter(d => d.status === 'pending').length}</h4>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Verified Support</p>
                    <h4 className="text-2xl font-bold text-secondary">0</h4>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead>Donor</TableHead>
                            <TableHead>Amount (CAD)</TableHead>
                            <TableHead>Applied Date</TableHead>
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
                        ) : donations.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-32 text-center text-slate-400">
                                    No donation records found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            donations.map((don) => (
                                <TableRow key={don.id}>
                                    <TableCell>
                                        <div className="font-bold text-[#4A1D6B]">{don.full_name}</div>
                                        <div className="text-xs text-slate-500">{don.email}</div>
                                    </TableCell>
                                    <TableCell className="font-bold text-[#4A1D6B]">
                                        ${parseFloat(don.amount).toFixed(2)}
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-500">
                                        {new Date(don.created_at).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        <Badge className={`capitalize border-none ${don.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {don.status}
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
                                                <DropdownMenuItem onClick={() => updateStatus(don.id, "verified")}>Verify Payment</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => updateStatus(don.id, "failed")} className="text-red-600">Mark Failed</DropdownMenuItem>
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
