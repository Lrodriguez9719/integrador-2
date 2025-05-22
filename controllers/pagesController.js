const indexApp = (req, res) => {
  res.render('index', {
    productos: [
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
      {
        id: 1,
        nombre: 'Collar de Oro',
        imagen: "./images/producto1.jpg",
        descripcion: "Collar de Oro Dorado",
        precio: 650,
      },
    ]
  });
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