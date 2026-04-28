import React, { useEffect, useRef, useState } from 'react';
import { Users, Heart, Truck, ThumbsUp, ShoppingCart, Package, Clock, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import shopImage from '../assets/kuekoonkan-shop-front.webp';
import welcomeImage from '../assets/kuekoonkan-welcome-staff.webp';

const useInView = (threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);
    return [ref, isVisible];
};

const AboutPage = () => {
    const [statsRef, statsVisible] = useInView(0.1);
    const [valuesRef, valuesVisible] = useInView(0.1);

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
            <section className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-slate-900 dark:to-slate-800 py-20 text-white relative overflow-hidden transition-colors duration-300" aria-label="เกี่ยวกับเรา">
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
            <section ref={statsRef} className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300" aria-label="ตัวเลขสำคัญ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`text-center p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm dark:bg-slate-800 transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <stat.icon size={28} className={stat.color} />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300" aria-label="เรื่องราวของเรา">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <img src={welcomeImage} alt="ทีมงานร้านเกื้อกูลกัน ต้อนรับลูกค้า" className="rounded-3xl shadow-lg" loading="lazy" width="600" height="400" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">เรื่องราวของเรา</h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p className="text-lg">
                                    จากรถเข็นขายข้าวแกงเล็ก ๆ สู่ห้องแถวของร้าน <span className="font-semibold text-primary-600">"จิราภัณฑ์"</span> ที่ได้ยืนอยู่เคียงข้างชาวชุมชนการเคหะและพื้นที่ใกล้เคียง
                                    จุดเริ่มต้นของเรามาจาก <span className="font-semibold text-primary-600">"คุณยายกิมเลี้ยง"</span> คนที่เคยเป็นแม่ค้าข้าวแกงมาก่อน จึงเข้าใจหัวใจของคนทำมาหากินเป็นอย่างดี
                                    เราจึงค่อย ๆ เติมสินค้า ตั้งแต่ข้าวสาร อาหารแห้ง ไปจนถึงอุปกรณ์ทำมาหากิน เพื่อให้ร้านของเรา เป็นมากกว่าที่ซื้อของ แต่เป็น <span className="font-semibold text-primary-600">"ที่พึ่งของคนหาเช้ากินค่ำ"</span>
                                </p>
                                <p className="text-lg">
                                    วันนี้…เราไม่ได้แค่เติบโตในขนาดของร้าน แต่เราเติบโตใน <span className="font-semibold text-primary-600">"ความเข้าใจ"</span> และ <span className="font-semibold text-primary-600">"ความตั้งใจ"</span> เราได้เห็นลูกค้าหลายคน
                                    เริ่มต้นจากศูนย์ จนมีร้าน มีอาชีพ มีรายได้ที่มั่นคง และนั่นทำให้เราเชื่อมั่นมากขึ้นว่า การเติบโตที่ยั่งยืน คือการเติบโตแบบ <span className="font-bold text-primary-600">"เกื้อกูลกัน"</span> ทั้งลูกค้า คู่ค้า
                                    พนักงาน และชุมชน นั่นคือเหตุผลที่เราตัดสินใจก้าวสู่บทใหม่ ภายใต้ชื่อ <span className="font-bold text-primary-600 dark:text-primary-400">"เกื้อกูลกัน"</span>
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm my-6 border-l-4 border-primary-500">
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">วันนี้เรามีทั้งหมด 2 สาขา</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary-500"></div>
                                            <span className="text-lg text-gray-700 dark:text-gray-300">สาขาหน้าหมู่บ้านการเคหะ</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary-500"></div>
                                            <span className="text-lg text-gray-700 dark:text-gray-300">สาขาหน้าหมู่บ้านไอซ์แลนด์ 1</span>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                    และจากนี้ไป… เราจะไม่หยุดแค่ "ขายของ" แต่เราจะยกระดับตัวเอง สู่การเป็น <span className="font-bold text-primary-600 dark:text-primary-400">"ผู้เชี่ยวชาญด้านการจัดหาและบริการด้านวัตถุดิบสำหรับกิจการอาหาร"</span> เราจะคัดสรรของที่ใช่ แนะนำของที่เหมาะสม และช่วยให้ลูกค้าของเรา <span className="font-semibold text-primary-600 dark:text-primary-400">"เติบโต"</span>
                                </p>
                                <p className="text-lg">
                                    เราจะพัฒนาอย่างต่อเนื่อง ทั้งสินค้า ระบบ และการบริการ เพื่อให้ทุกคนที่เข้ามาที่นี่ มั่นใจได้ว่า ที่นี่…คือแหล่งวัตถุดิบที่คิดมาแล้วเพื่อคนทำอาชีพจริง เพราะวันนี้… เราคือ <span className="font-bold text-primary-600 dark:text-primary-400">"มืออาชีพ"</span> ที่เติบโตมาพร้อมกับชุมชน และพร้อมจะเป็นพาร์ทเนอร์ในการเติบโตของทุกคนต่อไป
                                </p>
                            </div>
                            <Link to="/products" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition">
                                ดูสินค้าของเรา →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section ref={valuesRef} className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300" aria-label="จุดเด่นของเรา">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">ทำไมต้องเลือก<span className="text-primary-500">เกื้อกูลกัน</span></h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">สิ่งที่ทำให้เราแตกต่าง</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((item, i) => (
                            <article
                                key={i}
                                className={`bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-md transition-all duration-500 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="w-14 h-14 bg-primary-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon size={28} className="text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
