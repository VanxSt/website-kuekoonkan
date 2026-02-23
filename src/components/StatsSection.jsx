import React from 'react';

const StatsSection = () => {
    return (
        <section className="bg-sky-600 py-16 text-white" aria-label="ตัวเลขสำคัญ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-sky-500/50">
                    <div>
                        <div className="text-4xl font-bold mb-2">5,000+</div>
                        <div className="text-sky-100">รายการสินค้า</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">1,000+</div>
                        <div className="text-sky-100">ลูกค้าไว้วางใจ</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">365</div>
                        <div className="text-sky-100">เปิดบริการทุกวัน</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">24ชม.</div>
                        <div className="text-sky-100">รับออเดอร์</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
