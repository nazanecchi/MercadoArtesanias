const Compras = require('./Compras');
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./connection.js')

app.use(express.json());
app.use(cors());

connection.connect(function(err) {
    if (err) 
    {
        console.error('Falló la conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión a la base de datos exitosa.');
});

//  get nombres     get
//  post nombre     add
//  put nombre      update
//  put nombre/:id  delete


//COMPRAS

app.get('/compras', function(req, res) {
    Compras.getCompras(req, res);
});

app.post('/compra', function(req, res) {
    Compras.addCompra(req, res);
});

app.put('/compra', function(req, res) {
    Compras.updateCompra(req, res); //no se le pasa la fecha y hora ya que no se puede modificar
});

app.put('/compra/:id', function(req, res) {
    Compras.deleteCompra(req, res);
});




app.listen(3005, () => {
    console.log('Servidor iniciado en el puerto 3005');
  });