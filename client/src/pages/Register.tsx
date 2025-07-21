import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('✅ Registration successful!');
      // After registration, go to payment details page
      navigate('/payment');
    } catch {
      alert('❌ Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffdf6] to-[#fcf8f3] dark:from-[#0a1f17] dark:to-[#112e24] px-4">
      <div className="max-w-md w-full bg-white dark:bg-[#183527] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-900 dark:text-green-300 mb-6">
          📝 Register for AYAAF 2025
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute top-3.5 left-3 text-gray-400" />
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-green-800 rounded bg-white dark:bg-[#234535] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-green-800 rounded bg-white dark:bg-[#234535] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-green-800 rounded bg-white dark:bg-[#234535] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold rounded transition ${
              loading
                ? 'bg-yellow-300 cursor-not-allowed'
                : 'bg-yellow-400 hover:bg-yellow-300 text-black'
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-6">
          Already have an account? <a href="/login" className="underline">Login</a>
        </p>
      </div>
    </div>
  );
}
