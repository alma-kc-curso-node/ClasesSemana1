/**
 * Created by iberfan on 19/4/16.
 */
"use strict";

function creaClosure(nombre, nuevaEdad) {
    var edad = nuevaEdad || 20;
    return function(){
        console.log(nombre + ' ' + edad);
    }
}


var unClosure = creaClosure('Juan', 15);

var otroClosure = creaClosure('Alberto');

unClosure(); //Juan 15
otroClosure();//Alberto 20