import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaTeethOpen, FaUserMd, FaScrewdriver } from "react-icons/fa";

const services = [
  // ... (your services array remains the same)
  {
    id: 1,
    title: "Dental Implants",
    icon: <FaScrewdriver />,
    description: "Restore your smile permanently with titanium implants that look, feel, and function like natural teeth.",
    features: ["Single tooth replacement", "Multiple teeth solutions", "Full arch restoration", "3D imaging & planning"],
  },
  {
    id: 2,
    title: "Smile Makeovers",
    icon: <FaTooth />,
    description: "Transform your smile with a customized combination of cosmetic treatments tailored to your goals.",
    features: ["Porcelain veneers", "Professional teeth whitening", "Gum contouring", "Digital smile design"],
  },
  {
    id: 3,
    title: "Root Canal Treatment",
    icon: <FaTeethOpen />,
    description: "Save your natural tooth with painless, precision root canal therapy using advanced techniques.",
    features: ["Painless procedures", "Single-visit treatment", "Microscopic precision", "High success rates"],
  },
  {
    id: 4,
    title: "Family Dentistry",
    icon: <FaUserMd />,
    description: "Comprehensive dental care for the whole family, from preventive check-ups to restorative treatments.",
    features: ["Pediatric dentistry", "Regular check-ups", "Preventive care", "Dental hygiene education"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Our Signature Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive dental solutions to keep your smile healthy, beautiful, and confident.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              // 1. Added 'group' to enable group-hover effects on child elements
              className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div>
                {/* 2. Added group-hover effects to the icon's background circle */}
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-5 mx-auto transition-all duration-300 group-hover:bg-[#34d399] group-hover:scale-110">
                  {/* 3. Added group-hover effects to the icon itself */}
                  <div className="text-4xl text-[#1e3a8a] transition-colors duration-300 group-hover:text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-[#1e3a8a] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-5">
                  {service.description}
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                // 4. Changed the button's hover color to a theme color
                className="mt-6 w-full bg-[#1e3a8a] hover:bg-[#34d399] text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;