// ✅ src/components/Footer.tsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#011627] text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h5 className="text-lg font-semibold mb-2">Contact</h5>
          <p>Email: ayaaf@yaoafrica.org</p>
          <p>Phone: +254 780 786 999</p>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1">
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
          <p>Instagram: @ayaafkenya</p>
          <p>LinkedIn: AYAAF 2025 Nairobi</p>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">© 2025 AYAAF – Building Africa’s Aviation Future</p>
    </footer>
  );
}
