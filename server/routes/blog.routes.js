const express = require('express');
const blogController = require('../controllers/blog.controller');

const router = express.Router();

router.get('/', blogController.index);
router.get('/page/:page', blogController.index);
router.get('/category/:slug', blogController.byCategory);
router.get('/category/:slug/page/:page', blogController.byCategory);
router.get('/tag/:slug', blogController.byTag);
router.get('/tag/:slug/page/:page', blogController.byTag);
router.get('/author/:slug', blogController.byAuthor);
router.get('/author/:slug/page/:page', blogController.byAuthor);
router.get('/:slug', blogController.show);

module.exports = router;
