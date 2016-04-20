"use strict";
var Persona= function (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
};


var trinity = new Persona('Trinity',38);

var matrixMixin = {
    vuela: function(){
        console.log(this.nombre + ' vuela');
    },
    esquivaBalas: function () {
        console.log(this.nombre + ' esquiva balas');
    }
};

// Extendemos el prototipo de las personas con un mixin. Esto se puede hacer varias veces para hacer "herencia múltiple".
Persona.prototype = Object.assign(Persona.prototype, matrixMixin);

var neo = new Persona('Thomas', 33);
console.log(neo);

neo.vuela();
neo.esquivaBalas();

console.log(trinity);
trinity.vuela();
trinity.esquivaBalas();