//Importar un módulo que nos permita manejar archivos del sistema
const fs = require('fs');

const operations = {

//leer un archivo json con datos
leerJSON : function () {
    //preguntar 1ro si existe el archivo
        if (fs.existsSync('tasks.json')){
        //buscar una archivo json en las carpetas
        let tasks = fs.readFileSync('tasks.json', 'utf-8'); //Desafío: refactorizar para pasar el nombre de archivo dentro de una variable.
        //trasnformarlo en un formato operable 
        tasks = JSON.parse(tasks);
        //Retornarlo 
        return tasks;
    }
    return [];

},

//Escribir una nueva tarea
    //función que debe agregar una tarea al array de tareas
    //Convertir datos a texto plano en formato JSON.
    //Grabar los datos en el archivo JSON.
crear : function (task) {
    let tasksArray = this.leerJSON();
    tasksArray.push(task);
    // tasksArray = JSON.stringify(tasksArray, null, ' ')
    // fs.writeFileSync('tasks.json',tasksArray); Las reemplazamos por la función escribirJSON()
    this.escribirJSON(tasksArray);
    console.log('La tarea fua agregada con éxito.');
    console.log();

},

//Actualizar el estado de una tarea: voy a necesitar 2 parámetros.
actualizar : function (indice, nuevoEstado) {
    //Obtener la lista de tareas.
    let tasksArray = this.leerJSON();
    //Recorrer el array
    tasksArray.forEach(function (task, i) { //Desafío: ¿Qué opción tenemos para este foreach?
        if( indice == i){
            task.estado = nuevoEstado;
        }
    })
    // tasksArray = JSON.stringify(tasksArray, null, ' ');
    // fs.writeFileSync('tasks.json', tasksArray);   Las reemplazamos por la función escribirJSON()
    this.escribirJSON(tasksArray);
    console.log('El estado fue actualizado con éxito.');
    console.log();

},

//Escribirá los datos en el archivo json 
escribirJSON : function(datos){
    let tasksArray = JSON.stringify(datos, null, ' ');
    fs.writeFileSync('tasks.json', tasksArray);
} 

//Desafío: Eliminar la tarea 
//eliminar: function (eliminarIndice, eliminarEstado){
//let tasksArray = this.leerJSON();
//tasksArray.forEach(function())



}
module.exports = operations;
