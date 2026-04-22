import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = ({ onAccept }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookieConsent');
        if (!accepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookieConsent', 'true');
        if (onAccept) onAccept();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 px-4 py-4 md:px-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                <span className="font-semibold text-gray-800">ร้านเกื้อกูลกัน</span> ใช้คุกกี้เพื่อเพิ่มประสิทธิภาพในการให้บริการและส่งมอบประสบการณ์ที่ดีในการใช้งานเว็บไซต์ ตรวจสอบและทำความเข้าใจ <a href="#" className="text-primary-500 hover:text-primary-600 font-medium underline decoration-1 underline-offset-2">นโยบายคุกกี้</a> และ <a href="#" className="text-primary-500 hover:text-primary-600 font-medium underline decoration-1 underline-offset-2">นโยบายความเป็นส่วนตัว</a> หากคุณไม่ปฏิเสธและดำเนินการต่อโดยการคลิกปุ่ม
            </p>
            <div className="flex items-center gap-6 flex-shrink-0">
                <button
                    onClick={handleAccept}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-2.5 rounded-md font-bold transition shadow-sm whitespace-nowrap text-sm md:text-base"
                >
                    ยอมรับ
                </button>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-gray-600 transition p-1 rounded-full hover:bg-gray-100"
                >
                    <X size={24} />
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
