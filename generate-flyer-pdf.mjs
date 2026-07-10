import puppeteer from 'puppeteer';
import path from 'path';
import { execSync } from 'child_process';
import fs from 'fs';

const htmlPath = path.resolve(process.argv[2] || 'flyer-a4.html');
const outputPath = path.resolve(process.argv[3] || 'flyer-a4.pdf');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();

// 塗り足し込みA4: 222mm x 303mm → 96dpi換算（横塗り足し6mm×2）
const WIDTH_PX = 839;   // 222mm at 96dpi
const HEIGHT_PX = 1146; // 303mm at 96dpi
const DPR = 4;          // 高解像度 (96 * 4 = 384dpi)

await page.setViewport({
  width: WIDTH_PX,
  height: HEIGHT_PX,
  deviceScaleFactor: DPR
});

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });

// .page要素のみをスクリーンショットで取得（画面表示と完全一致）
const pageEl = await page.$('.page');
const pngPath = outputPath.replace(/\.pdf$/, '.png');

await pageEl.screenshot({
  path: pngPath,
  type: 'png',
  omitBackground: true,
});

await browser.close();

console.log(`Screenshot captured: ${pngPath} (${WIDTH_PX * DPR}x${HEIGHT_PX * DPR}px)`);

// PNG → PDF (Pillow)
// 216mm x 303mm = 384dpi での pixel サイズと一致するよう DPI を設定
const DPI = 96 * DPR; // 384dpi
execSync(`python3 -c "
from PIL import Image
img = Image.open('${pngPath}')
img.save('${outputPath}', 'PDF', resolution=${DPI})
print('PDF generated: ${outputPath}')
"`);

// PNG 一時ファイルを削除
fs.unlinkSync(pngPath);

console.log('Done!');
