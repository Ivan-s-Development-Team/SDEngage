

import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

  const { complaintType, duration, firstTime, timesSubmitted, description } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail'
      auth: {
        user: email,
        pass: pass,
      },
    });

    const mailOptions = {
      from: 'ivansdevelopmentteam@gmail.com',
      to: 'ivansdevelopmentteam@gmail.com',
      subject: 'New Complaint Form Submission',
      html: `
        <h3>New Complaint Form Submission</h3>
        <p>Type of Complaint: ${complaintType}</p>
        <p>Duration: ${duration}</p>
        <p>First Time: ${firstTime}</p>
        <p>Times Submitted: ${timesSubmitted}</p>
        <p>Description: ${description}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while sending the email.' });
  }
}
