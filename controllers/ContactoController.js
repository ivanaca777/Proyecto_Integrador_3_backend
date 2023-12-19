const Contacto = require("../models/Contacto");


const NuevoContacto = async (req, res) => { 
	try {
		const nuevoContactoData = req.body;

		console.log(nuevoContactoData);
  
		const nuevoContacto = await Contacto.create(nuevoContactoData);

		res.status(201).json(nuevoContacto);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server Error");
	}
};


module.exports = { 
	NuevoContacto,
};