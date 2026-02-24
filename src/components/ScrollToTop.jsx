import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // ถ้ามี hash (#services) ไม่ต้อง scroll ขึ้นบน ให้ hash link จัดการเอง
        if (hash) return;
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
