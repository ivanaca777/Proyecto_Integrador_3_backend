const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  mail: String,
  tipoConsulta: String,
  descripcion: String,
});

const Contacto = mongoose.model("Contacto", itemSchema);
module.exports = Contacto;