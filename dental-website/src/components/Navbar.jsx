import React from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 bg-white shadow-md"
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        {/* Changed h-12 w-12 to h-16 w-16 */}
        <img 
          src="/logo.jpg" 
          alt="Dental Perfections Logo" 
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-blue-900 font-semibold text-lg">Dental Perfections</h1>
          <p className="text-sm text-gray-500 -mt-1">Excellence in Dental Care</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-x-8 text-gray-700 font-medium hidden md:flex">
        <a href="#" className="hover:text-blue-900 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-900 transition-colors">About Us</a>
        <a href="#" className="hover:text-blue-900 transition-colors">Services</a>
        <a href="#" className="hover:text-blue-900 transition-colors">Smile Gallery</a>
        <a href="#" className="hover:text-blue-900 transition-colors">Blog</a>
        <a href="#" className="hover:text-blue-900 transition-colors">FAQ</a>
        <a href="#" className="hover:text-blue-900 transition-colors">Contact</a>
      </div>

      {/* Appointment Button */}
      <button className="bg-blue-900 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-800 transition-colors">
        Book Appointment
      </button>
    </motion.nav>
  );
}

export default Navbar;