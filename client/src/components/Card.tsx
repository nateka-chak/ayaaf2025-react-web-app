export default function Card({ title, desc, price, onClick }: { title: string; desc: string; price: number; onClick: () => void }) {
  return (
    <div className="border p-4 bg-white rounded shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{desc}</p>
      <p className="text-lg font-bold mb-4">Ksh {price.toLocaleString()}</p>
      <button onClick={onClick} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}
