import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);
import shopImage from '../assets/shop_image.webp';
import welcomePersonImage from '../assets/ภาพคนยินดีต้อนรับ.webp';

const offers = [
    {
        id: 1,
        title: "ร้านเกื้อกูลกัน",
        subtitle: "ร้านเกื้อกูลกัน เพื่อนคู่คิด ธุรกิจคุณ",
        description: "เราพร้อมสนับสนุนทุกความสำเร็จของคุณ ด้วยสินค้าคุณภาพและราคาที่จริงใจ",
        bgClass: "bg-gradient-to-r from-primary-400 to-primary-600",
        textClass: "text-white",
        code: "รู้จักเรามากขึ้น",
        link: "/about",
        image: shopImage
    },
    {
        id: 2,
        title: "ร้านเกื้อกูลกัน",
        subtitle: "ร้านเกื้อกูลกัน บริการประทับใจ ใส่ใจทุกรายละเอียด",
        description: "คัดสรรวัตถุดิบที่ดีที่สุด แพ็คของอย่างดี ส่งไว เพื่อให้คุณส่งต่อความอร่อยได้อย่างมั่นใจ",
        bgClass: "bg-gradient-to-r from-primary-400 to-primary-600",
        textClass: "text-white",
        code: "ปรึกษาเรา",
        link: "/contact",
        image: welcomePersonImage
    },
    {
        id: 3,
        title: "ร้านเกื้อกูลกัน",
        subtitle: "ร้านเกื้อกูลกัน ครบ จบ ในที่เดียว",
        description: "ศูนย์รวมวัตถุดิบ บรรจุภัณฑ์ และอุปกรณ์เบเกอรี่ที่ครบครันที่สุดสำหรับร้านคุณ",
        bgClass: "bg-gradient-to-r from-primary-400 to-primary-600",
        textClass: "text-white",
        code: "ดูสินค้าแนะนำ",
        link: "/products",
        image: shopImage
    }
];

const PromotionalBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % offers.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: {
            opacity: 0,
            scale: 0.95
        },
        center: {
            zIndex: 1,
            opacity: 1,
            scale: 1
        },
        exit: {
            zIndex: 0,
            opacity: 0,
            scale: 1.05
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % offers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
    };

    return (
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-100" aria-label="โปรโมชั่นและข่าวสาร" role="region">
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        opacity: { duration: 0.5, ease: "easeInOut" },
                        scale: { duration: 0.5, ease: "easeInOut" }
                    }}
                    className={`absolute inset-0 w-full h-full flex items-center justify-center ${offers[currentIndex].bgClass}`}
                >
                    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between z-10">

                        <div className="text-center md:text-left text-white max-w-4xl">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-6"
                            >
                                <Clock size={16} aria-hidden="true" /> {offers[currentIndex].title}
                            </motion.div>

                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md leading-tight md:leading-snug"
                            >
                                {offers[currentIndex].subtitle}
                            </motion.h2>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-2xl mb-10 opacity-90 font-medium leading-relaxed"
                            >
                                {offers[currentIndex].description}
                            </motion.p>

                            <MotionLink
                                to={offers[currentIndex].link}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition inline-flex w-fit items-center gap-2 mx-auto md:mx-0"
                            >
                                {offers[currentIndex].code} <ArrowRight size={20} aria-hidden="true" />
                            </MotionLink>
                        </div>

                        {/* Image/Decorative Elements */}
                        <div className="hidden md:flex items-center justify-center w-1/3 h-full absolute right-0 top-0 bottom-0 pointer-events-none overflow-hidden">
                            {offers[currentIndex].image ? (
                                <motion.img
                                    key={`img-${currentIndex}`}
                                    src={offers[currentIndex].image}
                                    alt={`${offers[currentIndex].subtitle} - ร้านเกื้อกูลกัน`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-full w-full object-cover opacity-50 mask-image-linear-gradient"
                                    style={{ maskImage: 'linear-gradient(to left, black 60%, transparent 100%)' }}
                                    loading="lazy"
                                />
                            ) : (
                                <div className="opacity-20 transform rotate-12 translate-x-10 translate-y-10">
                                    <Tag size={300} aria-hidden="true" />
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>


            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20" role="tablist" aria-label="ตัวเลือกสไลด์">
                {offers.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        role="tab"
                        aria-selected={index === currentIndex}
                        aria-label={`สไลด์ ${index + 1}`}
                    />
                ))}
            </div>
        </section >
    );
};

export default PromotionalBanner;
