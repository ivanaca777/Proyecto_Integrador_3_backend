const express = require("express");
const cors = require("cors"); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; 
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost/ivantest"; 

app.use(cors()); 
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ivantest", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use("/api/productos", require("./routes/productos"));
app.use("/api/contacto", require("./routes/contactos")); 
app.use("/api/carrito", require("./routes/carrito.js")); 