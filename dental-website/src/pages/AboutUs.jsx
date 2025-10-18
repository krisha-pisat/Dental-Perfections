import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MeetTheDoctor from '../components/MeetTheDoctor'
import InfoParallax from '../components/InfoParallax'
import TreatmentsSection from '../components/TreatmentsSection'

const AboutUs = () => {
  return (
    <div> 
        <Navbar />
        <br></br>
        <MeetTheDoctor />
        <TreatmentsSection />
        <InfoParallax/>
        
        
      
    </div>
  )
}

export default AboutUs
