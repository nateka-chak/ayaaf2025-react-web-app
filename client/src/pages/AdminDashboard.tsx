import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Registration {
  userId: { name: string };
  packageType: string;
  isPaid: boolean;
  registeredAt: string;
}
export const VITE_API_BASE_URL = import.meta.env.BASE_URL || 'http://localhost:5000';
export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Fetch registrations from the backend API   
      // This function retrieves all registrations and sets the state
      // It uses axios for HTTP requests and handles loading state
      // The API endpoint is protected, so it includes the authorization token
      // The registrations are displayed in a table with columns for name, package type, payment status
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${VITE_API_BASE_URL}/api/admin/registrations`, {
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
  // Render the admin dashboard with a list of registrations
  // This component fetches registrations from the backend API and displays them in a table   
  // It uses Framer Motion for animations and has a responsive design
  // The table includes columns for name, package type, payment status, and registration date
  // The component is styled with Tailwind CSS for a modern look

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.h2
        className="text-4xl font-extrabold text-center text-yellow-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🧭 Admin Dashboard
      </motion.h2>

      {loading ? (
        <div className="text-center text-sky-400 text-lg animate-pulse">Fetching registrations...</div>
      ) : (
        <motion.div
          className="overflow-x-auto bg-white dark:bg-[#0d1f1a] rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <table className="min-w-full text-sm md:text-base border-separate border-spacing-y-2">
            <thead className="bg-sky-100 dark:bg-[#123524] text-sky-900 dark:text-sky-200 uppercase tracking-wide text-xs sm:text-sm">
              <tr>
                <th className="py-4 px-5 text-left">Name</th>
                <th className="py-4 px-5 text-left">Package</th>
                <th className="py-4 px-5 text-left">Payment</th>
                <th className="py-4 px-5 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r, i) => (
                <tr
                  key={i}
                  className={`rounded-xl transition hover:bg-sky-50 dark:hover:bg-[#123524]/50 ${
                    i % 2 === 0
                      ? 'bg-white dark:bg-[#0f2a1f]'
                      : 'bg-gray-50 dark:bg-[#102e24]'
                  }`}
                >
                  <td className="py-4 px-5 text-gray-900 dark:text-white">{r.userId?.name}</td>
                  <td className="py-4 px-5 text-gray-700 dark:text-sky-200 font-medium">{r.packageType}</td>
                  <td className="py-4 px-5">
                    {r.isPaid ? (
                      <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                        ✅ Paid
                      </span>
                    ) : (
                      <span className="inline-block bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 px-3 py-1 rounded-full text-xs font-semibold">
                        ❌ Not Paid
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-5 text-gray-600 dark:text-gray-400">
                    {new Date(r.registeredAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
}
