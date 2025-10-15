import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start 30%"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <section ref={targetRef} className="bg-gray-50 py-20 sm:py-24 overflow-hidden">
      <div 
        className="max-w-7xl mx-auto p-1 rounded-3xl bg-gradient-to-br from-[#c5a36b] to-[#34d399] shadow-2xl"
      >
        <div 
          className="px-6 sm:px-10 py-12 md:py-16 rounded-2xl relative bg-cover bg-center"
          style={{ backgroundImage: 'url(/marble-background.jpg)' }}
        >
          {/* Grid now stacks on mobile and becomes a 3-column layout on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* LEFT IMAGE */}
            <motion.div 
              // The column now takes full width on mobile, and 1/3 on large screens
              className="col-span-1 lg:col-span-4"
              style={{ x: xLeft }}
            >
              <motion.img 
                src="/doctor-portrait.jpeg" 
                alt="Dr. Ava Chen" 
                className="rounded-xl shadow-2xl w-full max-w-sm mx-auto lg:max-w-full"
                animate={floatingAnimation}
              />
            </motion.div>

            {/* CENTER TEXT */}
            <motion.div 
              className="col-span-1 lg:col-span-4 text-center text-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ root: targetRef, once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-gray-600 mb-2">
                WELCOME TO DENTAL PERFECTIONS
              </p>
              {/* Adjusted font sizes for mobile */}
              <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
                Come as you are. <br/> Leave smiling.
              </h2>
              <p className="text-base md:text-lg max-w-xl mx-auto mb-6 text-gray-700">
                We care about the person in the chair, not just their teeth.
              </p>
              <motion.button 
                className="bg-[#c5a36b] text-white font-semibold py-3 px-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              >
                Your First Visit
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGES */}
            <motion.div 
              className="col-span-1 lg:col-span-4 flex flex-col gap-8 max-w-sm mx-auto lg:max-w-full"
              style={{ x: xRight }}
            >
              <motion.img 
                src="/reception-view.webp" 
                alt="Dental office reception" 
                className="rounded-xl shadow-2xl w-full"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, duration: 5 } }}
              />
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