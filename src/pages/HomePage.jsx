import React, { Suspense, lazy } from 'react';
import PromotionalBanner from '../components/PromotionalBanner';
import HeroSection from '../components/HeroSection';

// Lazy load below-the-fold components for better performance
const ReviewSection = lazy(() => import('../components/ReviewSection'));
const ServiceGrid = lazy(() => import('../components/ServiceGrid'));
const ProductShowcase = lazy(() => import('../components/ProductShowcase'));
const StatsSection = lazy(() => import('../components/StatsSection'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const SocialGrid = lazy(() => import('../components/SocialGrid'));
const MapSection = lazy(() => import('../components/MapSection'));

const LazyFallback = () => (
    <div className="min-h-[200px] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const HomePage = () => {
    return (
        <>
            <PromotionalBanner />
            <HeroSection />
            <Suspense fallback={<LazyFallback />}>
                <ReviewSection />
                <ServiceGrid />
                <ProductShowcase />
                <StatsSection />
                <AboutSection />
                <SocialGrid />
                <MapSection />
            </Suspense>
        </>
    );
};

export default HomePage;
