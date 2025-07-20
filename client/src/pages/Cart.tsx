import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleConfirm = () => {
    alert('Thank you! Your attendance is confirmed.');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between border p-3 rounded">
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button onClick={handleConfirm} className="bg-green-600 text-white px-6 py-2 rounded">
              Confirm & Register
            </button>
          </div>
        </>
      )}
    </div>
  );
}
