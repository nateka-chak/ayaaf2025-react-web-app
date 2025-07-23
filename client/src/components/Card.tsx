export default function Card({
  title,
  desc,
  price,
  onClick,
}: {
  title: string;
  desc: string;
  price: number;
  onClick: () => void;
}) {
  return (
    <div className="bg-white dark:bg-[#1e2b25] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
        {desc}
      </p>

      <p className="text-lg font-semibold text-sky-600 dark:text-sky-400 mb-5">
        Ksh {price.toLocaleString()}
      </p>

      <button
        onClick={onClick}
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full transition-all duration-300 shadow-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
