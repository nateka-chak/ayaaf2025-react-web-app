import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative text-center py-20 px-6 bg-[url('/assets/giraffe.jpg')] bg-cover bg-center">
      <div className="bg-black bg-opacity-60 rounded-xl p-10 inline-block max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300">
          Africa Youth Aviation & Aerospace Forum 2025
        </h2>
        <p className="text-lg text-white">
          4th - 8th August | Nairobi, Kenya<br />Join the movement shaping Africa’s Aviation Future!
        </p>
        <div className="mt-6">
          <Link
            to="/register"
            className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-300"
          >
            Confirm Attendance
          </Link>
        </div>
      </div>
    </section>
  );
}
