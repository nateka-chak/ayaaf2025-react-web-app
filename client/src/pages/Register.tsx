// src/pages/Register.tsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registration successful!');
      navigate('/login');
    } catch {
      alert('Registration failed. Try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white dark:bg-[#12232e] shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-600" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
