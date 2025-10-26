import React from 'react'; // Added React import
import { motion } from 'framer-motion';

const treatments = [
  {
    title: "General Dentistry",
    description: "Comprehensive care for your everyday dental needs.",
    image: "/general-dentistry.webp", // Assuming images are in public
  },
  {
    title: "Cosmetic Dentistry",
    description: "Cosmetic care designed to enhance your smile. Virtual consults available!",
    image: "/cosmetic-dentistry.webp",
  },
  {
    title: "Oral Surgery",
    description: "Surgical care for complex dental issues.",
    image: "/oral-surgery.webp",
  },
];

const TreatmentsSection = () => { // Changed export const TreatmentsSection = () => to const TreatmentsSection = () => { ... } export default TreatmentsSection;
  return (
    <section className="py-24 bg-white"> {/* bg-background to bg-white */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          // text-primary to text-[#1e3a8a], font-display to font-playfair
          className="text-3xl md:text-4xl font-playfair font-semibold text-[#1e3a8a] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tailored treatments just for you
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                {/* from-primary via-primary/80 to from-[#1e3a8a] via-[#1e3a8a]/80 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text container - slides up on hover */}
                {/* from-primary to from-[#1e3a8a], text-primary-foreground to text-white */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1e3a8a] to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center p-6 text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-3">{treatment.title}</h3> {/* font-display to font-playfair */}
                  <p className="text-sm text-gray-200 leading-relaxed">{treatment.description}</p> {/* text-primary-foreground/90 to text-gray-200 */}
                </div>

                {/* Title visible by default at bottom */}
                {/* from-foreground/80 to from-black/80, text-background to text-white */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-playfair font-bold text-white">{treatment.title}</h3> {/* font-display to font-playfair */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Replaced custom Button with standard button + motion */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#c5a36b] hover:bg-[#b08d57] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300" // bg-gold to bg-[#c5a36b], hover:bg-gold-dark to hover:bg-[#b08d57], text-gold-foreground to text-white
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentsSection; // Added default export