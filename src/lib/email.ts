import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.warn('Resend API key missing. Email functionality will be disabled.');
}

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const sendInstitutionalEmail = async ({
  to,
  subject,
  html,
}: {
  to: string | string[];
  subject: string;
  html: string;
}) => {
  if (!resend) {
    console.error('Resend is not initialized.');
    return { error: 'Not initialized' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'KAWAC <notifications@kawac.ca>',
      to,
      subject,
      html,
    });

    if (error) {
      console.error('Email send error:', error);
      return { error };
    }

    return { data };
  } catch (err) {
    console.error('Failed to send email:', err);
    return { error: err };
  }
};

export const sendEmail = sendInstitutionalEmail;

export const volunteerApplicationConfirmation = (name: string) => `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #0D5C63; border-radius: 20px;">
    <h1 style="color: #0D5C63;">KAWAC: Application Received</h1>
    <p>Dear ${name},</p>
    <p>We have received your application for the <strong>Mobility Corridor</strong> program. Our review team will assess your credentials against our ethical recruitment standards.</p>
    <p>Sustainability and dignity are our core values. Thank you for choosing to build resilience with us.</p>
    <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 30px 0;" />
    <p style="font-size: 12px; color: #64748B;">© 2026 KAWAC. All rights reserved.</p>
  </div>
`;

export const partnerInquiryConfirmation = (orgName: string) => `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #0D5C63; border-radius: 20px;">
    <h1 style="color: #0D5C63;">KAWAC: Partnership Inquiry</h1>
    <p>Thank you to ${orgName} for reaching out.</p>
    <p>We are currently reviewing your interest in a strategic alliance. A member of our governance team will contact you shortly to discuss SDG-aligned implementation.</p>
    <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 30px 0;" />
    <p style="font-size: 12px; color: #64748B;">© 2026 KAWAC. All rights reserved.</p>
  </div>
`;

export const adminNotification = (type: string, details: Record<string, any>) => `
  <div style="font-family: sans-serif; padding: 20px; background: #F8FAFC; border-left: 4px solid #0D5C63;">
    <h2 style="color: #0D5C63;">KAWAC: System Alert - New ${type}</h2>
    <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      ${Object.entries(details).map(([key, value]) => `
        <p><strong>${key}:</strong> ${value}</p>
      `).join('')}
    </div>
    <p style="margin-top: 20px; font-size: 12px; color: #64748B;">Please login to the Institutional Dashboard for full processing.</p>
  </div>
`;

export const contactFormConfirmation = (name: string) => `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #2e1065; border-radius: 20px;">
    <h1 style="color: #2e1065;">KAWAC: Transmission Received</h1>
    <p>Dear ${name},</p>
    <p>Thank you for initiating communication with the KAWAC institutional gateway. Our team has received your message and it is being processed according to our ethical transmission protocols.</p>
    <p>You can expect a response within 48 business hours.</p>
    <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 30px 0;" />
    <p style="font-size: 10px; color: #64748B; letter-spacing: 2px; text-transform: uppercase;">© 2026 KAWAC GLOBAL ORGANIZATION. SYSTEM READY.</p>
  </div>
`;
