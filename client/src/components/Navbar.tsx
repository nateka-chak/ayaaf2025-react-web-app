import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../context/useCart';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-[#011627] text-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
        <img src="/logo.png" alt="AYAAF Logo" className="h-8 w-8" />
        AYAAF
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        {/* Removed Packages, Login, and Register links for open access */}
        <Link to="/cart" className="relative hover:underline flex items-center gap-1">
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
        {/* You can add more links here if needed, e.g., Admin Dashboard */}
      </div>
    </nav>
  );
}
