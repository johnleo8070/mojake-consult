import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { company, contact, email, phone, roleType, headcount, message, attachment } = req.body;

  if (!company || !contact || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const roleTypeLabels: Record<string, string> = {
    industrial: 'Industrial / Manufacturing Staff',
    executive: 'Executive / Professional Roles',
    gig: 'Gig Workers / Flexible Staff',
    other: 'Other',
  };

  const headcountLabels: Record<string, string> = {
    single: '1 – 5 Persons',
    team: '5 – 20 Persons',
    bulk: '20+ Bulk Recruitment',
  };

  const mailOptions = {
    from: `"Mojake Consult Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `🏢 New Hire Request: ${company} — ${roleTypeLabels[roleType] || roleType || 'General'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(135deg, #0D1B4B, #152266); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Hire Request</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Mojake Consult Client Portal</p>
        </div>
        <div style="background: #f8f8fc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C; width: 35%;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Contact Person</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${contact}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Business Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #0D1B4B;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Talent Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${roleTypeLabels[roleType] || roleType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Headcount</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${headcountLabels[headcount] || headcount || 'Not specified'}</td>
            </tr>
          </table>
          ${message ? `
          <div style="margin-top: 24px;">
            <p style="font-weight: bold; color: #E8192C; margin-bottom: 8px;">Specific Requirements &amp; Timeline:</p>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap; color: #374151;">${message}</div>
          </div>` : ''}
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center;">
            Submitted via Mojake Consult website · ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })} WAT
          </p>
        </div>
      </div>
    `,
    attachments: attachment ? [{
      filename: attachment.name,
      content: attachment.content.split('base64,')[1],
      encoding: 'base64'
    }] : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error (hire):', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
