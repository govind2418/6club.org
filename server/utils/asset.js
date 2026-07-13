const fs = require('fs');
const path = require('path');
const env = require('../config/env');

const buildDir = path.join(__dirname, '..', '..', 'public', 'build');
const manifestPath = path.join(buildDir, '.vite', 'manifest.json');
const legacyManifestPath = path.join(buildDir, 'manifest.json');

let manifestCache = null;
let cssCache = null;

function readManifest() {
  // In dev, `vite build --watch` rewrites the manifest with new content hashes on every
  // save, so caching would serve stale asset URLs until the process restarts. Only cache
  // in production, where the build is immutable for the life of the process.
  if (env.isProd && manifestCache) return manifestCache;

  const target = fs.existsSync(manifestPath) ? manifestPath : legacyManifestPath;
  if (!fs.existsSync(target)) return null;

  const parsed = JSON.parse(fs.readFileSync(target, 'utf-8'));
  if (env.isProd) manifestCache = parsed;
  return parsed;
}

function getBuiltAssets() {
  const manifest = readManifest();
  if (!manifest) {
    return { css: [], js: [] };
  }
  const entry = manifest['src/js/main.js'];
  if (!entry) return { css: [], js: [] };

  // With cssCodeSplit disabled, Vite sometimes emits the stylesheet as its own
  // top-level manifest entry (e.g. "style.css") instead of nesting it under the
  // JS entry's `css` array. Collect both shapes so neither Vite version loses it.
  const cssFromEntry = (entry.css || []).map((c) => `/build/${c}`);
  const cssFromTopLevel = Object.values(manifest)
    .filter((item) => item.file && item.file.endsWith('.css'))
    .map((item) => `/build/${item.file}`);

  return {
    js: [`/build/${entry.file}`],
    css: Array.from(new Set([...cssFromEntry, ...cssFromTopLevel]))
  };
}

/**
 * Reads the compiled stylesheet so it can be inlined directly in <head>.
 * The whole bundle is ~5KB gzipped, so inlining removes a render-blocking
 * network round trip entirely instead of just preloading it.
 */
function getCriticalCss() {
  if (env.isProd && cssCache !== null) return cssCache;

  const assets = getBuiltAssets();
  const css = assets.css
    .map((href) => {
      const filePath = path.join(__dirname, '..', '..', 'public', href.replace(/^\/+/, ''));
      return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '';
    })
    .join('\n');

  if (env.isProd) cssCache = css;
  return css;
}

module.exports = { getBuiltAssets, getCriticalCss };
