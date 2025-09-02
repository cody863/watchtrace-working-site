/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function generate() {
  const publicDir = path.resolve(__dirname, '../public');
  const srcSvg = path.join(publicDir, 'logo.svg');
  const outApple = path.join(publicDir, 'apple-touch-icon.png');
  const out32 = path.join(publicDir, 'favicon-32x32.png');
  const out16 = path.join(publicDir, 'favicon-16x16.png');

  if (!fs.existsSync(srcSvg)) {
    console.error('Missing public/logo.svg');
    process.exit(1);
  }

  await ensureDir(publicDir);

  const svgBuffer = await fs.promises.readFile(srcSvg);

  await sharp(svgBuffer)
    .resize(180, 180)
    .png({ quality: 90 })
    .toFile(outApple);
  console.log('✓', path.basename(outApple));

  await sharp(svgBuffer)
    .resize(32, 32)
    .png({ quality: 90 })
    .toFile(out32);
  console.log('✓', path.basename(out32));

  await sharp(svgBuffer)
    .resize(16, 16)
    .png({ quality: 90 })
    .toFile(out16);
  console.log('✓', path.basename(out16));
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
