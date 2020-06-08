const express = require('express');
const app = express();

// Routes handlers
const homeRoutes = require('./routes/home');
const heroesRoutes = require('./routes/heroes');
const creditosRoutes = require('./routes/creditos')

// arrancar servidor
app.listen(3000, function(){console.log('Running on port:3000')});
// o con arrow function -> app.listen(3000, ()=> console.log('Running on port:3000'))

// la ruta apunta a un manejador de rutas
app.use('/', homeRoutes );
app.use('/heroes', heroesRoutes);
app.use('/creditos', creditosRoutes);