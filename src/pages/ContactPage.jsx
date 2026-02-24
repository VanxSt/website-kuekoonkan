import React from 'react';
import { Phone, Facebook, Clock, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import lazadaLogo from '../assets/lazada.webp';
import shopeeLogo from '../assets/shopee.webp';
import lineReal from '../assets/LINE_REAL.webp';
import mapImage from '../assets/map.webp';

const ContactPage = () => {
    const contactMethods = [
        {
            icon: Phone,
            title: 'โทรศัพท์',
            detail: '095-642-7780',
            link: 'tel:0956427780',
            color: 'bg-blue-500',
        },
        {
            icon: () => <img src={lineReal} alt="LINE" className="w-6 h-6 object-contain" />,
            title: 'LINE Official',
            detail: '0956427780',
            link: 'https://lin.ee/A2VWWj87',
            color: 'bg-[#06C755]',
        },
        {
            icon: Facebook,
            title: 'Facebook',
            detail: 'ร้านเกื้อกูลกัน',
            link: 'https://www.facebook.com/kuakoonkan',
            color: 'bg-[#1877F2]',
        },
        {
            icon: Mail,
            title: 'อีเมล',
            detail: 'primesukprimesuk@gmail.com',
            link: 'mailto:primesukprimesuk@gmail.com',
            color: 'bg-red-500',
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-20 text-white" aria-label="ติดต่อเรา">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">ติดต่อเรา</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                        สอบถามข้อมูลสินค้า สั่งซื้อ หรือต้องการคำปรึกษา เราพร้อมให้บริการ
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 bg-white" aria-label="ช่องทางติดต่อ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, i) => (
                            <a
                                key={i}
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : undefined}
                                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition group text-center"
                                aria-label={`ติดต่อผ่าน ${method.title}`}
                            >
                                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition`}>
                                    <method.icon size={28} />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-1">{method.title}</h3>
                                <p className="text-gray-500 text-sm">{method.detail}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shop on Marketplace */}
            <section className="py-16 bg-gray-50" aria-label="ช่องทางสั่งซื้อสินค้า">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">สั่งซื้อสินค้าออนไลน์</h2>
                        <p className="text-gray-500">เลือกซื้อสินค้าได้ผ่านแพลตฟอร์มที่คุณสะดวก</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <a href="https://shopee.co.th/kuekoonkanfoodsupply?categoryId=100629&entryPoint=ShopByPDP&itemId=28192611296" target="_blank" rel="noopener noreferrer"
                            className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition border border-gray-100 group">
                            <img src={shopeeLogo} alt="Shopee ร้านเกื้อกูลกัน" className="w-20 h-20 mx-auto mb-4 rounded-xl object-cover" loading="lazy" />
                            <h3 className="font-bold text-xl text-gray-900 mb-2">Shopee</h3>
                            <p className="text-gray-500 text-sm mb-4">kuekoonkanfoodsupply</p>
                            <span className="inline-block bg-[#EE4D2D] text-white px-6 py-2 rounded-full font-medium group-hover:opacity-90 transition">
                                เปิดร้าน Shopee
                            </span>
                        </a>
                        <a href="https://www.lazada.co.th/shop/kuekoonkan/?itemId=4471226738&channelSource=pdp" target="_blank" rel="noopener noreferrer"
                            className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition border border-gray-100 group">
                            <img src={lazadaLogo} alt="Lazada ร้านเกื้อกูลกัน" className="w-20 h-20 mx-auto mb-4 rounded-xl object-cover" loading="lazy" />
                            <h3 className="font-bold text-xl text-gray-900 mb-2">Lazada</h3>
                            <p className="text-gray-500 text-sm mb-4">kuekoonkan</p>
                            <span className="inline-block bg-[#0f146d] text-white px-6 py-2 rounded-full font-medium group-hover:opacity-90 transition">
                                เปิดร้าน Lazada
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Store Info + Map */}
            <section className="py-16 bg-white" aria-label="ที่ตั้งร้าน">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">มาเยี่ยมชมหน้าร้าน</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="text-primary-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">ที่อยู่</h3>
                                        <address className="text-gray-600 not-italic">
                                            26/16-19 หมู่ 10 ต.วัดไทรย์<br />
                                            นครสวรรค์ 60000
                                        </address>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                                        <Clock className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">เวลาทำการ</h3>
                                        <p className="text-gray-600">เปิดทุกวัน 06:00 - 22:00 น.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">โทรศัพท์</h3>
                                        <a href="tel:0956427780" className="text-primary-600 hover:underline font-medium">095-642-7780</a>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/VFJ64EyVcyJiEpy86"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition"
                            >
                                <MapPin size={20} /> เปิดใน Google Maps
                            </a>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={mapImage}
                                alt="แผนที่ร้านเกื้อกูลกัน ตั้งอยู่ที่ 26/16-19 หมู่ 10 ต.วัดไทรย์ นครสวรรค์"
                                className="w-full h-auto"
                                loading="lazy"
                                width="600"
                                height="400"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
