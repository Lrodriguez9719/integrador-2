// Configuramos nuestro servidor
const express = require("express"); // framework para crear servidores
const morgan = require("morgan"); // middleware para loguear las peticiones
const hbs = require("hbs"); // motor de plantillas para renderizar html
const path = require("path"); // librería para trabajar con rutas

// Importamos las rutas
const routes = require('./routes/pagesRouter');

// Creamos el servidor
const app = express();

// Configuramos el motor de plantillas
app.set("view engine", "hbs"); // configuramos el motor de plantillas
app.set("views", path.join(__dirname, "views")); // configuramos la carpeta de vistas

// Configuramos las rutas
app.use('/', routes);

// Exportamos el servidor
module.exports = app; // exportamos el servidor para usarlo en otros archivos