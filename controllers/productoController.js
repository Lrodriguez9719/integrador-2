const Producto = require("../models/productoModel");

const obtenerProductos = (req, res) => {
  res.json({
    status: "success",
    message: "testApp",
    data: [
      {
        id: 1,
        nombre: "Collar de Oro",
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
    ],
  })
};

const añadirProducto = async (req, res) => {
  const { nombre, imagen, descripcion, precio } = req.body;
  console.log("Datos recibidos:", req.body);

  /*

  const datosProducto = {
    nombre,
    imagen,
    descripcion,
    precio,
  };

  if (!nombre || !imagen || !descripcion || !precio) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos del producto",
    });
  }

  
  try {
    const nuevoProducto = new Producto(datosProducto);
    await nuevoProducto.save();

    res.status(201).json({
      status: "success",
      message: "Producto añadido correctamente",
      data: nuevoProducto,
    });
  } catch (error) {
    console.error("Error al añadir el producto:", error);
    res.status(500).json({
      status: "error",
      message: "Error al añadir el producto",
    });
  }
    */
}

module.exports = {
  obtenerProductos,
  añadirProducto
};