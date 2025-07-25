import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { motion } from "framer-motion";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";

export default function GallerySection() {
  const posters = [poster1, poster2, poster3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: false,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
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

      {/* Slider */}
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {posters.map((poster, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-white/5 border border-white/10 overflow-hidden rounded-xl shadow-md hover:shadow-sky-500/30 transition-all duration-300"
            >
              <img
                src={poster}
                alt={`AYAAF Poster ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-sky-400 text-black rounded-full p-2 hover:bg-sky-300 transition"
        >
          ←
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-400 text-black rounded-full p-2 hover:bg-sky-300 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
