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
  const {
    product_name,
    product_description,
    product_price,
    product_image_url
  } = req.body;

  if (!product_name || !product_description || !product_price || !product_image_url) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos del producto",
    });
  }

  const datosProducto = {
    nombre: product_name,
    imagen: product_image_url,
    descripcion: product_description,
    precio: product_price,
  };

  console.log(datosProducto);

  try {
    const nuevoProducto = new Producto(datosProducto);
    await nuevoProducto.save();

    const productos = await Producto.find();

    res.render("index", { productos });
  } catch (error) {
    console.error("Error al añadir el producto:", error);
    res.status(500).json({
      status: "error",
      message: "Error al añadir el producto",
    });
  }
}

module.exports = {
  obtenerProductos,
  añadirProducto
};