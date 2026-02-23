import React from 'react';
import { Truck, Clock, BadgeCheck, ShoppingCart, ShoppingBag, Facebook, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import bannerDecor from '../assets/รูปแต่ง banner.webp';

const HeroSection = () => {
    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-primary-50 to-white" aria-label="ส่วนต้อนรับ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left z-20"
                    >
                        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-50/80 backdrop-blur-sm border border-primary-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                            <span className="text-primary-700 font-medium text-sm">ยินดีต้อนรับสู่ร้านเกื้อกูลกัน</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            ยินดีต้อนรับเข้าสู่ <br />
                            <span className="text-primary-500 whitespace-nowrap">เกื้อกูลกัน Food Supply</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                            เราคือศูนย์รวมวัตถุดิบและอุปกรณ์เบเกอรี่ เครื่องดื่ม และบรรจุภัณฑ์ครบวงจร
                            คัดสรรสินค้าคุณภาพเพื่อผู้ประกอบการและลูกค้าทุกท่าน ในราคามิตรภาพ
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 font-medium text-sm">
                                <Truck size={18} className="text-primary-500" /> จัดส่งรวดเร็ว
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 font-medium text-sm">
                                <Clock size={18} className="text-primary-500" /> เปิดทุกวัน
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 font-medium text-sm">
                                <BadgeCheck size={18} className="text-primary-500" /> สินค้าคุณภาพ
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                            <button className="flex items-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition shadow-lg shadow-primary-200 font-bold">
                                <ShoppingCart size={20} /> สั่งซื้อสินค้า
                            </button>
                            <button className="flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition font-bold">
                                ดูสินค้าทั้งหมด
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <a href="#" className="flex items-center gap-2 bg-[#EE4D2D] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด Shopee">
                                <ShoppingBag size={16} /> Shopee
                            </a>
                            <a href="#" className="flex items-center gap-2 bg-[#0f146d] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด Lazada">
                                <ShoppingBag size={16} /> Lazada
                            </a>
                            <a href="#" className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด TikTok">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                TikTok
                            </a>
                            <a href="#" className="flex items-center gap-2 bg-[#1877F2] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด Facebook">
                                <Facebook size={16} /> Facebook
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content - Staggered Waterfall Grid */}
                    <div className="relative h-[600px] w-full hidden md:flex items-center justify-center perspective-1000">
                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

                        {/* Staggered Grid Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full flex justify-center"
                        >
                            <img
                                src={bannerDecor}
                                alt="ภาพรวมสินค้าร้านเกื้อกูลกัน วัตถุดิบเบเกอรี่ เครื่องดื่ม และบรรจุภัณฑ์"
                                className="w-full max-w-[150%] lg:max-w-6xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-[50px]"
                                loading="lazy"
                            />

                            {/* Floating Card 1: Good Packaging (Top Right) */}
                            <motion.div
                                animate={floatingAnimation}
                                className="absolute -top-10 -right-4 md:right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border-l-4 border-primary-500"
                            >
                                <div className="bg-primary-100 p-2 rounded-full text-primary-600">
                                    <Package size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm md:text-base">สินค้าแพ็คดี</h4>
                                    <p className="text-xs text-gray-500">ใส่ใจทุกกล่อง</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 2: Quality Products (Bottom Left) */}
                            <motion.div
                                animate={floatingAnimation}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-4 -left-4 md:-left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border-l-4 border-green-500"
                            >
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <BadgeCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm md:text-base">สินค้าคุณภาพ</h4>
                                    <p className="text-xs text-gray-500">การันตี 100%</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 3: Fast Delivery (Bottom Right) */}
                            <motion.div
                                animate={floatingAnimation}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-6 -right-4 md:right-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border-l-4 border-orange-500"
                            >
                                <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm md:text-base">จัดส่งไว</h4>
                                    <p className="text-xs text-gray-500">ถึงมือทันใจ</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
