import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection' 
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs' 
import Parallax from '../components/Parallax'
import WekcomeSection from '../components/WelcomeSection'
import PatientReviews from '../components/PatientReviews'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <WekcomeSection />
        <ServicesSection />
        <WhyChooseUs /> 
        <Parallax />
        <PatientReviews />
        <Footer />
    </div>
  )
}

export default Home
