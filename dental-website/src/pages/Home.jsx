import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection' 
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs' 
import Parallax from '../components/Parallax'
import WekcomeSection from '../components/WelcomeSection'
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
        <Footer />
    </div>
  )
}

export default Home
