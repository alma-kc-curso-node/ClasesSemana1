var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
//requerimos la conexion a la bbdd con mongoose.
require('./lib/connectMongoose');
//Requerimos los Modelos que vamos a mapear con mongoose
require('./models/Agente');
require('./models/Usuario');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
  console.log('req',req.baseUrl);
  next();
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Para cargar los ficheros estáticos:
app.use(express.static(path.join(__dirname, 'public')));
//RUTAS DE PRUEBA
//Si le queremos poner una ruta virtual a los ficheros estáticos... Le añade /pepe a /public y si no lo pones en la url 
//   no lo encuentra.
app.use('/pepe',express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'));
//app.use('/users', require('./routes/users'));
app.use('/admin', require('./routes/admin'));

//RUTAS del API de prueba de mongoose:
app.use('/api/v1/agentes', require('./routes/api/v1/agentes'));
app.use('/api/v1/usuarios', require('./routes/api/v1/usuarios'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);

});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
