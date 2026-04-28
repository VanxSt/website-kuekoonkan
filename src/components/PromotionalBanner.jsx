import React, { useState, useEffect, useCallback } from 'react';
import { Tag, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import shopImage from '../assets/kuekoonkan-shop-front.webp';

const offers = [
    {
        id: 1,
        title: "เกื้อกูลกัน",
        subtitle: <>เกื้อกูลกัน เพื่อนคู่คิด<br /> ธุรกิจคุณ</>,
        altText: "เกื้อกูลกัน เพื่อนคู่คิด ธุรกิจคุณ",
        description: "ศูนย์รวมวัตถุดิบผู้ประกอบการ ร้านอาหาร คาเฟ่ โรงแรม และโรงงาน คัดสรรวัตถุดิบมาตราฐานส่งตรงถึงร้านคุณ",
        bgClass: "bg-gradient-to-r from-primary-400 to-primary-600",
        textClass: "text-white",
        code: "รู้จักเรามากขึ้น",
        link: "/about",
        image: shopImage
    },
    {
        id: 2,
        title: "เกื้อกูลกัน",
        subtitle: "เกื้อกูลกัน บริการประทับใจ\nใส่ใจทุกรายละเอียด",
        altText: "เกื้อกูลกัน บริการประทับใจ ใส่ใจทุกรายละเอียด",
        description: "พร้อมให้คำปรึกษาเรื่องการจัดซื้อวัตถุดิบ พร้อมสนับสนุนทุกความสำเร็จ ให้โตไปด้วยกัน",
        bgClass: "bg-gradient-to-r from-primary-400 to-primary-600",
        textClass: "text-white",
        code: "ปรึกษาเรา",
        link: "/contact",
        image: shopImage
    },
    {
        id: 3,
        title: "เกื้อกูลกัน",
        subtitle: "เกื้อกูลกัน ครบ จบ ในที่เดียว",
        altText: "เกื้อกูลกัน ครบ จบ ในที่เดียว",
        description: "สินค้าครบมากกว่า 5,000 รายการ จัดส่งฟรี ทั่วประเทศ \nศูนย์รวมวัตถุดิบอาหาร เบเกอรี่ และบรรจุภัณฑ์",
        bgClass: "bg-gradient-to-r from-primary-400 to-primary-600",
        textClass: "text-white",
        code: "ดูสินค้าแนะนำ",
        link: "/products",
        image: shopImage
    }
];

const PromotionalBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [isTransitioning]);

    useEffect(() => {
        const timer = setInterval(() => {
            goToSlide((currentIndex + 1) % offers.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [currentIndex, goToSlide]);

    const offer = offers[currentIndex];

    return (
        <section className="relative w-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] overflow-hidden bg-gray-100 dark:bg-slate-950 flex items-center transition-colors duration-300" aria-label="โปรโมชั่นและข่าวสาร" role="region">
            <div
                key={currentIndex}
                className={`absolute inset-0 w-full h-full flex items-center justify-center ${offer.bgClass} promo-slide-enter`}
            >
                <div className="max-w-7xl mx-auto px-6 py-10 md:py-0 w-full flex flex-col md:flex-row items-center justify-between z-10">

                    <div className="text-center md:text-left text-white md:max-w-2xl lg:max-w-4xl relative z-20">
                        <div
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-6 promo-fade-up"
                            style={{ animationDelay: '0.1s' }}
                        >
                            <Clock size={16} aria-hidden="true" /> {offer.title}
                        </div>

                        <h2
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-md leading-snug whitespace-pre-line promo-fade-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {offer.subtitle}
                        </h2>

                        <p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-90 font-medium leading-relaxed max-w-2xl mx-auto md:mx-0 whitespace-pre-line promo-fade-up"
                            style={{ animationDelay: '0.3s' }}
                        >
                            {offer.description}
                        </p>

                        <Link
                            to={offer.link}
                            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition inline-flex w-fit items-center gap-2 mx-auto md:mx-0 promo-fade-up"
                            style={{ animationDelay: '0.4s' }}
                        >
                            {offer.code} <ArrowRight size={20} aria-hidden="true" />
                        </Link>
                    </div>

                    {/* Desktop Only: Side Image (lg and above) */}
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none overflow-hidden z-0">
                        {offer.image && (
                            <img
                                key={`img-desktop-${currentIndex}`}
                                src={offer.image}
                                alt={`${offer.altText} - เกื้อกูลกัน`}
                                className="h-full w-full object-cover object-center promo-slide-enter"
                                style={{ maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 10%, black 35%)' }}
                                loading="lazy"
                                width="800" height="600"
                            />
                        )}
                    </div>

                    {/* Mobile and iPad Only: New Full-Width Blended Layout (hidden on lg) */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 lg:hidden flex items-center justify-center">
                        {offer.image ? (
                            <>
                                <img
                                    key={`img-mobile-${currentIndex}`}
                                    src={offer.image}
                                    alt={`${offer.altText} - เกื้อกูลกัน`}
                                    className="h-full w-full object-cover object-[80%_center] opacity-40 md:opacity-100 promo-slide-enter"
                                    loading="lazy"
                                    width="800" height="600"
                                />
                                {/* Tablet Overlay (md to lg) - lighter gradient, image mostly visible on right */}
                                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-600/60 to-transparent" style={{ width: '55%' }}></div>

                                {/* Mobile Overlay (smaller than md) */}
                                <div className="absolute inset-0 bg-gradient-to-t md:hidden from-primary-600/80 via-primary-500/40 to-transparent"></div>
                            </>
                        ) : (
                            <div className="opacity-10 transform flex items-center justify-center w-full h-full">
                                <Tag size={300} aria-hidden="true" className="rotate-12 translate-x-10 translate-y-10 focus:outline-none" />
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20" role="tablist" aria-label="ตัวเลือกสไลด์">
                {offers.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="w-12 h-12 flex items-center justify-center focus:outline-none group"
                        role="tab"
                        aria-selected={index === currentIndex}
                        aria-label={`สไลด์ ${index + 1}`}
                    >
                        <span className={`block h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 group-hover:bg-white/80 w-3'}`} />
                    </button>
                ))}
            </div>
        </section >
    );
};

export default PromotionalBanner;
