/**
 * Created by Alma on 4/28/2016.
 */
"use strict";

function conArroz(plato){
    return new Promise( function (resolve, rejected) {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato){
    return new Promise( function (resolve, rejected) {
        resolve(plato + ' ajo');
    });
}

function con(plato, ingrediente){
    return new Promise( function (resolve, rejected) {
        if (ingrediente ==='patatas'){
            return rejected(new Error('me niego a echarle patatas!'));
        }
        resolve(plato + ' ' +ingrediente);
    });
}

var paella= 'paella con ';

conArroz(paella)
    .then(conAjo)
    .then(function(plato){
        return con(plato,'patatas');
    })
    .then(function (plato) {
        console.log('plato: ', plato)
    })
    .catch(function (err) {
        console.log('Error:', err);
});

// ------------------------------------------------------

var resultado = 'Paella de';
function echar (ing){
    return new Promise(function (resolve, reject) {
        resolve(resultado + ' ' + ing);
    });
}

var ingredientes = ['conejo', 'pollo', 'pimienta', 'gambas'];

//llamadas a echar en paralelo
var arrayDePromesas = ingredientes.map(echar);

Promise.all(arrayDePromesas).then(function (res) {
    console.log('res', res);
});