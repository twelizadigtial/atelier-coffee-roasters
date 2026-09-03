const fs = require('fs');
const path = require('path');
const https = require('https');

const assetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const assets = [
  'logo_without_tagline-BejJC3Se.webp',
  'mylk_logo_hero_with_tagline-F40FAor9.svg',
  'hero_bg-kSiawKrj.webp',
  'hero_bg_mobile-BtLZ533g.webp',
  'mylk_cup-9JVap0Nj.webp',
  'Section%202%20BG-mfNpyt-Q.webp',
  'ritual_bg_mobile-XxtP-Zd1.webp',
  'Section%203%20BG-BW-pyzEn.webp',
  'features_bg_mobile-uB_nbH0I.webp',
  'Golden%20milk-B6kdDFOY.webp',
  'Golden%20Solid%20BG-V4RmzAJh.webp',
  'Golden%20BG%20element-DjFPrUi6.webp',
  'Golden%20Milk%20BG%20Element%20Mobile-5QhOLxFQ.webp',
  'Pista%20milk-D1hT_nqJ.webp',
  'Pista%20Solid%20BG-CZ-yPIKj.webp',
  'Pista%20BG%20element-jRd9ZlPL.webp',
  'Pista%20Milk%20BG%20Element%20Mobile-D3RpFRXx.webp',
  'Rose%20Milk-BMDQU9uj.webp',
  'Rose%20Solid%20BG-slS4laLz.webp',
  'Rose%20BG%20element-na4EC57Q.webp',
  'Rose%20Milk%20BG%20Element%20Mobile-N3PvGGsf.webp',
  'choco%20Milk-BVhlzhBW.webp',
  'Chocolate%20Solid%20BG--wag3Wlz.webp',
  'Chocolate%20BG%20element-DVacJWed.webp',
  'choco%20Milk%20BG%20Element%20Mobile-6zrLxT1b.webp',
  'Butterscotch%20Mik-B0gCLF24.webp',
  'Butter%20Solid%20BG-CwoyCXKU.webp',
  'Butter%20BG%20element-B9SEfOm5.webp',
  'Butter%20BG%20Element%20Mobile-BNw8_54b.webp',
  'Form%20section%20bg-Dcz46epU.webp'
];

function download(asset) {
  return new Promise((resolve, reject) => {
    const decodedName = decodeURIComponent(asset);
    const filePath = path.join(assetsDir, decodedName);
    const file = fs.createWriteStream(filePath);
    const url = `https://www.mylk-co.com/assets/${asset}`;
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${decodedName}`);
          resolve();
        });
      } else {
        console.error(`Failed ${asset}: status ${response.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      console.error(`Error ${asset}: ${err.message}`);
      resolve();
    });
  });
}

async function downloadAll() {
  for (const asset of assets) {
    await download(asset);
  }
  console.log('Done downloading all assets!');
}

downloadAll();
