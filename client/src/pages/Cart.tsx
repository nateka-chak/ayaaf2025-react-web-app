import useCart from '../context/useCart';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/payment');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-10">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg font-medium">Your cart is currently empty.</p>
          <p className="text-sm mt-2">
            Explore <span className="text-sky-500 font-semibold">Packages</span> and add one to proceed.
          </p>
        </div>
      ) : (
        <>
          <ul className="space-y-5">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-white/80 dark:bg-[#0f2a1f] border border-gray-100 dark:border-[#1a3b2c] rounded-xl shadow-md px-6 py-4 transition hover:shadow-lg"
              >
                <div>
                  <h4 className="text-lg font-semibold text-green-800 dark:text-sky-300">
                    {item.name}
                  </h4>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-600 hover:text-red-400 transition"
                  aria-label="Remove from cart"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <button
              onClick={handleConfirm}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-base px-8 py-3 rounded-full shadow-md transition"
            >
              ✅ Confirm & Register
            </button>
          </div>
        </>
      )}
    </div>
  );
}
