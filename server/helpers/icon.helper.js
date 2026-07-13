const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', '..', 'node_modules', 'lucide-static', 'icons');
const cache = {};

/**
 * Inlines a Lucide icon as raw SVG markup (no icon-font, no extra HTTP request).
 */
function icon(name, className = 'w-5 h-5') {
  if (!(name in cache)) {
    const file = path.join(iconsDir, `${name}.svg`);
    cache[name] = fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : '';
  }
  if (!cache[name]) return '';
  // Lucide's source SVGs already ship their own class="lucide lucide-x" attribute —
  // replace it instead of prepending a second one (duplicate attributes are invalid HTML).
  return cache[name]
    .replace(/\sclass="[^"]*"/, '')
    .replace('<svg', `<svg class="${className}" aria-hidden="true" focusable="false"`);
}

module.exports = icon;
