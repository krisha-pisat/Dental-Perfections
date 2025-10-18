import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaClock, FaMedkit } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt />, title: "Integrated Dental Care", description: "Emphasizing the oral-systemic link, we create treatment plans for confident, functional smiles." },
  { icon: <FaUsers />, title: "Rooted in Community", description: "Our warm and welcoming environment will help you feel like part of our dental family." },
  { icon: <FaClock />, title: "On Your Terms", description: "Enjoy easy parking, online bookings, and flexible hours, including early mornings and late afternoons." },
  { icon: <FaMedkit />, title: "Minimally Invasive Solutions", description: "We use modern additive dentistry techniques to help preserve your natural tooth structure." },
];

const InfoParallax = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Moves the background image up slowly as you scroll down
  const yBackground = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  // Moves the foreground content box up faster as you scroll down
  const yForeground = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-gray-100">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background Image Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url(/clinic.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: yBackground 
          }}
        />
        
        {/* Foreground Content Parallax */}
        <motion.div 
          className="relative z-10 flex items-center justify-center h-full"
          style={{ y: yForeground }}
        >
          <div className="bg-[#1e7b7e] bg-opacity-90 text-white p-12 rounded-lg shadow-xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl text-yellow-400 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-200 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <motion.button 
                className="bg-[#d9a44a] text-white font-bold py-3 px-8 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Book Online Today
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InfoParallax;