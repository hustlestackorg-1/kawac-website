"use client";

import { useState } from 'react';
import { useAuth } from './AuthProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Loader2, CheckCircle } from 'lucide-react';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const { signInWithEmail } = useAuth();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const { error } = await signInWithEmail(email);

        if (error) {
            setError(error.message);
            setIsLoading(false);
        } else {
            setIsSent(true);
            setIsLoading(false);
        }
    }

    if (isSent) {
        return (
            <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Check Your Email</h3>
                <p className="text-[#6A7695]">
                    We sent a magic link to <strong>{email}</strong>
                </p>
                <p className="text-sm text-[#6A7695] mt-2">
                    Click the link in the email to sign in.
                </p>
                <Button
                    variant="outline"
                    onClick={() => setIsSent(false)}
                    className="mt-6"
                >
                    Use a different email
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="pl-10"
                        required
                    />
                </div>
            </div>

            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}

            <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                    </>
                ) : (
                    'Send Magic Link'
                )}
            </Button>

            <p className="text-center text-sm text-[#6A7695]">
                We'll email you a secure link to sign in. No password needed.
            </p>
        </form>
    );
}
