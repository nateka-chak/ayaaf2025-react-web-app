import useCart from '../context/useCart';
import { motion } from 'framer-motion';

export default function Packages() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <motion.h2
        className="text-4xl font-bold text-green-900 dark:text-green-300 text-center mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎫 Select Your AYAAF 2025 Package
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
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
    </div>
  );
}
