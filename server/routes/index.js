const express = require('express');
const pagesRoutes = require('./pages.routes');
const blogRoutes = require('./blog.routes');
const sitemapRoutes = require('./sitemap.routes');
const robotsRoutes = require('./robots.routes');
const llmsRoutes = require('./llms.routes');

const router = express.Router();

router.use('/', robotsRoutes);
router.use('/', sitemapRoutes);
router.use('/', llmsRoutes);
router.use('/blog', blogRoutes);
router.use('/', pagesRoutes);

module.exports = router;
