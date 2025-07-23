import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0d1f1a] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        
        {/* Contact */}
        <div>
          <h4 className="text-sky-400 font-semibold text-lg mb-4 flex items-center gap-2">
            <FaEnvelope /> Contact Us
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <FaEnvelope className="inline mr-2 text-sky-300" />
              ayaaf@yaoafrica.org
            </li>
            <li>
              <FaPhoneAlt className="inline mr-2 text-sky-300" />
              +254 780 786 999
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sky-400 font-semibold text-lg mb-4">🌍 Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/packages" className="hover:text-yellow-400 transition">Packages</Link></li>
            <li><Link to="/register" className="hover:text-yellow-400 transition">Register</Link></li>
            <li><Link to="/cart" className="hover:text-yellow-400 transition">Cart</Link></li>
            <li><Link to="/admin" className="hover:text-yellow-400 transition">Admin Dashboard</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sky-400 font-semibold text-lg mb-4">📢 Follow Us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <FaInstagram className="text-yellow-400" />
              <a
                href="https://instagram.com/ayaafkenya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                @ayaafkenya
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-yellow-400" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                AYAAF 2025 Nairobi
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-white/40 py-6">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">AYAAF</span> — Empowering Youth Through Aviation & Aerospace in Africa.
      </div>
    </footer>
  );
}
