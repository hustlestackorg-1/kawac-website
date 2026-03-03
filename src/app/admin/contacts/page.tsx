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
import { MoreHorizontal, Mail, CheckCheck } from "lucide-react";

export default function ContactsAdminPage() {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        if (!supabase) return;
        setIsLoading(true);
        const { data, error } = await supabase
            .from("contact_submissions")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error) {
            setSubmissions(data || []);
        }
        setIsLoading(false);
    };

    const toggleRead = async (id: string, isRead: boolean) => {
        if (!supabase) return;
        const { error } = await supabase
            .from("contact_submissions")
            .update({ is_read: isRead })
            .eq("id", id);

        if (!error) {
            fetchSubmissions();
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-playfair font-bold text-[#4A1D6B]">Contact Submissions</h1>
                    <p className="text-slate-500">Manage general inquiries and site communications.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead>Sender</TableHead>
                            <TableHead>Subject</TableHead>
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
                        ) : submissions.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-32 text-center text-slate-400">
                                    No contact submissions found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            submissions.map((sub) => (
                                <TableRow key={sub.id} className={sub.is_read ? 'opacity-80' : 'bg-blue-50/20'}>
                                    <TableCell>
                                        <div className="font-bold text-[#4A1D6B]">{sub.name}</div>
                                        <div className="text-xs text-slate-500">{sub.email}</div>
                                    </TableCell>
                                    <TableCell className="text-sm font-medium text-[#4A1D6B]">
                                        {sub.subject}
                                    </TableCell>
                                    <TableCell>
                                        <p className="text-xs text-slate-600 line-clamp-2 max-w-sm">{sub.message}</p>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={sub.is_read ? "outline" : "default"} className={sub.is_read ? 'text-slate-400' : 'bg-blue-600'}>
                                            {sub.is_read ? 'Read' : 'New'}
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
                                                <DropdownMenuItem onClick={() => window.open(`mailto:${sub.email}`)}>Reply</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => toggleRead(sub.id, !sub.is_read)}>
                                                    {sub.is_read ? 'Mark Unread' : 'Mark Read'}
                                                </DropdownMenuItem>
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
