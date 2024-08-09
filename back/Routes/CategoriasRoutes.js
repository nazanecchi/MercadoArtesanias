const express = require('express');
const router = express.Router();
const Categorias = require('../Categorias');
const Middleware = require('../middleware');

// Rutas de categorías
router.post('/onecategoria', Middleware.validateToken, Categorias.getOne);
router.post('/allcategorias', Middleware.validateToken, Categorias.getAll);

module.exports = router;
