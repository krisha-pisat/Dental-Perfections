import React from 'react';
import { motion } from 'framer-motion';

const ParallaxSection = () => {
  return (
    // We apply the background image directly here using Tailwind's arbitrary value syntax.
    // The 'bg-[url(/parallax.jpg)]' class tells Tailwind to set the background image.
    // 'bg-fixed' is the Tailwind class for 'background-attachment: fixed'.
        <section className="relative h-[80vh] w-full bg-[url('/parallax.jpg')] bg-cover bg-center bg-fixed">


      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
 


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <motion.p
          className="text-lg md:text-xl font-light uppercase tracking-widest mb-2"
          // ... animation props
        >
          New patients are always welcome
        </motion.p>
        <motion.h2
          className="text-5xl md:text-7xl font-serif italic mb-4"
          // ... animation props
        >
          Start your path to optimal dental health
        </motion.h2>
        <motion.p
          className="max-w-2xl text-base md:text-lg text-gray-200 mb-8"
          // ... animation props
        >
          Upgrade your dental care with personalised attention and expertise. Schedule a consultation with Dr. Jivani, your trusted general dentist.
        </motion.p>
        <motion.button
          className="bg-[#d9a44a] hover:bg-[#c6913b] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          // ... animation props
        >
          Book Online
        </motion.button>
      </div>
    </section>
  );
};

export default ParallaxSection;