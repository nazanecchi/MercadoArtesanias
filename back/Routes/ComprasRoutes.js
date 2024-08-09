const express = require('express');
const router = express.Router();
const Compras = require('../Compras');
const Middleware = require('../middleware');

// Rutas de compras
router.post('/onecompra', Middleware.validateToken, Compras.getOne);
router.post('/allcompras', Middleware.validateToken, Compras.getAll);
router.post('/compra', Middleware.validateToken, Compras.add);

module.exports = router;
