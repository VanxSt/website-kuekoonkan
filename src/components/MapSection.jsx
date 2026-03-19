import React from 'react';
import mapImage from '../assets/map.webp';

const MapSection = () => {
    return (
        <section className="py-16 sm:py-20 bg-primary-50 dark:bg-slate-900/50 transition-colors duration-300" id="map" aria-label="ที่ตั้งร้าน">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">แนะนำร้านเกื้อกูลกัน</h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-700 dark:text-gray-300 font-medium px-2">ที่อยู่ร้าน: 26/16-19 หมู่ 10 ต.วัดไทรย์ , Nakhon Sawan, Thailand, 60000</p>
                    <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">แวะมาเลือกชมสินค้าได้ที่หน้าร้าน พร้อมที่จอดรถสะดวกสบาย</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-lg overflow-hidden border border-transparent dark:border-slate-700">
                    <div className="aspect-w-16 aspect-h-9 w-full relative">
                        <img
                            src={mapImage}
                            alt="แผนที่ร้านเกื้อกูลกัน ตั้งอยู่ที่ 26/16-19 หมู่ 10 ต.วัดไทรย์ นครสวรรค์"
                            className="w-full h-auto object-cover rounded-xl"
                            loading="lazy"
                            width="1200"
                            height="675"
                        />
                        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
                            <a
                                href="https://maps.app.goo.gl/VFJ64EyVcyJiEpy86"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-600 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg shadow-lg hover:bg-primary-700 transition flex items-center gap-2 text-xs sm:text-base"
                                aria-label="เปิดที่ตั้งร้านเกื้อกูลกันใน Google Maps"
                            >
                                <span>เปิดใน Google Maps</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
