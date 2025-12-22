import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#F4F5F8] flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-primary p-8 text-center">
                        <Link href="/" className="inline-block">
                            <h1 className="text-3xl font-bold text-white font-playfair tracking-wider">KAWAC</h1>
                            <p className="text-[#FBAF3C] text-xs tracking-[0.2em] mt-1">ADMIN PORTAL</p>
                        </Link>
                    </div>

                    {/* Form */}
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-primary mb-2 text-center">Welcome Back</h2>
                        <p className="text-[#6A7695] text-center mb-8">
                            Sign in to access the admin dashboard
                        </p>
                        <LoginForm />
                    </div>
                </div>

                <p className="text-center mt-8 text-sm text-[#6A7695]">
                    <Link href="/" className="hover:text-primary transition-colors">
                        ← Back to main site
                    </Link>
                </p>
            </div>
        </div>
    );
}
