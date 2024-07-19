const express = require("express");
const app = express(); 
const PUERTO = 8080; 
const productRouter = require("./routes/products.router.js");

//NO SE OLVIDEN DE LOS MIDDLEWARE: 
app.use(express.json());

//Rutas
app.use("/", productRouter);

//Listen 

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto 8080");
})