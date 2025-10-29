import React from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import SmileGallery from './pages/SmileGallery';
import BlogPage from './pages/BlogPage';
import FaqPage from './pages/FaqPage';

// This line was missing. It imports the necessary components.
import { Routes, Route } from 'react-router-dom'; 



const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<SmileGallery />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FaqPage />} />
        {/* Add other routes here */}
      </Routes>
    
  )
}

export default App