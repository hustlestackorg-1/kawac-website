"use client";

import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
    children: ReactNode;
    requireAdmin?: boolean;
}

export function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
    const { user, isLoading, isAdmin } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            if (!user) {
                router.push('/login');
            } else if (requireAdmin && !isAdmin) {
                router.push('/unauthorized');
            }
        }
    }, [user, isLoading, isAdmin, requireAdmin, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                    <p className="text-[#6A7695]">Loading...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    if (requireAdmin && !isAdmin) {
        return null;
    }

    return <>{children}</>;
}
