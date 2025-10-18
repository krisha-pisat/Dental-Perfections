// TreatmentsSection.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * All treatments (one card per treatment). They are grouped but the alternation
 * of image side uses a GLOBAL index so images truly alternate across groups.
 *
 * Replace image paths with your own.
 */

const GROUPS = [
  {
    groupKey: "maintain",
    fadeWord: "Maintain",
    items: [
      {
        title: "Orthodontics",
        image: "/images/orthodontics.jpg",
        points: [
          "Correct teeth alignment and bite.",
          "Improves facial symmetry and smile aesthetics.",
          "Reduces long-term wear and periodontal risks.",
        ],
      },
      {
        title: "Endodontics",
        image: "/images/endodontics.jpg",
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
    fadeWord: "Enhance",
    items: [
      {
        title: "Veneers & Crowns",
        image: "/images/veneers.jpg",
        points: [
          "Corrects shape, size and color of teeth.",
          "Strengthens damaged teeth with natural finish.",
          "Ideal for cosmetic smile improvements.",
        ],
      },
      {
        title: "Laser Tooth Bleaching",
        image: "/images/bleaching.jpg",
        points: [
          "Advanced, fast and safe whitening.",
          "Brightens teeth with minimal sensitivity.",
          "Great for one-session visible improvement.",
        ],
      },
      {
        title: "Cosmetic Dentistry",
        image: "/images/cosmetic.jpg",
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
    fadeWord: "Restore",
    items: [
      {
        title: "Implants",
        image: "/images/implants.jpg",
        points: [
          "Permanent, natural-looking tooth replacement.",
          "Restores chewing function and bone health.",
          "Long-lasting and highly reliable solution.",
        ],
      },
      {
        title: "Full Mouth Restoration",
        image: "/images/fullmouth.jpg",
        points: [
          "Comprehensive rehabilitation of teeth & bite.",
          "Custom staged plan for function & aesthetics.",
          "Combines crowns, bridges, implants and more.",
        ],
      },
      {
        title: "Minor Surgeries",
        image: "/images/minor.jpg",
        points: [
          "Safe extraction and minor oral surgical care.",
          "Swift recovery with attentive post-op care.",
          "Improves comfort and facilitates further treatments.",
        ],
      },
    ],
  },
];

/* animation variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const headingSlideFromTop = {
  hidden: { opacity: 0, y: -80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

const TreatmentsSection = () => {
  // Build a flat list with group references so we can alternate by global index
  const flattened = useMemo(() => {
    const arr = [];
    GROUPS.forEach((g) => {
      g.items.forEach((item) => {
        arr.push({ ...item, groupKey: g.groupKey, fadeWord: g.fadeWord });
      });
    });
    return arr;
  }, []);

  return (
    <section className="bg-white text-gray-700 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Top title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
            Our Treatments
          </h1>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Detailed, patient-focused dental treatments. Click Learn More to
            read about each procedure.
          </p>
        </div>

        {/* Render by groups so faded headings sit with their items */}
        {GROUPS.map((group) => {
          // determine start index in flattened list for this group's first item
          const startIndex = flattened.findIndex((f) => f.groupKey === group.groupKey);

          return (
            <div key={group.groupKey} className="relative">
              {/* Faded big background word (slides from top) */}
              <motion.h2
                className="pointer-events-none select-none absolute -top-12 left-4 lg:left-0 text-[5.5rem] sm:text-[6.5rem] md:text-[8rem] font-extrabold text-gray-200 opacity-30 tracking-wide"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={headingSlideFromTop}
              >
                {group.fadeWord}
              </motion.h2>

              {/* Group items */}
              <div className="mt-12 space-y-12">
                {group.items.map((item, idxInGroup) => {
                  // compute global index: position in flattened array
                  const globalIndex = startIndex + idxInGroup;
                  const isReversed = globalIndex % 2 === 1; // alternate globally

                  return (
                    <motion.div
                      key={item.title}
                      className={`flex flex-col md:flex-row items-center gap-8 ${
                        isReversed ? "md:flex-row-reverse" : ""
                      }`}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {/* Image column */}
                      <motion.div
                        className="w-full md:w-1/2"
                        whileHover={{ scale: 1.025, y: -6 }}
                        transition={{ type: "spring", stiffness: 160, damping: 16 }}
                      >
                        <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                          {/* outer teal-like accent border (thin) */}
                          <div className="p-[4px]" style={{ background: "transparent" }}>
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 md:h-72 object-cover transform transition-transform duration-700 ease-out hover:scale-105"
                              />
                            </div>
                          </div>

                          {/* subtle overlay in left/top corner (optional) */}
                        </div>
                      </motion.div>

                      {/* Text column */}
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                          {item.points.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>

                        <div className="mt-6">
                          <button className="px-5 py-2 bg-[#0d5c63] text-white rounded-full shadow hover:bg-[#138b8f] transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TreatmentsSection;
