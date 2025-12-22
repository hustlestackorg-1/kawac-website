import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, amount, message } = body;

        // 1. Validate
        if (!firstName || !lastName || !email || !amount) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const fullName = `${firstName} ${lastName}`;

        // 2. Save to Supabase
        // Note: This requires a 'donations' table which we will add in the SQL script
        const { error } = await supabaseAdmin
            .from('donations')
            .insert([
                {
                    full_name: fullName,
                    email,
                    amount: parseFloat(amount),
                    message,
                    status: 'pending' // Initial status
                },
            ]);

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ success: false, error: 'Database record failed' }, { status: 500 });
        }

        // 3. Send Confirmation Email to Donor
        await sendEmail({
            to: email,
            subject: 'Thank you for your donation to KAWAC',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h1 style="color: #0C3B4E;">Thank You, ${firstName}!</h1>
          <p>We have received your donation of <strong>$${amount} CAD</strong>.</p>
          <p>Your support helps KAWAC drive systemic change across our program areas.</p>
          <div style="background: #f4f4f4; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Amount:</strong> $${amount} CAD</p>
            <p><strong>Reference:</strong> Recorded for processing</p>
          </div>
          <p>A formal tax receipt will be issued once the transaction is fully processed.</p>
          <p>Best regards,<br/>The KAWAC Team</p>
        </div>
      `,
        });

        // 4. Send Alert to Admin
        await sendEmail({
            to: 'admin@kawac.ca',
            subject: `New Donation Recorded: $${amount} from ${fullName}`,
            html: `
        <div style="font-family: sans-serif;">
          <h2>New Donation Inquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Amount:</strong> $${amount} CAD</p>
          <p><strong>Message:</strong> ${message || 'No message provided'}</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/donations">View in Admin Dashboard</a></p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Donation API Error:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
