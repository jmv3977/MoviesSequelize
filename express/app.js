const express = require('express');
const app = express();

const rutasProducto = require('./routes/producto');
const rutasHome = require('./routes/home');
const rutasLogin = require('./routes/login');


app.listen(3000, function(){console.log('running port:3000')});

app.use('/producto', rutasProducto);
app.use('/', rutasHome);
app.use('/login', rutasLogin);






