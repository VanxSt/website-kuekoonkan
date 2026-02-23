import React from 'react';
import { Quote } from 'lucide-react';
import shopeeLogo from '../assets/shopee.webp';
import lazadaLogo from '../assets/lazada.webp';

const ReviewCard = ({ name, role, content, rating, avatar }) => (
    <article className="bg-sky-50 p-8 rounded-2xl relative">
        <Quote className="text-sky-200 absolute top-4 right-4" size={48} aria-hidden="true" />
        <div className="flex text-yellow-400 mb-4" role="img" aria-label={`คะแนน ${rating} จาก 5 ดาว`}>
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <p className="text-gray-600 mb-6 italic">"{content}"</p>
        <div className="flex items-center">
            {avatar ? (
                <img
                    src={avatar}
                    alt={`รีวิวจาก ${name}`}
                    className="w-14 h-14 rounded-xl object-contain bg-white border border-gray-100 p-1"
                    loading="lazy"
                    width="56"
                    height="56"
                />
            ) : (
                <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-xl">
                    {name.charAt(0)}
                </div>
            )}
            <div className="ml-4">
                <h4 className="font-bold text-gray-900">{name}</h4>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    </article>
);

const ReviewSection = () => {
    return (
        <section className="py-20 bg-white" aria-label="รีวิวจากลูกค้า">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-2 px-6 rounded-full bg-sky-100 text-sky-600 text-base font-bold mb-4">รีวิวจากลูกค้า</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-sky-500 mb-4">ลูกค้าพูดถึงเรา</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">ความประทับใจจากลูกค้าที่ไว้วางใจเลือกซื้อสินค้ากับเรา</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <ReviewCard
                        name="คุณวิภา"
                        role="เจ้าของร้านกาแฟ"
                        content="ประทับใจความรวดเร็วในการจัดส่งมากค่ะ สินค้าครบถ้วน แพ็คมาอย่างดี ไม่เสียหายเลย ราคาก็ดีกว่าเจ้าอื่นที่เคยสั่ง"
                        rating={5}
                        avatar={shopeeLogo}
                    />
                    <ReviewCard
                        name="เชฟตั้ม"
                        role="ร้านอาหารไทย"
                        content="วัตถุดิบสดใหม่ สะอาด มีให้เลือกเยอะมาก สะดวกสุดๆ สั่งที่เดียวได้ครบทุกอย่าง ประหยัดเวลาไปตลาดเองได้เยอะครับ"
                        rating={5}
                        avatar={lazadaLogo}
                    />
                    <ReviewCard
                        name="คุณน้อย"
                        role="แม่บ้าน"
                        content="ชอบโปรโมชั่นที่ร้านจัดบ่อยๆ คุ้มค่ามากค่ะ แอดมินตอบแชทไว ให้คำแนะนำดี บริการเป็นกันเองค่ะ"
                        rating={5}
                        avatar={shopeeLogo}
                    />
                    <ReviewCard
                        name="ร้านเค้กคุณฝ้าย"
                        role="เจ้าของร้านเบเกอรี่"
                        content="แป้งและเนยที่นี่คุณภาพดีมากครับ ทำขนมออกมาหอมอร่อย ลูกค้าติดใจ สั่งประจำเลยครับ ไม่เปลี่ยนใจแน่นอน"
                        rating={5}
                        avatar={lazadaLogo}
                    />
                    <ReviewCard
                        name="พี่สมชาย"
                        role="ร้านอาหารตามสั่ง"
                        content="ราคาถูกกว่าท้องตลาดเยอะครับ ช่วยลดต้นทุนร้านได้มาก บริการดี ส่งของครบ ไม่มีขาด แนะนำเลยครับ"
                        rating={5}
                        avatar={shopeeLogo}
                    />
                    <ReviewCard
                        name="น้องมายด์"
                        role="เจ้าของคาเฟ่"
                        content="ไซรัปและเมล็ดกาแฟมีให้เลือกเยอะมากค่ะ แพ็คเกจจิ้งก็น่ารัก ถูกใจสายคาเฟ่สุดๆ ส่งไวทันใช้งานค่ะ"
                        rating={5}
                        avatar={lazadaLogo}
                    />
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
