import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterMember() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    group: '',
    institution: '',
    number: '',
    transaction: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }
    
    // Validate form data
    if (!form.name || !form.group || !form.institution || !form.number || !form.transaction) {
      alert('Please fill in all fields');
      return;
    }  
    
    setIsSubmitting(true);
    
    // Send data to backend API
    try { 
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/register/member`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      
      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 409) {
          throw new Error(data.error || 'This transaction code has already been used');
        } else if (response.status === 429) {
          throw new Error(data.error || 'Please wait a moment before trying again');
        } else {
          throw new Error(data.error || 'Network response was not ok');
        }
      }

      if (!data.success) {
        throw new Error(data.error || 'Registration failed');
      }
      
      // You can store this in backend or send email
      console.log('Registering YACAfrica Member:', form);
      alert('Registration submitted successfully!');
      navigate('/');
      
    } catch (error: any) {
      console.error('Error submitting registration:', error);
      alert(error.message || 'Failed to submit registration. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur">
        <h2 className="text-3xl font-bold text-sky-400 mb-6 text-center">
          YACAfrica Member Registration
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
            <label className="block mb-2 text-sm text-sky-300">Group Category</label>
            <select
              name="group"
              required
              value={form.group}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-sky-400"
            >
              <option value="">-- Select Group --</option>
              <option value="Falcons">Falcons</option>
              <option value="Eagles">Eagles</option>
              <option value="Hawks">Hawks</option>
              <option value="Albatross">Albatross</option>
            </select>
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
                    <p>
            <span className="text-[#38bdf8] font-semibold">AMOUNT:</span>{' '}
            4,950 KES
          </p>
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
            disabled={isSubmitting}
            className={`w-full font-bold py-3 rounded transition ${
              isSubmitting 
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                : 'bg-sky-400 text-black hover:bg-sky-300'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
}
