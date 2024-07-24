const express = require('express');
const router = express.Router();
const Direcciones = require('../Direcciones');
const Middleware = require('../middleware');

// Rutas de direcciones
router.post('/onedireccion', Middleware.validateToken, Direcciones.getOne);
router.post('/alldirecciones', Middleware.validateToken, Direcciones.getAll);
router.post('/direccion', Middleware.validateToken, Direcciones.add);
router.put('/direccion', Middleware.validateToken, Direcciones.update);
router.delete('/direccion', Middleware.validateToken, Direcciones.dlt);

module.exports = router;
