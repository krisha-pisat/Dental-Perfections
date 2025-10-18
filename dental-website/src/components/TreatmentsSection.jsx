import React from 'react';
import { motion } from 'framer-motion';

const treatments = [
  {
    title: "General Dentistry",
    description: "Comprehensive care for your everyday dental needs.",
    image: "/general-dentistry.webp",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Cosmetic care designed to enhance your smile. Virtual consults available!",
    image: "/cosmetic-dentistry.webp",
  },
  {
    title: "Oral Surgery",
    description: "Surgical care for complex dental issues.",
    image: "/oral-surgery.webp",
  },
];

const TreatmentsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#1e7b7e] mb-16">
          Tailored treatments just for you
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={treatment.image} 
                alt={treatment.title} 
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              
              {/* This is the overlay and text container */}
              <div className="absolute bottom-0 left-0 w-full h-2/3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center p-4 text-white bg-gradient-to-t from-[#1e7b7e] via-[#1e7b7e] to-transparent">
                <h3 className="text-2xl font-bold">{treatment.title}</h3>
                <p className="mt-2 text-sm text-gray-200">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>

        <motion.button 
          className="bg-[#c5a36b] text-white font-semibold py-3 px-8 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Explore Our Services
        </motion.button>
      </div>
    </section>
  );
};

export default TreatmentsSection;