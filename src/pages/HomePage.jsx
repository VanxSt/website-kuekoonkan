import React from 'react';
import PromotionalBanner from '../components/PromotionalBanner';
import HeroSection from '../components/HeroSection';
import ReviewSection from '../components/ReviewSection';
import ServiceGrid from '../components/ServiceGrid';
import ProductShowcase from '../components/ProductShowcase';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import SocialGrid from '../components/SocialGrid';
import MapSection from '../components/MapSection';

const HomePage = () => {
    return (
        <>
            <PromotionalBanner />
            <HeroSection />
            <ReviewSection />
            <ServiceGrid />
            <ProductShowcase />
            <StatsSection />
            <AboutSection />
            <SocialGrid />
            <MapSection />
        </>
    );
};

export default HomePage;
