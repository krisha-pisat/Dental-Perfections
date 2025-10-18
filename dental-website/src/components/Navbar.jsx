import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className={`
      fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300
      ${scrolled ? 'pt-4' : 'pt-0'}
    `}>
      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`
          flex justify-between items-center transition-all duration-300 ease-in-out relative
          ${scrolled
            ? 'max-w-6xl bg-white shadow-lg rounded-full py-2 px-6'
            : 'w-full bg-white py-4 px-8'
          }
        `}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/logo.jpg" 
            alt="Dental Perfections Logo" 
            className={`
              rounded-full object-cover transition-all duration-300
              ${scrolled ? 'h-12 w-12' : 'h-16 w-16'}
            `}
          />
          <div className={`
            transition-all duration-300 overflow-hidden
            ${scrolled ? 'w-0 opacity-0' : 'w-auto opacity-100'}
          `}>
            <h1 className="text-blue-900 font-semibold text-lg whitespace-nowrap">Dental Perfections</h1>
            <p className="text-sm text-gray-500 -mt-1 whitespace-nowrap">
              Excellence in Dental Care
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links - Now absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Added 'flex' here to ensure links stay in a single line */}
          <div className="flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-900 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-900 transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-blue-900 transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-blue-900 transition-colors">Smile Gallery</Link>
            <Link to="/blog" className="hover:text-blue-900 transition-colors">Blog</Link>
            <Link to="/faq" className="hover:text-blue-900 transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-blue-900 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Appointment Button */}
        <div className="hidden md:block">
          <button className="bg-blue-900 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-800 transition-colors whitespace-nowrap">
            Book Appointment
          </button>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-b-lg col-span-3"
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
}

export default Navbar;