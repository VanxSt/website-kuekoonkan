import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { to: '/', label: 'หน้าแรก' },
        { to: '/products', label: 'สินค้า' },
        { to: '/#services', label: 'หมวดหมู่สินค้า', isHash: true },
        { to: '/about', label: 'เกี่ยวกับเรา' },
        { to: '/contact', label: 'ติดต่อเรา' },
    ];

    const isActive = (path) => {
        if (path.includes('#')) return false;
        return location.pathname === path;
    };

    const handleHashClick = (e, hash) => {
        e.preventDefault();
        const targetId = hash.split('#')[1];

        if (location.pathname === '/') {
            // อยู่หน้าแรกอยู่แล้ว → scroll ไปที่ section
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            // อยู่หน้าอื่น → ไปหน้าแรกก่อน แล้ว scroll
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(targetId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
        setIsOpen(false);
    };

    return (
        <nav className="sticky top-0 w-full bg-white dark:bg-gray-900 z-50 shadow-sm transition-colors duration-200" aria-label="เมนูหลัก">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src={logo} alt="โลโก้ร้านเกื้อกูลกัน Food Supply" className="h-16 w-auto object-contain" width="auto" height="64" />
                        <div className="flex items-baseline gap-2">
                            <span className="font-bold text-xl text-primary-500 leading-none">ร้านเกื้อกูลกัน</span>
                            <span className="text-xs text-primary-500 font-medium">Food Supply</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a
                                    key={link.to}
                                    href={link.to}
                                    onClick={(e) => handleHashClick(e, link.to)}
                                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition font-medium cursor-pointer"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`transition font-medium ${isActive(link.to) ? 'text-primary-500 font-bold' : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'}`}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <button className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400" aria-label="ค้นหา">
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 p-2" aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a
                                    key={link.to}
                                    href={link.to}
                                    onClick={(e) => handleHashClick(e, link.to)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.to) ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/30 font-bold' : 'text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
