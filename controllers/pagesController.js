const indexApp = (req, res) => {
  res.render('index');
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