import React from 'react';
import { Truck, Clock, BadgeCheck, ShoppingCart, ShoppingBag, Facebook, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import bannerDecor from '../assets/รูปแต่ง banner.webp';
import shopImage from '../assets/shop_image.webp';
import welcomeImage from '../assets/ภาพคนยินดีต้อนรับ.webp';
import ShopeeIcon from './ShopeeIcon';

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
        <section className="relative pt-16 pb-10 overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300" aria-label="ส่วนต้อนรับ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left z-20"
                    >
                        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-primary-100 dark:border-slate-700 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                            <span className="text-primary-700 dark:text-primary-400 font-medium text-sm">ยินดีต้อนรับสู่ร้านเกื้อกูลกัน</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-snug mb-4 md:mb-6">
                            ยินดีต้อนรับเข้าสู่{' '}<br className="hidden sm:block" />
                            <span className="text-primary-500 break-words">เกื้อกูลกัน Food Supply</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-5 md:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                            เราคือศูนย์รวมวัตถุดิบและอุปกรณ์เบเกอรี่ เครื่องดื่ม และบรรจุภัณฑ์ครบวงจร
                            คัดสรรสินค้าคุณภาพเพื่อผู้ประกอบการและลูกค้าทุกท่าน ในราคามิตรภาพ
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5 md:mb-8">
                            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium text-sm border dark:border-slate-700">
                                <Truck size={16} className="text-primary-500" /> จัดส่งรวดเร็ว
                            </div>
                            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium text-sm border dark:border-slate-700">
                                <Clock size={16} className="text-primary-500" /> เปิดทุกวัน
                            </div>
                            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium text-sm border dark:border-slate-700">
                                <BadgeCheck size={16} className="text-primary-500" /> สินค้าคุณภาพ
                            </div>
                            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium text-sm border dark:border-slate-700">
                                <BadgeCheck size={16} className="text-primary-500" /> สะดวก ครบ คุ้ม
                            </div>
                            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium text-sm border dark:border-slate-700">
                                <Truck size={16} className="text-primary-500" /> จัดส่งทั่วประเทศ
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-5 md:mb-8">
                            <a href="https://shopee.co.th/kuekoonkanfoodsupply?categoryId=100629&entryPoint=ShopByPDP&itemId=28192611296" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-orange-500 text-white px-7 py-3 rounded-full hover:bg-orange-600 active:scale-95 transition-all shadow-lg shadow-orange-200 font-bold text-base"
                                aria-label="สั่งซื้อสินค้า">
                                <ShoppingCart size={20} /> สั่งซื้อเลย!
                            </a>
                            <a href="/products"
                                className="flex items-center gap-2 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 px-7 py-3 rounded-full hover:bg-primary-50 dark:hover:bg-slate-700 active:scale-95 transition-all font-bold text-base">
                                ดูสินค้าทั้งหมด
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            <a href="https://shopee.co.th/kuekoonkanfoodsupply?categoryId=100629&entryPoint=ShopByPDP&itemId=28192611296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#EE4D2D] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด Shopee">
                                <ShopeeIcon color="white" className="w-16" />
                            </a>
                            <a href="https://www.lazada.co.th/shop/kuekoonkan/?itemId=4471226738&channelSource=pdp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0f146d] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด Lazada">
                                <ShoppingBag size={16} /> Lazada
                            </a>
                            <a href="https://www.tiktok.com/@kuekoonkan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด TikTok">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                TikTok
                            </a>
                            <a href="https://www.facebook.com/kuakoonkan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1877F2] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด Facebook">
                                <Facebook size={16} /> Facebook
                            </a>
                            <a href="https://lin.ee/A2VWWj87" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="เปิด LINE">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.508.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
                                LINE
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content - Staggered Waterfall Grid */}
                    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center perspective-1000 mt-8 md:mt-0">
                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-50/50 dark:bg-primary-900/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

                        {/* Staggered Grid Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full flex justify-center items-center h-full md:h-auto"
                        >
                            {/* Main Banner Image (Desktop Only) */}
                            <img
                                src={bannerDecor}
                                alt="ภาพรวมสินค้าร้านเกื้อกูลกัน วัตถุดิบเบเกอรี่ เครื่องดื่ม และบรรจุภัณฑ์"
                                className="hidden md:block w-full max-w-[150%] lg:max-w-6xl object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-[50px]"
                                fetchpriority="high" decoding="sync"
                                width="1200" height="800"
                            />

                            {/* Mobile Layout: Real Shop Image */}
                            <div className="w-full flex md:hidden relative h-full justify-center">
                                <img
                                    src={shopImage}
                                    alt="หน้าร้านเกื้อกูลกัน Food Supply"
                                    className="absolute w-[85%] h-[75%] object-cover rounded-[30px] shadow-2xl z-10 top-4 -left-2 border-4 border-white dark:border-slate-800"
                                    fetchpriority="high" decoding="sync"
                                    width="400" height="400"
                                />
                                <img
                                    src={welcomeImage}
                                    alt="พนักงานร้านเกื้อกูลกันยินดีต้อนรับ"
                                    className="absolute w-[65%] h-[55%] object-cover rounded-[20px] shadow-xl z-20 bottom-4 -right-2 border-4 border-white dark:border-slate-700"
                                    fetchpriority="high" decoding="sync"
                                    width="300" height="300"
                                />
                            </div>

                            {/* Floating Card 1: Good Packaging (Top Right) */}
                            <motion.div
                                animate={floatingAnimation}
                                className="absolute -top-6 -right-2 sm:-top-10 sm:-right-4 md:right-10 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 z-30 border-l-4 border-primary-500"
                            >
                                <div className="bg-primary-100 p-1.5 sm:p-2 rounded-full text-primary-600">
                                    <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-[11px] sm:text-sm md:text-base">สินค้าแพ็คดี</h4>
                                    <p className="text-[9px] sm:text-xs text-gray-500 dark:text-gray-400">ใส่ใจทุกกล่อง</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 2: Quality Products (Bottom Left) */}
                            <motion.div
                                animate={floatingAnimation}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-4 -left-4 sm:-bottom-4 sm:-left-4 md:-left-8 bg-white dark:bg-slate-800 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 z-30 border-l-4 border-green-500"
                            >
                                <div className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-600">
                                    <BadgeCheck className="w-4 h-4 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-[11px] sm:text-sm md:text-base">สินค้าคุณภาพ</h4>
                                    <p className="text-[9px] sm:text-xs text-gray-500 dark:text-gray-400">การันตี 100%</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 3: Fast Delivery (Bottom Right) */}
                            <motion.div
                                animate={floatingAnimation}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-6 right-4 sm:-bottom-6 sm:-right-4 md:right-20 bg-white dark:bg-slate-800 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 z-30 border-l-4 border-orange-500"
                            >
                                <div className="bg-orange-100 p-1.5 sm:p-2 rounded-full text-orange-600">
                                    <Truck className="w-4 h-4 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-[11px] sm:text-sm md:text-base">จัดส่งไว</h4>
                                    <p className="text-[9px] sm:text-xs text-gray-500 dark:text-gray-400">ถึงมือทันใจ</p>
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
