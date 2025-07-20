import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcf8f3] to-[#fffdf6] dark:from-[#0a1a12] dark:to-[#0d1f14] text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 bg-[url('/assets/savannah.jpg')] bg-cover bg-center">
        <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-10 inline-block max-w-3xl">
          <motion.h2
            className="text-5xl font-extrabold mb-4 text-yellow-300 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Africa Youth Aviation & Aerospace Forum 2025
          </motion.h2>
          <p className="text-lg text-white leading-relaxed">
            🛫 4th - 8th August · Nairobi, Kenya <br />
            Step into the wild, soar with ambition — be part of Africa’s aviation evolution.
          </p>
          <div className="mt-6">
            <Link
              to="/register"
              className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition"
            >
              Confirm Attendance
            </Link>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-bold text-green-900 dark:text-green-300 mb-4">
            Why Attend?
          </h3>
          <p className="text-lg leading-relaxed">
            🌍 Connect with aviation leaders and youth across Africa. <br />
            🛩️ Get mentorship, insights & real-world exposure. <br />
            🦓 Immerse in Kenya’s safari culture while advancing your future!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#fff9ec] dark:bg-[#183527] rounded-xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-200">
              Member Package – Ksh 4,800
            </h4>
            <p>🎫 Full access to all sessions, safari tour, aviation kits, and meals. Exclusive to Young Aviators Club members.</p>
          </div>
          <div className="bg-[#fff9ec] dark:bg-[#183527] rounded-xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-200">
              Non-member Package – Ksh 5,500
            </h4>
            <p>🎟️ Open to the public. Includes event access, workshops, certificates, meals, and AYAAF souvenir kits.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
