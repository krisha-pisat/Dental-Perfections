import React from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
// This line was missing. It imports the necessary components.
import { Routes, Route } from 'react-router-dom'; 



const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        
        {/* Add other routes here */}
      </Routes>
    
  )
}

export default App