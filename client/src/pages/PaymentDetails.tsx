import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PaymentDetails() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // You can call your backend API here instead
    await fetch('/api/send-transaction-email', {
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto bg-black bg-opacity-70 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Payment Details</h2>
        <p className="mb-2">ACCOUNT NAME: <strong>YOUNG AVIATORS CLUB OF AFRICA</strong></p>
        <p className="mb-2">BANK: <strong>National Bank of Kenya</strong></p>
        <p className="mb-2">BANK PAYBILL NUMBER: <strong>625625</strong></p>
        <p className="mb-6">BANK ACCOUNT NUMBER: <strong>01 0200 1890 3100</strong></p>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold text-yellow-400">
            Paste Transaction Message:
          </label>
          <textarea
            className="w-full p-4 rounded-lg bg-gray-800 border border-yellow-400 text-white"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-300 transition"
          >
            Submit & Return Home
          </button>
        </form>
      </div>
    </div>
  );
}
