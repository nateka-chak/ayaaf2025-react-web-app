import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Route to handle sponsorship payment submission
router.post('/', async (req, res): Promise<void> => {
  const { transactionMessage, userEmail } = req.body;

  if (!transactionMessage) {
    res.status(400).json({ message: 'Transaction message is required' });
    return;
  }

  // Check email configuration
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    res.status(500).json({ message: 'Email configuration is missing' });
    return;
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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
    res.status(200).json({ 
      success: true,
      message: 'Payment details sent successfully' 
    });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to send email' 
    });
  }
});

export default router;
