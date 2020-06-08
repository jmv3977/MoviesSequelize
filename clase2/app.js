const tareasObj = require ('./tareas');

let action = process.argv[2];


switch(action){

    case 'listar': 
    
        console.log("Lista de tareas");
        let tareas = tareasObj.leerJson();
            for(let i=0; i<tareas.length; i++) {
        
                console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
            }
                console.log();
        
        
        break;

        case undefined: 
        
        console.log("Ingresa una accion valida");
        break;

        default: 
        console.log("Accion invalida")
        break;

}


function listarPendientes (){

}

console.log(process.argv)