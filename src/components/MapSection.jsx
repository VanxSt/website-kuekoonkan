import React from 'react';
import mapImage from '../assets/map.webp';

const MapSection = () => {
    return (
        <section className="py-20 bg-sky-50" id="map" aria-label="ที่ตั้งร้าน">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">แนะนำร้านเกื้อกูลกัน</h2>
                    <p className="mt-4 text-lg text-gray-700 font-medium">ที่อยู่ร้าน: 26/16-19 หมู่ 10 ต.วัดไทรย์ , Nakhon Sawan, Thailand, 60000</p>
                    <p className="mt-2 text-gray-500">แวะมาเลือกชมสินค้าได้ที่หน้าร้าน พร้อมที่จอดรถสะดวกสบาย</p>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 w-full relative">
                        <img
                            src={mapImage}
                            alt="แผนที่ร้านเกื้อกูลกัน ตั้งอยู่ที่ 26/16-19 หมู่ 10 ต.วัดไทรย์ นครสวรรค์"
                            className="w-full h-auto object-cover rounded-xl"
                            loading="lazy"
                            width="1200"
                            height="675"
                        />
                        <div className="absolute bottom-4 right-4">
                            <a
                                href="https://maps.app.goo.gl/VFJ64EyVcyJiEpy86"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-sky-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-sky-700 transition flex items-center gap-2"
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
