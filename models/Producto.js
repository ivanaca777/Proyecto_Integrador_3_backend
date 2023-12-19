const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: String,
  descripcion: String,
  imagen: String,
  personaje: String,
  franquicia: String,
  escala: String,
  precio: String,
  marca: String,
  stock: String
});

const Producto = mongoose.model("Producto", itemSchema);
module.exports = Producto;