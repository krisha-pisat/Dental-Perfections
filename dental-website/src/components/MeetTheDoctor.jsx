import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

// Reusable floating animation
const floatingAnimation = {
  y: ["-10px", "10px"],
  transition: {
    repeat: Infinity,
    repeatType: "reverse", // Removed 'as const'
    duration: 5,
    ease: "easeInOut", // Removed 'as const'
  },
};

const MeetTheDoctor = () => {
  return (
    <section
      className="py-24 bg-white relative overflow-hidden" // Changed bg-background to bg-white
      style={{ backgroundImage: `url(/subtle-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Removed absolute gradient overlay */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Doctor's Image */}
          <motion.div
            className="relative flex justify-center items-center"
            animate={floatingAnimation}
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Decorative circles - Simplified and used theme colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 to-[#34d399]/20 rounded-full blur-3xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-[#6ee7b7]/30 to-[#a5f3fc]/30 rounded-full" /> {/* Example light colors */}

              {/* Main circular frame */}
              <div className="relative w-full h-full bg-gray-100 rounded-full shadow-2xl border-8 border-white overflow-hidden"> {/* Changed border-background to border-white, bg-secondary to bg-gray-100 */}
                <img
                  src="/doctor-image.jpg" // Kept direct path assuming image is in public
                  alt="Dr. Minal Pisat"
                  className="w-full h-full object-cover -mt-10" // Adjusted margin slightly
                />
              </div>

              {/* Decorative accent dots - Used theme colors */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#1e3a8a] rounded-full shadow-lg" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#34d399] rounded-full shadow-lg" />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl text-[#1e3a8a] font-bold mb-3"> {/* font-display to font-playfair, text-navy to text-[#1e3a8a] */}
              MEET DR. MINAL PISAT
            </h1>
            <p className="text-[#34d399] font-semibold text-lg mb-6"> {/* text-accent to text-[#34d399] */}
              Providing customized, intimate care with innovative technology.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed"> {/* text-foreground/80 to text-gray-700 */}
              As the owner of Dental Perfections, Dr. Pisat is able to deliver top-quality care using her expertise and the latest dental advancements.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Here is just a sneak peek into what you can expect from Dr. Pisat:
            </p>
            <ul className="space-y-4 mb-8 text-gray-800"> {/* text-foreground/90 to text-gray-800 */}
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#34d399] text-xl flex-shrink-0" /> {/* text-accent to text-[#34d399] */}
                <span>One-on-one patient care</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#34d399] text-xl flex-shrink-0" />
                <span>Open and honest recommendations</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#34d399] text-xl flex-shrink-0" />
                <span>A personal connection</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#34d399] text-xl flex-shrink-0" />
                <span>Exceptional dentistry using the latest technology</span>
              </li>
            </ul>
            <div className="flex items-end justify-between gap-6">
              {/* Replaced custom Button with standard button + motion */}
              <motion.button
                size="lg"
                className="bg-[#34d399] hover:bg-[#10b981] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105" // bg-accent to bg-[#34d399], hover:bg-accent-light to hover:bg-[#10b981], text-accent-foreground to text-white
              >
                MEET DR. PISAT
              </motion.button>
              <img src="/signature.png" alt="Signature" className="h-16 opacity-70" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MeetTheDoctor;