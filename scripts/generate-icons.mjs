/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function generate() {
  const publicDir = path.resolve(__dirname, '../public');
  const srcSvg = path.join(publicDir, 'logo.svg');
  const ogSvg = path.join(publicDir, 'og-image.svg');
  const outApple = path.join(publicDir, 'apple-touch-icon.png');
  const out32 = path.join(publicDir, 'favicon-32x32.png');
  const out16 = path.join(publicDir, 'favicon-16x16.png');
  const outOg = path.join(publicDir, 'og-image.png');

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

  if (fs.existsSync(ogSvg)) {
    const ogBuffer = await fs.promises.readFile(ogSvg);
    await sharp(ogBuffer)
      .resize(1200, 630)
      .png({ quality: 92 })
      .toFile(outOg);
    console.log('✓', path.basename(outOg));
  } else {
    console.warn('Skipping og-image.png: public/og-image.svg not found');
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
