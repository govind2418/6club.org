const { buildMeta } = require('../helpers/seo.helper');
const { renderPage } = require('../helpers/render.helper');

async function notFoundHandler(req, res, next) {
  try {
    const meta = buildMeta({
      title: 'Page Not Found | BDG Win',
      description:
        'The page you were looking for is not part of the BDG Win platform. Browse our casino, slot, lottery and sports game categories or head back to the homepage.',
      path: req.originalUrl,
      noindex: true
    });

    res.status(404);
    await renderPage(req, res, '404', {
      meta,
      breadcrumb: [{ label: 'Home', url: '/' }, { label: 'Not Found', url: null }]
    });
  } catch (err) {
    next(err);
  }
}

module.exports = notFoundHandler;
