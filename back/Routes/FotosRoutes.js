const express = require('express');
const router = express.Router();
const multer = require('multer');
const uuid = require('uuid');
const Fotos = require('../Fotos');
const Middleware = require('../middleware');
const path = require('path');

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'FotosArticulos/');
    },
    filename: (req, file, cb) => {
      const extension = file.originalname.split('.').pop();
      const nombreUnico = `${uuid.v4()}.${extension}`;
      cb(null, nombreUnico);
    },
});

const upload = multer({ storage: storage });

// Rutas de fotos
router.post('/fotos/:id', Middleware.validateToken, upload.array('archivos', 10), (req, res) => {
    Fotos.add(req, res, req.files.map(file => file.filename));
});

router.post('/allfotos/:id', Middleware.validateToken, (req, res) => {
    Fotos.getAll(req, res);
});

module.exports = router;
