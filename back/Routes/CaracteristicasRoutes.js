const express = require('express');
const router = express.Router();
const Caracteristicas = require('../Caracteristicas');
const Middleware = require('../middleware');

// Rutas de características
router.post('/onecaracteristica', Middleware.validateToken, Caracteristicas.getOne);
router.post('/allcaracteristicas', Middleware.validateToken, Caracteristicas.getAll);

module.exports = router;
