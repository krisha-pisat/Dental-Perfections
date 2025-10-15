import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'pt-2' : 'pt-0'
      }`}
    >
      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`flex items-center justify-between w-full max-w-7xl transition-all duration-300 ease-in-out bg-white ${
          scrolled
            ? 'shadow-md rounded-full py-2 px-8'
            : 'py-4 px-10 shadow-none'
        }`}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.jpg"
            alt="Dental Perfections Logo"
            className={`rounded-full object-cover transition-all duration-300 ${
              scrolled ? 'h-10 w-10' : 'h-16 w-16'
            }`}
          />
          <div
            className={`transition-all duration-300 overflow-hidden ${
              scrolled ? 'w-0 opacity-0' : 'w-auto opacity-100'
            }`}
          >
            <h1 className="text-blue-900 font-semibold text-lg whitespace-nowrap">
              Dental Perfections
            </h1>
            <p className="text-sm text-gray-500 -mt-1 whitespace-nowrap">
              Excellence in Dental Care
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div
            className={`flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'space-x-5 text-sm' : 'space-x-8 text-base'
            } text-gray-700 font-medium`}
          >
            <Link to="/" className="hover:text-blue-900 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-900 transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-blue-900 transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-blue-900 transition-colors">Smile Gallery</Link>
            <Link to="/blog" className="hover:text-blue-900 transition-colors">Blog</Link>
            <Link to="/faq" className="hover:text-blue-900 transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-blue-900 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Appointment Button / Mobile Menu */}
        <div className="flex items-center">
          <div className="hidden md:block">
            <button
              className={`transition-all duration-300 font-semibold rounded-lg shadow-md whitespace-nowrap ${
                scrolled
                  ? 'bg-blue-900 text-white px-4 py-1 text-sm hover:bg-blue-800'
                  : 'bg-blue-900 text-white px-6 py-2 text-base hover:bg-blue-800'
              }`}
            >
              Book Appointment
            </button>
          </div>
          <div className="md:hidden ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-b-lg"
            >
              <div className="flex flex-col items-center gap-y-6 py-8">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Smile Gallery</Link>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <button className="bg-blue-900 text-white font-semibold px-5 py-2 rounded-lg">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
