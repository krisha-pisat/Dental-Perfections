import React from 'react';
import { motion } from "framer-motion";
import heroVideo from '../videos/video.mp4';
import AnimatedCircles from './AnimatedCircles'; // 1. Import the new component

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row h-[calc(100vh-88px)] text-white">
      {/* Left Column (Text Content) */}
      {/* 2. Added 'relative' and 'overflow-hidden' to contain the circles */}
      <div className="relative w-full md:w-1/2 bg-[#1e3a8a] flex items-center justify-center overflow-hidden">
        <AnimatedCircles /> {/* 3. Add the animated background here */}
        
        <motion.div
          className="relative z-10 p-12 md:p-16 max-w-xl text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            // 4. Changed font class to use the elegant 'font-playfair'
            className="font-playfair text-4xl md:text-6xl font-bold leading-tight mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Experience the Art of a <br />
            <span className="text-[#6ee7b7]">Perfect Smile</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Compassionate, state-of-the-art dental care for you and your family in the heart of Mumbai.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#34d399] hover:bg-[#10b981] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book Your Appointment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column (Video Only) */}
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;