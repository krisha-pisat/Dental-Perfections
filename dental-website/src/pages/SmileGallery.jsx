import React from 'react';
import { motion } from 'framer-motion';
import GalleryCard from '../components/GalleryCard'; // Import the card component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 1. IMPORT all your gallery images
import before1 from '../images/gallery/before1.png';
import after1 from '../images/gallery/after1.png';
import before2 from '../images/gallery/before2.png';
import after2 from '../images/gallery/after2.png';
import before3 from '../images/gallery/before3.png';
import after3 from '../images/gallery/after3.png';
import before4 from '../images/gallery/before4.png';
import after4 from '../images/gallery/after4.png';
import before5 from '../images/gallery/before5.png';
import after5 from '../images/gallery/after5.png';
import before6 from '../images/gallery/before6.png';
import after6 from '../images/gallery/after6.png';


// 2. USE the imported variables in your array
const galleryItems = [
  { before: before1, after: after1, treatment: 'Veneers' },
  { before: before2, after: after2, treatment: 'Teeth Whitening' },
  { before: before3, after: after3, treatment: 'Orthodontics' },
  { before: before4, after: after4, treatment: 'Implants & Crowns' },
  { before: before5, after: after5, treatment: 'Cosmetic Bonding' },
  { before: before6, after: after6, treatment: 'Full Mouth Restoration' },
];

const SmileGallery = () => {
  return (
    <div>
      <Navbar />
      {/* Added pt-24 (adjust if needed based on navbar height) */}
      <section className="bg-white pt-24 sm:pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-4">
              Transforming Smiles
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore real patient transformations and see the possibilities for your own smile.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {galleryItems.map((item, index) => (
              <GalleryCard
                key={index}
                beforeImage={item.before}
                afterImage={item.after}
                treatment={item.treatment}
                index={index} // Pass index for staggered animation delay
              />
            ))}
          </div>

           {/* Optional: Call to Action Button */}
           <motion.div
             className="text-center mt-20"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.5 }}
           >
             <motion.button
               className="bg-[#c5a36b] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#b08d57] transition-colors"
               whileHover={{ scale: 1.05 }}
             >
               Ready for Your Transformation? Book Now
             </motion.button>
           </motion.div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SmileGallery;