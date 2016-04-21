"use strict";

//cargar librerías
var fs=require('fs');
var path =require('path');
var async = require('async');

function versionModulo(moduleName, callback) {
    var fichero =path.join('./node_modules',moduleName,'package.json');
    //console.log(fichero);

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

function leeModulos(fichero) {
    fs.readdir(fichero, (err,files) => {
        if (err) {
            console.log(err);
            return;
        }
        async.concat(files,function(file) {
            versionModulo(file,function (err, version) {
                if(err){
                    console.log('Error:',err);
                    return;
                }
                console.log('La versión de' + file + 'es:', version);
            });
        });
    });
}

leeModulos('./node_modules');
 /*   if (files.length == 0) {
        console.log('No hay módulos');
        return;
    }
    leerModules(files, versionModulo, (err,name, version) => {
        if (err) {
            console.log('Error:', err);
            return;
        }
        console.log('La versión de' + name + 'es:', version);
    });
});/*



  /*
versionModulo('chance',function (err, version) {
    if(err){
        console.log('Error:',err);        
        return;
    }
    console.log('La versión de chance es:', version);
})*/