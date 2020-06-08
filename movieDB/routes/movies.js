const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.index)
router.get('/detail/:id', moviesController.detail)
router.get('/new', moviesController.new)
router.get('/recommended', moviesController.recommended)
router.get('/search', moviesController.search)
router.post('/search', moviesController.searchProcess)

module.exports = router;