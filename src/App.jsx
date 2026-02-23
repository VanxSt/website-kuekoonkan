import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceGrid from './components/ServiceGrid';
import ProductShowcase from './components/ProductShowcase';
import ReviewSection from './components/ReviewSection';
import StatsSection from './components/StatsSection';
import SocialGrid from './components/SocialGrid';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

import PromotionalBanner from './components/PromotionalBanner';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <PromotionalBanner />
      <HeroSection />



      {/* Wave Separator or simple section break */}

      <ReviewSection />

      <ServiceGrid />

      <ProductShowcase />



      <StatsSection />

      <AboutSection />

      <SocialGrid />

      <MapSection />

      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
