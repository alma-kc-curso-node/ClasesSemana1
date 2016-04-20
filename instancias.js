"use strict"
//Constructor de objetos
function Fruta(nombre) {
    this.nombre = nombre || 'limón';
    this.setNombre= function (valor) {
        this.nombre=valor;
    }
    return{
        setNombre: this.setNombre,
        getNombre: function () {
            return this.nombre;
        }
    }
}

//Crear un objeto
var fruta = new Fruta();
console.log(fruta);

fruta.setNombre('naranja');
console.log(fruta);

var pera =new Fruta('pera');
console.log(pera);
