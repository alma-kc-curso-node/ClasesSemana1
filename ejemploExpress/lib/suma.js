"use strict";
//##########   CREACIÓN DE MÓDULOS
//Crear una función
var sumar=function(n1,n2){
    return n1+n2;
}


//Exportar la función
//module.exports = sumar;

//Exporto un objeto con la función como método
module.exports.suma = sumar;

//equivalente a:
//exports.suma = sumar;
