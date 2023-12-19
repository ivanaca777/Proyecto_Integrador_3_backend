const express = require("express");
const { NuevoCarrito } = require("../../controllers/CarritoController");

const router = express.Router();

router.post("/", NuevoCarrito);

module.exports = router;
