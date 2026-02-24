import React from 'react';
import { Users, Heart, Truck, ThumbsUp, ShoppingCart, Package, Clock, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import shopImage from '../assets/shop_image.webp';
import welcomeImage from '../assets/ภาพคนยินดีต้อนรับ.webp';

const AboutPage = () => {
    const stats = [
        { icon: Users, value: '500+', label: 'ลูกค้าที่วางใจ', color: 'text-blue-500', bg: 'bg-blue-50' },
        { icon: Heart, value: '5+', label: 'ปีที่ให้บริการ', color: 'text-pink-500', bg: 'bg-pink-50' },
        { icon: Truck, value: '100%', label: 'จัดส่งตรงเวลา', color: 'text-green-500', bg: 'bg-green-50' },
        { icon: ThumbsUp, value: '4.9', label: 'คะแนนรีวิว', color: 'text-yellow-500', bg: 'bg-yellow-50' },
    ];

    const values = [
        { icon: Award, title: 'สินค้าคุณภาพ', desc: 'คัดสรรสินค้าคุณภาพดีจากแบรนด์ชั้นนำ รับประกันความพึงพอใจ' },
        { icon: ShoppingCart, title: 'ราคายุติธรรม', desc: 'ราคาย่อมเยา ทั้งปลีกและส่ง ลดต้นทุนให้กับร้านค้าทุกขนาด' },
        { icon: Package, title: 'แพ็คอย่างดี', desc: 'ใส่ใจทุกกล่อง แพ็คสินค้าอย่างปลอดภัย ไม่เสียหายระหว่างจัดส่ง' },
        { icon: Truck, title: 'จัดส่งรวดเร็ว', desc: 'ส่งไว ถึงมือทันใจ บริการจัดส่งทั่วประเทศ' },
        { icon: Clock, title: 'เปิดบริการทุกวัน', desc: 'เปิดให้บริการ 06:00 - 22:00 น. ทุกวัน ไม่มีวันหยุด' },
        { icon: MapPin, title: 'ทำเลสะดวก', desc: 'ตั้งอยู่ในจังหวัดนครสวรรค์ มีที่จอดรถกว้างขวาง สะดวกสบาย' },
    ];

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-20 text-white relative overflow-hidden" aria-label="เกี่ยวกับเรา">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-medium mb-6">เกี่ยวกับเรา</span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                ร้านเกื้อกูลกัน<br />
                                <span className="text-primary-200">Food Supply</span>
                            </h1>
                            <p className="text-xl text-primary-100 leading-relaxed mb-8">
                                ศูนย์รวมวัตถุดิบเบเกอรี่ เครื่องดื่ม อุปกรณ์ทำขนม และบรรจุภัณฑ์ครบวงจร
                                ให้บริการมากกว่า 5 ปี พร้อมดูแลลูกค้าทุกท่านอย่างจริงใจ
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition">
                                ติดต่อเรา →
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <img src={shopImage} alt="หน้าร้านเกื้อกูลกัน Food Supply นครสวรรค์" className="rounded-3xl shadow-2xl" loading="lazy" width="600" height="400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white" aria-label="ตัวเลขสำคัญ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <div className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <stat.icon size={28} className={stat.color} />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-gray-50" aria-label="เรื่องราวของเรา">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <img src={welcomeImage} alt="ทีมงานร้านเกื้อกูลกัน ต้อนรับลูกค้า" className="rounded-3xl shadow-lg" loading="lazy" width="600" height="400" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">เรื่องราวของเรา</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                ร้านเกื้อกูลกันเป็นร้านขายของชำและวัตถุดิบครบวงจรที่ให้บริการมากกว่า 5 ปี
                                เรามุ่งมั่นในการคัดสรรสินค้าคุณภาพดีในราคาย่อมเยา พร้อมบริการจัดส่งที่รวดเร็ว
                                และดูแลลูกค้าทุกท่านอย่างจริงใจ
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                ไม่ว่าคุณจะเป็นเจ้าของร้านกาแฟ ร้านเบเกอรี่ ร้านอาหาร หรือลูกค้าทั่วไป
                                เราพร้อมให้บริการทั้งปลีกและส่ง ด้วยสินค้ากว่า 5,000 รายการ
                            </p>
                            <Link to="/products" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition">
                                ดูสินค้าของเรา →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white" aria-label="จุดเด่นของเรา">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">ทำไมต้องเลือก<span className="text-primary-500">เกื้อกูลกัน</span></h2>
                        <p className="text-lg text-gray-500">สิ่งที่ทำให้เราแตกต่าง</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((item, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition"
                            >
                                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon size={28} className="text-primary-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
