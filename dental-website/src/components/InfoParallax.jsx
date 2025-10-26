import React, { useRef } from 'react'; // Added React import
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaClock, FaMedkit } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt />, title: "Integrated Dental Care", description: "Emphasizing the oral-systemic link, we create treatment plans for confident, functional smiles." },
  { icon: <FaUsers />, title: "Rooted in Community", description: "Our warm and welcoming environment will help you feel like part of our dental family." },
  { icon: <FaClock />, title: "On Your Terms", description: "Enjoy easy parking, online bookings, and flexible hours, including early mornings and late afternoons." },
  { icon: <FaMedkit />, title: "Minimally Invasive Solutions", description: "We use modern additive dentistry techniques to help preserve your natural tooth structure." },
];

const InfoParallax = () => { // Changed export const InfoParallax = () => to const InfoParallax = () => { ... } export default InfoParallax;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-gray-100"> {/* bg-muted to bg-gray-100 */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background Image Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/clinic.jpeg)`, // Assuming clinic.jpeg is in public folder
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: yBackground
          }}
        >
          <div className="absolute inset-0 bg-black/40" /> {/* bg-foreground/40 to bg-black/40 */}
        </motion.div>

        {/* Foreground Content Parallax */}
        <motion.div
          className="relative z-10 flex items-center justify-center h-full px-6"
          style={{ y: yForeground, opacity }}
        >
          {/* bg-primary/95 to bg-[#1e3a8a]/95, text-primary-foreground to text-white, border-primary-light/20 to border-blue-300/20 */}
          <div className="bg-[#1e3a8a]/95 backdrop-blur-sm text-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto border border-blue-300/20">
            <motion.h2
              className="text-3xl md:text-4xl font-playfair font-bold text-center mb-10" // font-display to font-playfair
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us
            </motion.h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* text-accent to text-[#34d399] */}
                  <div className="text-3xl text-[#34d399] mt-1 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg mb-2">{feature.title}</h3> {/* font-display to font-playfair */}
                    <p className="text-gray-200 text-sm leading-relaxed">{feature.description}</p> {/* text-primary-foreground/90 to text-gray-200 */}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              {/* Replaced custom Button with standard button + motion */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#d9a44a] hover:bg-[#c6913b] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300" // bg-gold to bg-[#d9a44a], hover:bg-gold-dark to hover:bg-[#c6913b], text-gold-foreground to text-white
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

export default InfoParallax; // Added default export