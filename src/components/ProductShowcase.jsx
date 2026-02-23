import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import product1 from '../assets/รวมรูปสินค้า/รวมกล่อง PG 1.jpg';
import product2 from '../assets/รวมรูปสินค้า/รวมน้มข้นหวาน 2.jpg';
import product3 from '../assets/รวมรูปสินค้า/รวมสินค้าถั่ว 3.jpg';
import product4 from '../assets/รวมรูปสินค้า/รวมอี้เหวินผงชานม 4.jpg';
import product5 from '../assets/รวมรูปสินค้า/รวมน้ำหวาน 5.jpg';
import product6 from '../assets/รวมรูปสินค้า/รวมมายองเนส 6.jpg';

const ProductCard = ({ name, price, rating, image, isNew, link }) => (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden group">
        <div className="relative h-48 bg-gray-100 overflow-hidden">
            {isNew && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    สินค้าใหม่
                </span>
            )}
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />

            {/* Quick Action */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-primary-500 hover:text-white transition transform translate-y-4 group-hover:translate-y-0">
                    ดูรายละเอียด
                </a>
            </div>
        </div>

        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition">
                        {name}
                    </a>
                </h3>
                <span className="flex items-center text-yellow-400 text-sm font-bold">
                    <Star size={16} fill="currentColor" className="mr-1" /> {rating}
                </span>
            </div>
            <p className="text-gray-500 text-sm mb-4">หมวดหมู่: วัตถุดิบเบเกอรี่</p>

            <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary-600">฿{price}</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white transition">
                    <ShoppingCart size={20} />
                </a>
            </div>
        </div>
    </div>
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
        <div className="py-20 bg-primary-50/50" id="products">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="px-4 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold">สินค้าแนะนำ</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2">
                        สินค้ายอดนิยม <span className="text-primary-500">ราคาพิเศษ</span>
                    </h2>
                    <p className="text-gray-500">สินค้าคุณภาพดี ราคาย่อมเยา พร้อมบริการจัดส่ง</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <a href="#" className="inline-flex items-center text-primary-600 font-medium">
                        ดูสินค้าทั้งหมด <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;
