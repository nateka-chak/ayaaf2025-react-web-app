import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../context/useCart';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-[#0a1a16] text-white sticky top-0 z-50 shadow-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="AYAAF Logo" className="h-9 w-9" />
          <span className="text-xl sm:text-2xl font-bold text-sky-400 tracking-tight">AYAAF</span>
        </Link>

        {/* Nav Links & Cart */}
        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
          <a href="#registration" className="hover:text-sky-300 transition scroll-smooth">Registration</a>
          <a href="#volunteers" className="hover:text-sky-300 transition scroll-smooth">Volunteer</a>
          <a href="#sponsorship" className="hover:text-sky-300 transition scroll-smooth">Sponsorship</a>

          <Link to="/cart" className="relative hover:text-sky-300 transition">
            <FaShoppingCart className="text-lg" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-sky-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
