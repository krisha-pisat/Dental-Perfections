import React, { useMemo } from "react";
import { motion } from "framer-motion";

// 1. IMPORT all your images from the src/images folder
import OrthodonticsImage from "../images/Orthodontics.jpg";
import EndodonticsImage from "../images/endodontics.webp";
import VeneersImage from "../images/veneers.webp";
import BleachingImage from "../images/bleeching.jpeg";
import CosmeticImage from "../images/cosmetic.webp";
import ImplantsImage from "../images/implants.webp";
import FullMouthImage from "../images/fullmouth.webp";
import MinorSurgeriesImage from "../images/minor.webp";


// Keep your GROUPS data structure exactly as it is
const GROUPS = [
  {
    groupKey: "maintain",
    items: [
      {
        title: "Orthodontics",
        image: OrthodonticsImage, // 2. USE the imported variable
        points: [
          "Correct teeth alignment and bite.",
          "Improves facial symmetry and smile aesthetics.",
          "Reduces long-term wear and periodontal risks.",
        ],
      },
      {
        title: "Endodontics",
        image: EndodonticsImage, // 2. USE the imported variable
        points: [
          "Root canal therapy to save infected teeth.",
          "Relieves severe dental pain & infection.",
          "Preserves the natural tooth structure.",
        ],
      },
    ],
  },
  {
    groupKey: "enhance",
    items: [
      {
        title: "Veneers & Crowns",
        image: VeneersImage, // 2. USE the imported variable
        points: [
          "Corrects shape, size and color of teeth.",
          "Strengthens damaged teeth with natural finish.",
          "Ideal for cosmetic smile improvements.",
        ],
      },
      {
        title: "Laser Tooth Bleaching",
        image: BleachingImage, // 2. USE the imported variable
        points: [
          "Advanced, fast and safe whitening.",
          "Brightens teeth with minimal sensitivity.",
          "Great for one-session visible improvement.",
        ],
      },
      {
        title: "Cosmetic Dentistry",
        image: CosmeticImage, // 2. USE the imported variable
        points: [
          "Smile makeovers tailored to individual goals.",
          "Fixes chips, gaps, stains and uneven teeth.",
          "Combination of veneers, bonding, shaping.",
        ],
      },
    ],
  },
  {
    groupKey: "restore",
    items: [
      {
        title: "Implants",
        image: ImplantsImage, // 2. USE the imported variable
        points: [
          "Permanent, natural-looking tooth replacement.",
          "Restores chewing function and bone health.",
          "Long-lasting and highly reliable solution.",
        ],
      },
      {
        title: "Full Mouth Restoration",
        image: FullMouthImage, // 2. USE the imported variable
        points: [
          "Comprehensive rehabilitation of teeth & bite.",
          "Custom staged plan for function & aesthetics.",
          "Combines crowns, bridges, implants and more.",
        ],
      },
      {
        title: "Minor Surgeries",
        image: MinorSurgeriesImage, // 2. USE the imported variable
        points: [
          "Safe extraction and minor oral surgical care.",
          "Swift recovery with attentive post-op care.",
          "Improves comfort and facilitates further treatments.",
        ],
      },
    ],
  },
];


// Animation for main content fade-in
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation for faded background text
const titleSlideDown = {
  hidden: { opacity: 0, y: -60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

// Function to add line breaks for long titles in faded text
const formatTitle = (title) => {
  if (title.includes('&') || title.split(' ').length > 2) {
    return title.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>);
  }
  return title;
};

const TreatmentsSection = () => {
  const flattened = useMemo(() => {
    const arr = [];
    GROUPS.forEach((g) => {
      g.items.forEach((item) => {
        arr.push({ ...item, groupKey: g.groupKey });
      });
    });
    return arr;
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-[#e0f2f7]/30 to-white text-[#333] py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#10b981]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Simple geometric shape */}
         <motion.div
          className="absolute top-20 right-20 w-16 h-16 border-2 border-[#10b981]/30 rounded-lg opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {/* Top Title */}
        <motion.div
          className="text-center"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d5c63]">
            Our Treatments
          </h1>
          <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Detailed, patient-focused dental treatments. Click Learn More to read
            about each procedure.
          </p>
        </motion.div>

        {/* Treatment Cards */}
        {flattened.map((item, globalIndex) => {
          const isReversed = globalIndex % 2 === 1;

          return (
            <motion.div
              key={item.title + globalIndex}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
            >
              {/* Faded Background Title */}
              <motion.h2
                className={`pointer-events-none select-none absolute top-0 mt-4 leading-[0.85] font-black tracking-tighter text-[#10b981]/10 z-0
                  ${isReversed ? 'left-0 lg:-left-4 text-left' : 'right-0 lg:-right-4 text-right'}
                `}
                style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }} // Responsive font size
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={titleSlideDown}
              >
                {formatTitle(item.title)}
              </motion.h2>

              {/* Image Card with Glass Effect */}
              <motion.div
                className="w-full md:w-1/2 z-10 group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-xl hover:shadow-2xl transition-shadow duration-400">
                  <div className="p-1.5"> {/* Padding creates the border effect */}
                    <div className="overflow-hidden rounded-2xl relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-72 md:h-80 object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Corner Accent */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-70 blur-sm group-hover:opacity-90 transition-opacity duration-400" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="w-full md:w-1/2 z-10 space-y-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#0d5c63]">
                    {item.title}
                  </h3>
                  <div className="mt-2 h-1 w-16 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full" />
                </div>

                <ul className="space-y-2.5">
                  {item.points.map((p, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-gray-600"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    >
                      {/* Checkmark Icon */}
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#10b981] to-[#0d5c63] flex items-center justify-center mt-0.5 shadow-sm">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      </span>
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-block mt-4" // Ensures button doesn't stretch
                >
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#10b981] to-[#0d5c63] text-white font-medium rounded-full shadow-md hover:shadow-lg hover:from-[#138b8f] hover:to-[#0d5c63] transition-all duration-300 group">
                    Learn More
                    {/* Arrow Icon */}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TreatmentsSection;