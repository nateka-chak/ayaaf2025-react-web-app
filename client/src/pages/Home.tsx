import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";
import logo from "../assets/logo.png";
import safariBg from "../assets/safari.jpg";
import Packages from "../components/Packages";
import { Link } from "react-router-dom";
import GallerySection from "../components/GallerySection";


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const splash = setTimeout(() => setShowSplash(false), 2500);
    const tick = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => {
      clearTimeout(splash);
      clearInterval(tick);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans bg-black text-white">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={logo}
              alt="AYAAF Logo"
              className="w-32 h-32"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <main className="">
            {/* Hero / Registration section */}
            <section
              id="registration"
              className="relative min-h-[60vh] flex flex-col items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-skyblue.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/80 to-sky-900/80"></div>
              <motion.div
                className="relative z-10 text-center px-6 max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-sky-400 drop-shadow-lg">
                  Africa Youth Aviation & Aerospace Forum 2025
                </h1>
                <p className="mt-4 text-lg text-white/90">
                  <strong>4th–8th August · Nairobi, Kenya</strong>
                  <br />
                  Step into the wild. Soar with ambition.
                </p>
                <a
                  href="http://bit.ly/4iUYVpE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-sky-400 text-black py-3 px-8 rounded-full font-bold shadow-lg hover:bg-sky-300 transition"
                >
                  Confirm Attendance
                </a>
              </motion.div>
              <motion.div
                className="relative z-10 flex justify-center gap-6 font-mono pt-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <span className="text-3xl font-bold">{value}</span>
                    <div className="uppercase text-xs tracking-widest">
                      {unit}
                    </div>
                  </div>
                ))}
              </motion.div>
            </section>

            {/* Intro Video */}
            <section className="py-10 bg-black px-4">
              <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
                <video
                  src="/introvideo.mp4"
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="w-full object-cover"
                />
              </div>
            </section>

{/* Gallery Section */}
<GallerySection />

            {/* About AYAAF */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
              <motion.div
                className="bg-white/5 p-10 rounded-2xl backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-sky-400 mb-6" >AYAAF 2025 EVENT</h2>
                <p className="italic text-white/70 mb-6 text-lg">The Africa Youth Aviation & Aerospace Forum (YAOAfrica) is a five-day, Pan-African event dedicated to
empowering African youth to lead the continent’s aviation and aerospace future. Led by Captain Mercy
Makau and the Young Aviators Club of Africa (YACAfrica), the forum aims to inspire, connect, and equip
youth across all 54 African countries with practical knowledge, skills, and networking opportunities. The
forum will take place in August, 2025, to commemorate International Youth Day on August 12th of that
month.
This transformative platform brings together students, professionals, policymakers, innovators, and
stakeholders to promote leadership, sustainability, and innovation in aviation and aerospace. Through
hands-on activities,</p>
                <h2 className="text-4xl font-bold text-sky-400 mb-6">
                  About AYAAF
                </h2>
                <p className="italic text-white/70 mb-6 text-lg">
                  "Empowering Africa’s Future: Youth at the Helm of Aviation &
                  Aerospace."
                </p>
                <p className="mb-4">
                  The <strong>Africa Youth Aviation & Aerospace Forum</strong>{" "}
                  is a Pan-African gathering led by{" "}
                  <strong>Captain Mercy Makau</strong> and{" "}
                  <strong>YACAfrica</strong>, uniting youth leaders through
                  aviation experiences, knowledge, and networking.
                </p>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-sky-300 mb-2">
                      Our Vision
                    </h3>
                    <p>
                      Position African youth as leaders in aviation & aerospace
                      innovation for a sustainable future.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-sky-300 mb-2">
                      Key Objectives
                    </h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Equip with drone/satellite skills</li>
                      <li>Drive eco-friendly aviation tech</li>
                      <li>Showcase youth innovations</li>
                      <li>Foster partnerships</li>
                      <li>Celebrate African identity</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Why Attend */}
            <Parallax bgImage={safariBg} strength={400}>
              <section className="py-20 px-6 max-w-6xl mx-auto">
                <motion.div
                  className="bg-black/70 backdrop-blur-lg p-10 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl font-extrabold text-sky-300 mb-8 text-center">
                    Why Attend AYAAF 2025?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Workshops on drones & leadership",
                      "Innovation challenges in AI safety",
                      "Prototype exhibitions",
                      "Leadership panels",
                      "SAATM connectivity",
                      "Cultural storytelling",
                      "Digital mentorship",
                      "Incubator & clubs",
                    ].map((t, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/10 hover:bg-white/20 p-6 rounded-xl transition"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <p>{t}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            </Parallax>

            {/* Schedule as Tab Styled Cards */}
<section className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-extrabold text-sky-300 text-center mb-10">
    Event Program
  </h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        day: "Day 1",
        title: "Cleared for Take-off",
        events: [
          "Arrival & Registration: Participants check-in, receive materials, and settle in.",
          "Official Opening & Keynote: Formal commencement with addresses from forum chair and leaders.",
          "Career & Training Insights: Interactive sessions on aviation and aerospace career paths.",
          "Story Behind the Wings: Inspiring journeys by seasoned aviation professionals.",
          "Reception & Cultural Performances: Networking session with cultural showcases.",
        ],
      },
      {
        day: "Day 2",
        title: "Soaring to New Heights",
        events: [
          "Morning Wellness Session: Prepare for the day with physical and mental focus.",
          "Keynote Speeches & Thematic Panels: AI, automation, drones, and mobility in Africa.",
          "Innovation Spotlight (Prototypes): Youth showcase projects to industry leaders.",
          "Networking & Speed Mentorship: 1-on-1 career guidance with professionals.",
          "Digital Platform Showcase: Tools for continued learning, networking, and mentorship.",
        ],
      },
      {
        day: "Day 3",
        title: "Navigating the Skies",
        events: [
          "Morning Wellness Session: Mindfulness and resilience for personal growth.",
          "Regulatory & Operational Insights: Safety and operations from top authorities.",
          "Innovation Spotlight (Verbal Ideas): Youth pitch their ideas and solutions.",
          "Workshops & Challenges: Topics on sustainability, regional connectivity, and more.",
          "Campfire Story Night: Celebrating African heritage and storytelling.",
        ],
      },
      {
        day: "Day 4",
        title: "Beyond the Horizon",
        events: [
          "Morning Wellness Session: Leadership and strategic thinking activities.",
          "Aerospace & Space Tech Sessions: Masterclasses on Africa’s space economy and astronomy.",
          "Innovation Spotlight (Proposed Solutions): Youth propose solutions to aerospace challenges.",
          "Networking & Industry Collaboration: Connect with space agencies and stakeholders.",
          "Africa Dinner, Dance, and Sky Observation: Cultural celebration and stargazing.",
        ],
      },
      {
        day: "Day 5",
        title: "Landing with Purpose",
        events: [
          "Morning Wellness Session: Reflections and leadership aspirations.",
          "Youth Leadership & Empowerment: Discussions on skills, education, and leadership.",
          "Closing Ceremony: Forum summary, recognitions, and future roadmap keynote.",
          "Airport Immersion Tour: Visit to a major airport for operational insights.",
        ],
      },
    ].map((d, i) => (
      <motion.div
        key={i}
        className="bg-white/5 rounded-t-lg shadow-lg border-t-4 border-sky-300 p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">{d.day}</span>
          <span className="text-sky-400 font-semibold">{d.title}</span>
        </div>
        <ul className="list-disc pl-5 text-white/80 space-y-1 text-sm">
          {d.events.map((e, j) => (
            <li key={j}>{e}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</section>

            {/* Packages */}
            <section id="sponsorship">
            <Packages />
            </section>

            {/* Project Registration */}
<section id="project-registration" className="py-12 px-6 max-w-6xl mx-auto">
  <motion.div
    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-extrabold text-sky-300 mb-4">Showcase Your Project</h2>
    <p className="text-white/80 mb-6">
      Apply to present your innovative ideas during AYAAF 2025's Project Showcase.
    </p>
    <Link to="/project-registration"
      className="inline-block bg-sky-400 hover:bg-sky-300 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300"
    >
      Register Project
    </Link>
  </motion.div>
</section>

{/* Speakers Registration */}
<section id="speaker-registration" className="py-12 px-6 max-w-6xl mx-auto">
  <motion.div
    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    <h2 className="text-3xl font-extrabold text-sky-300 mb-4">Interested in Speaking?</h2>
    <p className="text-white/80 mb-6">
      Submit your application to be a speaker at AYAAF 2025.
    </p>
    <a href="https://forms.gle/W74tmRhfhGtw5a6m9"
      target="_blank" rel="noopener noreferrer"
      className="inline-block bg-sky-400 hover:bg-sky-300 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300"
    >
      Register as Speaker
    </a>
  </motion.div>
</section>

            {/* Call for Volunteers */}
            <section id="volunteers" className="py-20 max-w-6xl mx-auto">
              <motion.div
                className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 rounded-2xl shadow-2xl text-center text-white backdrop-blur-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Decorative Background Accent (Optional) */}
                <div className="absolute inset-0 opacity-10 bg-[url('/volunteer-bg.svg')] bg-no-repeat bg-cover pointer-events-none" />

                <h2 className="text-4xl md:text-5xl font-extrabold text-sky-300 drop-shadow mb-6 tracking-tight">
                  Call for Volunteers
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8">
                  Are you passionate about{" "}
                  <span className="font-semibold text-sky-300">aviation</span>,
                  event planning, or{" "}
                  <span className="font-semibold text-sky-300">
                    youth empowerment
                  </span>
                  ? Join the <strong>AYAAF 2025</strong> crew and help bring
                  Africa’s boldest aerospace forum to life.
                </p>

                <a
                  href="http://bit.ly/4iUYVpE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sky-400 hover:bg-sky-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Apply to Volunteer
                </a>
              </motion.div>
            </section>
            {/* Sponsors & Partners Section */}
<section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="text-center mb-10">
    <h2 className="text-4xl font-extrabold text-sky-400 mb-4">Our Sponsors & Partners</h2>
    <p className="text-white/80 text-lg max-w-xl mx-auto">
      We proudly acknowledge our amazing partners who make AYAAF 2025 possible.
    </p>
  </div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
  {[
    "/sponsors/logo1.png",
    "/sponsors/logo3.jpg",
    "/sponsors/logo4.png",
    "/sponsors/logo5.png",
  ].map((logo, i) => (
    <div
      key={i}
      className="bg-[#1f2937] p-4 rounded-md flex items-center justify-center shadow-md hover:shadow-sky-400/30 transition duration-300"
    >
      <img
        src={logo}
        alt={`Sponsor ${i + 1}`}
        className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
      />
    </div>
  ))}
</div>

</section>
          </main>
        </>
      )}
    </div>
  );
}

function calculateTimeLeft() {
  const target = +new Date("2025-08-04T00:00:00");
  const diff = target - +new Date();
  return {
    days: Math.max(Math.floor(diff / 86400000), 0),
    hours: Math.max(Math.floor((diff % 86400000) / 3600000), 0),
    minutes: Math.max(Math.floor((diff % 3600000) / 60000), 0),
    seconds: Math.max(Math.floor((diff % 60000) / 1000), 0),
  };
}
