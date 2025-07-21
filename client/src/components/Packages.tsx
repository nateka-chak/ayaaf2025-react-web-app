import useCart from '../context/useCart';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Packages() {
  const { addToCart } = useCart();

  const sponsorPackages = [
    {
      name: 'Platinum',
      amount: '1,000,000',
      features: [
        '✅ Keynote Speaking Slot',
        '✅ Exhibition Booth (Prime Location)',
        '✅ Logo on Event Materials & Website (Largest)',
        '✅ Social Media & PR Mentions (Exclusive Feature)',
        '✅ Branded Session or Workshop',
        '✅ VIP Networking Access',
        '✅ Delegate Passes (Most)',
      ],
    },
    {
      name: 'Gold',
      amount: '750,000',
      features: [
        '✅ Keynote Speaking Slot (Panel Seat)',
        '✅ Exhibition Booth',
        '✅ Logo on Event Materials & Website (Large)',
        '✅ Social Media & PR Mentions',
        '✅ Branded Session or Workshop',
        '✅ VIP Networking Access',
        '✅ Delegate Passes',
      ],
    },
    {
      name: 'Silver',
      amount: '500,000',
      features: [
        '❌ Keynote Speaking Slot',
        '✅ Exhibition Booth',
        '✅ Logo on Event Materials & Website (Medium)',
        '✅ Social Media & PR Mentions',
        '✅ Branded Session or Workshop',
        '✅ VIP Networking Access',
        '✅ Delegate Passes',
      ],
    },
    {
      name: 'Bronze',
      amount: '300,000',
      features: [
        '❌ Keynote Speaking Slot',
        '❌ Exhibition Booth',
        '✅ Logo on Event Materials & Website (Small)',
        '✅ Social Media & PR Mentions',
        '❌ Branded Session or Workshop',
        '❌ VIP Networking Access',
        '✅ Delegate Passes (Few)',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Main Packages */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-green-800 dark:text-green-200 mb-14 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      AYAAF 2025 Packages
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 mb-24">
        {[
          {
            title: ' Member Package – Ksh 4,950',
            details: [
              '✅ Full event access',
              '🍽️ Lunch included',
              '🎒 Official AYAAF kit',
              '🦅 Exclusive to Young Aviators Club',
            ],
            price: 4950,
            type: 'member',
          },
          {
            title: ' Non-member Package – Ksh 5,500',
            details: [
              '✅ Full access to all sessions',
              '🎁 Free AYAAF souvenir kit',
              '📜 Participation certificate',
              '🍱 Meals included',
            ],
            price: 5500,
            type: 'non-member',
          },
        ].map((pkg, idx) => (
          <motion.div
            key={idx}
            className="bg-white/80 dark:bg-[#1e3527]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl transition-all hover:scale-[1.02] hover:shadow-yellow-400/40"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">{pkg.title}</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-base">
              {pkg.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button
              onClick={() => addToCart({ name: pkg.title, price: pkg.price, type: pkg.type })}
              className="mt-8 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      {/* Sponsor Packages */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400 dark:text-yellow-300 mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sponsorship Opportunities
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {sponsorPackages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            className="bg-yellow-50/90 dark:bg-[#2d2d2d]/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl transition hover:scale-[1.02]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">
              {pkg.name} Sponsor
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-100 mb-4 font-semibold">
              Ksh {pkg.amount}
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 text-base">
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Link
              to="/payment"
              className="block mt-6 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full text-center transition"
            >
              Sponsor Now
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
