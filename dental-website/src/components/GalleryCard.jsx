import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ beforeImage, afterImage, treatment, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="group relative overflow-hidden cursor-pointer border border-gray-200 rounded-lg transition-all duration-500 hover:shadow-xl bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          {/* Before Image */}
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={beforeImage}
              alt="Before treatment"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-gray-100/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">BEFORE</span>
            </div>
          </motion.div>

          {/* After Image */}
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={afterImage}
              alt="After treatment"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#34d399]/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">AFTER</span>
            </div>
          </motion.div>

          {/* Treatment Label - Appears on Hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e3a8a]/95 to-transparent p-4 pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white">{treatment}</h3>
          </motion.div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-[#34d399] rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default GalleryCard;