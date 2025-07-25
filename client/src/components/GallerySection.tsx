// GallerySection.tsx
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';

export default function GallerySection() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  const posters = [poster1, poster2, poster3];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-sky-400 mb-4">Event Posters Gallery</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Explore the official visuals for AYAAF 2025. Designed to inspire, share, and promote our mission.
        </p>
      </motion.div>

      <div ref={sliderRef} className="keen-slider">
        {posters.map((poster, i) => (
          <motion.div
            key={i}
            className="keen-slider__slide bg-white/5 border border-white/10 overflow-hidden rounded-lg shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <img
              src={poster}
              alt={`AYAAF Poster ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
