import React from 'react';
import { Phone, Facebook, ShoppingBag, QrCode, ChevronRight } from 'lucide-react';
import lazadaLogo from '../assets/lazada.webp';
import shopeeLogo from '../assets/shopee.webp';
import lineReal from '../assets/LINE_REAL.webp';


const SocialCard = ({ icon: Icon, title, link, color, bottomText, bottomLabel, bottomIcon: BottomIcon, bottomIconColor }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 overflow-hidden bg-white group border border-gray-100"
        aria-label={`ติดต่อผ่าน ${bottomLabel}`}
    >
        {/* Top Section - Colored */}
        <div className={`${color} aspect-[4/3] sm:aspect-square flex flex-col items-center justify-center text-white gap-2 p-4`}>
            <Icon size={56} className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1.5} />
            <h3 className="font-bold text-lg sm:text-2xl tracking-wide">{title}</h3>
        </div>

        {/* Bottom Section - White Info */}
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
                <div className={`w-10 h-10 rounded-full ${bottomIconColor} text-white flex items-center justify-center flex-shrink-0`}>
                    <BottomIcon size={20} />
                </div>
                <div className="truncate">
                    <p className="font-bold text-gray-800 text-sm">{bottomLabel}</p>
                    <p className="text-gray-500 text-xs truncate">{bottomText}</p>
                </div>
            </div>
            <div className="bg-gray-100 rounded-full p-2 text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-500 transition">
                <ChevronRight size={20} />
            </div>
        </div>
    </a>
);

const SocialGrid = () => {
    const socialLinks = [
        {
            title: 'โทรศัพท์',
            bottomLabel: 'โทรศัพท์',
            bottomText: '095-642-7780',
            icon: Phone,
            bottomIcon: Phone,
            color: 'bg-[#2997D6]',
            bottomIconColor: 'bg-[#2997D6]',
            link: 'tel:0956427780'
        },
        {
            title: '',
            bottomLabel: 'LINE Official',
            bottomText: '0956427780',
            icon: ({ size }) => (
                <img src={lineReal} alt="LINE Official" className="w-[400px] h-[400px] object-cover" loading="lazy" />
            ),
            bottomIcon: ({ size }) => (
                <img src={lineReal} alt="LINE" className="w-[20px] h-[20px] object-contain rounded-md" loading="lazy" />
            ),
            bottomIconColor: 'bg-[#06C755]',
            color: 'bg-white !p-0',
            link: 'https://lin.ee/A2VWWj87'
        },
        {
            title: 'Facebook',
            bottomLabel: 'Facebook',
            bottomText: 'ร้านเกื้อกูลกัน',
            icon: Facebook,
            bottomIcon: Facebook,
            color: 'bg-[#1877F2]',
            bottomIconColor: 'bg-[#1877F2]',
            link: 'https://www.facebook.com/kuakoonkan'
        },
        {
            title: 'TikTok',
            bottomLabel: 'TikTok',
            bottomText: '@kuekoonkan',
            icon: ({ size }) => (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
            ),
            bottomIcon: ({ size }) => (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
            ),
            color: 'bg-[#010101]',
            bottomIconColor: 'bg-[#010101]',
            link: 'https://www.tiktok.com/@kuekoonkan'
        },
        {
            title: '',
            bottomLabel: 'Shopee',
            bottomText: 'kuekoonkanfoodsupply',
            icon: ({ size }) => (
                <img src={shopeeLogo} alt="Shopee" className="w-full h-full object-cover" loading="lazy" />
            ),
            bottomIcon: ({ size }) => (
                <img src={shopeeLogo} alt="Shopee" className="w-[20px] h-[20px] object-contain rounded-md" loading="lazy" />
            ),
            color: 'bg-[#EE4D2D] !p-0',
            bottomIconColor: 'bg-[#EE4D2D]',
            link: 'https://shopee.co.th/kuekoonkanfoodsupply?categoryId=100629&entryPoint=ShopByPDP&itemId=28192611296'
        },
        {
            title: '',
            bottomLabel: 'Lazada',
            bottomText: 'kuekoonkan',
            icon: ({ size }) => (
                <img src={lazadaLogo} alt="Lazada" className="w-full h-full object-cover" loading="lazy" />
            ),
            bottomIcon: ({ size }) => (
                <img src={lazadaLogo} alt="Lazada" className="w-[20px] h-[20px] object-contain rounded-md" loading="lazy" />
            ),
            color: 'bg-[#0f146d] !p-0',
            bottomIconColor: 'bg-white',
            link: 'https://www.lazada.co.th/shop/kuekoonkan/?itemId=4471226738&channelSource=pdp'
        }
    ];

    return (
        <section className="py-20 bg-primary-50/50" id="contact" aria-label="ช่องทางติดต่อ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="px-4 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold">ติดต่อเรา</span>
                    <h2 className="text-3xl font-bold text-primary-900 mt-4">สินค้าครบครัน <span className="text-primary-500">ทุกความต้องการ</span></h2>
                    <p className="mt-2 text-gray-400">เข้าถึงง่าย ทุกช่องทางที่คุณสะดวก</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialLinks.map((social, index) => (
                        <SocialCard key={index} {...social} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialGrid;
