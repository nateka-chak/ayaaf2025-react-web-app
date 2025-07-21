import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import useAuth from '../context/useAuth';
import useCart from '../context/useCart';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="bg-[#011627] text-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
        <img src="/logo.png" alt="AYAAF Logo" className="h-8 w-8" />
        AYAAF
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/packages" className="hover:underline">Packages</Link>

        <Link to="/cart" className="relative hover:underline flex items-center gap-1">
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

        {!user ? (
          <>
            <Link to="/login" className="flex items-center gap-1 hover:underline"><FaUser />Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        ) : (
          <>
            {user.role === 'admin' && (
              <Link to="/admin" className="hover:underline">Admin</Link>
            )}
            <div className="flex items-center gap-2">
              <FaUserCircle className="text-xl text-yellow-400" />
              <span>{user.username || 'User'}</span>
            </div>
            <button onClick={logout} className="hover:text-red-400 flex items-center gap-1">
              <FaSignOutAlt /> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
