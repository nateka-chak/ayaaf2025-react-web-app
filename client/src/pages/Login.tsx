import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('✅ Login successful!');
      navigate('/');
    } catch {
      alert('❌ Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffdf6] to-[#fcf8f3] dark:from-[#0a1f17] dark:to-[#112e24] px-4">
      <div className="max-w-md w-full bg-white dark:bg-[#183527] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-900 dark:text-green-300 mb-6">
          🔐 Admin / Member Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-green-800 rounded bg-white dark:bg-[#234535] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              required
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
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-green-800 rounded bg-white dark:bg-[#234535] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 font-semibold rounded transition ${
              loading
                ? 'bg-yellow-300 cursor-not-allowed'
                : 'bg-yellow-400 hover:bg-yellow-300 text-black'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
          Default Admin: <span className="font-semibold">AYAAF</span> / <span className="font-semibold">254254</span>
        </p>
      </div>
    </div>
  );
}
//   <p className="text-gray-600 dark:text-gray-400">
//             Includes access to all sessions, workshops & safari tours. <br />          