import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../context/useCart';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-[#0a1a16] text-white shadow-md sticky top-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-yellow-400"
      >
        <img src="/logo.png" alt="AYAAF Logo" className="h-9 w-9" />
        AYAAF 2025
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-sm md:text-base font-medium">
        {/* Dynamic Links */}

        {/* Cart */}
        <Link
          to="/cart"
          className="relative flex items-center gap-1 hover:text-yellow-400 transition"
        >
          <FaShoppingCart className="text-lg" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
