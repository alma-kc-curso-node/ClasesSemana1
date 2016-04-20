var persona = {
    name: 'Juan',
    surName: 'López',
    printFullName: function(n){
        console.log(this.name + ' ' + this.surName + n);
    }
};

var persona2={
    name: 'Javi',
    surName: 'López'
}
persona.printFullName();

//Con bind le indicamos cual es this.
setTimeout(persona.printFullName.bind(persona), 2000);

//Arreglamos this con call
persona.printFullName.call(persona,5);

//Arreglamos this con apply. Ejecutamos el método de persona "prestado" sobre persona2
persona.printFullName.apply(persona2,[5]);