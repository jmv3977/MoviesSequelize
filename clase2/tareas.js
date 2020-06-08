const fs = require ('fs');


let tareas = {
leerJson: function (){
    let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
    let tareasObj = JSON.parse(tareasJson);
    return tareasObj;
}

}







module.exports = tareas;