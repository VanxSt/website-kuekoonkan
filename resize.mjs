import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resizeImages = async () => {
    try {
        const assetsDir = path.join(__dirname, 'src', 'assets');
        console.log('⏳ กำลังย่อขนาดรูปภาพ...');
        
        // 1. Logo
        const logoPath = path.join(assetsDir, 'kuekoonkan-logo.webp');
        if (fs.existsSync(logoPath)) {
            const buffer = fs.readFileSync(logoPath);
            await sharp(buffer)
                .resize(200, 200, { fit: 'inside' })
                .toFile(logoPath);
            console.log('✅ ย่อรูป kuekoonkan-logo.webp สำเร็จ');
        }

        // 2. Staff
        const staffPath = path.join(assetsDir, 'kuekoonkan-welcome-staff.webp');
        if (fs.existsSync(staffPath)) {
            const buffer = fs.readFileSync(staffPath);
            await sharp(buffer)
                .resize(600, 500, { fit: 'inside' })
                .toFile(staffPath);
            console.log('✅ ย่อรูป kuekoonkan-welcome-staff.webp สำเร็จ');
        }

        // 3. Shop front
        const shopPath = path.join(assetsDir, 'kuekoonkan-shop-front.webp');
        if (fs.existsSync(shopPath)) {
            const buffer = fs.readFileSync(shopPath);
            await sharp(buffer)
                .resize(800, 600, { fit: 'inside' })
                .toFile(shopPath);
            console.log('✅ ย่อรูป kuekoonkan-shop-front.webp สำเร็จ');
        }

        console.log('🎉 ย่อรูปทั้งหมดเสร็จเรียบร้อยแล้วครับ! (คะแนน PageSpeed จะดีขึ้นแน่นอน)');
    } catch (error) {
        console.error('❌ เกิดข้อผิดพลาด:', error);
    }
};

resizeImages();
