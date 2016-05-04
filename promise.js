/**
 * Created by Alma on 4/28/2016.
 */
"use strict";

//Devolver una pomesa que se completará cuando pase un tiempo
function espera(milis) {
    return new Promise(function (resolve, rejected) {
        setTimeout(function() {
            resolve('ok');
            //rejected('error');
        },milis);
    });
}

var promesa = espera(3000);
promesa.then((valor)=>{
    console.log('Resuelta: ', valor);
}).catch((err)=> {
    console.log('Error', err);
});
