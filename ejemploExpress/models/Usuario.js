var mongoose = require('mongoose');

//Creamos el esquema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, //hacemos que el nombre sea requerido
        index:true //Hacemos que se indexe por este campo.
    },
    pass: String
});




//Lo asignamos al modelo. OJO! mongoose lo pone en minusculas y en plural cuando crea la Collection
var Usuario = mongoose.model('Usuario', userSchema);
