import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#142c1c] text-white py-12 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm">
        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-semibold mb-3 text-yellow-300">📞 Contact</h5>
          <p className="mb-1">Email: ayaaf@yaoafrica.org</p>
          <p>Phone: +254 780 786 999</p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-3 text-yellow-300">🌍 Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <Link to="/packages" className="hover:underline hover:text-yellow-300">Packages</Link>
            </li>
            <li>
              <Link to="/register" className="hover:underline hover:text-yellow-300">Register</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline hover:text-yellow-300">Cart</Link>
            </li>
            <li>
              <Link to="/admin" className="hover:underline hover:text-yellow-300">Admin Dashboard</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="text-lg font-semibold mb-3 text-yellow-300">📢 Follow Us</h5>
          <p className="mb-1">Instagram: <span className="text-yellow-200">@ayaafkenya</span></p>
          <p>LinkedIn: AYAAF 2025 Nairobi</p>
        </div>
      </div>

      <hr className="border-t border-green-800 my-6" />

      {/* Copyright */}
      <p className="text-center text-xs opacity-70">
        © 2025 AYAAF — Empowering Youth Through Aviation & Aerospace in Africa.
      </p>
    </footer>
  );
}
