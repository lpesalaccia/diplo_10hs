var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var novevadesRouter = require('./routes/novedades'); // routes/novedades,js es un manejador de ruta

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//ruta 1 - manejador de rutas
app.use('/novedades', novevadesRouter);

//ruta 2
app.get('/nosotros',function(req,res){
  res.send('hola soy la pagina de nosotros')
})

//ruta 3
app.get('/servicios',function(req,res){
  res.send('hola soy la pagina de servicios')
})

//ruta 4
app.get('/galeria',function(req,res){
  res.send('hola soy la pagina de galeria')
})

//ruta 5
app.get('/contacto',function(req,res){
  res.send('hola soy la pagina de contacto')
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
