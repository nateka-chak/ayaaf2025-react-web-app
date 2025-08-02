import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Packages() {
  const sponsorPackages = [
    {
      name: 'Platinum',
      amount: '1,000,000',
      features: [
        'Keynote Speaking Slot',
        'Prime Exhibition Booth',
        'Top Logo Placement',
        'Exclusive PR Mentions',
        'Branded Session',
        'VIP Networking',
        'Max Delegate Passes',
      ],
    },
    {
      name: 'Gold',
      amount: '750,000',
      features: [
        'Panel Speaking Slot',
        'Exhibition Booth',
        'Large Logo Placement',
        'Social Mentions',
        'Branded Session',
        'VIP Networking',
        'Delegate Passes',
      ],
    },
    {
      name: 'Silver',
      amount: '500,000',
      features: [
        'Exhibition Booth',
        'Medium Logo Placement',
        'Social Mentions',
        'VIP Networking',
        'Delegate Passes',
      ],
    },
    {
      name: 'Bronze',
      amount: '300,000',
      features: [
        'Small Logo Placement',
        'Social Mentions',
        'Delegate Passes',
      ],
    },
  ];

  const memberPackages = [
    {
      title: 'YACAfrica Member – Ksh 4,950',
      features: [
        'Full Event Access',
        'Lunch Included',
        'Official AYAAF Kit',
        'Exclusive to YACA Members',
      ],
      link: 'https://bit.ly/ayaafyouth',
      external: true,
    },
    {
      title: 'Non-member – Ksh 5,500',
      features: [
        'All Sessions Access',
        'Souvenir Kit',
        'Certificate of Participation',
        'Meals Included',
      ],
      link: 'https://bit.ly/ayaafyouth',
      external: true,
    },
    {
      title: 'Delegate – Ksh 10,000',
      features: [
        'Full Delegate Badge',
        'Exhibition Walkthrough',
        'Networking Sessions',
      ],
      link: 'https://bit.ly/ayaafdelegate',
      external: true,
    },
    {
      title: 'Exhibitor – Ksh 25,000',
      features: [
        'Exhibition Stand',
        'Promotional Materials',
        'Full Access Pass',
      ],
      link: '/register-exhibitor',
      external: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6 text-white">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-sky-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        AYAAF 2025 Packages
      </motion.h2>

      {/* Member & Attendee Packages */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {memberPackages.map((pkg, i) => (
          <motion.div
            key={i}
            className="bg-[#0f172a] border border-white/10 rounded-xl p-6 shadow-lg transition hover:shadow-sky-400/30 hover:scale-[1.02]"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-sky-300 mb-4">{pkg.title}</h3>
            <ul className="space-y-2 text-white/90 text-sm">
              {pkg.features.map((item, j) => (
                <li key={j} className="flex items-start gap-2">✔ {item}</li>
              ))}
            </ul>

            {pkg.external ? (
              <a
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full text-center py-2 bg-sky-400 text-black font-bold rounded-full hover:bg-sky-300 transition"
              >
                Register Now
              </a>
            ) : (
              <Link
                to={pkg.link}
                className="mt-6 block w-full text-center py-2 bg-sky-400 text-black font-bold rounded-full hover:bg-sky-300 transition"
              >
                Register Now
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Sponsorship Section */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-sky-300 mb-12"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ✨ Sponsorship Opportunities
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sponsorPackages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            className="bg-white/5 border border-white/10 rounded-lg p-5 shadow-lg transition hover:scale-[1.03]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-sky-400 mb-2">
              {pkg.name} Sponsor
            </h3>
            <p className="text-lg font-medium mb-3">Ksh {pkg.amount}</p>
            <ul className="list-disc ml-5 space-y-1 text-sm text-white/80">
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Link
              to="/payment"
              className="block mt-5 text-center bg-sky-400 text-black font-bold py-2 rounded-full hover:bg-sky-300 transition"
            >
              Sponsor Now
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
