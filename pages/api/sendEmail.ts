

import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

  const { complaintType, duration, firstTime, timesSubmitted, sector, address, contact, description,  } = req.body;

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
      subject: 'Envío de Nuevo Formulario de Queja',
      html: `
        <h3>Queja</h3>
        <p>Tipo de denuncia: ${complaintType}</p>
        <p>Duración: ${duration}</p>
        <p>Primera vez: ${firstTime}</p>
        <p>Veces enviadas: ${timesSubmitted}</p>
        <p>Sector: ${sector}</p>
        <p>Dirección: ${address}</p>
        <p>Contacto: ${contact}</p>
        <p>Descripción: ${description}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while sending the email.' });
  }
}
