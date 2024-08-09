const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connection = require('./Models/connection');
const userRoutes = require('./Routes/UsuariosRoutes');
const articuloRoutes = require('./Routes/ArticulosRoutes');
const direccionRoutes = require('./Routes/DireccionesRoutes');
const categoriaRoutes = require('./Routes/CategoriasRoutes');
const caracteristicaRoutes = require('./Routes/CaracteristicasRoutes');
const contenidoRoutes = require('./Routes/ContenidosRoutes');
const compraRoutes = require('./Routes/ComprasRoutes');
const fotoRoutes = require('./Routes/FotosRoutes');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
connection.connect(function(err) {
    if (err) {
        console.error('Falló la conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión a la base de datos exitosa.');
});

// Rutas estáticas para fotos
app.use('/FotosArticulos', express.static(path.join(__dirname, 'FotosArticulos')));

// Usar los routers
app.use('/', userRoutes);
app.use('/', articuloRoutes);
app.use('/', direccionRoutes);
app.use('/', categoriaRoutes);
app.use('/', caracteristicaRoutes);
app.use('/', contenidoRoutes);
app.use('/', compraRoutes);
app.use('/', fotoRoutes);

// Manejo de errores
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

app.listen(3005, () => {
    console.log('Servidor iniciado en el puerto 3005');
});
