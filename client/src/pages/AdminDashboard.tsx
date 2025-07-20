import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Registration {
  userId: { name: string };
  packageType: string;
  isPaid: boolean;
  registeredAt: string;
}

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/admin/registrations', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRegistrations(res.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-4xl font-bold text-green-900 dark:text-green-300 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🧭 Admin Dashboard
      </motion.h2>

      {loading ? (
        <div className="text-center text-yellow-600 text-lg">Loading registrations...</div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-[#123524]">
          <table className="min-w-full text-sm md:text-base">
            <thead className="bg-[#fef6e4] dark:bg-[#1a3b2c] text-green-900 dark:text-green-100 uppercase">
              <tr>
                <th className="py-4 px-3 text-left">Name</th>
                <th className="py-4 px-3 text-left">Package</th>
                <th className="py-4 px-3 text-left">Paid</th>
                <th className="py-4 px-3 text-left">Registered</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-200 dark:border-green-900 ${
                    i % 2 === 0 ? 'bg-[#fcf8f3] dark:bg-[#0f2a1f]' : 'bg-[#fffdf6] dark:bg-[#123524]'
                  }`}
                >
                  <td className="py-3 px-4">{r.userId?.name}</td>
                  <td className="py-3 px-4">{r.packageType}</td>
                  <td className="py-3 px-4">
                    {r.isPaid ? (
                      <span className="text-green-600 dark:text-green-300 font-semibold">✅ Paid</span>
                    ) : (
                      <span className="text-red-500 dark:text-red-300 font-semibold">❌ Not Paid</span>
                    )}
                  </td>
                  <td className="py-3 px-4">{new Date(r.registeredAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
