import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/admin/registrations', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRegistrations(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th>Name</th>
            <th>Package</th>
            <th>Paid</th>
            <th>Registered At</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((r, i) => (
            <tr key={i} className="text-center border-b">
              <td>{r.userId?.name}</td>
              <td>{r.packageType}</td>
              <td>{r.isPaid ? '✅' : '❌'}</td>
              <td>{new Date(r.registeredAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
