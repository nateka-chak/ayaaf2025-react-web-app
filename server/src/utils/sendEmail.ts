import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Change to 'Zoho', 'Yahoo', etc. if needed
  auth: {
    user: process.env.EMAIL_USER,      // e.g., 'ayaaf.yaoafrica@gmail.com'
    pass: process.env.EMAIL_PASS,      // App password (NOT your Gmail password)
  },
});

export default async function sendEmail(subject: string, data: any) {
  const mailOptions = {
    from: `"AYAAF Notifications" <${process.env.EMAIL_USER}>`,
    to: 'ayaaf.yaoafrica@gmail.com',
    subject,
    text: JSON.stringify(data, null, 2),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
  } catch (error) {
    console.error('❌ Email failed:', error);
  }
}
