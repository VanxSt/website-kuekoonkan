import React, { useState } from 'react';
import { MessageCircle, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = ({ isCookieVisible }) => {
    const [isOpen, setIsOpen] = useState(false);

    const contactLinks = [
        {
            name: 'Line Official',
            icon: MessageSquare,
            url: 'https://lin.ee/A2VWWj87',
            color: 'bg-[#06C755]'
        },
        {
            name: 'Facebook Messenger',
            icon: MessageCircle,
            url: 'https://m.me/kuakoonkan', // เปลี่ยนเป็น Link Messenger จริง
            color: 'bg-[#0084FF]'
        },
        {
            name: 'โทรสอบถาม',
            icon: Phone,
            url: 'tel:+66956427780',
            color: 'bg-primary-500'
        }
    ];

    return (
        <div className={`fixed right-6 z-50 flex flex-col items-end gap-4 transition-all duration-500 ${isCookieVisible ? 'bottom-32 md:bottom-28' : 'bottom-6'}`}>
            {/* Contact Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 p-4 w-64 mb-2"
                    >
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex justify-between items-center">
                            เลือกช่องทางติดต่อ
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                                <X size={20} />
                            </button>
                        </h4>
                        <div className="space-y-3">
                            {contactLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition group"
                                >
                                    <div className={`${link.color} p-2 rounded-lg text-white`}>
                                        <link.icon size={20} />
                                    </div>
                                    <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 group"
            >
                {/* Tooltip-like label */}
                <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-300">
                    สอบถาม/ปรึกษาฟรี
                </div>
                
                {/* Icon Button */}
                <div className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 transform group-hover:scale-110 ${isOpen ? 'bg-red-500' : 'bg-primary-600'}`}>
                    {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                </div>
            </button>
        </div>
    );
};

export default ChatWidget;
