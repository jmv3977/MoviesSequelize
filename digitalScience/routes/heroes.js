const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController')

router.get('/', heroesControllers.index);

router.get('/detalle/:id', heroesControllers.show);

router.get('/detalle/bio/:id/ok', heroesControllers.bio);

module.exports = router


