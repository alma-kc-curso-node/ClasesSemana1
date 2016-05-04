/**
 * Created by Alma on 4/26/2016.
 */
"use strict";
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Usuario = require('mongoose').model('Usuario');
var config = require('../../../local_config');


//Usamos un Post porque no va a ser un m'etodo idempotente (siempre que ejecuta da el mismo resultado)
router.post('/authenticate', function (req, res) {
    var user = req.body.user;
    var pass = req.body.pass;

    Usuario.findOne({name:user}).exec(function (err, user) {
        if (err){
            return res.status(500).json({success: false, error:err});
        }
        if (!user){
            return res.status(401).json({success: false, error:'Auth failed. User not found.'});
        }

        if (user.pass !== pass){
            return res.status(401).json({success: false, error:'Auth failed. Invalid Password.'});
        }

        //Usuario valido
        var token = jwt.sign({id: user._id},config.jwt.secret, {
            expiresIn: '2 days' //en segundos o un string
        });

        res.json({success:true, token:token});
    })
});

module.exports = router;//Si no ponemos esto dice que espera un middleware y que recibe un objeto.