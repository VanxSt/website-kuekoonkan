$excelPath = "c:\Users\TRADER VAN\Downloads\New folder\mass_update_basic_info_49357761_20260416083443.xlsx"

Write-Host "กำลังเปิดโปรแกรม Excel เพื่อทำการอัปเดตไฟล์..."
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

try {
    $workbook = $excel.Workbooks.Open($excelPath)
    $worksheet = $workbook.Sheets.Item(1)

    $targetCol = 0
    $headerRow = 0
    $colCount = $worksheet.UsedRange.Columns.Count

    # ค้นหาคอลัมน์จาก 5 แถวแรก
    for ($r = 1; $r -le 5; $r++) {
        for ($c = 1; $c -le $colCount; $c++) {
            $cellVal = $worksheet.Cells.Item($r, $c).Text
            if ($cellVal -match "คำค้นหา" -or $cellVal -match "Keyword") {
                $targetCol = $c
                $headerRow = $r
                break
            }
        }
        if ($targetCol -ne 0) { break }
    }

    if ($targetCol -ne 0) {
        Write-Host "พบคอลัมน์แล้ว กำลังประมวลผลข้อมูล (อาจใช้เวลาสักครู่)..."
        $rowCount = $worksheet.UsedRange.Rows.Count
        $updatedCount = 0
        
        for ($r = $headerRow + 1; $r -le $rowCount; $r++) {
            # ตรวจสอบคอลัมน์แรกเพื่อดูว่าแถวนั้นไม่ใช่แถวว่าง
            $checkVal = $worksheet.Cells.Item($r, 1).Text
            if (-not [string]::IsNullOrWhiteSpace($checkVal)) {
                $currentVal = $worksheet.Cells.Item($r, $targetCol).Text
                
                if ([string]::IsNullOrWhiteSpace($currentVal)) {
                    $worksheet.Cells.Item($r, $targetCol).Value2 = "kuekoonkan,เกื้อกูลกัน"
                    $updatedCount++
                } elseif ($currentVal -notmatch "kuekoonkan") {
                    $worksheet.Cells.Item($r, $targetCol).Value2 = $currentVal + ",kuekoonkan,เกื้อกูลกัน"
                    $updatedCount++
                }
            }
        }
        $workbook.Save()
        Write-Host "อัปเดตสำเร็จทั้งหมด $updatedCount รายการ!"
    } else {
        Write-Host "ข้อผิดพลาด: ไม่พบคอลัมน์ 'คำค้นหา'"
    }
} catch {
    Write-Host "เกิดข้อผิดพลาด: $($_.Exception.Message)"
} finally {
    if ($workbook) { $workbook.Close($false) }
    $excel.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
    Write-Host "ปิดระบบเรียบร้อย"
}
