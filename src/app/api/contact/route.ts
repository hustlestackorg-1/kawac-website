import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { sendEmail, contactFormConfirmation, adminNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, message' },
                { status: 400 }
            );
        }

        const supabase = createAdminClient();

        // Insert contact submission
        const { data, error } = await supabase
            .from('contact_submissions')
            .insert({
                name,
                email,
                subject: subject || null,
                message,
            })
            .select()
            .single();

        if (error) {
            console.error('Database error:', error);
            return NextResponse.json(
                { error: 'Failed to submit message' },
                { status: 500 }
            );
        }

        // Send confirmation email
        await sendEmail({
            to: email,
            subject: 'KAWAC - Message Received',
            html: contactFormConfirmation(name),
        });

        // Admin notification
        await sendEmail({
            to: 'info@kawac.ca',
            subject: `New Contact Form: ${subject || 'General Inquiry'}`,
            html: adminNotification('Contact Form Submission', {
                Name: name,
                Email: email,
                Subject: subject || 'General Inquiry',
                Message: message.substring(0, 200) + (message.length > 200 ? '...' : ''),
            }),
        });

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully',
            data: { id: data.id }
        });

    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
