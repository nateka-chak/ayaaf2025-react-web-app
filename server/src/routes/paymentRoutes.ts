import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/api/payment', async (req, res) => {
  const { transactionMessage, userEmail } = req.body;

  if (!transactionMessage) {
    return res.status(400).json({ message: 'Transaction message is required' });
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email e.g. no-reply@ayaaf.africa or Gmail
      pass: process.env.EMAIL_PASS, // Your app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ayaaf.yaoafrica@gmail.com',
    subject: 'New Sponsorship Payment Submitted',
    html: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>New Sponsorship Payment Notification</h2>
        <p><strong>Submitted By:</strong> ${userEmail || 'AYAAF Website User'}</p>
        <p><strong>Transaction Details:</strong></p>
        <blockquote style="padding: 10px; background: #f0f0f0; border-left: 5px solid green;">
          ${transactionMessage}
        </blockquote>
        <p>Thank you.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Payment details sent successfully' });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

export default router;
