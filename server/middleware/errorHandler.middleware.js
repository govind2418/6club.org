const { buildMeta } = require('../helpers/seo.helper');
const { renderPage } = require('../helpers/render.helper');

// eslint-disable-next-line no-unused-vars
async function errorHandler(err, req, res, next) {
  const status = err.status || 500;

  console.error(err);

  try {
    const meta = buildMeta({
      title: 'BDG Win Error | BDG Win',
      description: 'BDG Win could not complete this request. Please try again or return to the BDG Win homepage.',
      path: req.originalUrl,
      noindex: true
    });

    res.status(status);
    await renderPage(req, res, '404', {
      meta,
      status,
      message: status === 500 ? 'Something went wrong on our end. Please try again shortly.' : err.message,
      breadcrumb: [{ label: 'Home', url: '/' }, { label: 'Error', url: null }]
    });
  } catch (renderErr) {
    console.error(renderErr);
    res.status(status).type('text/plain').send('BDG Win is temporarily unavailable. Please try again shortly.');
  }
}

module.exports = errorHandler;
