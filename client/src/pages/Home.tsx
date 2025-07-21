import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Parallax } from 'react-parallax';
import safariBg from '../assets/safari.jpg';
import Packages from '../components/Packages';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeModal, setActiveModal] = useState<'member' | 'nonmember' | null>(null);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date('2025-08-04T00:00:00');
    const now = new Date();
    const difference = +targetDate - +now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 2500);
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => {
      clearTimeout(splashTimer);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="w-32 h-32 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <div>

{/* Hero Section */} 
<section
  className="relative min-h-[50vh] flex flex-col items-center justify-center text-white bg-fixed bg-center bg-cover space-y-6"
  style={{ backgroundImage: 'url(/your-hero-bg.jpg)' }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/80 to-black/80 z-0" />

  {/* Content */}
  <motion.div
    className="relative z-10 text-center px-6 max-w-4xl"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 leading-tight drop-shadow-lg">
      Africa Youth Aviation & Aerospace Forum 2025
    </h1>
    <p className="mt-3 text-base md:text-lg text-white/90">
      <strong>4th – 8th August · Nairobi, Kenya</strong> <br />
      Step into the wild. Soar with ambition. Lead Africa's aviation evolution.
    </p>

    <div className="mt-6">
      <a
        href="http://bit.ly/4iUYVpE"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition-transform duration-300"
      >
        Confirm Attendance
      </a>
    </div>
  </motion.div>

  {/* Countdown – Blended Into Background */}
  <motion.div
    className="relative z-10 flex justify-center gap-6 text-white text-base sm:text-lg font-mono pt-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
      <div key={unit} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold">
          {timeLeft[unit as keyof typeof timeLeft]}
        </div>
        <div className="uppercase text-sm tracking-wide">
          {unit}
        </div>
      </div>
    ))}
  </motion.div>
</section>


          {/* Video Section */}
          <section className="py-8 px-4 bg-black bg-opacity-70">
            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <video
                src="/introvideo.mp4"
                controls
                autoPlay
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          
          {/* About AYAAF Section */}
          <section className="py-14 px-6 max-w-6xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1f2937] p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-yellow-300 mb-4">About AYAAF</h2>
              <p className="mb-6">
                The <strong>Africa Youth Aviation & Aerospace Forum (YAOAfrica)</strong> is a five-day Pan-African event
                led by <strong>Captain Mercy Makau</strong> and the <strong>Young Aviators Club of Africa (YACAfrica)</strong>. This forum
                aims to empower youth across Africa with skills, knowledge, and inspiration in aviation and aerospace—
                fostering leadership, sustainability, and innovation through hands-on activities and networking opportunities.
              </p>
              <p className="mb-4 italic text-yellow-100">
                "Empowering Africa’s Future: Youth at the Helm of Aviation & Aerospace."
              </p>

              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Our Vision</h3>
              <p className="mb-6">
                To position African youth at the forefront of aviation and aerospace innovation, driving sustainable growth,
                connectivity, and collaboration across the continent.
              </p>

              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Our Objectives</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Empower Youth: Equip participants with cognitive and practical aviation skills through drone/satellite demos.</li>
                <li>Foster Sustainability: Promote environmental consciousness via decarbonization strategies.</li>
                <li>Showcase Innovation: Platform for youth to present prototypes and inventions.</li>
                <li>Encourage Collaboration: Connect stakeholders locally & internationally.</li>
                <li>Integrate Heritage: Promote Africa’s identity through storytelling and cultural celebration.</li>
              </ul>
            </motion.div>
          </section>

{/* Why Attend Section */}
<Parallax bgImage={safariBg} strength={400}>
  <section className="py-20 px-6 max-w-6xl mx-auto">
    <motion.div
      className="bg-black/60 backdrop-blur-lg rounded-2xl p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-extrabold text-yellow-300 mb-10 text-center">
        Why Attend AYAAF 2025?
      </h2>

      <div className="grid md:grid-cols-2 gap-6 text-white">
        {[
          {
            icon: '🔧',
            text: 'Workshops on drones, aerospace, and leadership.',
          },
          {
            icon: '🌿',
            text: 'Innovation Challenges focused on climate & AI in aviation safety.',
          },
          {
            icon: '🎯',
            text: 'Interactive demos and prototype exhibitions.',
          },
          {
            icon: '🎙️',
            text: 'Leadership panels with experts & policymakers.',
          },
          {
            icon: '🛫',
            text: 'SAATM sessions exploring trade, tourism, and connectivity.',
          },
          {
            icon: '🌍',
            text: 'Cultural exchange via storytelling and performances.',
          },
          {
            icon: '💻',
            text: 'Access to a digital mentorship and resource platform.',
          },
          {
            icon: '🌱',
            text: 'Long-term impact via mentorship, clubs, and incubators.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 hover:bg-white/20 rounded-xl p-5 shadow-lg transition-all duration-300 flex items-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-3xl">{item.icon}</div>
            <p className="text-lg">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
</Parallax>


{/* Event Schedule Section */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] p-10 rounded-2xl shadow-lg text-white"
  >
    <h2 className="text-4xl font-extrabold text-yellow-300 text-center mb-12">
      AYAAF 2025 Schedule
    </h2>

    <div className="relative border-l-4 border-yellow-400 pl-6 space-y-10">
      {[
        {
          day: 'Day 1: Cleared for Takeoff',
          events: [
            'Arrival & Registration: Participant check-in, venue tour',
            'Welcome Cocktail: Cultural opening & networking',
          ],
        },
        {
          day: 'Day 2: Soaring to New Heights',
          events: [
            'Wellness Session: Physical & mental fitness',
            'Keynote Speeches + Thematic Presentations',
            'Exhibition Launch & Mentorship Speed Sessions',
            'Aerospace Night: Astronomy & stargazing',
          ],
        },
        {
          day: 'Day 3: Navigating the Skies',
          events: [
            'Youth Panels on policy & STEAMI',
            'Innovation Spotlight with youth judging',
            'Workshops & Problem Solving',
            'Campfire Story Night',
          ],
        },
        {
          day: 'Day 4: Beyond the Horizon',
          events: [
            'Leadership Masterclass: Space economy & tech',
            'Satellite Sessions (Intelsat, MaxIQ)',
            'Africa Dinner & Sky Observation at Nairobi Planetarium',
          ],
        },
        {
          day: 'Day 5: Landing with Purpose',
          events: [
            'Emerging Tech Masterclass',
            'Closing Ceremony & Innovation Awards',
          ],
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-yellow-400 shadow-md" />

          <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-md transition-all duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">{item.day}</h3>
            <ul className="list-disc ml-5 space-y-1 text-white text-sm sm:text-base">
              {item.events.map((ev, i) => (
                <li key={i}>{ev}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


          {/* Packages Section */}
          <Packages />


{/* Sponsors & Partners Section */}
<section className="py-16 px-6 max-w-7xl mx-auto">
  <motion.div
    className="bg-gradient-to-br from-black/80 via-gray-900/80 to-black/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg text-white"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Title */}
    <h2 className="text-4xl font-extrabold text-yellow-300 mb-6 text-center">
      Sponsors & Partners
    </h2>
    <p className="text-center text-white/90 mb-10 max-w-3xl mx-auto">
      We proudly collaborate with forward-thinking organizations and brands committed to youth empowerment in aviation and aerospace.
    </p>

   {/* Sponsor Logos */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
      {[
        '/sponsors/sponsor1.png',
        '/sponsors/sponsor2.png',
        '/sponsors/sponsor3.png',
        '/sponsors/sponsor4.png',
      ].map((src, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-clear rounded-lg h-24 flex items-center justify-center shadow-md transition overflow-hidden"
        >
          <img
            src={src}
            alt={`Sponsor ${index + 1}`}
            className="h-full object-contain p-2"
          />
        </motion.div>
      ))}
    </div>

  </motion.div>
</section>


{/* Call for Volunteers */}
<section className="py-20 px-6 max-w-6xl mx-auto">
  <motion.div
    className="relative bg-gradient-to-br from-[#1e3527] to-[#234535] p-10 rounded-2xl shadow-2xl text-center text-white backdrop-blur-md overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Decorative Accent */}
    <div className="absolute inset-0 opacity-10 bg-[url('/volunteer-bg.svg')] bg-no-repeat bg-cover pointer-events-none" />

    <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow mb-6 tracking-tight">
      Call for Volunteers
    </h2>

    <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8">
      Are you passionate about <span className="font-semibold text-yellow-300">aviation</span>,
      event planning, or <span className="font-semibold text-yellow-300">youth empowerment</span>?
      Join the <strong>AYAAF 2025</strong> crew and help bring Africa’s boldest aerospace forum to life.
    </p>

    <a
      href="http://bit.ly/4iUYVpE"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-md"
    >
      Apply to Volunteer
    </a>
  </motion.div>
</section>


          {/* Package Modals */}
          <AnimatePresence>
            {activeModal && (
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white text-black dark:bg-gray-800 dark:text-white max-w-lg w-full p-6 rounded-xl shadow-lg relative"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                >
                  <button
                    onClick={() => setActiveModal(null)}
                    className="absolute top-3 right-4 text-2xl font-bold hover:text-yellow-400"
                  >
                    &times;
                  </button>
                  {activeModal === 'member' ? (
                    <>
                      <h3 className="text-2xl font-bold mb-2 text-yellow-400">Member Package – Ksh 4,800</h3>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>✅ Full access to all sessions</li>
                        <li>✅ Exclusive aviation kits</li>
                        <li>✅ Safari tour experience</li>
                        <li>✅ Official meals & refreshments</li>
                        <li>✅ Priority mentorship slots</li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-2 text-yellow-400">Non-member Package – Ksh 5,500</h3>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>🎟️ Access to sessions & workshops</li>
                        <li>📜 Participation certificate</li>
                        <li>🍽️ All meals included</li>
                        <li>🎁 Souvenir welcome kit</li>
                        <li>🔍 Career networking sessions</li>
                      </ul>
                    </>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
