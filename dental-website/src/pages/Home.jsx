import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LogoLoop from '../components/LogoLoop';
import WelcomeSection from '../components/WelcomeSection';
import InfoParallax from '../components/InfoParallax';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Parallax from '../components/Parallax'; // Or ParallaxSection? Check component name
import PatientReviews from '../components/PatientReviews';
import Footer from '../components/Footer';

const imageLogos = [
  { src: "/biolaselogo.png", alt: "Biolase Logo", href: "#" },
  { src: "/ida.jpg", alt: "IDA Logo", href: "#" },
  { src: "/orthotrain.avif", alt: "Orthotrain Logo", href: "#" },
  { src: "/scident.jpeg", alt: "Scident Logo", href: "#" },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* Container for the Logo Loop and its Title */}
      <div className="py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">
          Our Partners & Certifications
        </h2>
        {/* Added a relatively positioned, overflow-hidden wrapper */}
        <div className="relative w-full overflow-hidden h-[60px]"> {/* Adjust height based on desired logo size + padding */}
          <LogoLoop
            logos={imageLogos}
            speed={100}
            direction="left"
            logoHeight={40} // This should control the visual height
            gap={80}
            pauseOnHover={true}
            scaleOnHover={false}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Affiliated logos"
          />
        </div>
      </div>
      {/* End Logo Loop Section */}

      <WelcomeSection />
      <InfoParallax />
      <ServicesSection />
      <WhyChooseUs />
      <Parallax /> {/* Or ParallaxSection? */}
      <PatientReviews />
      <Footer />
    </div>
  );
};

export default Home;