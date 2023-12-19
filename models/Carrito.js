const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  prodcto: String,
  cantidad: String,
  precio: String,
});

const Carrito = mongoose.model("Carrito", itemSchema);
module.exports = Carrito; 