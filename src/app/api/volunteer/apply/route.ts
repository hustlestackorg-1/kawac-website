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
            persona,
            programs,
            availability,
            start_date,
            duration,
            skills,
            motivation,
            cv_url
        } = body;

        // Validation
        if (!full_name || !email || !persona) {
            return NextResponse.json(
                { error: 'Missing required fields: full_name, email, persona' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const supabase = createAdminClient();

        // Insert application
        const { data, error } = await supabase
            .from('volunteer_applications')
            .insert({
                full_name,
                email,
                phone: phone || null,
                persona,
                programs: programs || [],
                availability: availability || null,
                start_date: start_date || null,
                duration: duration || null,
                skills: skills || [],
                motivation: motivation || null,
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

        // Send confirmation email to applicant
        await sendEmail({
            to: email,
            subject: 'KAWAC Volunteer Application Received',
            html: volunteerApplicationConfirmation(full_name),
        });

        // Send notification to admin
        await sendEmail({
            to: 'admin@kawac.ca', // Configure this
            subject: 'New Volunteer Application',
            html: adminNotification('Volunteer Application', {
                Name: full_name,
                Email: email,
                Persona: persona,
                Programs: programs?.join(', ') || 'Not specified',
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
