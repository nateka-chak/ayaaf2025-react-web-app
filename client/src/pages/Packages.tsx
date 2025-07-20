import { useCart } from '../context/CartContext';

export default function Packages() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Select Your Package</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded bg-white shadow">
          <h3 className="text-xl font-semibold">Member – Ksh 4800</h3>
          <p>Includes full event access, lunch & AYAAF kit.</p>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() =>
              addToCart({ name: 'Member Package', price: 4800, type: 'member' })
            }
          >
            Add to Cart
          </button>
        </div>
        <div className="border p-4 rounded bg-white shadow">
          <h3 className="text-xl font-semibold">Non-member – Ksh 5500</h3>
          <p>Includes access + free souvenir kit.</p>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() =>
              addToCart({ name: 'Non-member Package', price: 5500, type: 'non-member' })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
