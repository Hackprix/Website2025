import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Verify credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email credentials are not configured');
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Using 'gmail' instead of manual SMTP settings
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sanketika@lords.ac.in',
      subject: 'New Sponsorship Interest',
      html: `
        <h2>New Sponsorship Interest from ${formData.organizationName}</h2>
        <h3>Organization Details:</h3>
        <p><strong>Organization Name:</strong> ${formData.organizationName}</p>
        <p><strong>Contact Person:</strong> ${formData.fullName}</p>
        <h3>Contact Information:</h3>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.website ? `<p><strong>Website:</strong> ${formData.website}</p>` : ''}
        <h3>Additional Details:</h3>
        <p>${formData.additionalDetails || 'No additional details provided.'}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
} 