function obtenerDatos(callback){ //callback puede ser cambiado
    setTimeout(() => { //esta funcion recibe 2 parametros
        const datos = {id:1, nombre:"Juan"};
        callback(datos); 
    }, 2000); //2do parametro (tiempo en milisegundos que se retrasara)
}

function procesarDatos(datos){
    console.log("datos procesados:", datos);
}

obtenerDatos(procesarDatos); //introduce como parametro otra funcion
console.log("Esperando datos..."); //la primera funcion tiene un retraso de 2000, asi que esta funcion se ejecuta primero