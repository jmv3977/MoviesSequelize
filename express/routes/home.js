const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('Hola estamos en el sitio');
})



module.exports = router;