var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('hola soy la pagina de novedades');
});*/

router.get('/', function(req, res, next) {
    res.render('novedades'); 
});

module.exports = router;
