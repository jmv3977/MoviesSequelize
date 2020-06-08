const express = require('express');
const router = express.Router();
const creditosController = require('../controllers/creditosController')

router.get('/creditos',creditosController.index)

module.exports = router;