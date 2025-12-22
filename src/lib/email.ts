import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailOptions {
    to: string | string[];
    subject: string;
    html: string;
    from?: string;
}

export async function sendEmail({ to, subject, html, from }: SendEmailOptions) {
    try {
        const { data, error } = await resend.emails.send({
            from: from || 'KAWAC <noreply@kawac.ca>',
            to: Array.isArray(to) ? to : [to],
            subject,
            html,
        });

        if (error) {
            console.error('Email send error:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Email send exception:', error);
        return { success: false, error };
    }
}

// Email Templates

export function volunteerApplicationConfirmation(name: string) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f5f8;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background-color: #0C3B4E; padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">KAWAC</h1>
          <p style="color: #FBAF3C; margin: 10px 0 0; font-size: 12px; letter-spacing: 2px;">KACB WORLDBANK ALLIANCE CANADA</p>
        </div>
        <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 12px 12px;">
          <h2 style="color: #0C3B4E; margin-top: 0;">Thank You, ${name}!</h2>
          <p style="color: #6A7695; line-height: 1.6;">
            We have received your volunteer application and are excited about your interest in joining our mission.
          </p>
          <p style="color: #6A7695; line-height: 1.6;">
            Our team will review your application within <strong>5-7 business days</strong>. We will contact you at the email address you provided with next steps.
          </p>
          <div style="background-color: #f4f5f8; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <p style="color: #0C3B4E; margin: 0; font-weight: bold;">What happens next?</p>
            <ul style="color: #6A7695; padding-left: 20px;">
              <li>Application review by our team</li>
              <li>Interview invitation (if shortlisted)</li>
              <li>Orientation and onboarding</li>
            </ul>
          </div>
          <p style="color: #6A7695; line-height: 1.6;">
            In the meantime, learn more about our programs at <a href="https://kawac.ca/programs" style="color: #FBAF3C;">kawac.ca/programs</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            KAWAC | Building Locally Led Solutions<br>
            <a href="https://kawac.ca" style="color: #FBAF3C;">kawac.ca</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function partnerInquiryConfirmation(name: string, organization: string) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f5f8;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background-color: #0C3B4E; padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">KAWAC</h1>
          <p style="color: #FBAF3C; margin: 10px 0 0; font-size: 12px; letter-spacing: 2px;">KACB WORLDBANK ALLIANCE CANADA</p>
        </div>
        <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 12px 12px;">
          <h2 style="color: #0C3B4E; margin-top: 0;">Partnership Inquiry Received</h2>
          <p style="color: #6A7695; line-height: 1.6;">
            Dear ${name},
          </p>
          <p style="color: #6A7695; line-height: 1.6;">
            Thank you for reaching out on behalf of <strong>${organization}</strong>. We are always excited to explore partnership opportunities that align with our mission.
          </p>
          <p style="color: #6A7695; line-height: 1.6;">
            A member of our partnerships team will review your inquiry and respond within <strong>3-5 business days</strong>.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            KAWAC | Building Locally Led Solutions<br>
            <a href="https://kawac.ca" style="color: #FBAF3C;">kawac.ca</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function adminNotification(type: string, details: Record<string, string>) {
    const detailsList = Object.entries(details)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('');

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f4f5f8;">
      <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px;">
        <h2 style="color: #0C3B4E; margin-top: 0;">New ${type}</h2>
        <ul style="color: #6A7695; line-height: 1.8;">
          ${detailsList}
        </ul>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin" 
           style="display: inline-block; background-color: #0C3B4E; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin-top: 20px;">
          View in Dashboard
        </a>
      </div>
    </body>
    </html>
  `;
}

export function contactFormConfirmation(name: string) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f5f8;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background-color: #0C3B4E; padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">KAWAC</h1>
        </div>
        <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 12px 12px;">
          <h2 style="color: #0C3B4E; margin-top: 0;">Message Received</h2>
          <p style="color: #6A7695; line-height: 1.6;">
            Dear ${name}, thank you for contacting us. We will respond within 2-3 business days.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            KAWAC | <a href="https://kawac.ca" style="color: #FBAF3C;">kawac.ca</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
