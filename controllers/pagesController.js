const indexApp = (req, res) => {
  console.log("Ruta de inicio")
  res.render('index');
}

module.exports = {
  indexApp,
}