import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div> 
        <Navbar />
        <div className="py-24 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">This is the about page for Dental Perfections.</p>
        </div>
        <Footer />
      
    </div>
  )
}

export default AboutUs
