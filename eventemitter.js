"use strict";

var events = require('events');

var emisor = new events.EventEmitter();

emisor.on('llamada de teléfono', function (quien) {
    if (quien !== 'madre') {
        console.log('ring ring');
    }
});

emisor.on('llamada de teléfono', function () {
    console.log('brr brr');
});

setTimeout(function () {
    emisor.emit('llamada de teléfono', 'madre');
},2000);
