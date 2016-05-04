"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var Agente = mongoose.model('Agente');

//Auth
var basicAuth = require('../../../lib/basicAuth');
var jwtAuth = require('../../../lib/jwtAuth');

//router.use(basicAuth('admin','1234'));
//router.use(jwtAuth());

router.post('/', function (req, res) {
    var agente = new Agente(req.body);
    console.log(agente);
    var errors = agente.validateSync();
    if (errors){
        console.log('errors',errors);
        next (new Error('Se produjo un error de validacion!!!'));
        return;
    }


    agente.save(function(err, saved){
        if (err){
            next (err);
            return;
        }
        res.json({success:true, saved: saved});
    });
});
//Autenticacion solo en el GET:
//router.get('/',basicAuth('admin','12345') ,function (req, res){
router.get('/',function (req, res){
    var name =req.query.name; //da error: {name: {$regex: req.query.name, $options:'i'}}; //Para case insensitive, pero no se pueden usar indices;
    var start = parseInt(req.query.start) || 0;
    var limit = parseInt(req.query.limit) || null;
    var sort = req.query.sort || null;
    var criteria ={};


    if (typeof name !== 'undefined'){
        criteria.name = name;
    }
    Agente.list(criteria,start,limit, sort, function (err, rows) {
        if (err){
            //Para devolver un status code distinto de 200, proque hay un error:
            return res.status(401).json({
                success:false,
                error: err
            });
        }
        res.json({success:true, rows:rows});
    });
    /*
    var query = Agente.find(criteria);
    //ordenamos por orden descendente
    query.sort({name:-1});
    //Ejecutar la consulta
    query.exec(function (err, rows) {
        if (err){
            next(err);
            return;
        }
        res.json({success:true, rows: rows});
    });*/
});
//Ejemplo de Promesas, ojo está sin terminar, algo no va...
router.get('/promesa', function(req,res){
    Agente.listPromise().then(function (data) {
        res.json({success:true, rows:data});
    }).catch(function (err) {
        res.json({success:false, rows:error});
    });
});

module.exports = router;