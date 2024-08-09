const express = require('express');
const router = express.Router();
const Articulos = require('../Articulos');
const Middleware = require('../middleware');

// Rutas de artículos
router.post('/onearticulo', Middleware.validateToken, Articulos.getOne);
router.post('/allarticulos', Middleware.validateToken, Articulos.getAll);
router.post('/articulo', Middleware.validateToken, Articulos.add);
router.put('/articulo', Middleware.validateToken, Articulos.update);
router.delete('/onearticulo/:id', Middleware.validateToken, Articulos.dlt);

module.exports = router;
