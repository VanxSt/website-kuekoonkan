
# ===================================================
# SEO Image Rename Script - Kuekoonkan Website
# Run this script in PowerShell from the project root
# ===================================================

$assetsPath = "d:\website kuekoonkan\src\assets"
$productPath = "d:\website kuekoonkan\src\assets\รวมรูปสินค้า"

Write-Host "=== Renaming images for SEO ===" -ForegroundColor Cyan

# --- Main assets ---
$mainRenames = @(
  @("logo.jpg",                    "kuekoonkan-logo.jpg"),
  @("logo.webp",                   "kuekoonkan-logo.webp"),
  @("shop_image.jpg",              "kuekoonkan-shop-front.jpg"),
  @("shop_image.webp",             "kuekoonkan-shop-front.webp"),
  @("googlemap.jpg",               "kuekoonkan-google-map.jpg"),
  @("googlemap.webp",              "kuekoonkan-google-map.webp"),
  @("map.jpg",                     "kuekoonkan-map-location.jpg"),
  @("map.webp",                    "kuekoonkan-map-location.webp"),
  @("LINE_REAL.png",               "kuekoonkan-line-qr-code.png"),
  @("LINE_REAL.webp",              "kuekoonkan-line-qr-code.webp"),
  @("lazada.png",                  "lazada-logo.png"),
  @("lazada.webp",                 "lazada-logo.webp"),
  @("shopee.png",                  "shopee-logo.png"),
  @("shopee.webp",                 "shopee-logo.webp"),
  @("Shopee.svg",                  "shopee-icon.svg"),
  @("product_main.svg",            "product-category-all.svg"),
  @("product_oil.svg",             "product-category-oil.svg"),
  @("product_seasoning.svg",       "product-category-seasoning.svg"),
  @("product_snack.svg",           "product-category-snack.svg"),
  @("ภาพของกินของใช้.jpg",        "kuekoonkan-grocery-products.jpg"),
  @("ภาพของกินของใช้.webp",       "kuekoonkan-grocery-products.webp"),
  @("ภาพคนยินดีต้อนรับ.jpg",     "kuekoonkan-welcome-staff.jpg"),
  @("ภาพคนยินดีต้อนรับ.webp",    "kuekoonkan-welcome-staff.webp"),
  @("ภาพสินค้า 1.jpg",           "kuekoonkan-product-01.jpg"),
  @("ภาพสินค้า 2.jpg",           "kuekoonkan-product-02.jpg"),
  @("ภาพสินค้า 3.jpg",           "kuekoonkan-product-03.jpg"),
  @("ภาพสินค้า 4.jpg",           "kuekoonkan-product-04.jpg"),
  @("ภาพสินค้า 5.jpg",           "kuekoonkan-product-05.jpg"),
  @("ภาพสินค้า 6.jpg",           "kuekoonkan-product-06.jpg"),
  @("รูปแต่ง banner.png",         "kuekoonkan-banner-decoration.png"),
  @("รูปแต่ง banner.webp",        "kuekoonkan-banner-decoration.webp")
)

foreach ($pair in $mainRenames) {
  $old = Join-Path $assetsPath $pair[0]
  if (Test-Path $old) {
    Rename-Item -Path $old -NewName $pair[1]
    Write-Host "  OK: $($pair[0])  ->  $($pair[1])" -ForegroundColor Green
  } else {
    Write-Host "  SKIP (not found): $($pair[0])" -ForegroundColor Yellow
  }
}

# --- Product subfolder ---
Write-Host ""
Write-Host "=== Renaming product images ===" -ForegroundColor Cyan

$productRenames = @(
  @("รวมกล่อง PG 1.jpg",              "kuekoonkan-pg-box-products.jpg"),
  @("รวมกล่อง PG 1.webp",             "kuekoonkan-pg-box-products.webp"),
  @("รวมน้มข้นหวาน 2.jpg",            "kuekoonkan-condensed-milk-products.jpg"),
  @("รวมน้มข้นหวาน 2.webp",           "kuekoonkan-condensed-milk-products.webp"),
  @("รวมสินค้าถั่ว 3.jpg",            "kuekoonkan-nut-products.jpg"),
  @("รวมสินค้าถั่ว 3.webp",           "kuekoonkan-nut-products.webp"),
  @("รวมอี้เหวินผงชานม 4.jpg",        "kuekoonkan-milk-tea-powder-products.jpg"),
  @("รวมอี้เหวินผงชานม 4.webp",       "kuekoonkan-milk-tea-powder-products.webp"),
  @("รวมน้ำหวาน 5.jpg",               "kuekoonkan-sweet-syrup-products.jpg"),
  @("รวมน้ำหวาน 5.webp",              "kuekoonkan-sweet-syrup-products.webp"),
  @("รวมมายองเนส 6.jpg",              "kuekoonkan-mayonnaise-products.jpg"),
  @("รวมมายองเนส 6.webp",             "kuekoonkan-mayonnaise-products.webp")
)

foreach ($pair in $productRenames) {
  $old = Join-Path $productPath $pair[0]
  if (Test-Path $old) {
    Rename-Item -Path $old -NewName $pair[1]
    Write-Host "  OK: $($pair[0])  ->  $($pair[1])" -ForegroundColor Green
  } else {
    Write-Host "  SKIP (not found): $($pair[0])" -ForegroundColor Yellow
  }
}

Write-Host ""
Write-Host "=== All done! ===" -ForegroundColor Cyan
