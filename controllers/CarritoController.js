const Carrito = require("../models/Carrito");


const NuevoCarrito = async (req, res) => { 
	try {
		const nuevoCarritoData = req.body; 

		console.log(nuevoCarritoData);
  
		
		const nuevoCarrito = await Carrito.create(nuevoCarritoData);

		
		res.status(201).json(nuevoCarrito);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server Error");
	}
};


module.exports = { 
	NuevoCarrito,
};