"use strict";

function* generador(num) {
    num--;
    let inyectado = yield num;
    console.log('inyectado', inyectado);
    num--;
    yield num;
    num--;
    yield num;
}

let iterador = generador(10);

console.log(iterador.next());
console.log(iterador.next(55,'dd'));
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());