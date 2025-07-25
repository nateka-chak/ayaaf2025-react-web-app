import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormState {
  name: string;
  group: string;
  institution: string;
  number: string;
  transaction: string;
  title: string;
  description: string;
  [key: string]: string; // index signature for dynamic access
}

export default function ProjectRegistration() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    name: '',
    group: '',
    institution: '',
    number: '',
    transaction: '',
    title: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/register/project`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to submit');
      const data = await res.json();
      if (data.success) {
        alert('Project Registered Successfully');
        navigate('/');
      } else {
        alert('Registration failed');
      }
    } catch {
      alert('Error occurred. Try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur">
        <h2 className="text-3xl font-bold text-sky-400 mb-6 text-center">
          Project Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'group', 'institution', 'number', 'title', 'description', 'transaction'].map(field => (
            <div key={field}>
              <label className="block mb-2 text-sm text-sky-300 capitalize">{field.replace('_', ' ')}</label>
              {field === 'description' ? (
                <textarea name={field} required value={form[field]} onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-sky-400 h-32"
                />
              ) : (
                <input type="text" name={field} required value={form[field]} onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-sky-400"
                />
              )}
            </div>
          ))}
          <button type="submit" className="w-full bg-sky-400 text-black font-bold py-3 rounded hover:bg-sky-300 transition">
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}
