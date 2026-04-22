import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import product1 from '../assets/รวมรูปสินค้า/kuekoonkan-pg-box-products.webp';
import product2 from '../assets/รวมรูปสินค้า/kuekoonkan-condensed-milk-products.webp';
import product3 from '../assets/รวมรูปสินค้า/kuekoonkan-nut-products.webp';
import product4 from '../assets/รวมรูปสินค้า/kuekoonkan-milk-tea-powder-products.webp';
import product5 from '../assets/รวมรูปสินค้า/kuekoonkan-sweet-syrup-products.webp';
import product6 from '../assets/รวมรูปสินค้า/kuekoonkan-mayonnaise-products.webp';

const ProductCard = ({ name, price, rating, image, isNew, link }) => (
    <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden group flex flex-col h-full">
        <div className="relative h-40 sm:h-48 bg-gray-100 dark:bg-slate-700 overflow-hidden shrink-0">
            {isNew && (
                <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full z-10">
                    สินค้าใหม่
                </span>
            )}
            <img src={image} alt={`สินค้า ${name} ร้านเกื้อกูลกัน`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" width="300" height="192" />

            {/* Quick Action */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-6 py-2 rounded-full font-medium hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                    ดูรายละเอียด
                </a>
            </div>
        </div>

        <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="font-bold text-sm sm:text-lg text-gray-800 dark:text-white line-clamp-2 sm:line-clamp-1">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition">
                        {name}
                    </a>
                </h3>
                <span className="flex items-center text-yellow-400 text-xs sm:text-sm font-bold shrink-0">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" /> {rating}
                </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4 flex-grow">หมวดหมู่: วัตถุดิบเบเกอรี่</p>

            <div className="flex justify-between items-center mt-auto">
                <span className="text-base sm:text-xl font-bold text-primary-600 dark:text-primary-400">฿{price}</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-full bg-primary-50 dark:bg-slate-700 text-primary-600 dark:text-primary-400 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition" aria-label={`สั่งซื้อ ${name}`}>
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
            </div>
        </div>
    </article>
);

const ProductShowcase = () => {
    const products = [
        { name: 'กล่อง PG', price: 45, rating: 4.8, image: product1, isNew: true, link: 'https://shopee.co.th/product/49357761/42968330885/' },
        { name: 'นมข้นหวาน', price: 25, rating: 4.9, image: product2, link: 'https://shopee.co.th/product/49357761/43368200448/' },
        { name: 'ธัญพืช/ถั่ว', price: 60, rating: 4.7, image: product3, link: 'https://shopee.co.th/product/49357761/40113352798/' },
        { name: 'ผงชานมตราอี้เหวิน', price: 85, rating: 4.8, image: product4, link: 'https://shopee.co.th/product/49357761/40714049116/' },
        { name: 'น้ำหวานเข้มข้น', price: 35, rating: 4.6, image: product5, link: 'https://shopee.co.th/product/49357761/44018129845/' },
        { name: 'มายองเนส', price: 55, rating: 4.8, image: product6, link: 'https://shopee.co.th/product/49357761/42268163566' },
    ];

    return (
        <section className="py-20 bg-primary-50/50 dark:bg-slate-900/50 transition-colors duration-300" id="products" aria-label="สินค้าแนะนำ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="px-4 py-1 rounded-full bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 text-sm font-semibold">สินค้าแนะนำ</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
                        สินค้ายอดนิยม <span className="text-primary-500">ราคาพิเศษ</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">สินค้าคุณภาพดี ราคาย่อมเยา พร้อมบริการจัดส่ง</p>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 pt-2 gap-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                    {products.map((product, index) => (
                        <div key={index} className="min-w-[160px] w-[160px] sm:min-w-[200px] sm:w-[200px] md:w-full md:h-full snap-start flex-shrink-0">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <a href="/products" className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium px-6 py-3 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700">
                        ดูสินค้าทั้งหมด <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
