//entry point

const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./routes/home'); // ruteador de home page

//levantar servidor
app.listen(3000, function(){console.log('Running on port:3000')});


app.set('views', path.join(__dirname, '/views'));//setea la carpeta en donde estaran los archivos de vistas
app.set('view engine', 'ejs') //setea nombre motor de vistas a usar



//Definimos que por el momento vamos a entregar html sin viw engine. Entregamos directo desde la carpeta public

app.use(express.static(__dirname + './public'));

// Rutas
app.use('/', homeRouter);