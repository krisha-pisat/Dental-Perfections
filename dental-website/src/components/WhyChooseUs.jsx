import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaRegClock } from 'react-icons/fa';

const stats = [
  {
    icon: <FaAward className="text-3xl text-white" />,
    value: '25+',
    label: 'Years of Experience',
  },
  {
    icon: <FaUsers className="text-3xl text-white" />,
    value: '10,000+',
    label: 'Happy Patients',
  },
  {
    icon: <FaRegClock className="text-3xl text-white" />,
    value: '98%',
    label: 'Success Rate',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#1e3a8a] py-20 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Dental Perfections?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We combine cutting-edge technology with compassionate care to deliver exceptional results.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              <div className="bg-[#34d399] rounded-full p-5 mb-5 inline-flex">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-[#6ee7b7] mb-2">
                {stat.value}
              </p>
              <p className="text-base font-medium text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;