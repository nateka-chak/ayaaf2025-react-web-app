import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f4f8] dark:from-[#0b1c28] dark:to-[#020c12] text-gray-800 dark:text-white">
      <header className="bg-white dark:bg-[#071722] shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-400">
            AYAAF 2025
          </h1>
          <nav className="space-x-4">
            <Link to="/packages" className="hover:underline">
              Packages
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
            <Link to="/cart" className="hover:underline">
              Cart
            </Link>
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative text-center py-20 px-6 bg-[url('/assets/giraffe.jpg')] bg-cover bg-center">
        <div className="bg-black bg-opacity-60 rounded-xl p-10 inline-block max-w-2xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Africa Youth Aviation & Aerospace Forum 2025
          </motion.h2>
          <p className="text-lg text-white">
            4th - 8th August | Nairobi, Kenya <br />
            Join the movement shaping Africa’s Aviation Future!
          </p>
          <div className="mt-6">
            <Link
              to="/register"
              className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition"
            >
              Confirm Attendance
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">
            Why Attend?
          </h3>
          <p className="text-lg">
            🌍 Connect with leaders, youth, and innovators in the aviation industry.
            <br />🛫 Gain hands-on learning, mentorship, and real-world experience.
            <br />🚀 Be part of Africa's aviation future!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#12232e] rounded-xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">Member Package – Ksh 4,800</h4>
            <p>For Young Aviators Club Members. Includes all sessions, kits, and meals.</p>
          </div>
          <div className="bg-white dark:bg-[#12232e] rounded-xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">Non-member Package – Ksh 5,500</h4>
            <p>For general public. Includes full access and AYAAF 2025 souvenir.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#011627] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="text-lg font-semibold mb-2">Contact</h5>
            <p>Email: ayaaf@yaoafrica.org</p>
            <p>Phone: +254 780 786 999 / +254 777 094 999</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1">
              <li><Link to="/packages" className="hover:underline">Packages</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
              <li><Link to="/cart" className="hover:underline">Cart</Link></li>
              <li><Link to="/admin" className="hover:underline">Admin Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <p>Instagram, LinkedIn: AYAAF 2025 Nairobi</p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">© 2025 AYAAF – Building Human Capacity in Aviation and Aerospace</p>
      </footer>
    </div>
  );
}
// This is the Home component for the AYAAF 2025 web application, featuring a modern design with responsive layout, animations, and clear navigation links.
// It includes sections for event details, registration, and contact information, all styled with Tailwind CSS and Framer Motion for smooth transitions.
// The component is structured to provide a user-friendly experience, encouraging visitors to register and learn more about the event.
// The header contains navigation links, while the main section highlights the event's purpose and registration options with clear calls to action.
// The footer provides additional contact and social media information, ensuring users can easily find relevant details about the event and stay connected.         
