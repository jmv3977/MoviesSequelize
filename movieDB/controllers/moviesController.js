const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Movie = db.Movie;

const moviesController = {

    index: function(req, res) {
        Movie.findAll()
        .then(function(results){
            let moviesAll = results;

        return res.render('movies', {moviesAll});
        })
    },
    detail: function(req, res){
        Movie.findByPk(req.params.id)
        .then(function(result){
            let moviesPK = result
            return res.render('detail', {moviesPK});
        })
        .catch(e=> console.log(e))
    },
    new: function(req, res){
        Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
        .then(function(results){
            let newMovies = results
            return res.render('newMovies', {newMovies});
        })
        .catch(e=> console.log(e))
        },

        recommended: (req, res)=>{
            Movie.findAll({
                where: {rating:{[db.Sequelize.Op.gt]:8}}
            })
            .then((results)=>{
                let recommended= results
                return res.render('recommended', {recommended})
                })
                .catch(e=> console.log(e))
            },

            search: function(req, res) {
                return res.render('search');
          
            },
            
            searchProcess: (req, res) => {
                Movie.findAll({

                 where: {
                    title:{
                        [db.Sequelize.Op.like]: "%" + req.body.search + "%"
                    },
                order: [
                    [req.body.order, "ASC"]
                ]}
            })
            .then((results) => {
                let search = results
                return res.render("movies", {search})
            })
            .catch(e=> console.log(e))
            }
        }

module.exports = moviesController;