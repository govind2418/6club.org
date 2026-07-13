const express = require('express');
const { getHome, getPageBySlug, getSiteMap } = require('../controllers/page.controller');

const router = express.Router();

router.get('/', getHome);
router.get('/sitemap', getSiteMap);
router.get('/*', getPageBySlug);

module.exports = router;
