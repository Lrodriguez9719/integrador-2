const Producto = require('../models/productoModel');

const indexApp = async (req, res) => {
  const productos = await Producto.find();

  res.render('index', { productos });
}

const altaApp = (req, res) => {
  res.render('alta');
}

const contactoApp = (req, res) => {
  res.render('contacto');
}

const nosotrosApp = (req, res) => {
  res.render('nosotros');
}

module.exports = {
  indexApp,
  altaApp,
  contactoApp,
  nosotrosApp
}