/**
 * Created by Alma on 4/28/2016.
 */
"use strict";
var request= require('request');

//Hacer objeto de opciones
var options = {
    url: 'http://localhost:3000/api/v1/agentes',//Si no pongo método hace por defecto un GET
    json: true
    //headers: {'User-Agent': '...'},
};

//realizar la llamada
request(options, function (err, response, body) {
    if (err || response.statusCode >= 400){
        console.log('Error: ', response.statusCode, err);
        return;
    } //Mi api tiene Authentication, así que si no la comento en agentes.js --> router.use(jwtAuth()); Dará no autenticado
    console.log('Lista: ',body);
});