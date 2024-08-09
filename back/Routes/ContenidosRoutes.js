const express = require('express');
const router = express.Router();
const Contenido = require('../Contenidos');
const Middleware = require('../middleware');

// Rutas de contenidos
router.post('/onecontenido', Middleware.validateToken, Contenido.getOne);
router.put('/contenido', Middleware.validateToken, Contenido.update);

module.exports = router;
