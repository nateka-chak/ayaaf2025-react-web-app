// ✅ src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import useAuth from '../context/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white dark:bg-[#071722] shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-700 dark:text-blue-300">AYAAF 2025</Link>
      <div className="space-x-4">
        <Link to="/packages">Packages</Link>
        <Link to="/cart">Cart</Link>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            {user.role === 'admin' && <Link to="/admin">Admin</Link>}
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}