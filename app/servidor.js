console.log('Arrancando servidor de FeedBack');
var express = require('express');
var app = express();


var servidor = app.listen(8080, function(){
    console.log('Servidor Arrancado');
});

app.use(express.static('cliente'));