const Compras = require('./Compras');
const Usuarios = require('./Usuarios');
const Articulos = require('./Articulos');
const Direcciones = require('./Direcciones');
const Categorias = require('./Categorias');
const Caracteristicas = require('./Caracteristicas');
const Contenido = require('./Contenidos');
const Fotos = require('./Fotos.js');
const Middleware = require('./middleware');
const express = require('express');
const morgan = require('morgan');
const uuid = require('uuid');
const multer = require('multer');
const app = express();
const cors = require('cors');
const connection = require('./Models/connection.js');
const path = require('path');

app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
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



const fileRouter = express.Router();
fileRouter.use('/',  express.static(path.join(__dirname, '/FotosArticulos')));
app.use('/FotosArticulos', fileRouter);

//USUARIO
app.post('/login', function(req, res){
    Middleware.login(req, res);
});

app.post('/oneusuario', function(req, res) { 
    Usuarios.getOne(req, res);
});

app.post('/allusuarios', function(req, res) { 
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
app.post('/onearticulo', function(req, res) { 
    Articulos.getOne(req, res);
});

app.post('/allarticulos', function(req, res) { 
    Articulos.getAll(req, res);
});
app.post('/articulo', Articulos.add);

app.put('/articulo', function(req, res) { 
    Articulos.update(req, res);
});

app.delete('/articulo', function(req, res) { 
    Articulos.dlt(req, res);
});

//DIRECCIONES

app.post('/onedireccion', function(req, res) { 
    Direcciones.getOne(req, res);
});

app.post('/alldirecciones', function(req, res) { 
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

app.post('/onecategoria', function(req, res) { 
    Categorias.getOne(req, res);
});

app.post('/allcategorias', function(req, res) { 
    Categorias.getAll(req, res);
});

//CARACTERISTICAS

app.post('/onecaracteristica', function(req, res) {
    Caracteristicas.getOne(req, res);
});

app.post('/allcaracteristicas', function(req, res) {
    Caracteristicas.getAll(req, res);
});

//CONTENIDOS

app.post('/onecontenido', function(req, res) {
    Contenido.getOne(req, res);
});

app.put('/contenido', function(req, res) { 
    Contenido.update(req, res);
});




//COMPRAS
app.post('/onecompra', function(req, res) { 
    Compras.getOne(req, res);
});

app.post('/allcompras', function(req, res) {
    Compras.getAll(req, res);
});

app.post('/compra', function(req, res) {
    Compras.add(req, res);
});

// FOTOS

var nombres = []
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'FotosArticulos/'); // Carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
      // Genera un nombre de archivo único utilizando UUID
      const extension = file.originalname.split('.').pop();
      const nombreUnico = `${uuid.v4()}.${extension}`;
      cb(null, nombreUnico);
      nombres.push(nombreUnico);
    },
  });

  const upload = multer({ storage: storage });
  
  app.post('/fotos/:id', upload.array('archivos', 10), (req, res) => {
    // El archivo se ha cargado con éxito, aquí puedes realizar otras acciones, como guardar información en la base de datos
        Fotos.add(req, res, nombres);
        nombres = [];
  });

  app.get('/allfotos/:id', (req, res) => {
       Fotos.getAll(req, res);
       nombres = [];
  });


app.listen(3005, () => {
    console.log('Servidor iniciado en el puerto 3005');
  });