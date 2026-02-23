import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import logo from '../assets/logo.jpg';
// Image removed as per user request
// import tukkyImage from '../assets/ภาพคนยินดีต้อนรับ.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full bg-white z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <img src={logo} alt="Kuekoonkan Logo" className="h-20 w-20 rounded-full object-cover border border-gray-100 shadow-sm" />
                        <div className="flex items-baseline gap-2">
                            <span className="font-bold text-xl text-primary-500 leading-none">ร้านเกื้อกูลกัน</span>
                            <span className="text-xs text-primary-500 font-medium">Food Supply</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#" className="text-gray-700 hover:text-primary-500 transition">หน้าแรก</a>
                        <a href="#about" className="text-gray-700 hover:text-primary-500 transition">เกี่ยวกับเรา</a>
                        <a href="#products" className="text-gray-700 hover:text-primary-500 transition">สินค้า</a>
                        <a href="#services" className="text-gray-700 hover:text-primary-500 transition">หมวดหมู่สินค้า</a>
                        <a href="#contact" className="text-gray-700 hover:text-primary-500 transition">ติดต่อเรา</a>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-primary-500">
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50">หน้าแรก</a>
                        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50">เกี่ยวกับเรา</a>
                        <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50">สินค้า</a>
                        <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50">หมวดหมู่สินค้า</a>
                        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50">ติดต่อเรา</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
