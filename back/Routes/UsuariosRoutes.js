const express = require('express');
const router = express.Router();
const Usuarios = require('../Usuarios');
const Middleware = require('../middleware');

// Rutas de usuarios
router.post('/login', Middleware.login);
router.post('/oneusuario', Middleware.validateToken, Usuarios.getOne);
router.post('/allusuarios', Middleware.validateToken, Usuarios.getAll);
router.post('/usuario', Usuarios.add);
router.put('/usuario', Middleware.validateToken, Usuarios.update);
router.delete('/usuario', Middleware.validateToken, Usuarios.dlt);

module.exports = router;
