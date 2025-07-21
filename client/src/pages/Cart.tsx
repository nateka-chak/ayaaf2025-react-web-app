import useCart from '../context/useCart';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  // When user clicks confirm, go to payment details page
  const handleConfirm = () => {
    navigate('/payment');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-900 dark:text-green-300 mb-6 text-center">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg">Your cart is currently empty.</p>
          <p className="text-sm mt-2">Explore <span className="text-yellow-600 font-semibold">Packages</span> and add one to proceed.</p>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-[#fff9ec] dark:bg-[#183527] rounded-xl shadow p-4"
              >
                <div>
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">{item.name}</h4>
                  {/* Removed item.details because CartItem does not have a details property */}
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

          <div className="mt-8 text-center">
            {/* Button now navigates to payment details page */}
            <button
              onClick={handleConfirm}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-full shadow transition"
            >
              ✅ Confirm & Register
            </button>
          </div>
        </>
      )}
    </div>
  );
}
