import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { sendEmail, partnerInquiryConfirmation, adminNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {
            organization_name,
            contact_name,
            email,
            phone,
            partnership_type,
            message
        } = body;

        // Validation
        if (!organization_name || !contact_name || !email) {
            return NextResponse.json(
                { error: 'Missing required fields: organization_name, contact_name, email' },
                { status: 400 }
            );
        }

        const supabase = createAdminClient();
        if (!supabase) {
            return NextResponse.json({ error: 'System offline' }, { status: 503 });
        }

        // Insert inquiry
        const { data, error } = await supabase
            .from('partner_inquiries')
            .insert({
                organization_name,
                contact_name,
                email,
                phone: phone || null,
                partnership_type: partnership_type || 'other',
                message: message || null,
            })
            .select()
            .single();

        if (error) {
            console.error('Database error:', error);
            return NextResponse.json(
                { error: 'Failed to submit inquiry' },
                { status: 500 }
            );
        }

        // Send confirmation email
        await sendEmail({
            to: email,
            subject: 'KAWAC Partnership Inquiry Received',
            html: partnerInquiryConfirmation(organization_name),
        });

        // Admin notification
        await sendEmail({
            to: 'partnerships@kawac.ca',
            subject: `New Partnership Inquiry: ${organization_name}`,
            html: adminNotification('Partnership Inquiry', {
                Organization: organization_name,
                Contact: contact_name,
                Email: email,
                Type: partnership_type || 'Other',
            }),
        });

        return NextResponse.json({
            success: true,
            message: 'Inquiry submitted successfully',
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
