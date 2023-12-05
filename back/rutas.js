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
app.post('/login', Middleware.login);

app.post('/oneusuario', Middleware.validateToken, Usuarios.getOne);

app.post('/allusuarios', Middleware.validateToken, Usuarios.getAll);

app.post('/usuario', Middleware.validateToken, Usuarios.add);

app.put('/usuario', Middleware.validateToken, Usuarios.update);

app.delete('/usuario', Middleware.validateToken, Usuarios.dlt);

//ARTICULOS
app.post('/onearticulo', Middleware.validateToken, Articulos.getOne);

app.post('/allarticulos', Middleware.validateToken, Articulos.getAll);

app.post('/articulo', Middleware.validateToken, Articulos.add);

app.put('/articulo', Middleware.validateToken, Articulos.update);

app.delete('/articulo', Middleware.validateToken, Articulos.dlt);

//DIRECCIONES

app.post('/onedireccion', Middleware.validateToken, Direcciones.getOne);

app.post('/alldirecciones', Middleware.validateToken, Direcciones.getAll);

app.post('/direccion', Middleware.validateToken, Direcciones.add);

app.put('/direccion', Middleware.validateToken, Direcciones.update);

app.delete('/direccion', Middleware.validateToken, Direcciones.dlt);

//CATEGORIAS

app.post('/onecategoria', Middleware.validateToken, Categorias.getOne);

app.post('/allcategorias', Middleware.validateToken, Categorias.getAll);

//CARACTERISTICAS

app.post('/onecaracteristica', Middleware.validateToken, Caracteristicas.getOne);

app.post('/allcaracteristicas', Middleware.validateToken, Caracteristicas.getAll);

//CONTENIDOS

app.post('/onecontenido', Middleware.validateToken, Contenido.getOne);

app.put('/contenido', Middleware.validateToken, Contenido.update);

//COMPRAS
app.post('/onecompra', Middleware.validateToken, Compras.getOne);

app.post('/allcompras', Middleware.validateToken, Compras.getAll);

app.post('/compra', Middleware.validateToken, Compras.add);

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
  
  app.post('/fotos/:id', Middleware.validateToken,  upload.array('archivos', 10), (req, res) => {
    // El archivo se ha cargado con éxito, aquí puedes realizar otras acciones, como guardar información en la base de datos
        Fotos.add(req, res, nombres);
        nombres = [];
  });

  app.get('/allfotos/:id', Middleware.validateToken, (req, res) => {
       Fotos.getAll(req, res);
       nombres = [];
  });


app.listen(3005, () => {
    console.log('Servidor iniciado en el puerto 3005');
  });