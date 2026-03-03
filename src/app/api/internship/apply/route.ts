import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { sendEmail, volunteerApplicationConfirmation, adminNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {
            full_name,
            email,
            phone,
            institution,
            program_of_study,
            year_of_study,
            target_program,
            start_date,
            duration,
            cover_letter,
            cv_url
        } = body;

        // Validation
        if (!full_name || !email || !institution) {
            return NextResponse.json(
                { error: 'Missing required fields: full_name, email, institution' },
                { status: 400 }
            );
        }

        const supabase = createAdminClient();
        if (!supabase) {
            return NextResponse.json({ error: 'System offline' }, { status: 503 });
        }

        // Insert application
        const { data, error } = await supabase
            .from('internship_applications')
            .insert({
                full_name,
                email,
                phone: phone || null,
                institution,
                program_of_study: program_of_study || null,
                year_of_study: year_of_study || null,
                target_program: target_program || null,
                start_date: start_date || null,
                duration: duration || null,
                cover_letter: cover_letter || null,
                cv_url: cv_url || null,
            })
            .select()
            .single();

        if (error) {
            console.error('Database error:', error);
            return NextResponse.json(
                { error: 'Failed to submit application' },
                { status: 500 }
            );
        }

        // Send confirmation email
        await sendEmail({
            to: email,
            subject: 'KAWAC Internship Application Received',
            html: volunteerApplicationConfirmation(full_name), // Reusing template
        });

        // Admin notification
        await sendEmail({
            to: 'admin@kawac.ca',
            subject: 'New Internship Application',
            html: adminNotification('Internship Application', {
                Name: full_name,
                Email: email,
                Institution: institution,
                Program: program_of_study || 'Not specified',
            }),
        });

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully',
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
