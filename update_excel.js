const fs = require('fs');
const path = require('path');

// สคริปต์นี้ใช้สำหรับเพิ่มคำค้นหาในไฟล์ Excel 
// จำเป็นต้องติดตั้ง package `xlsx` ก่อน: npm install xlsx
const xlsx = require('xlsx');

const filePath = 'c:\\Users\\TRADER VAN\\Downloads\\New folder\\mass_update_basic_info_49357761_20260416083443.xlsx';

function updateKeywords() {
  console.log('เริ่มอ่านไฟล์ Excel...');
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // แปลงข้อมูลเป็น array 2 มิติ
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    
    if (data.length === 0) {
      console.log('ไม่พบข้อมูลในไฟล์ Excel');
      return;
    }
    
    // ค้นหาคอลัมน์ "คำค้นหา" หรือ "Keyword" (แถว 1-5 แรก)
    let targetColIdx = -1;
    let startRowIdx = -1;
    
    for(let r = 0; r < Math.min(5, data.length); r++) {
      const row = data[r];
      if (!row) continue;
      for(let c = 0; c < row.length; c++) {
        const cellValue = String(row[c] || '').toLowerCase();
        if (cellValue.includes('คำค้นหา') || cellValue.includes('keyword')) {
          targetColIdx = c;
          startRowIdx = r;
          break;
        }
      }
      if(targetColIdx !== -1) break;
    }
    
    if (targetColIdx === -1) {
      console.log('ไม่พบคอลัมน์ที่ชื่อ "คำค้นหา" หรือ "Keyword" ในแถวบนสุด');
      return;
    }

    console.log(`พบคอลัมน์คำค้นหาที่ตำแหน่ง: แถว ${startRowIdx + 1}, คอลัมน์ที่ ${targetColIdx + 1}`);

    let updatedCount = 0;
    
    // เพิ่มคำว่า "kuekoonkan,เกื้อกูลกัน" ให้กับสินค้าทุกรายการ
    for(let r = startRowIdx + 1; r < data.length; r++) {
      // ตรวจสอบว่าคอลัมน์ ID สินค้า หรือชื่อสินค้า (สมมติว่าเป็นคอลัมน์ใกล้กรอบซ้าย) ไม่ว่าง
      // เพื่อดูว่าเป็นแถวสินค้าจริงๆ ไม่ใช่แถวว่าง
      const isRowValid = data[r].slice(0, 5).some(val => val !== undefined && val !== null && String(val).trim() !== '');
      
      if (isRowValid) {
        let currentVal = data[r][targetColIdx] || '';
        if (typeof currentVal === 'string') {
          if (currentVal.trim() === '') {
            data[r][targetColIdx] = 'kuekoonkan,เกื้อกูลกัน';
            updatedCount++;
          } else if (!currentVal.includes('kuekoonkan')) {
            data[r][targetColIdx] = currentVal + ',kuekoonkan,เกื้อกูลกัน';
            updatedCount++;
          }
        }
      }
    }
    
    // บันทึกกลับลงไฟล์เดิม
    const newWorksheet = xlsx.utils.aoa_to_sheet(data);
    workbook.Sheets[sheetName] = newWorksheet;
    xlsx.writeFile(workbook, filePath);
    
    console.log(`อัปเดตคำค้นหาสำเร็จทั้งหมด ${updatedCount} รายการ!`);
    console.log(`บันทึกไฟล์เรียบร้อยแล้ว: ${filePath}`);
    
  } catch (error) {
    console.error('เกิดข้อผิดพลาด:', error.message);
  }
}

updateKeywords();
