//const data = require('../data/heroes.json');
const fs = require('fs');
const path = require('path');



const heroesController = {
    //mostrar todos los heroes
    index: function (req, res){
        let json = path.join(__dirname, '../data/heroes.json')
        let data = fs.readFileSync(json, 'utf-8');
        res.send(data);

    },
    
    show: function(req, res){
        let heroeId = req.params.id
    
        let json = path.join(__dirname, '../data/heroes.json')
        let data = fs.readFileSync(json, 'utf-8');
        let heroes = JSON.parse(data);

        let heroe = heroes.filter(function (element){
            return element.id == heroeId;
        });

        if (heroe[0]) {

      res.send('Datos del Heroe: ' + 'Hola mi nombre es ' + heroe[0].nombre + 'y soy ' + heroe[0].profesion)
        }
        else {res.send('No hay heroes con ese numero de Id')}
},
    //bio: function(req, res){
    //let heroeId = req.params.id

    //let json = path.join(__dirname, '../data/heroes.json')
    //let data = fs.readFileSync(json, 'utf-8');
    //let heroes = JSON.parse(data);

    //let heroe = heroes.filter(function (element){
      //  return element.id == heroeId;
    //});

   //if (heroe[0]) {

  //res.send('Datos del Heroe: ' + 'Hola mi nombre es ' + heroe[0].nombre + 'y soy ' + heroe[0].profesion)
    //}
   // else {res.send('No hay heroes con ese numero de Id')}

    
    
    }
    
    
    module.exports = heroesController