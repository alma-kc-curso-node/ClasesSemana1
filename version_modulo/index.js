"use strict";

//cargar librerías
var fs=require('fs');
var path =require('path');

function versionModulo(moduleName, callback) {
    var fichero =path.join('./node_modules',moduleName,'package.json');
    console.log(fichero);

    //leer el package.json
    fs.readFile(fichero, (err, data) => {
        if(err){
            callback(err);
            return;
        }
        //parsear el fichero
        try{
            var packajeJson = JSON.parse(data);
        }catch (e) {
            callback('No se pudo entender el formato del fichero ' + fichero);
            return;
        }
    //obtener versión

    callback(null,packajeJson.version);
    });
}


//------- llamada a la función
versionModulo('chance',function (err, version) {
    if(err){
        console.log('Error:',err);        
        return;
    }
    console.log('La versión de chance es:', version);
})