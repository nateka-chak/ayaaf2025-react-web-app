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
  // index signature for dynamic access
  [key: string]: string;
}

export default function ProjectRegistration() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    
    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/register/project`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        // Handle specific error cases
        if (res.status === 409) {
          throw new Error(data.error || 'This transaction code has already been used');
        } else if (res.status === 429) {
          throw new Error(data.error || 'Please wait a moment before trying again');
        } else {
          throw new Error(data.error || 'Failed to submit');
        }
      }
      
      if (data.success) {
        alert('Project Registered Successfully');
        navigate('/');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error: any) {
      alert(error.message || 'Error occurred. Try again later.');
    } finally {
      setIsSubmitting(false);
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
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full font-bold py-3 rounded transition ${
              isSubmitting 
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                : 'bg-sky-400 text-black hover:bg-sky-300'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Project'}
          </button>
        </form>
      </div>
    </div>
  );
}
