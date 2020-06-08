

module.exports = (sequelize, dataTypes)=> {

    const alias = "Movie"; // como se llama tu modelo
    const cols = {
        title: dataTypes.STRING,
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        
        },
        rating: dataTypes.INTEGER,
        awards: dataTypes.INTEGER,
        length: dataTypes.INTEGER,
        release_date: dataTypes.DATE

          }

    const config = {
        timestamps: false  
    }

const Movie = sequelize.define( alias, cols, config);

return Movie;
}
