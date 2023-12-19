const express = require("express");
const { BuscarTodos, BuscarUno, NuevoProducto, ActualizarProducto, EliminarProducto } = require("../../controllers/ProductoController"); 
const router = express.Router();

router.get("/", BuscarTodos); 
router.get("/:id", BuscarUno); 
router.post("/", NuevoProducto); 
router.put("/:id", ActualizarProducto); 
router.delete("/:id", EliminarProducto); 

module.exports = router; 
