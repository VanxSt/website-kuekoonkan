import React from 'react';

const StatsSection = () => {
    return (
        <section className="bg-primary-600 dark:bg-slate-900 py-12 sm:py-16 text-white border-y dark:border-slate-800 transition-colors duration-300" aria-label="ตัวเลขสำคัญ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center lg:divide-x divide-primary-500/50 dark:divide-slate-700">
                    <div>
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">5,000+</div>
                        <div className="text-primary-100 text-xs sm:text-base">รายการสินค้า</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">1,000+</div>
                        <div className="text-primary-100 text-xs sm:text-base">ลูกค้าไว้วางใจ</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">365</div>
                        <div className="text-primary-100 text-xs sm:text-base">เปิดบริการทุกวัน</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">24ชม.</div>
                        <div className="text-primary-100 text-xs sm:text-base">รับออเดอร์</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
