console.log('Iniciando el Servidor de la feedback');

var express = require('express');
var app = express();
//var parcero = require('body-parser');
//app.use(parcero.urlencoded({extended: true}));
servidor = app.listen(8080, function(){
    console.log('Arrancó con Éxito el Servidor de la feedback');
});

app.use('/', express.static('cliente'));