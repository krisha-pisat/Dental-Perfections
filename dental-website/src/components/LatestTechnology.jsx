import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 1. --- THIS IS THE CORRECTED SECTION ---
// Paths must be relative to the public folder.
const images = {
  laser: '/biolase.jpeg',
  loupes: '/loupes.webp',
  autoclave: '/autoclave.png',
  camera: '/intraoralcamera.webp',
};
// ----------------------------------------

const LatestTechnology = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Animations linked to scroll progress (0 to 1)
  const laserX = useTransform(scrollYProgress, [0, 1], ['-20%', '100%']);
  const laserRotate = useTransform(scrollYProgress, [0, 1], [-30, 10]);

  const loupesX = useTransform(scrollYProgress, [0, 1], ['100%', '-20%']);

  const cameraX = useTransform(scrollYProgress, [0.1, 0.7], ['-100%', '30%']);
  const cameraOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const autoclaveX = useTransform(scrollYProgress, [0.3, 1], ['100%', '0%']);
  const autoclaveY = useTransform(scrollYProgress, [0.3, 1], ['100%', '0%']);
  const autoclaveScale = useTransform(scrollYProgress, [0.3, 1], [0.5, 1.1]);

  return (
    // Section is tall (300vh) to provide scrolling room
    <section ref={targetRef} className="relative h-[300vh] bg-gray-100">
      
      {/* This div sticks to the top and acts as the animation "canvas" */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-playfair font-bold text-center text-[#1e3a8a] drop-shadow-lg p-4"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
              scale: useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
            }}
          >
            Our Latest Technology
          </motion.h2>
        </div>

        {/* --- Animated Images with Descriptions --- */}
        
        {/* 1. Laser */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-64"
          style={{ x: laserX, rotate: laserRotate }} // Animation applied to the wrapper
        >
          <img
            src={images.laser}
            alt="Dental Laser"
            className="w-full"
          />
          <p className="mt-2 text-center text-sm font-semibold text-gray-700 bg-white/50 backdrop-blur-sm p-1 rounded">
            Diode Laser: For precise, painless soft-tissue work.
          </p>
        </motion.div>

        {/* 2. Loupes */}
        <motion.div
          className="absolute top-[15%] right-[5%] w-80"
          style={{ x: loupesX }} // Animation applied to the wrapper
        >
          <img
            src={images.loupes}
            alt="Dental Loupes"
            className="w-full"
          />
          <p className="mt-2 text-center text-sm font-semibold text-gray-700 bg-white/50 backdrop-blur-sm p-1 rounded">
            Surgical Loupes: High-magnification for perfect precision.
          </p>
        </motion.div>

        {/* 3. Camera */}
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-96"
          style={{ x: cameraX, opacity: cameraOpacity }} // Animation applied to the wrapper
        >
          <img
            src={images.camera}
            alt="Intraoral Camera"
            className="w-full"
          />
          <p className="mt-2 text-center text-sm font-semibold text-gray-700 bg-white/50 backdrop-blur-sm p-1 rounded">
            Intraoral Camera: See exactly what we see, in real-time.
          </p>
        </motion.div>

        {/* 4. Autoclave */}
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-80"
          style={{ x: autoclaveX, y: autoclaveY, scale: autoclaveScale }} // Animation applied to the wrapper
        >
          <img
            src={images.autoclave}
            alt="Autoclave"
            className="w-full"
          />
          <p className="mt-2 text-center text-sm font-semibold text-gray-700 bg-white/50 backdrop-blur-sm p-1 rounded">
            B-Class Autoclave: Hospital-grade sterilization for your safety.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default LatestTechnology;