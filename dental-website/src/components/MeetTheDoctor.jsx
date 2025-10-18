import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

// Reusable floating animation
const floatingAnimation = {
  y: ["-10px", "10px"],
  transition: {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 5,
    ease: "easeInOut",
  },
};

const MeetTheDoctor = () => {
  return (
    <section 
      className="py-24 bg-white" 
      style={{ backgroundImage: 'url(/subtle-bg.jpg)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Doctor's Image */}
          <motion.div 
            className="relative flex justify-center items-center"
            animate={floatingAnimation}
          >
            {/* The circular frame */}
            <div className="w-96 h-96 bg-gray-100 rounded-full shadow-lg">
              {/* The image is pulled up with a negative margin to pop out */}
              <img 
                src="/doctor-image.png" 
                alt="Dr. Minal Pisat" 
                className="w-full h-full object-contain -mt-16" 
              />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl text-[#1e3a8a] font-bold mb-2">
              MEET DR. MINAL PISAT
            </h1>
            <p className="text-[#34d399] font-semibold mb-6">
              Providing customized, intimate care with innovative technology.
            </p>
            <p className="text-gray-600 mb-4">
              As the owner of Dental Perfections, Dr. Pisat is able to deliver top-quality care using her expertise and the latest dental advancements.
            </p>
            <p className="text-gray-600 mb-6">
              Here is just a sneak peek into what you can expect from Dr. Pisat:
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center gap-3"><FaCheckCircle className="text-blue-500" /> One-on-one patient care</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-blue-500" /> Open and honest recommendations</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-blue-500" /> A personal connection</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-blue-500" /> Exceptional dentistry using the latest technology</li>
            </ul>
            <div className="flex items-end justify-between">
              <motion.button 
                className="bg-[#34d399] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#10b981] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                MEET DR. PISAT
              </motion.button>
              <img src="/signature.png" alt="Signature" className="h-16" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MeetTheDoctor;