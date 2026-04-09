import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, company, phone, service, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const serviceLabels: Record<string, string> = {
        'industrial-staffing': 'Industrial & Manufacturing Staffing',
        'hr-compliance': 'HR Management & Compliance',
        'executive-search': 'Executive Search & Recruitment',
        'supply-chain': 'Supply of Goods & Materials',
        'gig-workforce': 'Gig Worker & Flexible Workforce',
        'all-services': 'All Services / Comprehensive Partnership',
    };

    const mailOptions = {
        from: `"Mojake Consult Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `✉️ New Contact Enquiry: ${serviceLabels[service] || service || 'General'} — ${name}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(135deg, #0D1B4B, #152266); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Enquiry</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Mojake Consult Contact Form</p>
        </div>
        <div style="background: #f8f8fc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C; width: 35%;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #0D1B4B;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${company}</td>
            </tr>` : ''}
            ${phone ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #E8192C;">Service Interest</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${serviceLabels[service] || service || 'Not specified'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="font-weight: bold; color: #E8192C; margin-bottom: 8px;">Message:</p>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap; color: #374151;">${message}</div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center;">
            Submitted via Mojake Consult website · ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })} WAT
          </p>
        </div>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Email send error (contact):', err);
        return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }
}
