import React from 'react';
import { motion } from "framer-motion";
import heroVideo from '../videos/video.mp4';
import AnimatedCircles from './AnimatedCircles';

const HeroSection = () => {
  return (
    // The section now takes up the full screen height and has padding to clear the navbar
    <section className="flex flex-col md:flex-row min-h-screen pt-24 text-white">
      {/* Left Column (Text Content) */}
      <div className="relative w-full md:w-3/5 bg-[#1e3a8a] flex items-center justify-center overflow-hidden min-h-[60vh] md:min-h-0">
        <AnimatedCircles />
        
        <motion.div
          // Text is now centered on mobile and left-aligned on desktop
          className="relative z-10 p-8 md:p-16 max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            // Font size is adjusted for mobile
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
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
            // Buttons are centered on mobile and left-aligned on desktop
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#34d399] hover:bg-[#10b981] text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              Book Your Appointment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column (Video Only) */}
      {/* Video height is increased on mobile for better visibility */}
      <div className="w-full md:w-2/5 h-80 md:h-auto">
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