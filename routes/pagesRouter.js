// Importamos el router de express
const express = require('express');

// Creamos el router
const router = express.Router();

// Importamos el controlador
const { indexApp } = require('../controllers/pagesController');

// Definimos las rutas
router.get('/', indexApp);

// Exportamos el router
module.exports = router;