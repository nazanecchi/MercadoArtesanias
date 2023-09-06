const Compras = require('./Compras');
const Usuarios = require('./Usuarios');
const Articulos = require('./Articulos');
const Middleware = require('./middleware');
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./Models/connection.js')

app.use(express.urlencoded({extended:false}));
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

//  get nombre  get element
//  get nombres     get
//  post nombre     add
//  put nombre      update
//  delete nombre  delete


//USUARIO
app.get('/login', function(req, res){
    Middleware.login(req, res);
});

app.get('/usuario', function(req, res) { 
    Usuarios.getOne(req, res);
});

app.get('/usuarios', function(req, res) { 
    Usuarios.getAll(req, res);
});

app.post('/usuario', function(req, res) {
    Usuarios.add(req, res);
});

app.put('/usuario', function(req, res) {
    Usuarios.update(req, res);
});

app.delete('/usuario', function(req, res) {
    Usuarios.dlt(req, res);
});

//ARTICULOS
app.get('/articulo', function(req, res) { 
    Articulos.getOne(req, res);
});

app.get('/articulos', function(req, res) { 
    Articulos.getAll(req, res);
});
app.post('/articulo', function(req, res) { 
    Articulos.add(req, res);
});

app.put('/articulo', function(req, res) { 
    Articulos.update(req, res);
});

app.delete('/articulo', function(req, res) { 
    Articulos.dlt(req, res);
});


//COMPRAS
app.get('/compra/:id', function(req, res) { 
    Compras.getCompra(req, res);
});

app.get('/compras', function(req, res) {
    Compras.getCompras(req, res);
});

app.post('/compra', function(req, res) {
    Compras.addCompra(req, res);
});

app.put('/compra', function(req, res) {
    Compras.updateCompra(req, res); //no se le pasa la fecha y hora ya que no se puede modificar
});

app.delete('/compra/:id', function(req, res) {
    Compras.deleteCompra(req, res);
});






app.listen(3005, () => {
    console.log('Servidor iniciado en el puerto 3005');
  });