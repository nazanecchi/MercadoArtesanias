const Compras = require('./Compras');
const Usuarios = require('./Usuarios');
const Articulos = require('./Articulos');
const Direcciones = require('./Direcciones');
const Categorias = require('./Categorias');
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

//DIRECCIONES

app.get('/direccion', function(req, res) { 
    Direcciones.getOne(req, res);
});

app.get('/direcciones', function(req, res) { 
    Direcciones.getAll(req, res);
});

app.post('/direccion', function(req, res) { 
    Direcciones.add(req, res);
});

app.put('/direccion', function(req, res) { 
    Direcciones.update(req, res);
});

app.delete('/direccion', function(req, res) { 
    Direcciones.dlt(req, res);
});

//CATEGORIAS

app.get('/categoria', function(req, res) { 
    Categorias.getOne(req, res);
});

app.get('/categorias', function(req, res) { 
    Categorias.getAll(req, res);
});

//COMPRAS
app.get('/compra', function(req, res) { 
    Compras.getOne(req, res);
});

app.get('/compras', function(req, res) {
    Compras.getAll(req, res);
});

app.post('/compra', function(req, res) {
    Compras.add(req, res);
});


app.listen(3005, () => {
    console.log('Servidor iniciado en el puerto 3005');
  });