"use strict";

console.log("empiezo");

function escribeTras2Segundos(n, callback) {
    setTimeout(function () {
        console.log('texto'+ n);
        callback();
    }, 2000);
}

//Función De control de flujo

function enSerie(n, fn, callbackFin){
    if(n == 0){
        callbackFin();
        return;
    }
    n--;
    fn(n, function () {
        enSerie(n, fn, callbackFin);
    })
}

enSerie(5,escribeTras2Segundos,function () {
    console.log("termino");
});


//Función para iterar colecciones.
function enSerieConArray(arr, fn, callbackFin){
    if(arr.length == 0){
        callbackFin();
        return;
    }

    fn(arr.shift(), function () {
        enSerieConArray(arr, fn, callbackFin);
    });
}

enSerieConArray([1,2,3,4,5],escribeTras2Segundos,function () {
    console.log("termino");
});
