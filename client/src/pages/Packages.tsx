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
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* AYAAF Packages */}
      <motion.h2
        className="text-4xl font-bold text-green-900 dark:text-green-300 text-center mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎫 Select Your AYAAF 2025 Package
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Member Package */}
        <motion.div
          className="bg-[#fff9ec] dark:bg-[#183527] rounded-xl shadow-lg p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-2">
            🛩️ Member Package – Ksh 4,800
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            ✅ Full event access <br />
            🍽️ Lunch included <br />
            🎒 Official AYAAF kit <br />
            🦅 Exclusive to Young Aviators Club
          </p>
          <button
            onClick={() =>
              addToCart({ name: 'Member Package', price: 4800, type: 'member' })
            }
            className="mt-6 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition"
          >
            Add to Cart
          </button>
        </motion.div>

        {/* Non-member Package */}
        <motion.div
          className="bg-[#fff9ec] dark:bg-[#183527] rounded-xl shadow-lg p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-2">
            🌍 Non-member Package – Ksh 5,500
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            ✅ Full access to all sessions <br />
            🎁 Free AYAAF souvenir kit <br />
            📜 Participation certificate <br />
            🍱 Meals included
          </p>
          <button
            onClick={() =>
              addToCart({ name: 'Non-member Package', price: 5500, type: 'non-member' })
            }
            className="mt-6 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>

      {/* Sponsorship Section */}
      <motion.h2
        className="text-3xl font-bold text-yellow-500 dark:text-yellow-300 text-center mb-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌟 Sponsorship Opportunities
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {sponsorPackages.map((pkg) => (
          <motion.div
            key={pkg.name}
            className="bg-[#fef3c7] dark:bg-[#2d2d2d] rounded-xl shadow-lg p-6"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 220 }}
          >
            <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-300 mb-2">
              🥇 {pkg.name} Sponsor
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
              Ksh {pkg.amount}
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Link
              to="/payment"
              className="inline-block mt-6 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full text-center transition"
            >
              Sponsor Now
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
