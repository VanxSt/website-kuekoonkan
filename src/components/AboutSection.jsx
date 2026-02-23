import React from 'react';
import { Users, Heart, Truck, ThumbsUp, ShoppingCart, Package, Database, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden" aria-label="เกี่ยวกับร้านเกื้อกูลกัน">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
                            เกี่ยวกับเรา
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            ร้านเกื้อกูลกัน <br />
                            <span className="text-primary-500">พร้อมดูแลคุณ</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            ร้านเกื้อกูลกันเป็นร้านขายของชำและของใช้ในครัวเรือนที่ให้บริการมากกว่า 5 ปี
                            เรามุ่งมั่นในการคัดสรรสินค้าคุณภาพดีในราคาย่อมเยา พร้อมบริการจัดส่งที่รวดเร็ว
                            และดูแลลูกค้าทุกท่านอย่างจริงใจ
                        </p>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            เราพร้อมให้บริการทั้งลูกค้าทั่วไปและร้านค้า ไม่ว่าจะซื้อปลีกหรือส่ง
                            ร้านเกื้อกูลกันพร้อมดูแลคุณเสมอ
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                                <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900">500+</div>
                                <div className="text-xs text-gray-500">ลูกค้าที่วางใจ</div>
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                                <Heart className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900">5+</div>
                                <div className="text-xs text-gray-500">ปีที่ให้บริการ</div>
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                                <Truck className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900">100%</div>
                                <div className="text-xs text-gray-500">จัดส่งตรงเวลา</div>
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                                <ThumbsUp className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900">4.9</div>
                                <div className="text-xs text-gray-500">คะแนนรีวิว</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Grid Visuals */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-primary-50 rounded-3xl p-8 flex items-center justify-center aspect-square"
                            >
                                <ShoppingCart size={64} className="text-primary-500" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-sky-50 rounded-3xl p-8 flex items-center justify-center aspect-[4/3] mt-12"
                            >
                                <Database size={48} className="text-sky-500" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-indigo-50 rounded-3xl p-8 flex items-center justify-center aspect-[4/3] -mt-12"
                            >
                                <Package size={48} className="text-indigo-500" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-blue-50 rounded-3xl p-8 flex items-center justify-center aspect-square"
                            >
                                <Utensils size={64} className="text-blue-500" />
                            </motion.div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 whitespace-nowrap z-10 max-w-[90%]"
                        >
                            <div className="bg-primary-500 p-2 rounded-lg text-white">
                                <Heart size={20} fill="currentColor" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">เกื้อกูลกัน</h4>
                                <p className="text-xs text-gray-500">พร้อมดูแลทุกความต้องการ</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
