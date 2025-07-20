export const sendEmail = async (to: string, subject: string, body: string) => {
  console.log(`Email to ${to} — ${subject}: ${body}`);
  // Integrate nodemailer if needed
};
