import React from 'react';
import { Facebook, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import lazadaLogo from '../assets/lazada.webp';
import lineLogo from '../assets/LINE_REAL.webp';
import LineIcon from './LineIcon';
import ShopeeIcon from './ShopeeIcon';

const Footer = () => {
    return (
        <footer className="bg-primary-900 text-white pt-16 pb-8" aria-label="ส่วนท้ายเว็บไซต์">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-bold text-primary-400 mb-4">ร้านเกื้อกูลกัน</h3>
                        <p className="text-primary-100 text-sm leading-relaxed mb-6">
                            แหล่งรวมวัตถุดิบและอุปกรณ์เบเกอรี่ เครื่องดื่มครบวงจร<br />
                            คุณภาพดี ราคามาตรฐาน บริการด้วยใจ
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {/* Phone */}
                            <a href="tel:0956427780" className="flex items-center gap-2 text-primary-200 hover:text-white transition group" aria-label="โทรศัพท์ 095-642-7780">
                                <div className="bg-primary-800 p-2 rounded-full group-hover:bg-primary-700 transition shrink-0">
                                    <Phone size={18} />
                                </div>
                                <span className="text-sm font-medium">โทรศัพท์</span>
                            </a>
                            {/* LINE */}
                            <a href="https://lin.ee/A2VWWj87" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-200 hover:text-white transition group" aria-label="ติดต่อผ่าน LINE">
                                <div className="bg-[#06C755] p-2 rounded-full group-hover:opacity-90 transition shrink-0">
                                    <LineIcon size={18} className="text-white" textColor="#06C755" />
                                </div>
                                <span className="text-sm font-medium">LINE</span>
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/kuakoonkan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-200 hover:text-white transition group" aria-label="ติดตามเราบน Facebook">
                                <div className="bg-[#1877F2] p-2 rounded-full group-hover:opacity-90 transition shrink-0">
                                    <Facebook size={18} />
                                </div>
                                <span className="text-sm font-medium">Facebook</span>
                            </a>
                            {/* TikTok */}
                            <a href="https://www.tiktok.com/@kuekoonkan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-200 hover:text-white transition group" aria-label="ติดตามเราบน TikTok">
                                <div className="bg-black p-2 rounded-full group-hover:opacity-90 transition shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                </div>
                                <span className="text-sm font-medium">TikTok</span>
                            </a>
                            {/* Shopee */}
                            <a href="https://shopee.co.th/kuekoonkanfoodsupply?categoryId=100629&entryPoint=ShopByPDP&itemId=28192611296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#EE4D2D] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-bold text-sm shadow-md" aria-label="ซื้อสินค้าบน Shopee">
                                <ShopeeIcon size={18} color="white" /> Shopee
                            </a>
                            {/* Lazada */}
                            <a href="https://www.lazada.co.th/shop/kuekoonkan/?itemId=4471226738&channelSource=pdp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-200 hover:text-white transition group" aria-label="ซื้อสินค้าบน Lazada">
                                <div className="bg-white rounded-full group-hover:opacity-90 transition shrink-0 overflow-hidden w-[34px] h-[34px] flex items-center justify-center border border-gray-200">
                                    <img src={lazadaLogo} alt="Lazada" className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <span className="text-sm font-medium">Lazada</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <nav aria-label="ลิงก์ภายในเว็บไซต์">
                        <h4 className="font-bold text-lg mb-6">หน้าหลัก</h4>
                        <ul className="space-y-3 text-primary-100/80 text-sm">
                            <li><Link to="/" className="hover:text-white transition">หน้าแรก</Link></li>
                            <li><Link to="/products" className="hover:text-white transition">สินค้าแนะนำ</Link></li>
                            <li><Link to="/about" className="hover:text-white transition">เกี่ยวกับเรา</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition">ติดต่อเรา</Link></li>
                        </ul>
                    </nav>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">ติดต่อสอบถาม</h4>
                        <ul className="space-y-3 text-primary-100/80 text-sm">
                            <li>โทร: 095-642-7780</li>
                            <li>LINE: 0956427780</li>
                            <li className="break-all">Email: primesukprimesuk@gmail.com</li>
                            <li className="flex items-start gap-2">
                                <Clock size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                                <span>เปิดทุกวัน 06:00 - 22:00 น.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Address */}
                    <address className="not-italic">
                        <h4 className="font-bold text-lg mb-6">ที่อยู่ร้าน</h4>
                        <p className="text-primary-100/80 text-sm leading-relaxed">
                            26/16-19 หมู่ 10 ต.วัดไทรย์ , Nakhon Sawan <br />
                            Thailand, 60000
                        </p>
                        <a
                            href="https://maps.app.goo.gl/VFJ64EyVcyJiEpy86"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition text-sm font-bold block text-center"
                            aria-label="เปิดที่ตั้งร้านเกื้อกูลกันใน Google Maps"
                        >
                            เปิด Google Maps
                        </a>
                    </address>
                </div>

                <div className="border-t border-primary-800 pt-8 text-center text-primary-400/60 text-xs">
                    <p>&copy; {new Date().getFullYear()} ร้านเกื้อกูลกัน Food Supply. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
