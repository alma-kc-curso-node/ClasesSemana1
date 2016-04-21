"use strict";
var express = require('express');
var router = express.Router();

//traigo mi librería de autenticación
var auth=require('../lib/auth')

router.get('/',auth('1234'),function (req, res) {
    res.send('raíz de admin con id');
});


/*
router.get('/:id?',function (req, res) {
    res.send('raíz de admin con id');
});
*/
//Nunca entrará por aquí en este orden. Hay que poner primero los más genéricos y después los más particulaes.
/*router.get('/',function (req, res) {
    res.send('raíz de admin');
});
*/


//regExp: sólo números de 0 a 9.
router.get('/:identificador([0-9]+)/piso/:piso(A|B|C)', function (req, res) {
    console.log('req.params', req.params);
    console.log('req.query', req.query);

   res.send('zona de admin del usuario '+ req.params.identificador
   + ' piso ' + req.params.piso);
});

router.post('/',function (req, res) {
    console.log('req.body',req.body);
    res.send('body leido');
});

module.exports =router;