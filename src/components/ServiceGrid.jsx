import React from 'react';
import { Utensils, Package, Cookie, Droplet, Sparkles, Box } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <article className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition duration-300">
        <div className="w-12 h-12 bg-primary-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
            <Icon size={24} />
        </div>
        <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
    </article>
);

const ServiceGrid = () => {
    const services = [
        {
            icon: Utensils,
            title: 'เครื่องปรุงรส',
            description: 'น้ำปลา ซีอิ๊ว น้ำมันหอย ซอสตางๆ'
        },
        {
            icon: Package,
            title: 'อาหารแห้ง',
            description: 'ข้าวสาร แป้ง บะหมี่ เส้นก๋วยเตี๋ยว'
        },
        {
            icon: Cookie,
            title: 'ขนม & เครื่องดื่ม',
            description: 'ขนมขบเคี้ยว น้ำอัดลม เครื่องดื่มต่างๆ'
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
        <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300" id="services" aria-label="หมวดหมู่สินค้า">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-2 px-6 rounded-full bg-primary-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 text-sm sm:text-base font-bold mb-6">หมวดหมู่สินค้า</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mt-2 tracking-tight">
                        สินค้าครบครัน <span className="text-primary-500">ทุกความต้องการ</span>
                    </h2>
                    <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                        เรามีสินค้าหลากหลายหมวดหมู่ให้คุณเลือกซื้อ ครบจบในที่เดียว
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
