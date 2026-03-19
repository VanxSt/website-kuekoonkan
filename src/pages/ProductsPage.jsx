import React from 'react';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import product1 from '../assets/รวมรูปสินค้า/รวมกล่อง PG 1.webp';
import product2 from '../assets/รวมรูปสินค้า/รวมน้มข้นหวาน 2.webp';
import product3 from '../assets/รวมรูปสินค้า/รวมสินค้าถั่ว 3.webp';
import product4 from '../assets/รวมรูปสินค้า/รวมอี้เหวินผงชานม 4.webp';
import product5 from '../assets/รวมรูปสินค้า/รวมน้ำหวาน 5.webp';
import product6 from '../assets/รวมรูปสินค้า/รวมมายองเนส 6.webp';
import shopImage from '../assets/shop_image.webp';

const ProductCard = ({ name, price, rating, image, isNew, link, category }) => (
    <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden group">
        <div className="relative h-56 bg-gray-100 dark:bg-slate-700 overflow-hidden">
            {isNew && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    สินค้าใหม่
                </span>
            )}
            <img src={image} alt={`สินค้า ${name} ร้านเกื้อกูลกัน`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" width="300" height="224" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-6 py-2 rounded-full font-medium hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                    ดูรายละเอียด
                </a>
            </div>
        </div>
        <div className="p-5">
            <span className="text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-slate-700 px-2 py-1 rounded-full font-medium">{category}</span>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white mt-2 mb-1">
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition">{name}</a>
            </h3>
            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                <Star size={14} fill="currentColor" />
                <span className="text-gray-600 dark:text-gray-300 font-medium">{rating}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary-600 dark:text-primary-400">฿{price}</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-50 dark:bg-slate-700 text-primary-600 dark:text-primary-400 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition" aria-label={`สั่งซื้อ ${name}`}>
                    <ShoppingCart size={20} />
                </a>
            </div>
        </div>
    </article>
);

const ProductsPage = () => {
    const products = [
        { name: 'กล่อง PG', price: 45, rating: 4.8, image: product1, isNew: true, category: 'บรรจุภัณฑ์', link: 'https://shopee.co.th/product/49357761/42968330885/' },
        { name: 'นมข้นหวาน', price: 25, rating: 4.9, image: product2, category: 'วัตถุดิบเบเกอรี่', link: 'https://shopee.co.th/product/49357761/43368200448/' },
        { name: 'ธัญพืช/ถั่ว', price: 60, rating: 4.7, image: product3, category: 'อาหารแห้ง', link: 'https://shopee.co.th/product/49357761/40113352798/' },
        { name: 'ผงชานมตราอี้เหวิน', price: 85, rating: 4.8, image: product4, category: 'เครื่องดื่ม', link: 'https://shopee.co.th/product/49357761/40714049116/' },
        { name: 'น้ำหวานเข้มข้น', price: 35, rating: 4.6, image: product5, category: 'เครื่องดื่ม', link: 'https://shopee.co.th/product/49357761/44018129845/' },
        { name: 'มายองเนส', price: 55, rating: 4.8, image: product6, category: 'เครื่องปรุงรส', link: 'https://shopee.co.th/product/49357761/42268163566' },
    ];

    const categories = ['ทั้งหมด', 'บรรจุภัณฑ์', 'วัตถุดิบเบเกอรี่', 'อาหารแห้ง', 'เครื่องดื่ม', 'เครื่องปรุงรส'];

    return (
        <>
            {/* Hero Banner */}
            <section className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-slate-900 dark:to-slate-800 py-16 text-white transition-colors duration-300" aria-label="สินค้าทั้งหมด">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">สินค้าทั้งหมด</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
                        เลือกซื้อสินค้าคุณภาพดี ราคาย่อมเยา จากร้านเกื้อกูลกัน Food Supply
                    </p>
                    <nav className="flex flex-wrap justify-center gap-3" aria-label="หมวดหมู่สินค้า">
                        {categories.map((cat, i) => (
                            <button key={i} className={`px-5 py-2 rounded-full font-medium transition text-sm ${i === 0 ? 'bg-white text-primary-600 dark:bg-slate-800 dark:text-primary-400' : 'bg-white/20 text-white hover:bg-white/30 dark:bg-slate-700 dark:hover:bg-slate-600'}`}>
                                {cat}
                            </button>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 bg-gray-50 dark:bg-slate-950 transition-colors duration-300" aria-label="รายการสินค้า">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center bg-white dark:bg-slate-800 rounded-2xl p-10 shadow-sm border border-gray-100 dark:border-slate-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">ต้องการสินค้าเพิ่มเติม?</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">เรามีสินค้ามากกว่า 5,000+ รายการ สามารถสั่งซื้อได้ทุกช่องทาง</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://shopee.co.th/kuekoonkanfoodsupply?categoryId=100629&entryPoint=ShopByPDP&itemId=28192611296" target="_blank" rel="noopener noreferrer" className="bg-[#EE4D2D] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition">
                                ซื้อบน Shopee
                            </a>
                            <a href="https://www.lazada.co.th/shop/kuekoonkan/?itemId=4471226738&channelSource=pdp" target="_blank" rel="noopener noreferrer" className="bg-[#0f146d] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition">
                                ซื้อบน Lazada
                            </a>
                            <Link to="/contact" className="bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition">
                                ติดต่อสอบถาม
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;
