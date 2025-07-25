import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const VITE_API_BASE_URL = import.meta.env.BASE_URL || 'http://localhost:5000';

export default function PaymentDetails() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      alert('Please enter a transaction message');
      return;
    }   
    // Send transaction message to backend API
    try {   
      const response = await fetch(`${VITE_API_BASE_URL}/api/send-transaction-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send transaction message');
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || 'Failed to send transaction message');
      }
    } catch (error) {
      console.error('Error sending transaction message:', error); 
      alert('Failed to send transaction message. Please try again later.');
      return;   
    }
    await fetch(`${VITE_API_BASE_URL}/api/send-transaction-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'ayaaf.yaoafrica@gmail.com',
        subject: 'New Sponsorship Transaction',
        text: message,
      }),
    });

    alert('Transaction message sent. Thank you!');
    navigate('/');
  };
  // Render the payment details and form  
  // This component displays the payment details and a form to submit the transaction message
  // It uses Framer Motion for animations and has a responsive design   
  // The form submission sends the transaction message to the backend API
  // The payment details include account name, bank, paybill number, and account number
  // The component is styled with Tailwind CSS for a modern look
  // The form includes a textarea for the transaction message and a submit button
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0d1d23] to-[#081417] border border-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl">
        <motion.h2
          className="text-4xl font-extrabold text-[#38bdf8] mb-8 text-center tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          💳 Payment Details
        </motion.h2>

        <div className="space-y-3 text-sm sm:text-base text-white/80 leading-relaxed">
          <p>
            <span className="text-[#38bdf8] font-semibold">ACCOUNT NAME:</span>{' '}
            YOUNG AVIATORS CLUB OF AFRICA
          </p>
          <p>
            <span className="text-[#38bdf8] font-semibold">BANK:</span>{' '}
            National Bank of Kenya
          </p>
          <p>
            <span className="text-[#38bdf8] font-semibold">PAYBILL NUMBER:</span>{' '}
            625625
          </p>
          <p>
            <span className="text-[#38bdf8] font-semibold">ACCOUNT NUMBER:</span>{' '}
            01 0200 1890 3100
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <label className="block mb-3 text-sm font-medium text-[#38bdf8]">
            Paste your M-Pesa transaction message:
          </label>
          <textarea
            className="w-full bg-black border border-[#38bdf8] text-white rounded-xl p-4 text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition"
            rows={6}
            placeholder="e.g., Confirmed. Ksh 5,500 sent to YOUNG AVIATORS CLUB OF AFRICA on..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-6 bg-[#38bdf8] hover:bg-[#0ea5e9] text-black font-semibold py-3 px-8 rounded-full shadow-lg transition w-full"
          >
            ✅ Submit & Return Home
          </button>
        </form>
      </div>
    </div>
  );
}
