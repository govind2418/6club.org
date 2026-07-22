const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

/**
 * Social crawlers (Facebook, Twitter/X, LinkedIn) do not reliably render SVG
 * for og:image / twitter:image, so every social-facing cover needs a raster
 * rendition generated from the original SVG artwork.
 *
 * og-cover and blog-cover are static photographic assets (not generated from
 * SVG) — do not add them back here or this script will overwrite them.
 */
const jobs = [
  { src: 'favicon.svg', out: 'apple-touch-icon.png', width: 180, height: 180 },
  { src: 'favicon.svg', out: 'favicon-32x32.png', width: 32, height: 32 },
  { src: 'favicon.svg', out: 'favicon-16x16.png', width: 16, height: 16 }
];

Promise.all(
  jobs.map(({ src, out, width, height }) =>
    sharp(path.join(imagesDir, src))
      .resize(width, height)
      .png({ quality: 90 })
      .toFile(path.join(imagesDir, out))
  )
)
  .then(() => console.log('Generated', jobs.map((j) => j.out).join(', ')))
  .catch((err) => {
    console.error('Failed to generate raster images', err);
    process.exit(1);
  });
