//manejador de rutas para producto
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller')

router.get('/', productController.index);

router.get('/:idProducto', productController.show);

//router.get('/', productController,delete );
    


module.exports = router;