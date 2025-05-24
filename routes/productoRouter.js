// Importamos el router de express
const express = require('express');

// Creamos el router
const router = express.Router();

// Importamos el controlador
const {
  obtenerProductos,
  añadirProducto,
} = require('../controllers/productoController');

// Definimos las rutas
router.get('/productos', obtenerProductos);
router.post('/productos', añadirProducto);

// Exportamos el router
module.exports = router;