import React, { useEffect, useRef, useState } from 'react';
import { Users, Heart, Truck, ThumbsUp, ShoppingCart, Package, Database, Utensils } from 'lucide-react';

const AboutSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300" aria-label="เกี่ยวกับเกื้อกูลกัน">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="inline-block px-4 py-1.5 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
                            เกี่ยวกับเรา
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                            เกื้อกูลกัน <br />
                            <span className="text-primary-500">พร้อมดูแลคุณ</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                            เกื้อกูลกันเป็นร้านขายของชำและของใช้ในครัวเรือนที่ให้บริการมากกว่า 5 ปี
                            เรามุ่งมั่นในการคัดสรรสินค้าคุณภาพดีในราคาย่อมเยา พร้อมบริการจัดส่งที่รวดเร็ว
                            และดูแลลูกค้าทุกท่านอย่างจริงใจ
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
                            เราพร้อมให้บริการทั้งลูกค้าทั่วไปและร้านค้า ไม่ว่าจะซื้อปลีกหรือส่ง
                            เกื้อกูลกันพร้อมดูแลคุณเสมอ
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm text-center hover:shadow-md transition">
                                <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">ลูกค้าที่วางใจ</div>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm text-center hover:shadow-md transition">
                                <Heart className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">ปีที่ให้บริการ</div>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm text-center hover:shadow-md transition">
                                <Truck className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">จัดส่งตรงเวลา</div>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm text-center hover:shadow-md transition">
                                <ThumbsUp className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">คะแนนรีวิว</div>
                            </div>
                        </div>
                    </div>

                    {/* Bento Grid Visuals */}
                    <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary-50 dark:bg-slate-800 rounded-3xl p-8 flex items-center justify-center aspect-square">
                                <ShoppingCart size={64} className="text-primary-500" />
                            </div>
                            <div className="bg-sky-50 dark:bg-sky-900/30 rounded-3xl p-8 flex items-center justify-center aspect-[4/3] mt-12">
                                <Database size={48} className="text-sky-500" />
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-3xl p-8 flex items-center justify-center aspect-[4/3] -mt-12">
                                <Package size={48} className="text-indigo-500" />
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-3xl p-8 flex items-center justify-center aspect-square">
                                <Utensils size={64} className="text-blue-500" />
                            </div>
                        </div>

                        <div className={`absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 z-10 w-[90%] sm:w-max min-w-max sm:min-w-0 border border-gray-100 dark:border-slate-700 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="bg-primary-500 p-2 rounded-lg text-white shrink-0">
                                <Heart size={20} fill="currentColor" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-gray-900 dark:text-white text-sm truncate">เกื้อกูลกัน</p>
                                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">พร้อมดูแลทุกความต้องการ</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
