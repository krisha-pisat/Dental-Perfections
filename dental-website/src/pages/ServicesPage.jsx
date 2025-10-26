import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdvancedServices from '../components/AdvancedServices';
import LatestTechnology from '../components/LatestTechnology';
import AutoclaveScrub from '../components/AutoclaveScrub'; // 1. Import it

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <AdvancedServices />
      <LatestTechnology />
      <AutoclaveScrub /> {/* 2. Add it here */}
      <Footer />
    </div>
  );
};

export default ServicesPage;