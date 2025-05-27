// Importamos el router de express
const express = require('express');

// Creamos el router
const router = express.Router();

// Importamos el controlador
const {
  obtenerProductos,
  obtenerProducto,
  añadirProducto,
  modificarProducto,
  eliminarProducto,
} = require('../controllers/productoController');

// Definimos las rutas
router.get('/productos', obtenerProductos);
router.get('/productos/:id', obtenerProducto); // Para obtener un producto específico por ID
router.post('/productos', añadirProducto);
router.put('/productos/:id', modificarProducto); // Para actualizar un producto específico por ID
router.delete('/productos/:id', eliminarProducto); // Para eliminar un producto específico por ID

// Exportamos el router
module.exports = router;