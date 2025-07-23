import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterNonMember() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    institution: '',
    number: '',
    transaction: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Registering Non-Member:', form);
    alert('Registration submitted successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur">
        <h2 className="text-3xl font-bold text-sky-400 mb-6 text-center">
          Non-Member Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-sky-300">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-sky-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-sky-300">Institution</label>
            <input
              type="text"
              name="institution"
              required
              value={form.institution}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-sky-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-sky-300">Phone Number</label>
            <input
              type="tel"
              name="number"
              required
              value={form.number}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-sky-400"
            />
          </div>

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
            <p><span className="text-[#38bdf8] font-semibold">AMOUNT:</span> 5,500 KES</p>
          </div>

          <div>
            <label className="block mb-2 text-sm text-sky-300">Transaction Confirmation Code</label>
            <input
              type="text"
              name="transaction"
              required
              value={form.transaction}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-sky-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-400 text-black font-bold py-3 rounded hover:bg-sky-300 transition"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
