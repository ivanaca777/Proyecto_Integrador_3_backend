const Producto = require("../models/Producto");

const BuscarTodos = async (req, res) => {
	try {
		const items = await Producto.find();
		res.json(items);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server Error");
	}
};

const BuscarUno = async (req, res) => {
	try {
		const itemId = req.params.id;

		console.log(itemId);

		const item = await Producto.findOne({ _id: itemId });
		if (!item) {
			return res.status(404).json({ message: 'Item not found' });
		}
		res.json(item); 
	} catch (error) {
		console.error(error);
		res.status(500).send("Server Error");
	}
};



const NuevoProducto = async (req, res) => { 
	try {
		const nuevoProductoData = req.body; 

		console.log(nuevoProductoData); 

		const nuevoProducto = await Producto.create(nuevoProductoData);

		res.status(201).json(nuevoProducto);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server Error");
	}
};

const ActualizarProducto = async (req, res) => {
	try {
		const itemNombre = req.params.personaje; 

		const item = await Producto.findOne({ itemNombre: itemNombre });

		if (item) {
			const productoData = req.params; 
			
			item = await Producto.update(productoData); 

			return res.status(201).json(nuevoProducto);
		}
		else {
			return res.status(404).json({ message: 'Item not found' }); 
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Server Error");
	}
};

const EliminarProducto = async (req, res) => { 
	try {
		const itemId = req.params._id;

		const items = await Producto.deleteOne({ _id: itemId });

		res.status(201);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server Error");
	}
};

module.exports = { 
	BuscarTodos,
	BuscarUno,
	NuevoProducto,
	ActualizarProducto,
	EliminarProducto
};