import { Link } from 'react-router-dom';

export default function Navbar() {
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
          <a href="#registration" className="hover:text-sky-300 transition scroll-smooth">Register</a>
          <a href="#volunteers" className="hover:text-sky-300 transition scroll-smooth">Volunteer</a>
        </div>
      </div>
    </nav>
  );
}
