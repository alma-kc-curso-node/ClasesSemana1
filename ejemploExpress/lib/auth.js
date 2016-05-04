"use strict";

var auth = function(claveEsperada) {
    return function (req, res, next) {
        if (req.query.clave !== claveEsperada) {
            res.status(401).send('no estás autorizado');
            return;
        }
        next();//Pasa al siguiente middleware

    }
};
module.exports = auth;