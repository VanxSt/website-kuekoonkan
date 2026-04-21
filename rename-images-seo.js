const fs = require('fs');
const path = require('path');

const assetsPath = path.join(__dirname, 'src', 'assets');
const productPath = path.join(assetsPath, '\u0e23\u0e27\u0e21\u0e23\u0e39\u0e1b\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32');

const mainRenames = [
  ['logo.jpg',                     'kuekoonkan-logo.jpg'],
  ['logo.webp',                    'kuekoonkan-logo.webp'],
  ['shop_image.jpg',               'kuekoonkan-shop-front.jpg'],
  ['shop_image.webp',              'kuekoonkan-shop-front.webp'],
  ['googlemap.jpg',                'kuekoonkan-google-map.jpg'],
  ['googlemap.webp',               'kuekoonkan-google-map.webp'],
  ['map.jpg',                      'kuekoonkan-map-location.jpg'],
  ['map.webp',                     'kuekoonkan-map-location.webp'],
  ['LINE_REAL.png',                'kuekoonkan-line-qr-code.png'],
  ['LINE_REAL.webp',               'kuekoonkan-line-qr-code.webp'],
  ['lazada.png',                   'lazada-logo.png'],
  ['lazada.webp',                  'lazada-logo.webp'],
  ['shopee.png',                   'shopee-logo.png'],
  ['shopee.webp',                  'shopee-logo.webp'],
  ['Shopee.svg',                   'shopee-icon.svg'],
  ['product_main.svg',             'product-category-all.svg'],
  ['product_oil.svg',              'product-category-oil.svg'],
  ['product_seasoning.svg',        'product-category-seasoning.svg'],
  ['product_snack.svg',            'product-category-snack.svg'],
  ['\u0e20\u0e32\u0e1e\u0e02\u0e2d\u0e07\u0e01\u0e34\u0e19\u0e02\u0e2d\u0e07\u0e43\u0e0a\u0e49.jpg',   'kuekoonkan-grocery-products.jpg'],
  ['\u0e20\u0e32\u0e1e\u0e02\u0e2d\u0e07\u0e01\u0e34\u0e19\u0e02\u0e2d\u0e07\u0e43\u0e0a\u0e49.webp',  'kuekoonkan-grocery-products.webp'],
  ['\u0e20\u0e32\u0e1e\u0e04\u0e19\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a.jpg',  'kuekoonkan-welcome-staff.jpg'],
  ['\u0e20\u0e32\u0e1e\u0e04\u0e19\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a.webp', 'kuekoonkan-welcome-staff.webp'],
  ['\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 1.jpg',  'kuekoonkan-product-01.jpg'],
  ['\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 2.jpg',  'kuekoonkan-product-02.jpg'],
  ['\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 3.jpg',  'kuekoonkan-product-03.jpg'],
  ['\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 4.jpg',  'kuekoonkan-product-04.jpg'],
  ['\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 5.jpg',  'kuekoonkan-product-05.jpg'],
  ['\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 6.jpg',  'kuekoonkan-product-06.jpg'],
  ['\u0e23\u0e39\u0e1b\u0e41\u0e15\u0e48\u0e07 banner.png',  'kuekoonkan-banner-decoration.png'],
  ['\u0e23\u0e39\u0e1b\u0e41\u0e15\u0e48\u0e07 banner.webp', 'kuekoonkan-banner-decoration.webp'],
];

const productRenames = [
  ['\u0e23\u0e27\u0e21\u0e01\u0e25\u0e48\u0e2d\u0e07 PG 1.jpg',              'kuekoonkan-pg-box-products.jpg'],
  ['\u0e23\u0e27\u0e21\u0e01\u0e25\u0e48\u0e2d\u0e07 PG 1.webp',             'kuekoonkan-pg-box-products.webp'],
  ['\u0e23\u0e27\u0e21\u0e19\u0e49\u0e21\u0e02\u0e49\u0e19\u0e2b\u0e27\u0e32\u0e19 2.jpg',   'kuekoonkan-condensed-milk-products.jpg'],
  ['\u0e23\u0e27\u0e21\u0e19\u0e49\u0e21\u0e02\u0e49\u0e19\u0e2b\u0e27\u0e32\u0e19 2.webp',  'kuekoonkan-condensed-milk-products.webp'],
  ['\u0e23\u0e27\u0e21\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e16\u0e31\u0e48\u0e27 3.jpg',   'kuekoonkan-nut-products.jpg'],
  ['\u0e23\u0e27\u0e21\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e16\u0e31\u0e48\u0e27 3.webp',  'kuekoonkan-nut-products.webp'],
  ['\u0e23\u0e27\u0e21\u0e2d\u0e35\u0e49\u0e40\u0e2b\u0e27\u0e34\u0e19\u0e1c\u0e07\u0e0a\u0e32\u0e19\u0e21 4.jpg',  'kuekoonkan-milk-tea-powder-products.jpg'],
  ['\u0e23\u0e27\u0e21\u0e2d\u0e35\u0e49\u0e40\u0e2b\u0e27\u0e34\u0e19\u0e1c\u0e07\u0e0a\u0e32\u0e19\u0e21 4.webp', 'kuekoonkan-milk-tea-powder-products.webp'],
  ['\u0e23\u0e27\u0e21\u0e19\u0e49\u0e33\u0e2b\u0e27\u0e32\u0e19 5.jpg',  'kuekoonkan-sweet-syrup-products.jpg'],
  ['\u0e23\u0e27\u0e21\u0e19\u0e49\u0e33\u0e2b\u0e27\u0e32\u0e19 5.webp', 'kuekoonkan-sweet-syrup-products.webp'],
  ['\u0e23\u0e27\u0e21\u0e21\u0e32\u0e22\u0e2d\u0e07\u0e40\u0e19\u0e2a 6.jpg',  'kuekoonkan-mayonnaise-products.jpg'],
  ['\u0e23\u0e27\u0e21\u0e21\u0e32\u0e22\u0e2d\u0e07\u0e40\u0e19\u0e2a 6.webp', 'kuekoonkan-mayonnaise-products.webp'],
];

let ok = 0, skip = 0;

function renameFiles(folder, pairs) {
  for (const [oldName, newName] of pairs) {
    const oldPath = path.join(folder, oldName);
    const newPath = path.join(folder, newName);
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`  OK: ${oldName} -> ${newName}`);
      ok++;
    } else {
      console.log(`  SKIP (not found): ${oldName}`);
      skip++;
    }
  }
}

console.log('=== Renaming main assets ===');
renameFiles(assetsPath, mainRenames);

console.log('\n=== Renaming product images ===');
renameFiles(productPath, productRenames);

console.log(`\n=== Done! ${ok} renamed, ${skip} skipped ===`);
