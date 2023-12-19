const express = require("express");
const { NuevoContacto } = require("../../controllers/ContactoController");

const router = express.Router();

router.post("/", NuevoContacto); 

module.exports = router; 
