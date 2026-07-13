const path = require('path');
const ejs = require('ejs');
const site = require('../config/site.config');
const nav = require('../data/nav.data');
const icon = require('./icon.helper');
const { getBuiltAssets, getCriticalCss } = require('../utils/asset');

const viewsRoot = path.join(__dirname, '..', '..', 'views');

/**
 * Renders a page template inside the shared layout so every route
 * (home, the 47 generic pages, blog, 404, error) shares one head/header/footer.
 */
async function renderPage(req, res, pageView, locals = {}) {
  const shared = { schemas: [], breadcrumb: [], ...locals, site, nav, icon, req };

  const bodyHtml = await ejs.renderFile(path.join(viewsRoot, 'pages', `${pageView}.ejs`), shared, {
    views: [viewsRoot]
  });

  res.render('layouts/main', {
    ...shared,
    assets: getBuiltAssets(),
    criticalCss: getCriticalCss(),
    body: bodyHtml
  });
}

module.exports = { renderPage };
