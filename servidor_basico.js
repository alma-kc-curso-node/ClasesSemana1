
//Importar librería http
var http=require('http');


//Crearemos el servidor
var server=http.createServer(function (request, response) {

    response.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});

    response.end('Wake up, <h1>Neo</h1>...\n')
});

//Arrancar el servidor
server.listen(1337,'127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');