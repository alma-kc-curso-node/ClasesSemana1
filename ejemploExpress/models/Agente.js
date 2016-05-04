var mongoose = require('mongoose');

//Creamos el esquema
var agenteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true //hacemos que el nombre sea requerido
    },
    age: Number
});

//Hacer metodo estatico
agenteSchema.statics.list = function (filter, start,limit, sort, cb){
    var query = Agente.find(filter);
    //como no le pusimos el exec, podemos poner mas cosas a la query
    query.skip(start);
    query.limit(limit);
    query.sort(sort);
    return query.exec(cb); //EXEC devuelve una promesa
};

var fs = require('fs');
agenteSchema.statics.listPromise = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile(__dirname + '/../agenteMock.json','utf-8', function(err,data) { //__dirname = dir en el que estamos
            if (err){
                return reject(err);

            }
            return resolve(JSON.parse(data));
        });
    });
};

//Lo asignamos al modelo. OJO! mongoose lo pone en minusculas y en plural cuando crea la Collection
var Agente = mongoose.model('Agente', agenteSchema);
