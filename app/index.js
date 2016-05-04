import express from 'express'
    
var app = express()

app.use(express.static('app/cliente'))

app.listen(80, () => console.log('servidor iniciado en el puerto 80'))