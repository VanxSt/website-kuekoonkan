import React from 'react';
import { Utensils, Package, Cookie, Droplet, Sparkles, Box } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <article className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition duration-300 flex flex-col items-center text-center sm:items-start sm:text-left">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-primary-500 dark:text-primary-400 mb-3 sm:mb-4 shrink-0">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h3 className="font-bold text-sm sm:text-lg text-gray-800 dark:text-white mb-1.5 sm:mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">{description}</p>
    </article>
);

const ServiceGrid = () => {
    const services = [
        {
            icon: Utensils,
            title: 'เครื่องปรุงรส',
            description: 'น้ำปลา ซีอิ๊ว น้ำมันหอย ซอสต่างๆ'
        },
        {
            icon: Package,
            title: 'อาหารแห้ง',
            description: 'ข้าวสาร แป้ง บะหมี่ ก๋วยเตี๋ยว'
        },
        {
            icon: Cookie,
            title: 'ขนม & เครื่องดื่ม',
            description: 'ขนมขบเคี้ยว น้ำอัดลม เครื่องดื่ม'
        },
        {
            icon: Droplet,
            title: 'น้ำมันพืช',
            description: 'น้ำมันพืชคุณภาพสำหรับทำอาหาร'
        },
        {
            icon: Sparkles,
            title: 'ของใช้ในบ้าน',
            description: 'น้ำยาล้างจาน ผงซักฟอก ของใช้ทั่วไป'
        },
        {
            icon: Box,
            title: 'สินค้าอื่นๆ',
            description: 'สินค้าอุปโภคบริโภคครบครัน'
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300" id="services" aria-label="หมวดหมู่สินค้า">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-block py-1.5 px-4 sm:py-2 sm:px-6 rounded-full bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-bold mb-4 sm:mb-6">หมวดหมู่สินค้า</span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 dark:text-white mt-2 tracking-tight">
                        สินค้าครบครัน <span className="text-primary-500">ทุกความต้องการ</span>
                    </h2>
                    <p className="mt-3 sm:mt-6 text-sm sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                        เรามีสินค้าหลากหลายหมวดหมู่ให้คุณเลือกซื้อ ครบจบในที่เดียว
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
