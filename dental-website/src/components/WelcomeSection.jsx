import React from 'react';
import { motion } from 'framer-motion';

// Reusable animation variants for the floating effect
const floatingAnimation = {
  y: ["-8px", "8px"],
  transition: {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 4,
    ease: "easeInOut",
  },
};

const WelcomeSection = () => {
  return (
    // The outer section now has a simple background color and padding
    <section className="bg-gray-50 py-24 sm:py-32 overflow-hidden">
      {/* This new container holds the marble background and centers everything */}
      <div 
        className="max-w-7xl mx-auto px-6 sm:px-16 py-16 rounded-2xl shadow-2xl relative bg-cover bg-center"
        style={{ backgroundImage: 'url(/marble-background.jpg)' }}
      >
        <div className="grid grid-cols-12 gap-8 items-center">

          {/* LEFT IMAGE */}
          <motion.div 
            className="col-span-12 lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src="/doctor-portrait.jpeg" 
              alt="Dr. Ava Chen" 
              className="rounded-xl shadow-2xl w-full"
              animate={floatingAnimation}
            />
          </motion.div>

          {/* CENTER TEXT */}
          <motion.div 
            className="col-span-12 lg:col-span-6 text-center text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-gray-600 mb-2">
              WELCOME TO DENTAL PERFECTIONS
            </p>
            <h2 className="font-playfair text-5xl md:text-6xl font-medium leading-tight mb-6">
              Come as you are. <br/> Leave smiling.
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto mb-6 text-gray-700">
              We care about the person in the chair, not just their teeth. That means taking time to understand your health, your goals, and your past experiences.
            </p>
            <motion.button 
              className="bg-[#c5a36b] text-white font-semibold py-3 px-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            >
              Your First Visit
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGES */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.img 
                src="/reception-view.webp" 
                alt="Dental office reception" 
                className="rounded-xl shadow-2xl w-full"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, duration: 5 } }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.img 
                src="/patient-care.jpeg" 
                alt="Dentist with patient" 
                className="rounded-xl shadow-2xl w-full"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, duration: 3.5 } }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;