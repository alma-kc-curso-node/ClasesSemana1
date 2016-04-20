"use strict";

function Persona(name) {
    this.name = name;    
}

var persona = new Persona('Neo');

// Asigno método a todas las personas
Persona.prototype.saluda = function () {
    console.log('Hola me llamo ' + this.name);
}

persona.saluda();

// Herencia de persona

function Agente(name){
    Persona.call(this,name);
    //ejecuto el constructor de persona sobre mí mismo
}
//Así se consigue la herencia, porque le indicamos que nuestro prototipo es persona, que heredamos de ella
Agente.prototype=new Persona('soy un prototipo');

// creo agentes que heredan de Persona
var agente = new Agente('Smith');

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
)