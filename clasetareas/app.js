//Importar las operaciones
const operations = require('./operations')

//Ejecutar operaciones en basa a acciones que indica el usuario
let actions = process.argv[2]

switch (actions){
    case 'listar':    //Desafío: Refactorizar para listar todas las tareas o tareas por estado si el usuario pasa un estado. En caso de crear una función podemos llevarla a operations.js y ejecutarla dentro del case.
        //obtener las tareas
        let tasksArray = operations.leerJSON();
        //Imprimirlas de a una por pantalla
        console.log();
        console.log('Lista de tareas');
        console.log('===============');

        if( tasksArray.length == 0 ){
            console.log('No hay tareas en la lista.');
            console.log();
        } else {
            tasksArray.forEach(function(task, i){
                console.log(i + ' - ' + task.titulo + ' | ' + task.estado)
            })
        }
        console.log();
        break;

    case 'crear' :
        //Obtener del usaurio los datos de la tarea a crear
        let titulo = process.argv[3];
        let newTask = {
            titulo : titulo,
            estado : 'Pendiente'
        }
        //Guardar la tarea dentro de la lista.
        operations.crear(newTask);
        break;

    case 'actualizar':
        //Obtener el indice de la terea a modificar
        let indice = process.argv[3];
        //Obtener el nuevo estado.
        let nuevoEstado = process.argv[4];
        //Actualizar la tarea.
        operations.actualizar(indice, nuevoEstado);

        //case 'eliminar':
//let eliminarIndice = process.argv[3];

//let eliminarEstado = process.argv [4];

// operations.eliminar(eliminarIndice, eliminarEstado);
       // break;


    //Desafío: Crear case para cuando el usario no pasa una acción.

    //Desafío: Crear case para cunado el usuario pasa una acción no valida.

}